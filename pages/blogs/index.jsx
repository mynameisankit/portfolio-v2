//Utility Imports
import dayjs from 'dayjs';
import cloneDeep from 'lodash/fp/cloneDeep';
//Server Side Imports
import retrieveDataSync from '../../lib/retrieveDataSync';
import matter from 'gray-matter';
import createURL from '../../lib/createURL';
//Client Side Imports
import React, { useState, useRef, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
//import FlipMove from 'react-flip-move';
//Material-UI Icon
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import SortIcon from '@mui/icons-material/Sort';
//Custom Components
import ReactIcons from '../../components/common/ReactIcons';
import Section from '../../components/common/Section';
import Post from '../../components/blogs/Post';

//Sort in-place by date
function sortByDate(data, order) {
    const newData = cloneDeep(data);

    newData?.sort((a, b) => {
        let { date: date1 } = a;
        let { date: date2 } = b;

        date1 = dayjs(date1);
        date2 = dayjs(date2);

        const diff = date1.diff(date2, 'day');

        if (diff)
            return (order === 'Newest') ? -diff : diff;
        else
            return 0;
    });

    return newData;
}

function LabeledIcon(props) {
    const { icon: Icon, children } = props;

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 2,
            gap: 1
        }}>
            <Icon
                color='primary'
                fontSize='large'
            />
            <Typography variant='h4'>
                {children}
            </Typography>
        </Box>
    );
}

function Blogs(props) {
    const [blogs, setBlogs] = useState(props.blogs);
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState('All');
    const [order, setOrder] = useState('Newest');

    //Create a hash map to quickly find the corresponding articles
    //Using useRef to create instance variable
    const tags = useRef((() => {
        const taggedArticles = {};

        //Find the articles to each corresponding tag
        for (let i in blogs) {
            for (let j in blogs[i]) {
                const curr = blogs[i][j];

                //Iterate through the tags
                for (let k in curr.tags) {
                    const tag = curr.tags[k];

                    if (!taggedArticles[tag])
                        taggedArticles[tag] = [curr];
                    else
                        taggedArticles[tag].push(curr);
                }
            }
        }

        const minRows = props.minRows;
        //Paginate each tag
        for (let tag in taggedArticles) {
            const paginated = [];

            for (let i in taggedArticles[tag]) {
                const curr = taggedArticles[tag][i];

                if (i % minRows == 0)
                    paginated.push([curr]);
                else
                    paginated[parseInt(i / minRows)].push(curr);
            }

            taggedArticles[tag] = paginated;
        }

        return taggedArticles;
    })());

    useEffect(() => {
        const blogs = (category === 'All') ? props.blogs : tags.current[category];
        const sortedBlogs = [];

        for (let i in blogs)
            sortedBlogs[i] = sortByDate(blogs[i], order);

        setBlogs(sortedBlogs);
    }, [category, order, page, props.blogs]);

    return (
        <Section id='blogs' sx={{ mt: 4 }}>
            {/* Filters */}
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <LabeledIcon icon={DragIndicatorIcon}>Tags</LabeledIcon>
                    <Box sx={{
                        display: 'flex',
                        gap: 2,
                        flexWrap: 'wrap',
                    }}>
                        {Object.entries(tags.current).concat([['All']]).map(tag => {
                            const curr = tag[0];

                            return (
                                <Button
                                    key={curr}
                                    variant='contained'
                                    startIcon={<ReactIcons icon={curr} />}
                                    disabled={curr === category}
                                    onClick={(event) => setCategory(curr)}
                                >
                                    {curr}
                                </Button>
                            );
                        })}
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <LabeledIcon icon={SortIcon}>Sort</LabeledIcon>
                    <FormControl>
                        <InputLabel>Order By</InputLabel>
                        <Select
                            label='Order By'
                            onChange={event => setOrder(event.target.value)}
                            value={order}
                        >
                            <MenuItem value='Newest'>Newest</MenuItem>
                            <MenuItem value='Oldest'>Oldest</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            {/* All Posts */}
            <Grid container spacing={3} sx={{ mt: 1, position: 'relative' }}>
                {/* <FlipMove typeName={null}> */}
                {blogs?.[page - 1]?.length ? (
                    blogs[page - 1].map(blog => (
                        <Grid item xs={12} lg={4} md={6} key={blog.title}>
                            <Post>
                                {blog}
                            </Post>
                        </Grid>
                    ))
                ) : (
                    <Grid item xs={12}>
                        <Typography gutterBottom variant='h4'>No articles with the tag &quot;{category}&quot; found</Typography>
                    </Grid>
                )}
                {/* </FlipMove> */}
                <Grid item xs={12} sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Stack spacing={2}>
                        <Pagination
                            count={(blogs ? blogs.length : 0) + !Boolean(blogs.length)}
                            color='secondary'
                            size='large'
                            showFirstButton
                            showLastButton
                            onChange={(event, value) => setPage(value)}
                            page={page}
                        />
                    </Stack>
                </Grid>
            </Grid>
        </Section>
    );
}

export async function getStaticProps(context) {
    const files = retrieveDataSync('blogs');
    const minRows = 10;

    const blogs = [];
    const tags = new Set();

    //Paginate each article
    files.forEach((source, idx) => {
        const { data: curr } = matter(source);

        //Note - Date causes serialization issues
        if (curr.date instanceof Date)
            curr.date = (curr.date).toJSON();

        for (let i in curr.tags)
            tags.add(curr.tags[i]);

        //Create URLs
        curr.url = createURL('/blogs', curr.title);

        if (idx % minRows == 0) {
            const prev = (idx / minRows) - 1;
            if (prev >= 0)
                blogs[prev] = sortByDate(blogs[prev], 'Newest');

            blogs.push([curr]);
        }
        else
            blogs[parseInt(idx / minRows)].push(curr);
    });

    return {
        props: {
            blogs,
            tags: Array.from(tags),
            minRows
        },
    };
}

export default Blogs;
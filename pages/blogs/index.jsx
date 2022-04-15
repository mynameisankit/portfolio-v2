//Utility Imports
import dayjs from 'dayjs';
import cloneDeep from 'lodash/fp/cloneDeep';
import upperFirst from 'lodash/fp/upperFirst';
//Server Side Imports
import path from 'path';
import getFiles from '@/lib/getFiles';
import getFrontMatter from '@/lib/util/getFrontMatter';
//Client Side Imports
import React, { useState, useRef, useEffect, useReducer } from 'react';
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
//Material-UI Icon
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import SortIcon from '@mui/icons-material/Sort';
//Custom Components
import ReactIcons from '@/components/common/ReactIcons';
import Section from '@/components/common/Section';
import Post from '@/components/blogs/Post';

//Sort in-place by date
function sortByDate(data, order) {
    data?.sort((a, b) => {
        let { date: date1 } = a;
        let { date: date2 } = b;

        date1 = dayjs(date1);
        date2 = dayjs(date2);

        const diff = date1.diff(date2, 'day');

        if (diff)
            return (order === 'newest') ? -diff : diff;
        else
            return 0;
    });
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

function reducer(state, action) {
    const { type, field, payload } = action;

    switch (type) {
        case 'button': case 'select':
            return { ...state, [field]: payload };
        case 'pagination': return { ...state, page: payload };
        default: return state;
    }
}

function Blogs({ blogs }) {
    const [currBlogs, setCurrBlogs] = useState(blogs);
    const [settings, dispatch] = useReducer(reducer, {
        page: 1,
        category: 'All',
        order: 'newest',
        rows: 10
    });

    //Create a hash map to quickly find the corresponding articles
    //Using useRef to create instance variable
    const tags = useRef((() => {
        const taggedArticles = {};

        //Find the articles to each corresponding tag
        for (let i in blogs) {
            const curr = blogs[i];

            //Iterate through the tags
            for (let k in curr.tags) {
                const tag = curr.tags[k];

                if (!taggedArticles[tag])
                    taggedArticles[tag] = [curr];
                else
                    taggedArticles[tag].push(curr);
            }
        }

        return taggedArticles;
    })());

    const { page, rows, category, order } = settings;

    //Side-effect when tag is changed
    useEffect(() => {
        const newBlogs = cloneDeep((category === 'All') ? blogs : tags.current[category]);
        sortByDate(newBlogs, order);
        setCurrBlogs(newBlogs);

    }, [category, order, blogs]);

    // Current Blogs
    const currPage = [];
    for (let i = ((page - 1) * rows); i < Math.min(currBlogs.length, page * rows); i++) {
        const blog = currBlogs[i];

        currPage.push(
            <Grid item xs={12} lg={4} md={6} key={blog.title}>
                <Post {...blog} />
            </Grid>
        );
    }

    return (
        <Section id='blogs' minHeight maxWidth={false} sx={{ display: 'block' }}>
            
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
                                    onClick={() => dispatch({
                                        type: 'button',
                                        field: 'category',
                                        payload: curr
                                    })}>
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
                            onChange={event => dispatch({
                                type: 'select',
                                field: 'order',
                                payload: event.target.value
                            })}
                            value={upperFirst(order)}
                        >
                            <MenuItem value='Newest'>Newest</MenuItem>
                            <MenuItem value='Oldest'>Oldest</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            {/* All Posts */}
            <Grid container spacing={3} sx={{ mt: 1, position: 'relative' }}>
                {currPage.length ? currPage : (
                    <Grid item xs={12}>
                        <Typography gutterBottom variant='h4'>No articles with the tag &quot;{category}&quot; found</Typography>
                    </Grid>
                )}
                <Grid item xs={12} sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Stack spacing={2}>
                        <Pagination
                            count={Math.ceil(blogs ? blogs.length / 10 : 0)}
                            color='secondary'
                            size='large'
                            showFirstButton
                            showLastButton
                            onChange={(event, value) => dispatch({
                                type: 'pagination',
                                field: 'page',
                                payload: value
                            })}
                            page={page}
                        />
                    </Stack>
                </Grid>
            </Grid>

        </Section>
    );
}

export async function getStaticProps() {
    const ROOT = path.join(process.cwd(), 'data', 'blogs');
    const files = getFrontMatter(getFiles(ROOT));
    files.forEach(file => file.url = `/blogs/${file.url}`);
    return { props: { blogs: files } };
}

export default Blogs;
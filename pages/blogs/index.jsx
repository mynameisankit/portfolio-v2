//Utility Imports
import dayjs from 'dayjs';
import cloneDeep from 'lodash/fp/cloneDeep';
import Fuse from 'fuse.js'
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
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
//Material-UI Icon
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import SortIcon from '@mui/icons-material/Sort';
//Custom Components
import ReactIcons from '@/components/common/ReactIcons';
import Section from '@/components/common/Section';
import Post from '@/components/blogs/Post';
import SearchBox from '@/components/blogs/SearchBox';
import Header from '@/components/common/Header';

//Sort in-place by date
function sortByDate(data, order) {
    data?.sort((a, b) => {
        let { date: date1 } = a;
        let { date: date2 } = b;

        date1 = dayjs(date1);
        date2 = dayjs(date2);

        const diff = date1.diff(date2, 'day', true);

        return diff ? (order === 'newest') ? -diff : diff : 0;
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

    if (type === 'button' || type === 'select')
        return { ...state, [field]: payload };
    else if (type === 'pagination')
        return { ...state, page: payload };
    else if (type === 'switch')
        return { ...state, order: payload ? 'newest' : 'oldest' };
    else
        return state;
}

//TODO: Implement Fuzzy Search
function Blogs({ blogs, paginationSettings, fuzzySearchProps }) {
    const theme = useTheme();

    const [currBlogs, setCurrBlogs] = useState(blogs);
    const [settings, dispatch] = useReducer(reducer, {
        page: 1,
        category: 'All',
        order: 'newest',
        rows: paginationSettings.maxRows
    });

    //Hash-Map of Blogs
    const tags = useRef({});
    //Fuzzy Search
    const fuzzySearch = useRef(null);

    useEffect(() => {
        //Create a hash map to quickly find the corresponding articles
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

        tags.current = taggedArticles;

        //Fuzzy Search Init
        const { index, options } = fuzzySearchProps;
        fuzzySearch.current = new Fuse(blogs, options, Fuse.parseIndex(JSON.parse(index)));
    }, []);

    const { page, rows, category, order } = settings;

    //Side-effects
    useEffect(() => {
        const newBlogs = cloneDeep((category === 'All') ? blogs : tags.current[category]);
        sortByDate(newBlogs, order);
        setCurrBlogs(newBlogs);
    }, [category, order, blogs]);

    // Current Blogs
    const currPage = [];
    for (let i = ((page - 1) * rows); i < Math.min(currBlogs.length, page * rows); i++) {
        const blog = currBlogs[i];
        currPage.push(...[
            <Post key={blog.title} {...blog} />,
            <Divider component='div' key={i} sx={{
                color: theme.palette.text.primary
            }} />
        ]);
    }
    currPage.pop();

    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <React.Fragment>
            <Header>Blogs</Header>
            <Section id='blogs' minHeight maxWidth={false} sx={{ display: 'block', py: theme.spacing(3) }}>

                <Grid container spacing={4} direction={isSmall ? 'column-reverse' : 'row'}>

                    {/* All Posts */}
                    <Grid item xs={12} md={8} sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        {currPage.length ?
                            currPage : (
                                <Box>
                                    <Typography gutterBottom variant='h4'>No articles with the tag &quot;{category}&quot; found</Typography>
                                </Box>
                            )}
                    </Grid>

                    {/* Filters */}
                    <Grid item xs={12} md={4} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: theme.spacing(4),
                        px: theme.spacing(2)
                    }}>

                        <SearchBox fuzzySearch={fuzzySearch.current} />

                        {/* Tags */}
                        <Box>
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
                                            disableElevation
                                            sx={{
                                                '&.Mui-disabled': {
                                                    color: 'text.primary',
                                                    backgroundColor: 'secondary.light'
                                                }
                                            }}
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
                        </Box>

                        {/* Order Switch */}
                        <Box>
                            <LabeledIcon icon={SortIcon}>Sort</LabeledIcon>
                            <Stack direction='row' spacing={1} alignItems='center'>
                                <Typography>Newest</Typography>
                                <Switch
                                    sx={{
                                        '.MuiSwitch-thumb': {
                                            backgroundColor: order === 'newest' ?
                                                theme.palette.primary.main :
                                                theme.palette.secondary.main
                                        },
                                        '.MuiSwitch-track': {
                                            backgroundColor: order === 'newest' ?
                                                theme.palette.primary.main :
                                                theme.palette.secondary.main
                                        }
                                    }}
                                    checked={order === 'newest'}
                                    onChange={event => dispatch({
                                        type: 'switch',
                                        field: 'sort',
                                        payload: event.target.checked
                                    })}
                                />
                                <Typography>Oldest</Typography>
                            </Stack>
                        </Box>

                    </Grid>
                </Grid>

                {/* Pagination */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    pt: 3
                }}>
                    <Pagination
                        count={Math.ceil(blogs ? blogs.length / paginationSettings.maxRows : 0)}
                        color='primary'
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
                </Box>
            </Section>
        </React.Fragment>
    );
}

export async function getStaticProps() {
    const ROOT = path.join(process.cwd(), 'data', 'blogs');
    const files = getFrontMatter(getFiles(ROOT));
    files.forEach(file => file.url = `/blogs/${file.url}`);

    //Page Settings
    const paginationSettings = {
        maxRows: 10
    };

    //Fuzzy Search
    const options = {
        keys: ['title', 'tags']
    };

    // Create the Fuse index
    const fuzzySearchIndex = Fuse.createIndex(options.keys, files).toJSON();

    return {
        props: {
            blogs: files,
            fuzzySearchProps: {
                index: JSON.stringify(fuzzySearchIndex),
                options
            },
            paginationSettings
        }
    };
}

export default Blogs;
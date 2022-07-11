//Utility Imports
import cloneDeep from 'lodash/fp/cloneDeep';
import Fuse from 'fuse.js';
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
import SearchBox from '@/components/common/PostsLayout/SearchBox';
//Local Custom Components
import LabeledIcon from '@/components/common/PostsLayout/LabeledIcon';
import sortByDate from '@/components/common/PostsLayout/sortByDate';

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

function PostsLayout({ posts, tagsPropName, paginationSettings, fuzzySearchProps, render, children, divider, ...rest }) {
    const theme = useTheme();
    const Render = render || children;

    const [currPosts, setCurrPosts] = useState(posts);
    const [settings, dispatch] = useReducer(reducer, {
        page: 1,
        category: 'All',
        order: 'newest',
        rows: paginationSettings.maxRows
    });

    //Hash-Map of Posts
    const tags = useRef({});
    //Fuzzy Search
    const fuzzySearch = useRef(null);

    useEffect(() => {
        //Create a hash map to quickly find the corresponding articles
        const taggedPosts = {};

        //Find the articles to each corresponding tag
        posts.forEach(post => {
            const tagsList = post[tagsPropName];

            if (!(tagsList instanceof Array))
                tagsList = [tagsList];

            tagsList.forEach(tag => {
                if (!taggedPosts[tag])
                    taggedPosts[tag] = [post];
                else
                    taggedPosts[tag].push(post);
            });
        });

        tags.current = taggedPosts;

        //Fuzzy Search Init
        const { index, options } = fuzzySearchProps;
        fuzzySearch.current = new Fuse(posts, options, Fuse.parseIndex(JSON.parse(index)));
    }, [fuzzySearchProps, posts, tagsPropName]);

    const { page, rows, category, order } = settings;

    //Side-effects
    useEffect(() => {
        const newPosts = cloneDeep((category === 'All') ? posts : tags.current[category]);
        sortByDate(newPosts, order);
        setCurrPosts(newPosts);
    }, [category, order, posts]);

    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Section id='posts' minHeight={false} maxWidth={false} sx={{ pt: 3 }}>
            <Grid container spacing={4} direction={isSmall ? 'column-reverse' : 'row'}>

                {/* All Posts */}
                <Grid
                    item
                    xs={12} md={8}
                    divider={divider}>
                    <Stack {...rest}>
                        {Render && currPosts.length
                            ? (
                                currPosts
                                    .slice((page - 1) * rows, Math.min(currPosts.length, page * rows))
                                    .map(post => (
                                        <Render key={post.title} {...post} />
                                    ))
                            ) : (
                                <Typography gutterBottom variant='h4'>
                                    No posts with the tag &quot;{category}&quot; found
                                </Typography>
                            )}
                    </Stack>
                </Grid>

                {/* Filters */}
                <Grid item xs={12} md={4} sx={{ px: 2 }}>
                    <Stack gap={4}>
                        <SearchBox fuzzySearch={fuzzySearch.current} />

                        {/* Tags */}
                        <Box>
                            <LabeledIcon icon={DragIndicatorIcon}>Tags</LabeledIcon>
                            <Stack gap={2} flexWrap='wrap' direction='row'>
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
                            </Stack>
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

                    </Stack>
                </Grid>
            </Grid>

            {/* Pagination */}
            <Stack direction='row' justifyContent='center' sx={{ pt: 3 }}>
                <Pagination
                    count={Math.ceil(posts ? posts.length / paginationSettings.maxRows : 0)}
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
            </Stack>
        </Section>
    );
}

export default PostsLayout;
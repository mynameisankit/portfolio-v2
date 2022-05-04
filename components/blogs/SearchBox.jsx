import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTheme, alpha } from '@mui/material/styles';
//Custom Components
import Link from '@/components/common/Link';
//Icons
import SearchIcon from '@mui/icons-material/Search';

function SearchBox({ fuzzySearch }) {
    const theme = useTheme();

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (!fuzzySearch)
            return;

        setResults(fuzzySearch?.search(query));
    }, [query]);

    return (
        <Paper sx={{
            border: 3,
            borderColor: 'transparent',
            borderRadius: 2,
            transitionDuration: `${theme.transitions.duration.complex}ms`,
            transitionProperty: 'border',
            transitionTimingFunction: 'transitions.easing.easeOut',
            '&:hover': {
                borderColor: theme.palette.primary.main
            },
        }}>
            <TextField
                label='Search'
                fullWidth
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    )
                }}
                value={query}
                onChange={event => setQuery(event.target.value)}
                variant='filled'
            />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                {results.map(({ item: { title, abstract, url }, refIndex }, idx) => (
                    <Link
                        href={url}
                        key={refIndex}
                        muiLinkProps={{
                            underline: 'none'
                        }}
                        sx={{
                            backgroundColor: !idx && alpha(theme.palette.secondary.main, 0.3),
                            p: 2,
                            transitionDuration: `${theme.transitions.duration.complex}ms`,
                            transitionProperty: 'background-color',
                            transitionTimingFunction: 'transitions.easing.easeOut',
                            '&:hover': {
                                backgroundColor: alpha(theme.palette.secondary.main, 0.5),
                            }
                        }}
                    >
                        <Typography variant='body1'>{title}</Typography>
                        <Typography variant='body2'>{abstract?.slice(0, 50)}...</Typography>
                    </Link>
                ))}
            </Box>
        </Paper>
    );
}

export default SearchBox;
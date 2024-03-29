import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useTheme, alpha } from '@mui/material/styles';
//Hooks
import useColorModeValue from '@/components/hooks/useColorModeValue';
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
    }, [query, fuzzySearch]);

    const textColor = useColorModeValue('text.primary', 'text.secondary');
    return (
        <Paper
            elevation={0}
            sx={{
                transition: theme.transitions.create(['border']),
                '&:hover': {
                    borderColor: theme.palette.primary.main
                }
            }}>
            <TextField
                label='Search'
                fullWidth
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            <SearchIcon />
                        </InputAdornment>
                    )
                }}
                value={query}
                onChange={event => setQuery(event.target.value)}
                variant='filled'
                color='secondary'
                sx={{
                    '& label': {
                        color: textColor
                    },
                    '& label.Mui-focused': {
                        color: textColor
                    },
                    '& .MuiFilledInput-root': {
                        color: textColor
                    }
                }}
            />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'scroll',
                maxHeight: 500
            }}>
                {results.map(({ item: { title, abstract, url }, refIndex }, idx, arr) => (
                    <React.Fragment key={refIndex}>
                        <Link
                            href={url}
                            muiLinkProps={{ underline: 'none' }}
                            sx={{
                                p: 2,
                                color: textColor,
                                backgroundColor: !idx && alpha(theme.palette.primary.light, 0.75),
                                transition: theme.transitions.create(['background-color']),
                                '&:hover': {
                                    backgroundColor: alpha(theme.palette.primary.main, 0.9),
                                }
                            }}
                        >
                            <Typography variant='body1'>{title}</Typography>
                            <Typography variant='body2'>{abstract?.slice(0, 50)}...</Typography>
                        </Link>
                        {(idx + 1 !== arr.length) && <Divider />}
                    </React.Fragment>
                ))}
            </Box>
        </Paper>
    );
}

export default SearchBox;
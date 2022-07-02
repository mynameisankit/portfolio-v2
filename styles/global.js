const globalStyles = (theme) => ({
    '::-webkit-scrollbar': {
        backgroundColor: 'transparent',
        width: 7
    },
    '::-webkit-scrollbar-thumb': {
        background: '#888',
        borderRadius: 2,
    },
    '::-webkit-scrollbar-thumb:hover': {
        background: '#555'
    },
    '::selection': {
        color: theme.palette.mode === 'dark' ?
            theme.palette.primary.contrastText : theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.mode === 'dark' ?
            theme.palette.primary.main : theme.palette.secondary.main
    }
});

export default globalStyles;
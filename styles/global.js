const globalStyles = (theme) => ({
    '*': {
        scrollbarColor: `${theme.palette.primary.main} ${theme.palette.secondary.main}`,
        scrollbarWidth: 'thin'
    },
    '::-webkit-scrollbar': {
        backgroundColor: theme.palette.secondary.main,
        width: 7
    },
    '::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.primary.main,
        transition: theme.transitions.create(['background-color']),
        borderRadius: 2,
        cursor: 'grab'
    },
    '::-webkit-scrollbar-thumb:hover': {
        backgroundColor: theme.palette.primary.dark
    },
    '::selection': {
        color: theme.palette.mode === 'dark' ?
            theme.palette.primary.contrastText : theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.mode === 'dark' ?
            theme.palette.primary.main : theme.palette.secondary.main
    }
});

export default globalStyles;
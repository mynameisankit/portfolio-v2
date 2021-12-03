import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
    typography: {
        fontFamily: 'Fira Code, monospace',
    },
    palette: {
        primary: {
            main: '#ABB2BF',
        },
        info: {
            main: '#66C2CD'
        },
        background: {
            default: '#282C34'
        },
    }
});

export default responsiveFontSizes(theme);
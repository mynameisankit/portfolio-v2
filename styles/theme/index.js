import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const baseFonts = [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Helvetica',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
];

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#B794F4',
        },
        secondary: {
            main: '#2D3748',
        },
        error: {
            main: red[500],
        },
        background: {
            default: '#1A202C',
        },
        text: {
            primary: '#FFFFFF'
        }
    },
    typography: {
        fontFamily: [
            'Inter',
            ...baseFonts
        ].join(','),
        ...(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2'].reduce((acc, curr) => {
            acc[curr] = {
                fontFamily: [
                    'Cal Sans',
                    ...baseFonts
                ].join(','),
                lineHeight: 1.2
            };

            return acc;
        }, {}))
    },
    components: {
        MuiDivider: {
            styleOverrides: {
                light: ({ theme }) => ({
                    borderColor: theme.palette.text.primary
                }),
                root: ({ theme }) => ({
                    borderColor: theme.palette.secondary.light
                })
            },
        },
    }
});

export default responsiveFontSizes(theme);
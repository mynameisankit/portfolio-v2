import { useTheme } from '@mui/material/styles';

function useColorMode() {
    const theme = useTheme();
    return (theme.palette.mode === 'dark');
}

export default useColorMode;
import { useTheme } from '@mui/material/styles';

function useColorModeValue(lightModeValue, darkModeValue) {
    const theme = useTheme();

    if (lightModeValue && darkModeValue)
        return (theme.palette.mode === 'dark') ? darkModeValue : lightModeValue;
    else
        return lightModeValue || darkModeValue;
}

export default useColorModeValue;
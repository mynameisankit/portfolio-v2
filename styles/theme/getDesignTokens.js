import darkPalette from '@/styles/theme/palettes/darkPalette';
import lightPalette from '@/styles/theme/palettes/lightPalette';

const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'dark'
            ? darkPalette
            : lightPalette
        )
    }
});

export default getDesignTokens;
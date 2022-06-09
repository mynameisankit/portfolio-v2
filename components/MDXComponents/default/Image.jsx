import NxtImg from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Image({ src, alt, height, width, layout, ...rest }) {
    if (!layout)
        layout = 'fill';

    return (
        <Box sx={{ my: 5 }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                minHeight: 400,
                mb: 1
            }}>
                <NxtImg
                    src={`/${src}`}
                    objectFit='cover'
                    alt={alt}
                    layout={layout}
                    {...(layout && { height, width })}
                    {...rest}
                />
            </Box>
            <Typography variant='subtitle1' align='center'>{alt}</Typography>
        </Box>
    );
}

export default Image;
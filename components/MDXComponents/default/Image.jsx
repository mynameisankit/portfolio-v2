import NxtImg from 'next/image';
import Box from '@mui/material/Box';

function Image({ src, alt, height, width, layout, ...rest }) {
    if (!layout)
        layout = 'fill';

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            minHeight: 400
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
    );
}

export default Image;
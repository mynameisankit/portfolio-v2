import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Header({ children, title, backgroundImage }) {
    return (
        <Box sx={{
            position: 'relative',
            minHeight: [300, null, 500],
            mb: 4
        }}>
            {backgroundImage && (
                <Box sx={{
                    position: 'absolute',
                    height: '140%', width: 1,
                    zIndex: -1, top: -100,
                    '&::before': {
                        content: "''",
                        position: 'absolute',
                        height: 1, width: 1, zIndex: 1,
                        background: theme => `linear-gradient(rgba(0, 0, 0, 0) 0%, ${theme.palette.background.default})`
                    }
                }}>
                    <Box sx={{ position: 'relative', width: 1, height: 1 }}>
                        <Image
                            src={backgroundImage}
                            layout='fill'
                            objectFit='cover'
                            alt="Blogs"
                            priority
                        />
                    </Box>
                </Box>
            )}
            <Box sx={{
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: 1, width: 1
            }}>
                <Typography
                    variant='h1'
                    component='h1'
                    sx={{ textShadow: theme => `4px 4px ${theme.palette.primary.main}` }}
                >
                    {children || title}
                </Typography>
            </Box>
        </Box >
    );
}

export default Header;
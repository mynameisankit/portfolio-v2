import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

function Header({ children, title, backgroundImage }) {
    const theme = useTheme();

    return (
        <Box sx={{
            position: 'relative',
            minHeight: [300, 500],
            mb: 5
        }}>
            {backgroundImage && (
                <Box sx={{
                    position: 'absolute',
                    height: '140%', width: 1,
                    zIndex: -1, top: -100,
                    userSelect: 'none',
                    '&::before': {
                        content: "''",
                        position: 'absolute',
                        height: 1, width: 1, zIndex: 1,
                        background: `linear-gradient(rgba(0, 0, 0, 0) 0%, ${theme.palette.background.default})`
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
            
            <Stack justifyContent='center' alignItems='center' sx={{
                position: 'absolute',
                height: 1, width: 1,
                px: 8
            }}>
                {children || (
                    <Typography
                        variant='h1'
                        component='h1'
                        sx={{ textShadow: `4px 4px ${theme.palette.primary.main}` }}
                    >
                        {title}
                    </Typography>
                )}
            </Stack>
        </Box>
    );
}

export default Header;
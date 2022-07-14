import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
//Custom Components
import Header from '@/components/common/Header';
import HeroPlay from '@/components/home/HeroPlay';
//Hooks
import useColorModeValue from '@/hooks/useColorModeValue';
//Images
import DecorativeImageLightMode from '@/images/home-light.webp';
import DecorativeImageDarkMode from '@/images/home-dark.webp';

function Hero() {
    return (
        <Header
            backgroundImage={useColorModeValue(DecorativeImageLightMode, DecorativeImageDarkMode)}
            sx={{
                height: '80vh'
            }}>
            <Typography component='div' align='left'>
                <Typography variant='h4' component='p' gutterBottom>
                    Hi, my name is
                </Typography>

                <Stack direction='row' alignItems='end'>
                    <Typography variant='h1' component='h1' sx={{ lineHeight: 0.87 }}>
                        Ankit Kumar
                    </Typography>
                    <HeroPlay />
                </Stack>
            </Typography>
        </Header>
    );
}

export default Hero;
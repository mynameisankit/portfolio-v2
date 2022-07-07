import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
//Custom Components
import Header from '@/components/common/Header';
import HeroPlay from '@/components/home/HeroPlay';
//Hooks
import useColorModeValue from '@/hooks/useColorModeValue';
//Images
import DecorativeImageLightMode from '@/images/home-light.jpg';
import DecorativeImageDarkMode from '@/images/home-dark.jpg';

function Hero() {
    return (
        <Header backgroundImage={useColorModeValue(DecorativeImageLightMode, DecorativeImageDarkMode)}>
            <Typography component='div' align='left'>
                <Typography variant='h4' component='h4' gutterBottom>
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
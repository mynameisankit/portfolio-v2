import React from 'react';
import { useAudio } from 'react-use';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
//Material-UI Icons
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import StopCircleIcon from '@mui/icons-material/StopCircle';

function HeroPlay() {
    const [audio, state, controls] = useAudio({
        src: '/audio/intro.mp3',
        autoPlay: false
    });

    const toggle = () => {
        if (state.playing) {
            controls.pause();
            controls.seek(0);
        }
        else
            controls.play();
    };

    const { playing } = state;
    const Icon = playing ? StopCircleIcon : PlayCircleIcon;

    return (
        <Box>
            {audio}
            <IconButton
                aria-label='Play Introduction Track'
                onClick={toggle}
                color='primary'
                size='large'
                edge='end'
            >
                <Icon />
            </IconButton>
        </Box>
    );
}

export default HeroPlay;
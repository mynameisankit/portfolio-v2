import React from 'react';
import { useAudio } from 'react-use';
import IconButton from '@mui/material/IconButton';
//Material-UI Icons
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import StopCircleIcon from '@mui/icons-material/StopCircle';

function HeroPlay() {
    const [audio, state, controls] = useAudio({
        src: '/audio/pronunciation.mp3',
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
        <React.Fragment>
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
        </React.Fragment>
    );
}

export default HeroPlay;
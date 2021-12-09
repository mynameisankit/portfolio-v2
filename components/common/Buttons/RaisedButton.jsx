import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

//TODO: Make this a solid component
const RaisedButton = styled(Button)(({ theme }) => ({
    border: `2px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.contrastText,
    transition: `${theme.transitions.duration.short}ms`,
    borderRadius: 0,
    '&:hover, &:focus': {
        boxShadow: `0 0.5em 0.5em -0.4em ${theme.palette.primary.main}`,
        transform: 'translateY(-0.25em)'
    }
}));

export default RaisedButton;
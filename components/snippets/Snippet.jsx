import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import { useTheme } from '@mui/material/styles';
//Custom Components
import ReactIcons from '@/components/common/ReactIcons';
import Link from '@/components/common/Link';
//Hooks
import useColorModeValue from '@/components/hooks/useColorModeValue';

function Snippet({ title, url, abstract, technology }) {
    const theme = useTheme();
    const backgroundColor = useColorModeValue('secondary.light', 'secondary.dark');

    return (
        <Link href={url} muiLinkProps={{ underline: 'none' }}>
            <Card
                sx={{
                    backgroundColor: 'transparent',
                    backgroundImage: 'none',
                    border: 1,
                    borderColor: 'primary.main',
                    borderRadius: 2,
                    '&:hover': {
                        backgroundColor: [null, null, backgroundColor],
                        borderColor: backgroundColor,
                        transform: [null, null, `scale(1.02)`]
                    },
                    transition: theme.transitions.create(['transform', 'background-color', 'border-color'])
                }}
                elevation={0}
            >
                <CardActionArea>
                    <CardContent component={Stack} direction='row' gap={3} alignItems='center'>
                        {/* Icon */}
                        <ReactIcons icon={technology} sx={{
                            fontSize: 65,
                            color: 'primary.main'
                        }} />

                        {/* Content */}
                        <Box>
                            <Typography gutterBottom variant='h5' component='h5'>
                                {title}
                            </Typography>
                            <Typography variant='body1'>
                                {abstract}
                            </Typography>
                        </Box>

                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
}

export default Snippet;
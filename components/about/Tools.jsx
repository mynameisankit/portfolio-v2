import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
//Custom Components
import Section from '@/components/common/Section';
import Card from '@/components/about/Card';
import ReactIcons from '@/components/common/ReactIcons';
import Link from '@/components/common/Link';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
//Material-UI Icons
import LinkIcon from '@mui/icons-material/Link';

function Tools() {
    const tools = [
        {
            title: 'Visual Studio Code',
            description: 'A lightweight customizable text editor with a lot of plugins',
            url: 'https://code.visualstudio.com/',
            use: 'Editor'
        }, {
            title: 'Windows System For Linux',
            description: 'A extension for windows which simulates linux terminal',
            url: 'https://ubuntu.com/wsl',
            use: 'Terminal'
        }, {
            title: 'Notion',
            description: 'A very easy-to-use note taking app with a lot of features',
            url: 'https://notion.so/',
            use: 'Note Taking'
        }, {
            title: 'Discord',
            description: 'A very robust communication app',
            url: 'https://discord.com/',
            use: 'Messaging'
        }, {
            title: 'Yarn',
            description: 'A much better and easy to use package manager',
            url: 'https://yarnpkg.com/',
            use: 'Package Manager'
        },
        {
            title: 'Github',
            description: 'The best and most popular code hosting platform out there!',
            url: 'https://github.com/',
            use: 'Code Hosting'
        }
    ];

    return (
        <Section
            id='tools'
            maxWidth='lg'
            gutterBottom={8}
            heading='Tools'
            caption='This is my list of software tools that I use frequently. I do my best at updating it whenever a change occurs.'
        >
            <Grid container spacing={5}>
                {tools?.map(({ title, description, url, use }) => (
                    <Grid item xs={12} md={6} key={title}>
                        <Card
                            media={<ReactIcons sx={{ fontSize: 40 }} icon={title} />}
                            content={
                                <React.Fragment>
                                    <Stack direction='row' alignItems='center' spacing={1}>
                                        <Typography variant={'h5'} component='h5'>
                                            {title}
                                        </Typography>
                                        <Chip color='primary' label={use} size='small' />
                                    </Stack>
                                    <Typography variant={'body1'} component='p'>
                                        {description}
                                    </Typography>
                                </React.Fragment>
                            }
                            links={
                                <Link type='icon' href={url}>
                                    <LinkIcon fontSize='large' sx={{ color: 'text.primary' }} />
                                </Link>
                            }
                        />
                    </Grid>
                ))}
            </Grid>
        </Section>
    );
}

export default Tools;
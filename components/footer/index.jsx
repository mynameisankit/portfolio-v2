import React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
//Custom Components
import Section from '@/components/common/Section';
import Link from '@/components/common/Link';
import ReactIcons from '@/components/common/ReactIcons';
//Data
import UserData from '@/data/user_data.json';

function Footer() {
    const socialMediaLinks = UserData.socialMediaLinks;

    return (
        <Section
            id='footer'
            minHeight={false}
            maxWidth={false}
        >

            <Stack
                justifyContent='center'
                alignItems='center'
                direction='column'
                sx={{ mt: 6, mb: 2 }}>

                {/* Social Media URLs */}
                <Stack direction='row'>
                    {socialMediaLinks &&
                        Object.entries(socialMediaLinks).map(([platform, platformURL]) => (
                            <Link key={platform} href={platformURL} type='icon' buttonProps={{ size: 'large' }} >
                                <ReactIcons icon={platform} />
                            </Link>
                        ))
                    }
                </Stack>

                <Stack direction='row' gap={2}>
                    <Typography variant='body1'>
                        Copyright © {dayjs().year()}
                    </Typography>

                    <Typography variant='body1'>
                        •
                    </Typography>

                    <Link href='/colophon'>
                        Colophon
                    </Link>
                </Stack>

            </Stack>

        </Section>
    );
}

export default Footer;
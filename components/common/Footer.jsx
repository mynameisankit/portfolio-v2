import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
//Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
//Custom Components
import Section from '@/components/common/Section';
import Link from '@/components/common/Link';
//Social Media Data
import SocialMediaData from '@/data/socialMedia';

function Footer(props) {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => setLoaded(true), []);

    let currentYear = '';
    if (loaded)
        currentYear = dayjs().format('YYYY');

    //TODO: Find a way to avoid repeating the social media thing
    //Create Icons Mapping
    const ICONS_MAPPING = {
        'facebook': FacebookIcon,
        'instagram': InstagramIcon,
        'linkedin': LinkedInIcon,
        'github': GitHubIcon,
        'twitter': TwitterIcon,
        'email': EmailIcon
    };

    return (
        <Section id='footer' sx={{ py: 1, mt: 4 }} minHeight={false}>
            <Box sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'center'
            }}>
                {Object.entries(SocialMediaData).map(([platform, platformURL]) => {
                    const Icon = ICONS_MAPPING[platform];

                    return (
                        <Link key={platform} href={platformURL} icon>
                            <Icon />
                        </Link>
                    );
                })}
            </Box>
            {loaded && (
                <Typography variant='h6' component='p' align='center'>
                    {currentYear} © Ankit Kumar
                </Typography>
            )}
        </Section>
    );
}

export default Footer;
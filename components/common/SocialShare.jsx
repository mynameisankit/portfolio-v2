import React, { useEffect, useRef } from 'react';
import Stack from '@mui/material/Stack';
//Hooks
import useColorModeValue from '@/hooks/useColorModeValue';
//Custom Components
import ReactIcons from '@/components/common/ReactIcons';
import Link from '@/components/common/Link';

function SocialShare({ title, href }) {
    const url = useRef(href);

    useEffect(() => {
        if (!url.current)
            url.current = window.location.href;
    });

    const textColor = useColorModeValue('text.secondary', 'text.primary');
    return (
        <Stack direction='row' justifyContent='center' spacing={2}>
            {
                [
                    {
                        href: `https://twitter.com/intent/tweet?text=${title}&url=${url.current}`,
                        label: 'Twitter',
                        backgroundColor: {
                            normal: '#1DA1F2',
                            hover: '#0a6fae',
                        }
                    },
                    {
                        href: `https://www.facebook.com/sharer/sharer.php?u=${url.current}`,
                        label: 'Facebook',
                        backgroundColor: {
                            normal: '#4267B2',
                            hover: '#273C68',
                        }
                    },
                    {
                        href: `https://www.linkedin.com/shareArticle?url=${url.current}&title=${title}`,
                        label: 'LinkedIn',
                        backgroundColor: {
                            normal: '#2867B2',
                            hover: '#133053',
                        }
                    }
                ].map(({ href, label, backgroundColor }) => {
                    return (
                        <Link
                            type='button'
                            key={label}
                            href={href}
                            sx={{
                                backgroundColor: backgroundColor.normal,
                                color: textColor,
                                transitions: theme => theme.transitions.create(['background-color']),
                                '&:hover': {
                                    backgroundColor: backgroundColor.hover
                                }
                            }}>
                            <ReactIcons icon={label} />
                        </Link>
                    );
                })}
        </Stack>
    );
};

export default SocialShare;

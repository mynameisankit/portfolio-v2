import React, { useEffect, useRef } from 'react';
import Stack from '@mui/material/Stack';
//Custom Components
import ReactIcons from '@/components/common/ReactIcons';
import Link from '@/components/common/Link';

function SocialShare({ title, href }) {
    const url = useRef(href);

    useEffect(() => {
        if (!url.current)
            url.current = window.location.href;
    });

    return (
        <Stack direction='row' justifyContent='center' spacing={2}>
            {
                [
                    {
                        href: `https://twitter.com/intent/tweet?text=${title}&url=${url.current}`,
                        label: 'Twitter',
                        backgroundColor: '#1DA1F2'
                    },
                    {
                        href: `https://www.facebook.com/sharer/sharer.php?u=${url.current}`,
                        label: 'Facebook',
                        backgroundColor: '#4267B2'
                    },
                    {
                        href: `https://www.linkedin.com/shareArticle?url=${url.current}&title=${title}`,
                        label: 'LinkedIn',
                        backgroundColor: '#2867B2'
                    }
                ].map(({ href, label, backgroundColor }) => {
                    return (
                        <Link
                            type='button'
                            key={label}
                            href={href}
                            sx={{
                                backgroundColor,
                                color: theme => theme.palette.mode === 'dark' ?
                                    'text.primary' : 'text.secondary'
                            }}
                        >
                            <ReactIcons icon={label} />
                        </Link>
                    );
                })}
        </Stack>
    );
};

export default SocialShare;

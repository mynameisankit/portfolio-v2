import React from 'react';
import NxtLink from 'next/link';
import MuiLink from '@mui/material/Link';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

function Link({ href, children, nextLinkProps, muiLinkProps, button, icon, link, buttonProps }) {
    const IS_ANCHOR = href && href.startsWith('#');
    const IS_INTERNAL_LINK = href && href.startsWith('/');

    const MUI_LINK = (
        <MuiLink
            {...muiLinkProps}
            {...(!IS_INTERNAL_LINK && { rel: 'noopener noreferrer', target: '_blank' })}>
            {children}
        </MuiLink>
    );

    const MUI_BUTTON = (
        <Button
            {...buttonProps}
            {...(!IS_INTERNAL_LINK && { rel: 'noopener noreferrer', target: '_blank' })}>
            {children}
        </Button>
    );

    const MUI_ICON_BUTTON = (
        <IconButton
            {...buttonProps}
            {...(!IS_INTERNAL_LINK && { rel: 'noopener noreferrer', target: '_blank' })}>
            {children}
        </IconButton>
    );

    let component = null;
    if (button)
        component = MUI_BUTTON;
    else if (icon)
        component = MUI_ICON_BUTTON;
    else
        component = MUI_LINK;

    if (IS_ANCHOR)
        return component;

    return (
        <NxtLink href={href} {...nextLinkProps}>
            {component}
        </NxtLink>
    );
}

export default Link;
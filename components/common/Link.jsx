import React from 'react';
import NxtLink from 'next/link';
import MuiLink from '@mui/material/Link';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

function scrollIntoView(event, href) {
    event.preventDefault();

    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });

    return;
}

//TODO: Refactor
function Link({ children, href, type, buttonProps, muiLinkProps, nextLinkProps }) {
    if (!href)
        href = nextLinkProps?.href ? nextLinkProps.href : '#';

    const isAnchor = href.startsWith('#');
    const isInternalLink = href.startsWith('/');

    let BaseComponent, componentProps;
    if (type === 'button' || type === 'icon') {
        BaseComponent = type === 'button' ? Button : IconButton;
        componentProps = buttonProps;
    }
    else {
        BaseComponent = MuiLink;
        componentProps = muiLinkProps;
    }

    if (!isInternalLink) {
        componentProps = {
            ...componentProps,
            ...(!isAnchor && { rel: 'noopener noreferrer', target: '_blank' }),
            ...(isAnchor && { href, onClick: (event) => scrollIntoView(event, href) })
        };
    }

    if (!isAnchor)
        nextLinkProps = {
            ...nextLinkProps,
            passHref: true,
            href
        };

    const component = (
        <BaseComponent {...componentProps}>
            {children}
        </BaseComponent>
    );

    if (isAnchor)
        return component;
    else
        return (
            <NxtLink {...nextLinkProps}>
                {component}
            </NxtLink>
        );
}

export default Link;
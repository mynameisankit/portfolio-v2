import React from 'react';
import NxtHead from 'next/head';

function Head(props) {
    const { title } = props;

    return (
        <NxtHead>
            <title>{title}</title>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
        </NxtHead>
    );
}

export default Head;
import React from 'react';
import { Button } from 'react-bootstrap';

import {
    FaGithub as Github,
    FaGlobeAsia as Globe,
    FaHtml5 as HTML,
    FaCss3Alt as CSS,
    FaJs as JS,
    FaExternalLinkAlt as ExtLink
}   from "react-icons/fa";

import {
    SiFirebase as Firebase
}   from "react-icons/si";

import Styles from './link.module.css';

function List(props) {
    let { children, align } = props;

    const style = {
        textAlign: align,
    };

    children = children.map(item => (
        <ListItem key={item.type} type={item.type} link={item.link} />
    ));

    return (
        <ul style={style}>
            {children}
        </ul>
    );
}

function ListItem(props) {
    let { link, type } = props;
    let icon;

    type = type.toLowerCase();

    switch (type) {
        case 'github':
            icon = <Github />;
            break;

        case 'globe':
            icon = <Globe />;
            break;

        case 'html':
            icon = <HTML />;
            break;

        case 'css':
            icon = <CSS />;
            break;

        case 'js':
            icon = <JS />;
            break;

        case 'firebase':
            icon = <Firebase />;
            break;

        case 'ext-link':
            icon = <ExtLink />
            break;

        default:
            icon = null;
            break;
    }

    if (link) {
        return (
            <Button as='li' className={`${Styles.list_item} ${Styles.button}`}>
                {icon}
            </Button>
        );
    }
    else {
        return (
            <li className={`${Styles.list_item} ${Styles.icon}`}>
                {icon}
            </li>
        );
    }
}

export default List;
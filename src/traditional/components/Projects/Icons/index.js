import React from 'react';
import { Button } from 'react-bootstrap';
import Styles from './icon.module.css';

import {
    FaGithub as Github,
    FaGlobeAsia as Globe,
    FaHtml5 as HTML,
    FaCss3Alt as CSS,
    FaJs as JS,
    FaExternalLinkAlt as ExtLink,
    FaReact as ReactIcon,
    FaJava as Java,
    FaNodeJs as Node,
    FaCuttlefish as C,
} from "react-icons/fa";

import {
    SiFirebase as Firebase,
    SiPostgresql as Postgres,
    SiMysql as MySQL,
    SiMongodb as MongoDB,
    SiGnubash as Bash,
    SiPython as Python,
} from "react-icons/si";

import {
    DiRuby as Ruby,
    DiGitBranch as Git
} from "react-icons/di";

function List(props) {
    let { children, align } = props;

    const style = {
        textAlign: align,
    };

    children = children.map(item => (
        <ListItem key={item.type} type={item.type} link={item.link} />
    ));

    return (
        <ul style={style} className={Styles.list}>
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
            icon = <ExtLink />;
            break;

        case 'react':
            icon = <ReactIcon />;
            break;

        case 'ruby':
            icon = <Ruby />;
            break;

        case 'postgres':
            icon = <Postgres />;
            break;

        case 'my-sql':
            icon = <MySQL />;
            break;

        case 'mongo-db':
            icon = <MongoDB />;
            break;

        case 'java':
            icon = <Java />;
            break;

        case 'bash':
            icon = <Bash />;
            break;

        case 'node':
            icon = <Node />
            break;

        case 'python':
            icon = <Python />
            break;

        case 'git':
            icon = <Git />
            break;

        case 'c':
            icon = <C />
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
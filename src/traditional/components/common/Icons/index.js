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
    FaRegFolder as Folder,
} from "react-icons/fa";

import {
    SiFirebase as Firebase,
    SiPostgresql as Postgres,
    SiMysql as MySQL,
    SiMongodb as MongoDB,
    SiGnubash as Bash,
    SiPython as Python,
    SiMaterialUi as MaterialUi,
    SiRails as Rails,
} from "react-icons/si";

import {
    DiRuby as Ruby,
    DiGitBranch as Git,
    DiSqllite as Sqllite
} from "react-icons/di";

import {
    BsBootstrapFill as Bootstrap
} from "react-icons/bs";

function List(props) {
    let { children, align, type, link, styles, className } = props;

    const style = {
        textAlign: align,
    };

    console.log(children, typeof children, type, link);

    if (children && children instanceof Object) {
        children = children.map(item => (
            <Icon as='list-item' key={item.type} type={item.type} link={item.link} />
        ));

        return (
            <ul style={style} className={Styles.list}>
                {children}
            </ul>
        );
    }
    else {
        return <Icon type={type} link={link} styles={styles} className={className} />;
    }
}

function Icon(props) {
    let { link, type, as, className, ...rest } = props;
    let icon;

    type = type.toLowerCase();

    switch (type) {
        case 'github':
            icon = <Github title='Github' />;
            break;

        case 'globe':
            icon = <Globe title='External Link' />;
            break;

        case 'html':
            icon = <HTML title='HTML' />;
            break;

        case 'css':
            icon = <CSS title='CSS' />;
            break;

        case 'js':
            icon = <JS title='JavaScript' />;
            break;

        case 'firebase':
            icon = <Firebase title='Firebase' />;
            break;

        case 'ext-link':
            icon = <ExtLink />;
            break;

        case 'react':
            icon = <ReactIcon title='React' />;
            break;

        case 'ruby':
            icon = <Ruby title='Ruby' />;
            break;

        case 'postgres':
            icon = <Postgres title='PostgreSQL' />;
            break;

        case 'my-sql':
            icon = <MySQL title='MySQL' />;
            break;

        case 'mongodb':
            icon = <MongoDB title='MongoDB' />;
            break;

        case 'java':
            icon = <Java title='Java' />;
            break;

        case 'bash':
            icon = <Bash title='GNU Bash' />;
            break;

        case 'node':
            icon = <Node title='Node.js' />
            break;

        case 'python':
            icon = <Python title='Python' />
            break;

        case 'git':
            icon = <Git title='Git' />
            break;

        case 'c':
            icon = <C title='C' />
            break;

        case 'bootstrap':
            icon = <Bootstrap title='Bootstrap' />;
            break;

        case 'material-ui':
            icon = <MaterialUi title='Material UI' />;
            break;

        case 'sql-lite':
            icon = <Sqllite title='SQL Lite' />;
            break;

        case 'rails':
            icon = <Rails title='Ruby On Rails' />;
            break;

        case 'folder':
            icon = <Folder title='folder' />;
            break;

        default:
            icon = null;
            break;
    }

    if (as === 'list-item') {
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
    else {
        if(link) {
            return (
                <Button className={`${className} ${Styles.button}`} {...rest}>
                    {icon}
                </Button>
            );
        }
        else {
            return (
                <div className={className} {...rest}>
                    {icon}
                </div>
            );
        }
    }
}

export default List;
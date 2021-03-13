import React from 'react';
import { Image } from 'react-bootstrap';

//Images
import Images from './Images';

function List(props) {
    let { type, ...rest } = props;

    return <Icon type={type} {...rest} />;
}

function Icon(props) {
    let { type, className } = props;
    let icon;

    type = type.toLowerCase();

    switch (type) {
        case 'github':
            icon = <Image className={className} src={Images.GitHub} title='Github' />;
            break;

        case 'html':
            icon = <Image className={className} src={Images.HTML} title='HTML' />;
            break;

        case 'css':
            icon = <Image className={className} src={Images.CSS} title='CSS' />;
            break;

        case 'js':
        case 'javascript':
            icon = <Image className={className} src={Images.JavaScript} title='JavaScript' />;
            break;

        case 'firebase':
            icon = <Image className={className} src={Images.Firebase} title='Firebase' />;
            break;

        case 'react':
            icon = <Image className={className} src={Images.React} title='React' />;
            break;

        case 'ruby':
            icon = <Image className={className} src={Images.Ruby} title='Ruby' />;
            break;

        case 'postgres':
            icon = <Image className={className} src={Images.PostgreSQL} title='PostgreSQL' />;
            break;

        case 'my-sql':
            icon = <Image className={className} src={Images.MySQL} title='MySQL' />;
            break;

        case 'sqlite':
            icon = <Image className={className} src={Images.SQLite} title='SQLite' />;
            break;

        case 'mongodb':
            icon = <Image className={className} src={Images.MongoDB} title='MongoDB' />;
            break;

        case 'java':
            icon = <Image className={className} src={Images.Java} title='Java' />;
            break;

        case 'bash':
            icon = <Image className={className} src={Images.Bash} title='GNU Bash' />;
            break;

        case 'node':
            icon = <Image className={className} src={Images.Nodejs} title='Node.js' />
            break;

        case 'python':
            icon = <Image className={className} src={Images.Python} title='Python' />
            break;

        case 'git':
            icon = <Image className={className} src={Images.Git} title='Git' />
            break;

        case 'c':
            icon = <Image className={className} src={Images.C} title='C' />
            break;

        case 'bootstrap':
            icon = <Image className={className} src={Images.Bootstrap} title='Bootstrap' />;
            break;

        case 'material-ui':
            icon = <Image className={className} src={Images.MaterialUI} title='Material UI' />;
            break;

        case 'rails':
            icon = <Image className={className} src={Images.Rails} title='Ruby On Rails' />;
            break;

        case 'jquery':
            icon = <Image className={className} src={Images.JQuery} title='JQuery' />;
            break;

        case 'sass':
            icon = <Image className={className} src={Images.Sass} title='Sass' />;
            break;

        case 'cpp':
            icon =  <Image className={className} src={Images.CPP} title='C++' />;
            break;

        default:
            icon = null;
            break;
    }

    return icon;
}

export default List;
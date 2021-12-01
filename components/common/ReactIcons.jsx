import React from 'react';
import { FaExternalLinkAlt } from '@react-icons/all-files/fa/FaExternalLinkAlt';
import { BiGitRepoForked } from '@react-icons/all-files/bi/BiGitRepoForked';
import { AiOutlineEye } from '@react-icons/all-files/ai/AiOutlineEye';
import { BsStarFill } from '@react-icons/all-files/bs/BsStarFill';
import { SiHtml5 } from '@react-icons/all-files/si/SiHtml5';
import { FaReact } from '@react-icons/all-files/fa/FaReact';
import { SiCss3 } from '@react-icons/all-files/si/SiCss3';
import { SiJavascript } from '@react-icons/all-files/si/SiJavascript'
import { FaJava } from '@react-icons/all-files/fa/FaJava';
import { SiPython } from '@react-icons/all-files/si/SiPython';
import { FaNode } from '@react-icons/all-files/fa/FaNode';
import { SiMysql } from '@react-icons/all-files/si/SiMysql';
import { SiPostgresql } from '@react-icons/all-files/si/SiPostgresql';
import { DiSqllite } from '@react-icons/all-files/di/DiSqllite';
import { DiNginx } from '@react-icons/all-files/di/DiNginx';
import { SiMaterialUi } from '@react-icons/all-files/si/SiMaterialUi';
import { SiNextDotJs } from '@react-icons/all-files/si/SiNextDotJs';
import { SiBootstrap } from '@react-icons/all-files/si/SiBootstrap';
import { SiFirebase } from '@react-icons/all-files/si/SiFirebase';
import { VscGithubInverted } from '@react-icons/all-files/vsc/VscGithubInverted';
import { SiGatsby } from '@react-icons/all-files/si/SiGatsby';
import { FaAws } from '@react-icons/all-files/fa/FaAws';
import { SiGraphql } from '@react-icons/all-files/si/SiGraphql';
import { SiMongodb } from '@react-icons/all-files/si/SiMongodb';
import { SiMeteor } from '@react-icons/all-files/si/SiMeteor';
import { SiNetlify } from '@react-icons/all-files/si/SiNetlify';
import { SiXampp } from '@react-icons/all-files/si/SiXampp';
import { BsBootstrapFill } from '@react-icons/all-files/bs/BsBootstrapFill';
import { SiGnubash } from '@react-icons/all-files/si/SiGnubash';
import { SiC } from '@react-icons/all-files/si/SiC';
import { DiGitBranch } from '@react-icons/all-files/di/DiGitBranch';
import { IoLogoMarkdown } from '@react-icons/all-files/io/IoLogoMarkdown';

function ReactIcons(props) {
    const { icon, ...rest } = props;
    let Component = null;

    switch (icon) {
        case 'Meteor':
        case 'Meteor.js':
            Component = SiMeteor;
            break;

        case 'MongoDB': Component = SiMongodb;
            break;

        case 'ExternalLink': Component = FaExternalLinkAlt;
            break;

        case 'Forks': Component = BiGitRepoForked;
            break;

        case 'Watchers': Component = AiOutlineEye;
            break;

        case 'Stars': Component = BsStarFill;
            break;

        case 'HTML': Component = SiHtml5;
            break;

        case 'CSS': Component = SiCss3;
            break;

        case 'JavaScript': Component = SiJavascript;
            break;

        case 'React':
        case 'React.js':
            Component = FaReact;
            break;

        case 'Java': Component = FaJava;
            break;

        case 'Python': Component = SiPython;
            break;

        case 'Node.js': Component = FaNode;
            break;

        case 'MySql':
        case 'MySQL':
            Component = SiMysql;
            break;

        case 'PostgreSQL': Component = SiPostgresql;
            break;

        case 'SQLite': Component = DiSqllite;
            break;

        case 'NginX': Component = DiNginx;
            break;

        case 'Material-UI': Component = SiMaterialUi;
            break;

        case 'Next.js': Component = SiNextDotJs;
            break;

        case 'React-Bootstrap': Component = SiBootstrap;
            break;

        case 'Firebase': Component = SiFirebase;
            break;

        case 'Github': Component = VscGithubInverted;
            break;

        case 'Amazon Web Service': Component = FaAws;
            break;

        case 'Gatsby.js': Component = SiGatsby;
            break;

        case 'GraphQL': Component = SiGraphql;
            break;

        case 'netlify':
        case 'Netlify':
        case 'Netlify CMS':
        case 'NetlifyCMS':
            Component = SiNetlify;
            break;

        case 'Xampp':
        case 'xampp':
            Component = SiXampp;
            break;

        case 'bootstrap':
        case 'Bootstrap':
        case 'React Bootstrap':
            Component = BsBootstrapFill;
            break;

        case 'Bash':
            Component = SiGnubash;
            break;

        case 'c':
        case 'C':
            Component = SiC;
            break;

        case 'git':
        case 'Git':
            Component = DiGitBranch;
            break;

        case 'md':
        case 'markdown':
        case 'mdx':
        case 'MDX':
            Component = IoLogoMarkdown;
            break;
    }

    if (Component) {
        return (
            <Component {...rest} style={{
                fontSize: 'inherit',
                color: 'inherit'
            }} />
        );
    }
    else {
        return null;
    }
}

export default ReactIcons;
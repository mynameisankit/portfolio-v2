import React from 'react';
import * as Fa from 'react-icons/fa';
import * as Bi from 'react-icons/bi';
import * as Ai from 'react-icons/ai';
import * as Bs from 'react-icons/bs';
import * as Si from 'react-icons/si';
import * as Di from 'react-icons/di';
import * as Vsc from 'react-icons/vsc';
import * as Io from 'react-icons/io';
import * as Mui from '@mui/icons-material';
//Utility
import * as _ from 'lodash';
import replace from 'lodash/fp/replace';
import lowerCase from 'lodash/fp/lowerCase';

function ReactIcons({ icon, ...rest }) {
    //Remove '-' / '.'
    let idx = icon.indexOf('.');
    if(idx != -1)
        icon = icon.substring(0, idx);
    idx = icon.indexOf('-');
    if(idx != -1)
        icon = icon.substring(0, idx);
    
    icon = lowerCase(icon);
    icon = replace(' ', '', icon);

    const IconsMapping = {
        'twitter': Mui.Twitter,
        'instagram': Mui.Instagram,
        'linkedin': Mui.LinkedIn,
        'github': Mui.GitHub,
        'facebook': Mui.Facebook,
        'meteor': Si.SiMeteor,
        'mongodb': Si.SiMongodb,
        'externallink': Fa.FaExternalLinkAlt,
        'forks': Bi.BiGitRepoForked,
        'watchers': Ai.AiOutlineEye,
        'stars': Bs.BsStarFill,
        'html': Si.SiHtml5,
        'css': Si.SiCss3,
        'javascript': Si.SiJavascript,
        'react': Fa.FaReact,
        'java': Fa.FaJava,
        'python': Si.SiPython,
        'node': Fa.FaNode,
        'mysql': Si.SiMysql,
        'postgresql': Si.SiPostgresql,
        'sqlite': Di.DiSqllite,
        'nginx': Di.DiNginx,
        'material': Si.SiMaterialui,
        'next': Si.SiNextdotjs,
        'bootstrap': Si.SiBootstrap,
        'reactbootstrap': Si.SiBootstrap,
        'firebase': Si.SiFirebase,
        'github': Vsc.VscGithubInverted,
        'aws': Fa.FaAws,
        'amazonwebservice': Fa.FaAws,
        'gatsby': Si.SiGatsby,
        'graphql': Si.SiGraphql,
        'netlify': Si.SiNetlify,
        'netlifycms': Si.SiNetlify,
        'xampp': Si.SiXampp,
        'bash': Si.SiGnubash,
        'c': Si.SiC,
        'git': Di.DiGitBranch,
        'markdown': Io.IoLogoMarkdown,
        'md': Io.IoLogoMarkdown,
        'mdx': Io.IoLogoMarkdown,
    };

    if (IconsMapping[icon]) {
        const Component = IconsMapping[icon];

        return (
            <Component {...rest} style={{
                fontSize: 'inherit',
                color: 'inherit'
            }} />
        );
    }
    else
        return null;
}

export default ReactIcons;
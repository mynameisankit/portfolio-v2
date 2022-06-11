import React from 'react';
import * as Fa from 'react-icons/fa';
import * as Bi from 'react-icons/bi';
import * as Ai from 'react-icons/ai';
import * as Bs from 'react-icons/bs';
import * as Si from 'react-icons/si';
import * as Di from 'react-icons/di';
import * as Vsc from 'react-icons/vsc';
import * as Io from 'react-icons/io';
import * as Gr from 'react-icons/gr';
import * as Mui from '@mui/icons-material';
import SvgIcon from '@mui/material/SvgIcon';
//Utility
import lowerCase from 'lodash/fp/lowerCase';

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
    'reactjs': Fa.FaReact,
    'react': Fa.FaReact,
    'java': Fa.FaJava,
    'python': Si.SiPython,
    'node': Fa.FaNode,
    'mysql': Si.SiMysql,
    'postgresql': Si.SiPostgresql,
    'sqlite': Di.DiSqllite,
    'nginx': Di.DiNginx,
    'material': Si.SiMaterialui,
    'materialui': Si.SiMaterialui,
    'next': Si.SiNextdotjs,
    'nextjs': Si.SiNextdotjs,
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
    'git': Si.SiGit,
    'markdown': Io.IoLogoMarkdown,
    'md': Io.IoLogoMarkdown,
    'mdx': Io.IoLogoMarkdown,
    'visualstudiocode': Si.SiVisualstudio,
    'vscode': Si.SiVisualstudio,
    'notion': Si.SiNotion,
    'discord': Si.SiDiscord,
    'wsl': Si.SiWindowsterminal,
    'windowssystemforlinux': Si.SiWindowsterminal,
    'yarn': Si.SiYarn,
    'nodejs': Gr.GrNode,
    'expressjs': Si.SiExpress,
    'pandas': Si.SiPandas,
    'numpy': Si.SiNumpy,
    'cpp': Si.SiCplusplus,
    'html': Si.SiHtml5
};

function ReactIcons({ icon, ...rest }) {
    const Component = IconsMapping[lowerCase(icon).replaceAll(/[- _\.]/g, '')];
    if (Component) {

        return (
            <SvgIcon
                {...rest}
                inheritViewBox
                component={Component}
            />
        );
    }
    else
        return null;
}

export default ReactIcons;
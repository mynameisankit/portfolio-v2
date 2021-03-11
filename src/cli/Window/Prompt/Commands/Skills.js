import React from 'react';
import Styles from './result.module.css';

function Line(props) {
    return (
        <p className={Styles.result}>
            {props.children}
        </p>
    );
}

function Skills(props) {
    const options = props.children;

    const lines = {
        programmingLangauge : 'Programming Languages - C, C++, Java, JavaScript, Python, Ruby',
        scriptingLanguage: 'Scripting Languages - BASH',
        markupLangauge: 'Markup Language - HTML',
        stylingLangauge: 'Styling Language - CSS',
        domains: 'Explored Domains - Full Stack Web Development',
        frontendFrameworks: 'Frontend Frameworks - React.js',
        backend: 'Backend - Node.js and Express.js',
        relationalDatabase: 'Relational Databases - MySQL',
        noSQL: 'NoSQL Databases - MongoDB, LowDB',
        vcs: 'Version Control System(VCS) - Git and Github'
    };

    const children = [];

    if(options.length === 1) {
        const option = options[0];

        switch(option) {
            case 'programming-languages':
                children.push(
                    <Line key={option}>
                        {lines[option]}
                    </Line>
                );
                break;

            default: 
                break;
        }
    }
    else {
        for (let i in lines) {
            children.push(
                <Line key={i}>
                    {lines[i]}
                </Line>
            );
        }
    }

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    );
}

export default Skills;
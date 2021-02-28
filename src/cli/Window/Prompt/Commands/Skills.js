import React from 'react';
import Styles from './result.module.css';

function Skills(props) {
    return (
        <React.Fragment>
            <p className={Styles.result}>
                Programming Languages - C, C++, Java, JavaScript, Python, Ruby
            </p>
            <p className={Styles.result}>
                Scripting Languages - BASH
            </p>
            <p className={Styles.result}>
                Markup Language - HTML
            </p>
            <p className={Styles.result}>
                Styling Language - CSS
            </p>
            <p className={Styles.result}>
                Explored Domains - Full Stack Web Development
            </p>
            <p className={Styles.result}>
                Frontend Frameworks - React.js
            </p>
            <p className={Styles.result}>
                Backend - Node.js and Express.js
            </p>
            <p className={Styles.result}>
                Relational Databases - MySQL
                NoSQL Databases - MongoDB, LowDB 
            </p>
            <p className={Styles.result}>
                Version Control System(VCS) - Git and Github
            </p>
        </React.Fragment>
    );
}

export default Skills;
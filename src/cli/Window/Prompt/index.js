import React from 'react';
import { Col } from 'react-bootstrap';
import Styles from './prompt.module.css';

function prompt(props) {
    let children;
    const code = props.code;

    if (code === 'default') {
        children = (
            <React.Fragment>
                <p className={Styles.result}>
                    Portfolio Version 2.0.1
                </p>
                <p className={Styles.result}>
                    Welcome to my Portfolio
                </p>
                <p className={Styles.result}>
                    Type 'help' to get the list of available commands.
                </p>
            </React.Fragment>
        );
    }
    else if (code === 'contact') {
        children = (
            <React.Fragment>
                <p className={Styles.result}>
                    {`Name@Ankit/Portfolio : ~$\xa0\xa0 ${props.children} `}
                </p>
                <p className={Styles.result}>
                    E-Mail: <u><a href='mailto:ankit.kumar19@iiitg.ac.in'>ankit.kumar19@iiitg.ac.in</a></u>
                </p>
                <p className={Styles.result}>
                    Instagram: my.name.is.ankit
                </p>
                <p className={Styles.result}>
                    Github: mynameisankit
                </p>
                <p className={Styles.result}>
                    Github: linkedin.com/in/mynameisankit/
                </p>
            </React.Fragment>
        );
    }
    else {
        children = (
            <React.Fragment>
                <p className={Styles.result}>
                    {`Name@Ankit/Portfolio : ~$\xa0\xa0 ${props.children} `}
                </p>
                <p className={`${Styles.result} ${Styles.error}`}>
                    {`${props.children} : Command Not Found`}
                </p>
            </React.Fragment>
        );
    }

    return (
        <Col xs={12} className={Styles.command}>
            <div className={Styles.output}>
                {children}
            </div>
        </Col>
    );
}

export default prompt;
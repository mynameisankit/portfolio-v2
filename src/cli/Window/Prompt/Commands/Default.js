import React from 'react';
import Styles from './result.module.css';

function Default(props) {
    return (
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

export default Default;
import React from 'react';
import Styles from './result.module.css';

function Greet(props) {
    return (
        <React.Fragment>
            <p className={Styles.result}>
                Hi There!
            </p>
        </React.Fragment>
    );
}

export default Greet;
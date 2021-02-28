import React from 'react';
import Styles from './result.module.css';

function Help(props) {
    return (
        <React.Fragment>
            <p className={Styles.result}>
                'bio' - Get Bio
            </p>
            <p className={Styles.result}>
                'contact' - Contact Information
            </p>
            <p className={Styles.result}>
                'skills' - Get Skillset
            </p>
            <p className={Styles.result}>
                'exit' - Switch to Traditional Portfolio Mode
            </p>
            <p className={Styles.result}>
                'help' - Will help you
            </p>
            <p className={Styles.result}>
                'default' - Default prompt
            </p>
            <p className={Styles.result}>
                'clear' - Clear Screen
            </p>
            <p className={Styles.result}>
                Plus there are many sweet little easter eggs you can try
            </p>
        </React.Fragment>
    );
}

export default Help;
import React from 'react';
import Styles from './result.module.css';

function Bio(props) {
    return (
        <React.Fragment>
            <p className={Styles.result}>
                Name - Ankit Kumar
            </p>
            <p className={Styles.result}>
                Institute - Indian Institute Of Information Technology Guwahati (IIITG)
            </p>
            <p className={Styles.result}>
                Pursuing Degree : Bachelor Of Technology (2019 - 2023)
            </p>
            <p className={Styles.result}>
                Branch : Computer Science And Technology
            </p>
            <p className={Styles.result}>
                Currently in 4th Semester (2nd Year / Sophomore)
            </p>
        </React.Fragment>
    );
}

export default Bio;
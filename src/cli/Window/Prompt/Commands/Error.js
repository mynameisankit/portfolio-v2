import React from 'react';
import Styles from './result.module.css';

function Error(props) {
    return (
        <React.Fragment>
            <p className={`${Styles.result} ${Styles.error}`}>
                {`${props.children} : Command / Option Not Found`}
            </p>
        </React.Fragment>
    );
}

export default Error;
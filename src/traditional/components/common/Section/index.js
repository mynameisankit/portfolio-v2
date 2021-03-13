import React from 'react';
import Styles from './section.module.css';

function Section(props) {
    const { children, className, ...attributes } = props;

    return (
        <section {...attributes} className={`${Styles.className} ${Styles.section}`}>
            {children}
        </section>
    );
}

export default Section;
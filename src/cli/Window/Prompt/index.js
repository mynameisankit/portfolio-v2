import React from 'react';
import { Col } from 'react-bootstrap';
import Commands from './Commands';
import Styles from './prompt.module.css';

function prompt(props) {
    const code = props.code;
    
    let children = [
        (<p key={0} className={Styles.result}>
            {`Name@Ankit/Portfolio : ~$\xa0\xa0 ${code === 'default' ? 'default' : props.children} `}
        </p>)
    ];

    if (code === 'help') {
        children.push(<Commands.Help key={1} />);
    }
    else if (code === 'default') {
        children.push(<Commands.Defaults key={1} />);
    }
    else if (code === 'contact') {
        children.push(<Commands.Contact key={2} />);
    }
    else if (code === 'hi' || code === 'hello') {
        children.push(<Commands.Greet key={3} />);
    }
    else if(code === 'bio') {
        children.push(<Commands.Bio key={4} />);
    }
    else if(code === 'skills') {
        children.push(<Commands.Skills key={4} />);
    }
    else {
        children.push(
            <Commands.Error key={5}>
                {props.children}
            </Commands.Error>
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
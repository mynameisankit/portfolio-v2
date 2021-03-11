import React from 'react';
import { Col } from 'react-bootstrap';
import Commands from './Commands';
import Styles from './prompt.module.css';

function prompt(props) {
    const [ command, ...options ] = props.code.split('--');

    console.log(command);
    
    let children = [
        (<p key={0} className={Styles.result}>
            {`Name@Ankit/Portfolio : ~$\xa0\xa0 ${props.code === 'default' ? 'default' : props.code} `}
        </p>)
    ];

    if (command === 'help') {
        children.push(<Commands.Help key={1} />);
    }
    else if (command === 'default') {
        children.push(<Commands.Defaults key={1} />);
    }
    else if (command === 'contact') {
        children.push(<Commands.Contact key={2} />);
    }
    else if (command === 'hi' || command === 'hello') {
        children.push(<Commands.Greet key={3} />);
    }
    else if(command === 'bio') {
        children.push(<Commands.Bio key={4} />);
    }
    else if(command === 'skills') {
        console.log(options);

        children.push(
            <Commands.Skills key={4}>
                {options}
            </Commands.Skills>
        );
    }
    else {
        children.push(
            <Commands.Error key={5}>
                {command}
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
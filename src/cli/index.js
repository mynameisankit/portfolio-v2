import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Ribbon from './Window/Ribbon';
import Window from './Window';
import Styles from './terminal.module.css';

function Terminal(props) {
    return (
        <div className={Styles.terminal}>
            <Container fluid>
                <Row>
                    <Ribbon />
                    <Window />
                </Row>
            </Container>
        </div>
    );
}

export default Terminal;
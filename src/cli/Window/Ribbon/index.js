import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Styles from './ribbon.module.css';

function Window(props) {
    return (
        <Col className={Styles.ribbon} xs={12} >
            <Container fluid>
                <Row >
                    <Col className={Styles.col} >
                        <h2 className={Styles.heading} >Command Line</h2>
                    </Col>
                </Row>
            </Container>
        </Col>
    );
}

export default Window;
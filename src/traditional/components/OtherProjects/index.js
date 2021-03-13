import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Section from '../common/Section';
import Item from './item';

function OtherProjects(props) {
    return (
        <Section>
            <Container fluid>
                <Row>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </Row>
            </Container>
        </Section>
    );
}

export default OtherProjects;
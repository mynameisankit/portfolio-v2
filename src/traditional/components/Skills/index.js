import React from 'react';
import { Container, Col, Row, Form, FormControl } from 'react-bootstrap';
import Section from '../common/Section';
import Icon from './Icons';
import Styles from './skills.module.css';

function Skills(props) {
    const skills = {
        "Programming Languages": ['c', 'cpp', 'java', 'ruby', 'js', 'python', 'node'],
        "Miscellenous": ['html', 'css', 'bash', 'sass'],
        "Databases": ['my-sql', 'postgres', 'mongodb', 'sqlite'],
        "Frameworks": ['react', 'rails'],
        "Libraries": ['bootstrap', 'material-ui', 'jquery'],
        "Version Control System": ['git', 'github'],
        "Tools": ['firebase'],
    };

    const children = [];
    for (let i in skills) {
        for(let j in skills[i]) {
            let skill = skills[i][j];
            children.push(
                <Col key={skill}>
                    <Icon type={skill} className={Styles.icon} />
                </Col>
            );
        }
    }

    return (
        <Section>
            <Container fluid className={Styles.container}>

                {/* Search */}
                <Row>
                    <Col className={Styles.searchContainer}>
                        <Form>
                            <Form.Group controlId="skill-search">
                                <FormControl placeholder="Search..." />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

                {/* Skills */}
                <Row>
                    {children}
                </Row>

            </Container>
        </Section>
    );
}

export default Skills;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Icon from '../common/Icons';
import Styles from './projects.module.css';

function Item(props) {
    return (
        <Col xl={4} md={6} className={Styles.col}>
            <div className={Styles.projectWrapper}>
                <a target='_blank' href="lol" className={Styles.project}>
                    {/* Content */}
                    <div>
                        <Container fluid>
                            <Row>
                                <Col className={Styles.icon_container} style={{ textAlign: 'left' }}>
                                    <Icon type='folder' className={Styles.folder} />
                                </Col>
                                <Col className={Styles.icon_container} style={{ textAlign: 'right' }}>
                                    <Icon className={Styles.link_icon} link='#' type='github' />
                                    <Icon className={Styles.link_icon} link='#' type='ext-link' />
                                </Col>
                            </Row>
                        </Container>

                        <div>
                            <h1 className={Styles.heading}>
                                A bot to track all your hardwork!
                            </h1>

                            <p className={Styles.description}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a felis eu velit iaculis commodo cursus vel enim. Pellentesque a massa libero. In hac habitasse platea dictumst.
                            </p>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className={Styles.tech_stack_wrapper}>
                        <ul className={Styles.tech_stack}>
                            <li className={Styles.tech}>Node.js</li>
                            <li className={Styles.tech}>Discord.js</li>
                            <li className={Styles.tech}>LowDB</li>
                            <li className={Styles.tech}>Axios</li>
                            <li className={Styles.tech}>Cheerio</li>
                        </ul>
                    </div>
                </a>
            </div>
        </Col>
    );
}

export default Item;
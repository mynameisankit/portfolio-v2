import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Links from './Links';
import Styles from './projects.module.css';

function Project(props) {
    const data = props.children;
    //const { align } = props;

    const children = [];

    children.push(
        <React.Fragment>
            <div key={0} className={Styles.contentWrapper}>
                <h1 className={Styles.heading}>Yuvaan 2020</h1>

                <div className={Styles.content_box}>
                    {/* Project Description */}
                    <p className={Styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec ex sagittis, pellentesque magna ut, interdum ante. Mauris malesuada maximus enim mollis tincidunt. Phasellus ac hendrerit nibh. Integer eget rutrum massa. Fusce non arcu fermentum, facilisis risus vitae, ultricies sapien. Proin quis ipsum enim. Quisque sollicitudin orci est, sit amet vestibulum purus egestas et. Aliquam volutpat quam eu mauris ullamcorper, vel accumsan lacus.
                    </p>

                    {/* Links */}
                    <div className={Styles.project_link} >
                        <Links align='center'>
                            {[
                                {
                                    type: 'github',
                                    link: '#'
                                }, {
                                    type: 'ext-link',
                                    link: '#'
                                }
                            ]}
                        </Links>
                    </div >
                </div>

                {/* Technology Stack */}
                <Links align='right'>
                    {[
                        {
                            type: 'html',
                        }, {
                            type: 'css',
                        }, {
                            type: 'js',
                        }, {
                            type: 'firebase',
                        }
                    ]}
                </Links>
            </div>
        </React.Fragment>
    );

    children.push(
        <div key={1} className={Styles.imageContainer}>
            <Image src={data.image} className={Styles.image} />
        </div>
    );

    // if (align !== 'left') {
    //     children.reverse();
    // }

    return (
        <Container fluid className={Styles.container}>
            <Row>
                <Col xs={12} className={Styles.col_container}>
                    {children}
                </Col>
            </Row>
        </Container>
    );
}

export default Project;
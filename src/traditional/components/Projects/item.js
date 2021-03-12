import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Icons from './Icons';
import Styles from './projects.module.css';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
        };

        //Method Bindings
        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize() {
        this.setState({
            width: window.innerWidth,
        });
    }

    render() {
        const props = this.props;
        const width = this.state.width;
        const breakpoint = 1200;
        const data = props.children;

        //The Alignment is with respect to image
        let { align } = props;
        align = (align === 'left');

        return (
            <Container fluid className={Styles.container} >
                <Row>
                    <Col xs={12} className={`${Styles.col_container} ${width < breakpoint ? Styles.content_box : ''}`}>
                        {/* Content */}

                        {/* Image */}
                        <div key={1} className={align ? Styles.imageContainer_left : Styles.imageContainer_right}>
                            <Image src={data.image} className={Styles.image} />
                        </div>

                        <div className={align ? Styles.contentWrapper_right : Styles.contentWrapper_left}>
                            <h1 className={`${Styles.heading} ${align ? Styles.heading_right : Styles.heading_left}`}>
                                Yuvaan 2020
                            </h1>

                            <div className={`${align ? Styles.content_pad_right : Styles.content_pad_left} ${Styles.content} ${width > breakpoint ? Styles.content_box : ''}`}>
                                {/* Project Description */}
                                <p className={Styles.description}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec ex sagittis, pellentesque magna ut, interdum ante. Mauris malesuada maximus enim mollis tincidunt. Phasellus ac hendrerit nibh. Integer eget rutrum massa. Fusce non arcu fermentum, facilisis risus vitae, ultricies sapien. Proin quis ipsum enim. Quisque sollicitudin orci est, sit amet vestibulum purus egestas et. Aliquam volutpat quam eu mauris ullamcorper, vel accumsan lacus.
                                </p>

                                {/* Links */}
                                <div className={Styles.project_link} >
                                    <Icons align='center'>
                                        {[
                                            {
                                                type: 'github',
                                                link: '#'
                                            }, {
                                                type: 'ext-link',
                                                link: '#'
                                            }
                                        ]}
                                    </Icons>
                                </div >
                            </div>

                            {/* Technology Stack */}
                            <Icons align={width > breakpoint ? (align ? 'right' : 'left') : 'center'}>
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
                            </Icons>
                        </div>

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Project;
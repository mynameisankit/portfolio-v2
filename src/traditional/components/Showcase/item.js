import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Icons from '../common/Icons';
import Styles from './showcase.module.css';

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
                                {data.heading}
                            </h1>

                            <div className={`${align ? Styles.content_pad_right : Styles.content_pad_left} ${Styles.content} ${width > breakpoint ? Styles.content_box : ''}`}>
                                {/* Project Description */}
                                <p className={Styles.description}>
                                    {data.description}
                                </p>

                                {/* Links */}
                                <div className={Styles.project_link} >
                                    <Icons align='center'>
                                        {data.links}
                                    </Icons>
                                </div >
                            </div>

                            {/* Technology Stack */}
                            <Icons align={width > breakpoint ? (align ? 'right' : 'left') : 'center'}>
                                {data.techStack}
                            </Icons>
                        </div>

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Project;
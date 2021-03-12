import React from 'react';
import Yuvaan from './images/yuvaan.svg';
import Project from './item';

class Projects extends React.Component {
    render() {
        const data = [
            {
                image: Yuvaan,
            }, {
                image: Yuvaan,
            }, {
                image: Yuvaan,
            }, {
                image: Yuvaan,
            }
        ];

        const children = [];

        //The Alignment is with respect to image
        for (let i in data) {
            children.push(
                <Project key={i} align={parseInt(i) % 2 ? 'right' : 'left'}>
                    {{
                        image: Yuvaan,
                    }}
                </Project>
            );
        }

        return (
            <React.Fragment>
                {children}
            </React.Fragment>
        );
    }
}

export default Projects;
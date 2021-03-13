import React from 'react';
import Project from './item';
import Section from '../common/Section';
//Project Images
import Yuvaan from './images/yuvaan.svg';
import TechnicalBoard from './images/technicalBoard.svg';
import AdminPanel from './images/adminPanel.svg';

class Showcase extends React.Component {
    render() {
        //Projects
        const data = [
            {
                image: Yuvaan,
                heading: "Yuvaan 2020",
                description: "YUVAAN is the annual techno-cultural and sports festival of Indian Institute of Information Technology, Guwahati (IIITG), a budding tech institute with the potential to make this world a better place. I have contributed as a Front-End Developer in this project which was mainly focused around core HTML, CSS and JavaScript. We have used Bootstrap 4 to speed up the building process and to provide consistency. We have developed the site from scratch and took help in some of the designs(SVGs) from YUVAAN's Designing Team.",
                links: [
                    {
                        type: 'github',
                        link: '#'
                    }, {
                        type: 'ext-link',
                        link: '#'
                    }
                ],
                techStack: [
                    {
                        type: 'html',
                    }, {
                        type: 'css',
                    }, {
                        type: 'js',
                    }, {
                        type: 'firebase',
                    }, {
                        type: 'bootstrap',
                    }, {
                        type: 'jquery',
                    }
                ],

            }, {
                image: TechnicalBoard,
                heading: "Technical Board",
                description: "I developed the website's frontend using React and implemented many components using React Bootstrap as the baseline. I am also working on developing APIs to connect firestore so that the maintainers can easily change the website's content.",
                links: [
                    {
                        type: 'github',
                        link: '#'
                    }, {
                        type: 'ext-link',
                        link: '#'
                    }
                ],
                techStack: [
                    {
                        type: 'js',
                    }, {
                        type: 'css',
                    }, {
                        type: 'react',
                    }, {
                        type: 'firebase',
                    }, {
                        type: 'bootstrap',
                    }
                ],
            }, {
                image: AdminPanel,
                heading: "Technical Board Admin Panel",
                description: "I developed the website's frontend using React and implemented many components using React Bootstrap as the baseline. I am also working on developing APIs to connect firestore so that the maintainers can easily change the website's content.",
                links: [
                    {
                        type: 'github',
                        link: '#'
                    }, {
                        type: 'ext-link',
                        link: '#'
                    }
                ],
                techStack: [
                    {
                        type: 'js',
                    }, {
                        type: 'react',
                    }, {
                        type: 'firebase',
                    }, {
                        type: 'material-ui',
                    }
                ],
            }
        ];

        const children = [];

        //The Alignment is with respect to image
        for (let i in data) {
            children.push(
                <Project key={i} align={parseInt(i) % 2 ? 'right' : 'left'}>
                    {data[i]}
                </Project>
            );
        }

        return (
            <Section>
                {children}
            </Section>
        );
    }
}

export default Showcase;
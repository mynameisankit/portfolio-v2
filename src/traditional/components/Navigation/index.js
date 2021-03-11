import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Styles from './navigation.module.css';

function Navigation(props) {
    const links = [
        {
            text: 'Home',
            link: '#'
        },
        {
            text: 'About',
            link: '#'
        },
        {
            text: 'Education',
            link: '#'
        },
        {
            text: 'Skillset',
            link: '#'
        },
        {
            text: 'Projects',
            link: '#'
        },
        {
            text: 'Position Of Responsibilities',
            link: '#'
        },
        {
            text: 'Blogs',
            link: '#'
        },
        {
            text: 'Contact',
            link: '#'
        }
    ];

    const navs = links.map(link => {
        return (
            <Nav.Link className={Styles.nav} key={link.text} >
                {link.text}
            </Nav.Link>
        );
    });

    return (
        <Navbar variant='dark' collapseOnSelect expand="lg" className={Styles.navbarWrapper}>

            {/* Brand */}
            <Navbar.Brand className={Styles.navC}>
                Portfolio
            </Navbar.Brand>

            {/* Toggler */}
            <Navbar.Toggle aria-controls="navbar" className={Styles.hamburger} />

            {/* Nav Bar */}
            <Navbar.Collapse id="navbar" className={Styles.collapse}>

                <Nav className="ml-auto">
                    {navs}
                </Nav>

            </Navbar.Collapse>

        </Navbar>
    );
}

export default Navigation;
import React from 'react';
import Styles from './result.module.css';

function Link(props) {
    const { type, link, text } = props.children;

    return (
        <p className={`${Styles.result} ${Styles.link}`}>
            {type}&nbsp;:&nbsp; 
            <u>
                <a className={Styles.link} href={link}>
                    {text}
                </a>
            </u>
        </p>
    );
}

function Contact(props) {
    return (
        <React.Fragment>
            <Link>
                {{
                    type: 'E-Mail',
                    link: 'mailto:ankit.kumar19@iiitg.ac.in',
                    text: 'ankit.kumar19@iiitg.ac.in'
                }}
            </Link>
            <Link>
                {{
                    type: 'Instagram',
                    link: 'https://www.instagram.com/my.name.is.ankit/',
                    text: 'instagram.com/my.name.is.ankit'
                }}
            </Link>
            <Link>
                {{
                    type: 'Github',
                    link: 'https://github.com/mynameisankit',
                    text: 'mynameisankit'
                }}
            </Link>
            <Link>
                {{
                    type: 'LinkedIn',
                    link: 'https://www.linkedin.com/in/mynameisankit/',
                    text: 'linkedin.com/in/mynameisankit'
                }}
            </Link>
            <Link>
                {{
                    type: 'Facebook',
                    link: 'https://www.facebook.com/my.name.is.ankit.Kumar/',
                    text: 'facebook.com/my.name.is.ankit.Kumar',
                }}
            </Link>
            <Link>
                {{
                    type: 'Medium',
                    link: 'https://medium.com/@bizzareKumar',
                    text: 'medium.com/@bizzareKumar',
                }}
            </Link>
        </React.Fragment>
    );
}

export default Contact;
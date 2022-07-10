import React from 'react';
//Custom Compoennts
import Header from '@/components/common/Header';
import ContactForm from '@/components/contact';
//Hooks
import useColorModeValue from '@/components/hooks/useColorModeValue';
//Images
import DecorativeImageLightMode from '@/images/contact-light.jpg';
import DecorativeImageDarkMode from '@/images/contact-dark.jpg';

function Contact() {
    return (
        <React.Fragment>
            <Header
                title='Contact'
                backgroundImage={useColorModeValue(DecorativeImageLightMode, DecorativeImageDarkMode)}
            />
            <ContactForm />
        </React.Fragment>
    );
}

export default Contact;
import React from 'react';
import { NextSeo } from 'next-seo';
//Custom Compoennts
import Header from '@/components/common/Header';
import ContactForm from '@/components/contact';
//Hooks
import useColorModeValue from '@/components/hooks/useColorModeValue';
//Images
import DecorativeImageLightMode from '@/images/contact-light.webp';
import DecorativeImageDarkMode from '@/images/contact-dark.webp';

function Contact() {
    return (
        <React.Fragment>
            <NextSeo
                title='Contact'
                description='Contact Me'
            />

            <Header
                title='Contact'
                backgroundImage={useColorModeValue(DecorativeImageLightMode, DecorativeImageDarkMode)}
            />
            
            <ContactForm />
        
        </React.Fragment>
    );
}

export default Contact;
import React from 'react';
//Custom Components
import Hero from '@/components/home/Hero';
import Contact from '@/components/home/Contact';

function Home() {
    return (
        <React.Fragment>
            <Hero />
            <Contact />
        </React.Fragment>
    )
}

export default Home;
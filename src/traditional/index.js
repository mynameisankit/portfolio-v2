import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Showcase from './components/Showcase';
import OtherProjects from './components/OtherProjects';

function Traditional(props) {
    return (
        <Switch>
            
            {/* Main Page Layout */}
            <Route exact path='/'>
                <Navigation />
                <Header />
                <Showcase />
                <OtherProjects />
            </Route>

        </Switch>
    );
}

export default Traditional;
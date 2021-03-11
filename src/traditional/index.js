import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Projects from './components/Projects';

function Traditional(props) {
    return (
        <Switch>
            
            {/* Main Page Layout */}
            <Route path='/traditional'>
                <Navigation />
                <Header />
                <Projects />
            </Route>

        </Switch>
    );
}

export default Traditional;
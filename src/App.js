import React from 'react';
import CommandLine from './cli';
import Traditional from './traditional';

function App() {
    return (
        <React.Fragment>
            <CommandLine />
            <Traditional />
        </React.Fragment>
    );
}

export default App;

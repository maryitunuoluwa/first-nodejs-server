import React, { Component } from 'react' ;

import welcome from './views/welcomeMessage';

const hi = {
    colour: '#f0f0f0',
    backgroundColour: ''
}

class Head extends React.Compnent {
    render() {
        return(
            <div style={hi}>
                <h1>welcome</h1>
            </div>
        ); 
    }
}

export default Head;
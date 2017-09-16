import React, { Component } from 'react';

import Covertop from './Covertop';
import About from './About';
import Experience from './Experience';
// import Portfolio from './Portfolio';
import Technology from './Technology';

class Container extends Component {
    render(){
        return(
            <div className="container-fluid">
                <Covertop />
                <Experience />
                <Technology />
                <About />
            </div>
        );
    }
}


export default Container;
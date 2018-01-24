import React from 'react';

// import covertop component
import Covertop from '../../components/covertop';
// import about component
import About from '../../components/about/about';
// imprt exprtience component
import Experience from '../../components/experience';
// import technology component
import Technology from '../../components/technology';
// import contact component
import Cuntact from '../../components/contact';

const Content = () => {
    return(
        <div className="container-fluid">
            <Covertop />
            <Experience />
            <Technology />
            <About />
            <Cuntact />
        </div>
    );
}

export default Content;
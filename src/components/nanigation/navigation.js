import React from 'react';

const Navigation = () => {
    return (
        // step 13 : create header
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="">Paramas Waewsuwan</a>
                </div>
                <div id="navbar" className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                    <li id="nav-experience"><a href="#experience">Experience</a></li>
                    <li id="nav-technology"><a href="#technology">Technology</a></li>
                    <li id="nav-about"><a href="#about">About</a></li>
                    {/* <li id="nav-portfolio"><a href="#portfolio">Portfolio</a></li> */}
                    <li id="nav-contact"><a href="#contact">Contact</a></li>
                </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation; 
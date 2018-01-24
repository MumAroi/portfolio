import React from 'react';

import reactIcon from './react-opti.png';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="container">
                <h4 className=""><span className="font-weight-bold">Create By</span> <img className="foot-react" src={reactIcon} alt="imgProfile" /></h4>
            </div>
        </footer>
    );
}

export default Footer;
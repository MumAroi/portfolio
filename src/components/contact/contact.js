import React from 'react';

const Contact = () => {
    return(
        <div id="contact" className="row cover bottom">
            <h2 className="text-center contact-header">Contact Me</h2>
            <p className="text-center contact-email">Get in touch with me <span className="glyphicon glyphicon-arrow-right"></span> paramest.wsw@gmail.com</p>
            <div className="text-center contact-social-icons">
                <p>Or find me on:</p>
                <ul className="centered">
                <a href="https://www.instagram.com/paramest.wsw/"><li><i className="fa fa-instagram"></i> Instagram</li></a>
                <a href="https://web.facebook.com/paramas.wae"><li><i className="fa fa-facebook"></i> Facebook</li></a>
                <a href="https://github.com/qlsLeepinesslp"><li><i className="fa fa-github"></i> Github</li></a>
                </ul>
            </div>
        </div>
    );
}

export default Contact;

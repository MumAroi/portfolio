import React from 'react';

import './Timeline.css';

const Experience = () => {
    return(
        <div id="experience" className="row cover">
            <h2 className="text-center">Experience</h2>
            <div className="container">
                <ul className="timeline">
                    <li>
                        <p className="timeline-date">2012 - 2015</p>
                        <div className="timeline-content">
                        <h3>PRINCE OF SONGKLA UNIVERSITY, PHUKET CAMPUS</h3>
                        <p>Technology and Environment (Information Technology) Majors </p>
                        <p> GPA: 2.97/4.00 </p>
                        </div>
                    </li>
                    <li>
                        <p className="timeline-date">2015</p>
                        <div className="timeline-content">
                        <h3>CDG Systems Ltd</h3>
                        <p>JAVA Programer(Cooperative education program)</p>
                        </div>
                    </li>
                    <li>
                        <p className="timeline-date">2016 ( 16 Jun - 28 Sep ) </p>
                        <div className="timeline-content">
                        <h3>IMT ASE Co., LTD.</h3>
                        <p>Web Developer (Full Stack) </p>
                        </div>
                    </li>
                    <li>
                        <p className="timeline-date"> ( 1 Oct 2016 - 1 March  2018)  </p>
                        <div className="timeline-content">
                        <h3>Jobbkk.com</h3>
                        <p>Web Programer (PHP, Codeigniter2) </p>
                        </div>
                    </li>
                    <li>
                        <p className="timeline-date">2018 ( 5 March ) - PRESENT </p>
                        <div className="timeline-content">
                        <h3>Nilecon (Thailand) Co., Ltd.</h3>
                        <p>Web Develop (PHP, Nodejs, Reactjs, Docker, Angular2) </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Experience;
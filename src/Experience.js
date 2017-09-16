import React, { Component } from 'react';


import './Timeline.css';

class Experience extends Component {
    render(){
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
                            <p className="timeline-date">2016 ( 1 Oct ) - PRESENT </p>
                            <div className="timeline-content">
                            <h3>Jobbkk.com</h3>
                            <p>Web Programer (PHP, Codeigniter2) </p>
                            </div>
                        </li>
                    </ul>
                    
                    {/* <div className="row portfolio-projects">
                        <div className="col-lg-6">
                        <div className="row"> 
                            <div className="col-sm-5 text-center">
                            <h4 className="portfolio-projects--title">Earth Quotes</h4>
                            <p className="portfolio-projects--desc">Random quotes shown over google earth images</p>
                            <p className="portfolio-projects--desc">Uses: Javascript, JQuery, Bootstrap</p>
                            <a className="btn btn-rounded portfolio-projects--btn" href="https://sonorangirl.github.io/Earth-Quotes/#" role="button">View Project</a>
                            </div>
                            <div className="col-sm-7 text-center">
                            <img className="portfolio-projects--image" src="https://sonorangirl.github.io/img/slice-quotes.png" />
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="row"> 
                            <div className="col-sm-5 text-center pull-right-sm">
                            <h4 className="portfolio-projects--title">Task Timer</h4>
                            <p className="portfolio-projects--desc">A Pomodoro clock timer with a task list integration</p>
                            <p className="portfolio-projects--desc">Uses: Javascript, JQuery, Bootstrap</p>
                            <a className="btn btn-rounded portfolio-projects--btn" href="https://sonorangirl.github.io/Task-Timer/" role="button">View Project</a>
                            </div>
                            <div className="col-sm-7 text-center pull-right-sm">
                            <img className="img-rounded portfolio-projects--image" src="https://sonorangirl.github.io/img/slice-task-timer.png" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row portfolio-projects"> 
                        <div className="col-lg-6"> 
                        <div className="row"> 
                            <div className="col-sm-5 text-center">
                            <h4 className="portfolio-projects--title">Whats the Weather</h4>
                            <p className="portfolio-projects--desc">A weather app to check current weather conditions.</p>
                            <p className="portfolio-projects--desc">Uses: Javascript, Jquery, APIs</p>
                            <a className="btn btn-rounded portfolio-projects--btn" href="https://sonorangirl.github.io/Weather/" role="button">View Project</a>
                            </div>
                            <div className="col-sm-7 text-center">
                            <img className="img-rounded portfolio-projects--image" src="https://sonorangirl.github.io/img/weather-slice.png" />
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="row"> 
                            <div className="col-sm-5 text-center pull-right-sm">
                            <h4 className="portfolio-projects--title">Simon Game</h4>
                            <p className="portfolio-projects--desc">A simple recreation of the 80s game Simon.</p>
                            <p className="portfolio-projects--desc">Uses: Javascript, Sass, JQuery</p>
                            <a className="btn btn-rounded portfolio-projects--btn" href="https://sonorangirl.github.io/Simon-Game/" role="button">View Project</a>
                            </div>
                            <div className="col-sm-7 text-center pull-right-sm">
                            <img className="img-rounded portfolio-projects--image" src="https://sonorangirl.github.io/img/slice-simon.png" />
                            </div>
                        </div>
                        </div>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Experience;
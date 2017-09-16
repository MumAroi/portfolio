import React, { Component } from 'react';

import './Bar_graphsfor_skills.css';

class Technology extends Component {
    render(){
        return(
            <div id="technology" className="row cover">
                <h2 className="text-center">Technology</h2>
                <div className="container">
                    <div className="base">
                        <section className="model-1">
                            <div className="graph">HTML5</div><span  className="tooltip">HTML5</span>
                        </section>
                        <section className="model-2">
                            <div className="graph">CSS3</div><span  className="tooltip">CSS3</span>
                        </section>
                        <section className="model-3">
                            <div className="graph">Javascript</div><span  className="tooltip">Javascript</span>
                        </section>
                        <section className="model-4">
                            <div className="graph">NodeJS</div><span  className="tooltip">NodeJS</span>
                        </section>
                        <section className="model-5">
                            <div className="graph">Java</div><span  className="tooltip">Java</span>
                        </section>
                        <section className="model-6">
                            <div className="graph">PHP</div><span  className="tooltip">PHP</span>
                        </section>
                        <section className="model-7">
                            <div className="graph">Git</div><span  className="tooltip">Git</span>
                        </section>
                        <section className="model-8">
                            <div className="graph">Android</div><span  className="tooltip">Android (learning in progress) </span>
                        </section>
                        <section className="model-9">
                            <div className="graph">React</div><span  className="tooltip">React (learning in progress) </span>
                        </section>
                        <section className="model-10">
                            <div className="graph">Codeigniter</div><span  className="tooltip">codeigniter</span>
                        </section>
                        <section className="model-11">
                            <div className="graph">Laravel</div><span  className="tooltip">Laravel (learning in progress) </span>
                        </section>
                        {/* <section className="model-3">
                            <div className="multi-graph">javaScript
                                <div data-name="jQuery" className="graph jQuery"> </div>
                                <div data-name="javaScript" className="graph javaScript"></div>
                            </div>
                        </section> */}
                    </div>
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

export default Technology;
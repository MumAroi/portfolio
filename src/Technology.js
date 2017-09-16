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
                </div>
          </div>
        );
    }
}

export default Technology;
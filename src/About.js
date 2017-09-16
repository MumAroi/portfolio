import React, { Component } from 'react';

import face from "./imgProfile.png";

class About extends Component {
    render(){
        return(
            <div id="about" className="row cover">
                <h2 className="text-center">About Me</h2>
                <div className="container">
                    <div className="col-md-12">
                        <img className="img-circle text-center profile-img" src={face} alt="imgProfile" />
                        <h4 className="text-center about-name">Paramas Waewsuwam</h4>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="text-right"><span className="font-weight-bold">Date of birth : </span></p>
                            </div>
                            <div className="col-md-6">
                                <p className="text-left">7 April 1994</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <p className="text-right"><span className="font-weight-bold">Age : </span></p>
                            </div>
                            <div className="col-md-6">
                                <p className="text-left"> 23 years old</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <p className="text-right"><span className="font-weight-bold">Height / weight : </span></p>
                            </div>
                            <div className="col-md-6">
                                <p className="text-left"> 175cm / 71kgs.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <p className="text-right"><span className="font-weight-bold">Religion : </span></p>
                            </div>
                            <div className="col-md-6">
                                <p className="text-left"> Buddhist</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <p className="text-right"><span className="font-weight-bold">Personality : </span></p>
                            </div>
                            <div className="col-md-6">
                                <p className="text-left"> Responsible, Friendly</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <p className="text-right"><span className="font-weight-bold">Language : </span></p>
                            </div>
                            <div className="col-md-6">
                                <p className="text-left"> Thai ( Native ) , English ( Intermediate )</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-md-6 text-center about-info">
                        <img className="img-circle text-center profile-img" src="https://sonorangirl.github.io/img/Square-Ireland.png" />
                        <p className="text-center">I'm a self taught web developer from Scottsdale, AZ. I'm currently learning Javascript development with FreeCodeCamp and Treehouse. I also have degrees in Biology and Sustainability so I can't wait till I get to the point where I can jump into the more interactive data visualizations and put what I'm learning to good use. But for now I'm having fun learning the basics! </p>
                    </div>
                    <div className="col-md-6 about-tools">
                        <p className="text-center">Here's a few of the tools I use</p>
                        <div className="col-xs-6">
                            <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Javascript</li>
                            <li>Bootstrap</li>
                            <li>Foundation</li>
                            </ul>
                        </div>
                        <div className="col-xs-6">
                            <ul>
                            <li>JQuery</li>
                            <li>Sass</li>
                            <li>Git</li>
                            <li>WordPress</li>
                            <li>PHP</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row break">
                        <div className="col-md-6 about-last">
                        <p className="text-center">Check out my latest projects <span className="glyphicon glyphicon-arrow-down"></span></p>
                        </div>
                    </div>
                </div>  */}
            </div>
        );
    }
}

export default About;
import React from 'react';
import logo from './logo.svg';
import "../src/components/Curtain/style.css";
import Curtain from './components/Curtain';
import "./App.css"

function Portfolio() {


    return (
        <div>
            <body class="bod">


                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="index.html">Home</a>
                    <a class="navbar-brand" href="Portfolio.html">Portfolio</a>
                    <a class="navbar-brand" href="contact.html">Contact</a>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                            </li>
                            <li id="nav-brand"></li>
                        </ul>

                    </div>
                </nav>

                <img src="images/TL_logo_2.jpg" class="logo" alt="TL Logo"></img>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">

                            <h1 class="empty"></h1>
                            <h3 class="header3">Web Development</h3>
                            <div class="container">
                                <div class="row">

                                    <div class="col-md-4">
                                        <a class="GM" href="https://microxgleek94.github.io/ColumbiaProject_-1/"><img src="images/Game_recommender.JPG"
                                            title="LinkedIn Profile" alt="My LinkedIn Profile" width="300" height="300" /></a>
                                        <h3>Game Recommender</h3>
                                        <li>An app that reccomends games for new and experienced gamers based off of user criteria.
                                        the app also gives news on specified games and even has a random selection generator.
                                        I was responsible for finding and calling api functions using Jquery.
                </li>
                                        <h4>HTML | JAVASCRIPT | CSS | jQuery</h4>
                                    </div>
                                    <div class="col-md-4">
                                        <a class="GM" href="https://tylerlibstag.github.io/day-planner/"><img src="images/day planner.JPG"
                                            title="LinkedIn Profile" alt="My LinkedIn Profile" width="300" height="300" /></a>
                                        <h3>Work Day Planner</h3>
                                        <li>Displays current day scheduling and allows users to create hourly events. Events are color-coded by time of day: past hour is in gray, current hour is in red, future hours are in green.
                </li>
                                        <h4>HTML | CSS | Bootstrap | Javascript | jQuery</h4>
                                    </div>
                                    <div class="col-md-4">
                                        <a class="GM" href="https://tylerlibstag.github.io/tylerlibstags_password_generator/"><img
                                            src="images/password_gen.JPG" title="password" alt="My LinkedIn Profile" width="300"
                                            height="300" /></a>
                                        <h3>Password Generator</h3>
                                        <li>An app that recommends a password based off of user criteria
                </li>
                                        <h4>HTML | JAVASCRIPT | CSS</h4>
                                    </div>


                                    <div class="col-md-4">
                                        <a class="GM" href="https://project2-cinder.herokuapp.com/"><img src="images/logo4-charcoal.jpg"
                                            title="Cinder" alt="Cinder" width="300" height="300" /></a>
                                        <h3>Cinder</h3>
                                        <li>An app that allows Bootcamp,university, or students in education to keep in contact with each other.
                                        the users are also able to post old projects and current skills they have that may be relevant to future projects.
                                        My responsibilites include, using jQuery to create a location recommender, and also routing the pages to connect
                                        with each other using express.
                </li>
                                        <h4>HTML | CSS | Javascript | Node.js | Express.js | mySQL| jQuery</h4>
                                    </div>
                                    <div class="col-md-4">
                                        <a class="GM" href=" https://sleepy-cove-40896.herokuapp.com/?id=5f53d5496a2fac001768833c"><img src="images/Fitness_tracker.JPG"
                                            title="WorkOutTracker" alt="Workouttracker" width="300" height="300" /></a>
                                        <h3>Fitness tracker</h3>
                                        <li>This app allows the user to record their excercises. The user is allows
                                        given an option to continue an old excercise while also checking the stats of their weekly progress.
                </li>
                                        <h4>HTML | CSS | Javascript | Node.js | Express.js | MongoDB</h4>
                                    </div>
                                    <div class="col-md-4">
                                        <a class="GM" href="https://tylerlibstag.github.io/Weather/"><img src="images/weather.JPG"
                                            title="WeatherApp" alt="Weather" width="300" height="300" /></a>
                                        <h3>Weather App</h3>
                                        <li>An app in which the user provides a city name
                                        which then gives back a 5 day forcast of the weather.
                </li>
                                        <h4>HTML | CSS | Javascript | jQuery</h4>
                                    </div>


                                </div>

                            </div>


                        </div>
                    </div>


           </body>
        </div>

    );
}

export default App;
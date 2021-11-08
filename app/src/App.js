import React from "react";
import Splash from "./components/Splash";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Skills from "./components/Skills";
import { BrowserRouter as Router } from "react-router-dom";

const projects = [
  {
    title: "My Liquor Cabinet",
    divID: "my-liquor-cabinet",
    imageSource: "https://github.com/kevinchewning/My-Liquor-Cabinet/blob/main/My-Liquor-Cabinet-screenshot.png?raw=true",
    imageAlt: "My Liquor Cabinet Website Image",
    description: "Worked on a collaborative project to develop an app for amateur mixologists. As a user, we wanted to give the ability to save a list of ingredients they have at home and look up cocktails available to them. The app features the ability to search by exact or partials matches.",
    repositoryURL: "https://github.com/kevinchewning/My-Liquor-Cabinet",
    deploymentURL: "https://kevinchewning.github.io/My-Liquor-Cabinet/"
  },
  {
    title: "Tech Blog",
    divID: "tech-blog",
    imageSource: "images/tech-blog.png",
    imageAlt: "Tech Blog Website",
    description: "Writing about tech can be just as important as making it. I wanted to build a CMS-style blog site where developers can publish their blog posts and comment on other posts as well. The app follows the MVC paradigm, utilizes Handlebars.js as the templating language, Sequelize as the ORM, and Express-Session to handle authentication.",
    repositoryURL: "https://github.com/kevinchewning/Tech-Blog",
    deploymentURL: "https://limitless-retreat-20504.herokuapp.com"
  },
  {
    title: "Minesweeper",
    divID: "minesweeper",
    imageSource: "images/minesweeper.png",
    imageAlt: "Minesweeper Website",
    description: "The ability to learn new libraries and collaborate with others are essential skills of any developer. For this project, we wanted to do something fun! I worked with some fellow developers to make a functioning Minesweeper game with the Phaser library, complete with user authentication and leaderboards.",
    repositoryURL: "https://github.com/kevinchewning/Minesweeper-P2",
    deploymentURL: "https://intense-lake-83506.herokuapp.com"
  },
  {
    title: "Workout Tracker",
    divID: "workout-tracker",
    imageSource: "https://github.com/kevinchewning/Workout-Tracker/blob/main/workout-tracker-screenshot.png?raw=true",
    imageAlt: "Workout Tracking App",
    description: "A fitness tracking app that saves user workout data in a NoSQL database with MongoDB and renders the data with ChartJS.",
    repositoryURL: "https://github.com/kevinchewning/Workout-Tracker",
    deploymentURL: "https://young-thicket-00237.herokuapp.com/"
  },
  {
    title: "E-Commere Backend",
    divID: "e-commerce-backend",
    imageSource: "images/e-commerce-back-end.png",
    imageAlt: "E-Commerce API",
    description: "E-Commerce is ther largest sector of the electronics industry, generating an estimated $29 trillion in 2019. Understanding the fundamental architecture of these platforms is incredibly beneficial to me as a developer so I built a back end for an e-commerce site with MySQL and the Sequelize package.",
    repositoryURL: "https://github.com/kevinchewning/E-Commerce-Back-End",
  },
  {
    title: "Weather Dashboard",
    divID: "weather-dashboard",
    imageSource: "https://github.com/kevinchewning/Weather-Dashboard/blob/main/wd-screenshot.png?raw=true",
    imageAlt: "Weather Dashboard Website",
    description: "As a traveler, you want to know the weather you may encounter at your destination. I wanted to develop a simple application using server-side API's that allows a user to search any city and be given a small dashboard with the information they need.",
    repositoryURL: "https://github.com/kevinchewning/Weather-Dashboard",
    deploymentURL: "https://kevinchewning.github.io/Weather-Dashboard/"
  },
];

function App() {
  return (
    <Router>
      <Splash backgroundClass="computer-bg" title="Kevin Chewning" subtitle="Web Design & Development" link="header"/>
      <Nav projects={projects}/>
      <AboutMe/>
      <Skills/>
      <Splash backgroundClass="code-bg" title="Projects" link={projects[0].divID}/>
      <div className="columns is-multi-line m-4 is-flex-wrap-wrap">
        <Projects projects={projects}/>
      </div>
      <ContactMe/>
    </Router>
  );
}

export default App;

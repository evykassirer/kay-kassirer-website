const React = require('react');
const ReactDOM = require('react-dom');
const { Router, Route, Link, browserHistory } = require('react-router')

const production = process.env.NODE_ENV === "production";

const HomePage = require('./components/homepage.jsx');
const About = require('./components/about.jsx');
const Shows = require('./components/shows.jsx');
const Poetry = require('./components/poetry.jsx');
const Merch = require('./components/merch.jsx');
const Gallery = require('./components/gallery.jsx');

ReactDOM.render((
  <Router history={browserHistory}>
    <Route name="home" path="/" component={HomePage}/>
    <Route name="about" path="/about" component={About}/>
    <Route name="shows" path="/shows" component={Shows}/>
    <Route name="poetry" path="/poetry" component={Poetry}/>
    <Route name="youtube" path="/youtube" component={Poetry}/>
    <Route name="merch" path="/merch" component={Merch}/>
    <Route name="gallery" path="/gallery" component={Gallery}/>
    <Route name="default" path="*" component={HomePage}/>
  </Router>
), document.getElementById("content"))

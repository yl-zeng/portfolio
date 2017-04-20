var React = require('react');
var ReactDOM = require('react-dom');
var {Route,Router,IndexRoute,hashHistory} = require('react-router');
var Main = require("Main");
var About = require("About");
var Home = require("Home");

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
//import 'font-awesome/css/font-awesome.min.css';

require("style!css!sass!./style/app.scss");
//require("style!css!./style/about.css");



ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <IndexRoute component={Home}/>
    </Route>
  </Router>,
  document.getElementById("app")
);

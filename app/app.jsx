var React = require('react');
var ReactDOM = require('react-dom');
var {Route,Router,IndexRoute,hashHistory} = require('react-router');
var Main = require("Main");
var Home = require("Home");
var Page = require("Page");

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import 'font-awesome/css/font-awesome.min.css';

require("style!css!sass!./style/app.scss");
require("./style/about.css");
require("./style/skill.css");


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="home" component={Home}/>
      <IndexRoute component={Page}/>
    </Route>
  </Router>,
  document.getElementById("app")
);

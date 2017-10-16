var React = require('react');
var ReactDOM = require('react-dom');
var {Route,Router,IndexRoute,hashHistory} = require('react-router');
import Main from "Main";
import Home from "Home";
import IndexPage from "IndexPage";
import Contact from "Contact";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import "sweetalert/dist/sweetalert.css";

require("./style/app.css");
require("./style/about.css");
require("./style/skill.css");
require("./style/folio.css");
require("./style/contact.css");
require("./style/footer.css");


ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="home" component={Home}/>
        <Route path="contact" component={Contact}/>
        <IndexRoute component={IndexPage}/>
      </Route>
    </Router>,
  document.getElementById("app")
);

var React = require('react');
var ReactDOM = require('react-dom');
var {Route,Router,IndexRoute,hashHistory} = require('react-router');
import Main from "Components/Main.jsx";
import Home from "Components/Home.jsx";
import IndexPage from "Components/IndexPage.jsx";
import Contact from "Components/Contact.jsx";


import 'animate.css/animate.min.css';
import "sweetalert/dist/sweetalert.css";

import "Styles/indexpage.css";
import "Styles/nav.css";
import "Styles/about.css";
import "Styles/skill.css";
import "Styles/folio.css";
import "Styles/contact.css";
import "Styles/footer.css";


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

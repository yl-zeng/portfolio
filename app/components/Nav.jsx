var React = require("react");
var {Link,IndexLink} = require("react-router");


var Nav = React.createClass({

  render: function(){
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">YUNLIN's PORTFOLIO</a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/home" className="nav2-link-title" activeClassName="active" activeStyle={{fontWeight:"bold"}}>Home</Link></li>
            <li><Link to="/contact" className="nav2-link-title" activeClassName="active" activeStyle={{fontWeight:"bold"}}>Contact</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
})

module.exports = Nav;

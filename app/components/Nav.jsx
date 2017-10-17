var React = require("react");
var {Link,IndexLink} = require("react-router");


export default class Nav extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse" role="button">
                <span className="sr-only">Toggle Navigation</span>

                <span className="icon-bar"></span>

                <span className="icon-bar"></span>

                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/">YUNLIN's PORTFOLIO</a>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/home" className="nav2-link-title" activeClassName="active" activeStyle={{fontWeight:"bold"}}>HOME</Link></li>
                <li><Link to="/contact" className="nav2-link-title" activeClassName="active" activeStyle={{fontWeight:"bold"}}>CONTACT</Link></li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}

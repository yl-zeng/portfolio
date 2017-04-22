var React = require("React");

var Footer = (props) =>{
  return (
      <nav id="2-nav-bar" className="navbar navbar-inverse navbar-fixed-bottom">
          <div className="container-fluid">

            <div className="navbar-header">
              <i className="navbar-brand fa fa-linkedin animated flip" href="#twoam"></i>
            </div>

            <div className="collapse navbar-collapse" id="navbar-collapse-1">
              <ul className="nav navbar-nav navbar-left">
                <li><a href="#about">About</a></li>
                <li><a href="#skill">Skill</a></li>
                <li><a href="#folio">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
  );
};

module.exports = Footer;

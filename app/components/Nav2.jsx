var React = require("React");



var Nav2 = (props) =>{
  return (
      <nav id="2-nav-bar" className="navbar navbar-inverse navbar-fixed-bottom">
          <div className="container-fluid">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                      </button>
              <a className="navbar-brand animated flip" href="#twoam"> ninja</a>
            </div>


            <div className="collapse navbar-collapse" id="navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>


  );
};

module.exports = Nav2;

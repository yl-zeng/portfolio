var React = require("React");
var ReactDOM = require("react-dom");
var ReactDOMServer = require("react-dom/server");

var Nav2 = React.createClass({

  handleClick1: function(e){
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $("#about").offset().top+50
    }, 750);
  },
  handleClick2: function(e){
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $("#skill").offset().top+50
    }, 750);
  },
  handleClick3: function(e){
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $("#folio").offset().top+50
    }, 750);
  },

  render: function(){
    return (
        <nav id="2-nav-bar" className="navbar navbar-inverse navbar-fixed-bottom" role="navigation">
            <div className="container-fluid">

              <div className="navbar-header">
                <i className="navbar-brand fa fa-linkedin animated flip" href="#twoam"></i>
              </div>

              <div className="collapse navbar-collapse" id="navbar-collapse-1">
                <ul className="nav navbar-nav navbar-center js-nav">
                  <li><a href="#about" className="nav2-link-title" onClick={this.handleClick1}>About</a></li>
                  <li><a href="#skill" className="nav2-link-title" onClick={this.handleClick2}>Skill</a></li>
                  <li><a href="#folio" className="nav2-link-title" onClick={this.handleClick3}>Folio</a></li>
                </ul>
              </div>
            </div>
          </nav>

    );

  }
});

module.exports = Nav2;

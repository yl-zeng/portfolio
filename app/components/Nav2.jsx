var React = require("React");
var ReactDOM = require("react-dom");

export default class Nav2 extends React.Component {

  handleClick1(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $("#about").offset().top+50
    }, 750);
  }

  handleClick2(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $("#skill").offset().top+50
    }, 750);
  }

  handleClick3(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $("#folio").offset().top+50
    }, 750);
  }

  render() {
    return (
        <nav id="2-nav-bar" className="navbar navbar-inverse navbar-fixed-bottom" role="navigation">
            <div className="container-fluid">

              <div className="navbar-header">
                <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse" role="button">
                  <span className="sr-only">Toggle Navigation</span>

                  <span className="icon-bar"></span>

                  <span className="icon-bar"></span>

                  <span className="icon-bar"></span>
                </button>
                <a href="https://github.com/yl-zeng/" target="_block"><i className="navbar-brand fa fa-github animated flip"></i></a>
              </div>

              <div className="collapse navbar-collapse">
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
}

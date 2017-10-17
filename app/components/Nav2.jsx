var React = require("React");
var ReactDOM = require("react-dom");

export default class Nav2 extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClick1(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $("#about").offset().top
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
        <nav id="bottom-nav" className="navbar navbar-inverse navbar-fixed-bottom" role="navigation">
            <div className="container-fluid">
              <ul className="nav navbar-nav navbar-center js-nav">
                <li><a href="#about" className="nav2-link-title" onClick={this.handleClick1}>About</a></li>
                <li><a href="#skill" className="nav2-link-title" onClick={this.handleClick2}>Skill</a></li>
                <li><a href="#folio" className="nav2-link-title" onClick={this.handleClick3}>Folio</a></li>
              </ul>
            </div>
          </nav>

    );

  }
}

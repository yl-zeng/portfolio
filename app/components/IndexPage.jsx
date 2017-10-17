var React = require("react");
var {Link} = require('react-router');
import Video from "Components/Video.jsx";
import Footer from "Components/Footer.jsx";

export default class IndexPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="section-main" className="container-fluid">
            <div className="row">
              <Video/>
            </div>
            <Footer></Footer>
            <div id="Bigin" className="animated infinite slideInDown">
              <Link to="/home" style={{color:"white"}}><i className="fa fa-angle-double-down fa-5x"></i></Link>
            </div>
            <div className="row">
              <h1 className="heading">Technology doesn't change the world people do.</h1>
            </div>
        </div>

      </div>
    );
  }
}

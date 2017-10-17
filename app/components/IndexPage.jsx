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
            <div className="row" style={{"display":"relative"}}>
              <Video/>
              <div className="">
                <div className="index-left animated infinite slideInRight">
                  <i className="fa fa-angle-double-right fa-5x"></i>
                </div>
                <Link to="/home" style={{color:"white"}}>
                  <button className="index-mid btn btn-primary">LEARN MORE</button>
                </Link>
                <div className="index-right animated infinite slideInLeft">
                  <i className="fa fa-angle-double-left fa-5x"></i>
                </div>
              </div>
            </div>
            <Footer></Footer>
            <div className="row">
              <h1 className="heading">Talk is cheap, show me the code</h1>
            </div>
            <div className="row">
              <p className="heading2">Experienced in web development, enjoyed learning and working with cutting-edge technology. Mainly focus on Java, JavaScript and Node.js. A fast learner, a team player.</p>
            </div>
        </div>

      </div>
    );
  }
}

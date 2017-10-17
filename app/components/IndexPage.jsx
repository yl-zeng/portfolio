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
            <div className="row video-wrapper" style={{"display":"relative"}}>
              <div className="cell">
                <Video poster="image/b.jpg" autoplay muted loop/>
                <img src="image/b.jpg" id="video-placeholder"/>
              </div>
              <div className="hero">
                <div className="hero-content">
                  <h1 className="heading">Talk is cheap, show me the code</h1>
                  <p className="heading2">Experienced in web development, enjoyed learning and working with cutting-edge
                    technology. Mainly focus on Java, JavaScript and Node.js. A fast learner, a team player.</p>
                  <div className="heading3">
                    <i className="index-left animated infinite slideInRight fa fa-angle-double-right fa-5x"></i>
                      <Link to="/home" style={{color:"white"}} className="index-mid">
                        <button className="btn-learn btn btn-primary">
                          LEARN MORE
                        </button>
                      </Link>
                    <i className="index-right animated infinite slideInLeft fa fa-angle-double-left fa-5x"></i>
                  </div>
                </div>
              </div>
            </div>
            <Footer></Footer>
        </div>

      </div>
    );
  }
}

var React = require("react");
var {Link} = require('react-router');
import Video from "Video";


export default class IndexPage extends React.Component {

  render() {
    return (
      <div>
        <div id="section-main" className="container">
            <Video/>
            <div id="Bigin" className="animated infinite slideInDown">
              <Link to="/home" style={{color:"white"}}><i className="fa fa-angle-double-down fa-5x"></i></Link>
            </div>
        </div>
        <h1 className="heading">Technology doesn't change the world people do.</h1>
      </div>
    );
  }
}

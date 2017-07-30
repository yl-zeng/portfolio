var React = require("react");
var {Link} = require('react-router');

var IndexPage = React.createClass({

  componentDidMount(){
    document.getElementById('vid').play();
  },

  render: function(){
    return (

        <div id="section-main" className="container">
          <video id="vid" playsinline muted loop>
            <source src="http://thenewcode.com/assets/videos/polina.mp4" type="video/mp4"/>
          </video>
            <h1 className="text-center heading">Technology doesn't change the world <br/><br/> people do.</h1>
            <div id="Bigin" className="animated infinite slideInDown">
              <Link to="/home" style={{color:"white"}}><i className="fa fa-angle-double-down fa-5x"></i></Link>
            </div>
        </div>
    );
  }
});


module.exports = IndexPage;

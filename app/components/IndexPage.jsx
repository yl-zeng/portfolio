var React = require("react");
var {Link} = require('react-router');
var Video = require("Video");


var IndexPage = React.createClass({

  render: function(){
    return (
        <div id="section-main" className="container">
            <Video/>
            <h1 className="text-center heading">Technology doesn't change the world <br/><br/> people do.</h1>
            <div id="Bigin" className="animated infinite slideInDown">
              <Link to="/home" style={{color:"white"}}><i className="fa fa-angle-double-down fa-5x"></i></Link>
            </div>
        </div>
    );
  }
});


module.exports = IndexPage;

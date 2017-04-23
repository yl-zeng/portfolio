var React = require("react");
var {Link} = require('react-router');

var IndexPage = React.createClass({
  render: function(){
    return (
      <div>
        <div id="section-main" >
          <h1 className="text-center heading">Technology doesn't change world <br/><br/> people do.</h1>
            <div id="Big-in" className="animated infinite slideInDown">
              <Link to="/home" style={{color:"white"}}><i className="fa fa-angle-double-down fa-5x"></i></Link>
            </div>
        </div>
      </div>
    )
  }
});


module.exports = IndexPage;

var React = require("react");
var {Link} = require("react-router")


var Video = React.createClass({

  render: function(){
    return (
      <div className="page">
        <video id="vid" src="/video/video.mp4"
          preload="auto" autoPlay muted loop/>
      </div>
    );
  }
});


module.exports = Video;

var React = require("react");
var {Link} = require("react-router")


var Video = React.createClass({

  handleEnd(){
    this.props.onEnd();
  },


  componentDidMount(){
    document.getElementById("vid").load();
  },


  render: function(){
    return (
      <div>
        <video id="vid" src={"/video/"+ this.props.count + ".mp4"} autoPlay muted onEnded={this.handleEnd}/>
      </div>
    );
  }
});


module.exports = Video;

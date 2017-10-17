var React = require("react");
var {Link} = require("react-router")


export default class Video extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page">
        <video id="vid" src="/video/video.mp4"
          preload="auto" autoPlay muted loop/>
      </div>
    );
  }
}

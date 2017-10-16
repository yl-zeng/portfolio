var React = require("React");
import Nav from "Components/Nav.jsx";


export default class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Nav/>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }

}

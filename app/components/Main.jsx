var React = require("React");
var Nav = require("Nav");


export default class Main extends React.Component {

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

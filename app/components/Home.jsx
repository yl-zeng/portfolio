var React = require("React");
import Nav2 from "Nav2";
import About from "About";
import Skill from "Skill";
import Folio from "Folio";


export default class Home extends React.Component {

  componentDidMount() {
    $(window).scrollTop(0);
  }

  render() {
    return (
      <div>
        <Nav2></Nav2>
        <About></About>
        <Skill></Skill>
        <Folio></Folio>
      </div>
    );
  }

}

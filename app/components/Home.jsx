var React = require("React");
import Nav2 from "Components/Nav2.jsx";
import About from "Components/About.jsx";
import Skill from "Components/Skill.jsx";
import Folio from "Components/Folio.jsx";


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

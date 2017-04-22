var React = require("React");
var Nav2 = require("Nav2");
var About = require("About");
var Skill = require("Skill");
var Folio = require("Folio");


var Home = (props) =>{


  return (
    <div>
      <Nav2></Nav2>
      <About></About>
      <Skill></Skill>
      <Folio></Folio>
    </div>
  );
};

module.exports = Home;

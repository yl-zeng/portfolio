var React = require("React");
var Nav = require("Nav");


var Main = (props) =>{
  return (
    <div>
      <Nav/>
      <div>
        {props.children}
      </div>
    </div>
  );
}

module.exports = Main;

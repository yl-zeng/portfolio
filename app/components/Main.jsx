var React = require("React");
var Nav = require("Nav");


var Main = (props) =>{
  return (
    <div>
      <div>
        <Nav/>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  );
}

module.exports = Main;

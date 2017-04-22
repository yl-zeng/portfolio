var React = require("React");


var Skill = (props) =>{
  return (
    <div>
      <section id="skill" className="sec-skill section">
        <div className="container">
          <h1 className="text-center">SKILLS</h1>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <img className="img-responsive" src="image/html5.png"></img>
            </div>
            <div className="col-sm-3">
              <img className="img-responsive" src="image/css3.png"></img>
            </div>
            <div className="col-sm-3">
              <img className="img-responsive" src="image/js.png"></img>
            </div>
            <div className="col-sm-3">
              <img className="img-responsive" src="image/mongodb.png"></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

module.exports = Skill;

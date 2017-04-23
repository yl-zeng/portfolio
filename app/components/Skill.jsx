var React = require("React");


var Skill = (props) =>{
  return (
    <div>
      <section id="skill" className="sec-skill">
        <div className="container">
          <h1 className="text-center">SKILLS</h1>
          <hr />
          <div className="row">
            <div className="col-sm-2 col-sm-offset-2">
              <img className="img-responsive " src="image/html.png"></img>
            </div>
            <div className="col-sm-2">
              <img className="img-responsive" src="image/css.png"></img>
            </div>
            <div className="col-sm-2">
              <img className="img-responsive" src="image/js.png"></img>
            </div>
            <div className="col-sm-2">
              <img className="img-responsive" src="image/SQL.png"></img>
            </div>
          </div>
          <br/>
          <br/>
          <div className="row">
            <div className="col-sm-2 col-sm-offset-2">
              <img className="img-responsive " src="image/react.png"></img>
            </div>
            <div className="col-sm-2">
              <img className="img-responsive" src="image/node.png"></img>
            </div>
            <div className="col-sm-2">
              <img className="img-responsive" src="image/mongodb.png"></img>
            </div>
            <div className="col-sm-2">
              <img className="img-responsive" src="image/git.png"></img>
            </div>
          </div>
          <br/>
          <br/>
          <div className="row">
            <div className="col-sm-2 col-sm-offset-2">
              <img className="img-responsive " src="image/java.png"></img>
            </div>
            <div className="col-sm-2">
              <img className="img-responsive" src="image/android.png"></img>
            </div>
            <div className="col-sm-2">
              <img className="img-responsive" src="image/bootstrap.svg"></img>
            </div>
            <div className="col-sm-2">
              <img className="img-responsive" src="image/npm.png"></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

module.exports = Skill;

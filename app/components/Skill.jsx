var React = require("React");


var Skill = (props) =>{
  return (
    <div>
      <section id="skill" className="sec-skill">
        <div className="container">
          <h1 className="text-center">SKILLS</h1>
          <hr />
          <div className="row">
            <div className="col-xs-3 col-sm-2 col-sm-offset-2">
              <img className="img-responsive " src="image/java.png"></img>
            </div>
            <div className="col-xs-3 col-sm-2">
              <img className="img-responsive" src="image/python.png"></img>
            </div>
            <div className="col-xs-3 col-sm-2">
              <img className="img-responsive" src="image/js.png"></img>
            </div>
            <div className="col-xs-3 col-sm-2">
              <img className="img-responsive" src="image/typescript.png"></img>
            </div>
          </div>
          <br/>
          <br/>
          <div className="row">
            <div className="col-xs-3 col-sm-2 col-sm-offset-2">
              <img className="img-responsive " src="image/react.png"></img>
            </div>
            <div className="col-xs-3 col-sm-2">
              <img className="img-responsive " src="image/angular.png"></img>
            </div>
            <div className="col-xs-3 col-sm-2">
              <img className="img-responsive" src="image/node.png"></img>
            </div>
            <div className="col-xs-3 col-sm-2">
              <img className="img-responsive" src="image/mongodb.png"></img>
            </div>
          </div>
          <br/>
          <br/>
          <div className="row">
            <div className="col-xs-3 col-sm-2 col-sm-offset-2">
              <img className="img-responsive " src="image/spring.png"></img>
            </div>
            <div className="col-xs-3 col-sm-2">
              <img className="img-responsive" src="image/hibernate.png"></img>
            </div>
            <div className="col-xs-3 col-sm-2">
              <img className="img-responsive" src="image/mysql.svg"></img>
            </div>
            <div className="col-xs-3 col-sm-2">
              <img className="img-responsive" src="image/jsp.svg"></img>
            </div>
          </div>
          <br/>
          <br/>
          <div className="row">
            <div className="col-xs-3 col-sm-2 col-sm-offset-2">
              <img className="img-responsive " src="image/html.png"></img>
            </div>
            <div className="col-xs-3 col-sm-2">
              <img className="img-responsive" src="image/css.png"></img>
            </div>
            <div className="col-xs-3 col-sm-2">
              <img className="img-responsive" src="image/sass.png"></img>
            </div>
            <div className="col-xs-3 col-sm-2">
              <img className="img-responsive" src="image/bootstrap.svg"></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

module.exports = Skill;

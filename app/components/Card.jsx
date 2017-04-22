var React = require("react");


var Card = React.createClass({
  getDefaultProps: function(){
    return {
      projectData: {
        title: 'Quotes',
        text: 'HI',

        image: ['http://2am.ninja/img/quotes.jpg'],
        site: [
          ['CodePen', 'fa-codepen', 'http://s.codepen.io/MutantSpore/debug/dojjre'],
          ['Live Site', 'fa-link', 'http://2am.ninja/quotes/']
        ]
      }
    }
  },

  getInitialState: function(){
    return{
      flip:"",
    }
  },

  handleClick: function(e){
    e.preventDefault();
    //alert("this LInk is clicked");
    if(this.state.flip === ""){
      this.setState({
        flip:"flipped"
      });
    }else{
      this.setState({
        flip:""
      });
    }

  },
  render: function (){
    var project = this.props.projectData;

    return (
      <div className="col-sm-6 col-md-4">
        <div className={"card effect_click " + this.state.flip} onClick={this.handleClick}>
          <div className="card_front">
            <figure>
              <img className="img-responsive" src={project.image[0]}/>
              <figcaption className="project-title">{project.title}</figcaption>
            </figure>
          </div>
          <div className="card_back">
            <figure>
              <div className="project-title">{project.title}</div>
              <figcaption>
                <div className="project-body">{project.text}</div>
                <div>
                  <a data-toggle="tooltip" title={project.site[0][0]} data-placement="top" href={project.site[0][2]} target="_blank" className="btn btn-primary btn-lg btn-circle btn-lnk btn-lnk0">
                    <i className={"fa " + project.site[0][1]}  aria-hidden="true"></i>
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Card;

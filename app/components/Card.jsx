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

  componentDidMount: function(){
    $('.js-toggle1').tooltip({title:this.props.projectData.site[0][0], placement:"top"});
    $('.js-toggle2').tooltip({title:this.props.projectData.site[1][0], placement:"top"});
  },

  getInitialState: function(){
    return{
      flip:"",
    }
  },

  handleClickFlip: function(e){
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
  handleClickLink0:function(e){
    e.preventDefault();
    window.open(this.props.projectData.site[0][2]);
  },
  handleClickLink1:function(e){
    e.preventDefault();
    window.open(this.props.projectData.site[1][2]);
  },
  render: function (){
    var project = this.props.projectData;

    return (
      <div className="col-sm-6 col-md-4">
        <div className={"card effect_click " + this.state.flip} onClick={this.handleClickFlip}>
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
                  <a onClick={this.handleClickLink0} className="js-toggle1 btn btn-primary btn-lg btn-circle btn-lnk btn-lnk0">
                    <i className={"fa " + project.site[0][1]}  aria-hidden="true"></i>
                  </a>
                  <a onClick={this.handleClickLink1} className="js-toggle2 btn btn-primary btn-lg btn-circle btn-lnk btn-lnk1">
                    <i className={"fa " + project.site[1][1]}  aria-hidden="true"></i>
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

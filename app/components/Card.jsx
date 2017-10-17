var React = require("react");


export default class Card extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      flip: ""
    };
  }

  componentDidMount() {
    $('.js-toggle').tooltip();
  }

  handleClickFlip = (e) => {
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
  }

  handleClickLink0 = (e) => {
    e.preventDefault();
    window.open(this.props.projectData.site[0][2]);
  }

  handleClickLink1 = (e) => {
    e.preventDefault();
    window.open(this.props.projectData.site[1][2]);
  }

  render() {
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
                  <a onClick={this.handleClickLink0} title={project.site[0][0]} data-placement="top" className="js-toggle btn btn-primary btn-lg btn-circle btn-lnk btn-lnk0">
                    <i className={"fa " + project.site[0][1]}  aria-hidden="true"></i>
                  </a>
                  <a onClick={this.handleClickLink1} title={project.site[1][0]} data-placement="top" className="js-toggle btn btn-primary btn-lg btn-circle btn-lnk btn-lnk1">
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
};

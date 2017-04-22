var React = require("react");


var Folio = React.createClass({

  render: function(){
    var project = {
      title: 'Quotes',
      text: 'HI',

      image: ['http://2am.ninja/img/quotes.jpg'],
      site: [
        ['CodePen', 'fa-codepen', 'http://s.codepen.io/MutantSpore/debug/dojjre'],
        ['Live Site', 'fa-link', 'http://2am.ninja/quotes/']
      ]
    };

    return (
      <div>
        <section id="folio" className="sec-folio folio">
          <div className="container">
            <h1 className="text-center">FOLIO</h1>
            <hr />
            <div className="row" id="theProjects">
              <div className="col-sm-6 col-md-4">
                <div className="card effect_click">
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
                            <i className="fa ' + project.site[0][1] + '" aria-hidden="true"></i>
                          </a>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
});


module.exports = Folio;

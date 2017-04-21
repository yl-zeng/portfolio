var React = require("React");


var Skill = (props) =>{
  return (
    <div>
      <section id="services" className="sec-services">
        <div className="container">
          <h1>Services</h1>
          <hr />
          <div className="row">
            <div className="col-sm-4">
              <i className="fa fa-4x fa-paint-brush"></i>

              <h2 className="h3">Beautiful Design</h2>

              <p>Every website is beautiful, unique and tailored to suit your needs and requirements.</p>
            </div>

            <div className="col-sm-4">
              <i className="fa fa-4x fa-code"></i>

              <h2 className="h3">Clean Code</h2>

              <p>All websites are written in valid and clean HTML5 / CSS3 &amp; JavaScript (jQuery).</p>
            </div>

            <div className="col-sm-4">
              <i className="fa fa-4x fa-tablet"></i>

              <h2 className="h3">Always Responsive</h2>

              <p>All websites are responsive. They will look great on desktop, tablets and mobile phones too.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

module.exports = Skill;

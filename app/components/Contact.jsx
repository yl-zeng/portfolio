var React = require("react");
var Footer = require("Footer");

var Contact = React.createClass({
  render: function (){
    return (
      <div>
        <section id="contact" className="sec-contact">
          <div className="container">
            <h1>Hire me</h1>
            <hr />
            <div className="row">
              <div className="col-sm-4 col-sm-offset-4">
                <form className="center-block" action="#" method="post">
                  <div className="form-group">
                    <label className="sr-only" for="inputName">Full name</label>
                    <input id="inputName" className="form-control" type="text" placeholder="Adam Smith" required />
                  </div>
                  <div className="form-group">
                    <label for="inputMail" className="sr-only">Email Address</label>

                    <input id="inputMail" className="form-control" type="email" placeholder="adam.smith@mail.com" required />
                  </div>

                  <div className="form-group">
                    <label for="inputMessage" className="sr-only">Your Message</label>

                    <textarea id="inputMessage" className="form-control" name="message" cols="30" rows="8" required></textarea>
                  </div>

                  <div className="form-group">
                    <button className="btn btn-default center-block" type="submit" value="Hire me">Hire me</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    );
  }
});



module.exports = Contact;

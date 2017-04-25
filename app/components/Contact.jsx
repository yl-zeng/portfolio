var React = require("react");
var Footer = require("Footer");

var swal = require('sweetalert');


var Contact = React.createClass({
  handleSubmit:function(e){
    e.preventDefault();
    swal({
      title: "",
      text: 'I have received your message, I will contact with u soon.',
      type:"success"
    });
    this.sendFormData({
      name:this.refs.name.value,
      email:this.refs.mail.value,
      text:this.refs.text.value
    });
    this.refs.name.value = "";
    this.refs.mail.value = "";
    this.refs.text.value = "";
  },

  sendFormData:function(data){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'send', true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send(`name=${data.name}&email=${data.email}&text=${data.text}`);
  },


  render: function (){
    return (
      <div>
        <section id="contact" className="sec-contact">
          <div className="container">
            <h1>Contact me</h1>
            <hr />
            <div className="row">
              <div className="col-sm-4 col-sm-offset-4">
                <form className="center-block"  onSubmit={this.handleSubmit} >
                  <div className="form-group">
                    <label className="sr-only" for="inputName">Full name</label>
                    <input id="inputName" ref="name" className="form-control" type="text" placeholder="Yunlin Zeng" required />
                  </div>
                  <div className="form-group">
                    <label for="inputMail" className="sr-only">Email Address</label>

                    <input id="inputMail" ref="mail" className="form-control" type="email" placeholder="ylinzeng69@gmail.com" required />
                  </div>

                  <div className="form-group">
                    <label for="inputMessage" className="sr-only">Your Message</label>

                    <textarea id="inputMessage" ref="text" className="form-control" name="message" cols="30" rows="8" required></textarea>
                  </div>

                  <div className="form-group">
                    <button className="btn btn-default center-block" type="submit">Submit</button>
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

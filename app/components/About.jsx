var React = require("react");
var {Link} = require("react-router")

var swal = require('sweetalert');

var About = React.createClass({


  handleClick:function(e){
    e.preventDefault();
    swal({
      title: "",
      text: "<div className=\"text-center\"><iframe src=\"https://drive.google.com/file/d/0B1B6d6uqGpUZdUlrRlVtY1VjNFk/preview\" width=\"700px\" height=\"480px\" ></div>",
      customClass: "resumeWindow",
      html:true,
      allowOutsideClick: true
    });
  },


  render: function(){
    return (
        <section id="about" className="sec-about">
          <div className="container">
            <h1 className="text-center">ABOUT ME</h1>
            <hr />
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <p>Hi all! I am Yunlin, a recent graduate with Masters in Computer Engineering.</p>
                <p>I am experienced with web development and enjoy working with cutting-edge technology. I am a fast learner and self-starter who can combine knowledge learned from university
                  with frameworks into real product! </p>
                <p>You can grab my <a onClick={this.handleClick}>Resume</a> here and also visit my <a target="_blank" href="https://github.com/yl-zeng">Github</a>. If you want to hire me or just to talk, <Link to="/contact">Contact</Link> with me.</p>
              </div>
            </div>
          </div>
        </section>
    );
  }
});


module.exports = About;

var React = require("react");
var {Link} = require("react-router")

var swal = require('sweetalert');

var About = React.createClass({

  componentDidMount:function(){

  },

  handleClick:function(e){
    e.preventDefault();
    swal({
      title: "",
      text: "<div className=\"text-center\"><iframe src=\"https://drive.google.com/file/d/0B1B6d6uqGpUZbzhWMS03NTU3ODg/preview\" width=\"700px\" height=\"480px\" ></div>",
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
                <p>Hi, my name is Yunlin Zeng and I am an upcoming Master of Science graduate major in Computer Engineering. I love crafting beautiful web pages with fantastic technology. You can
                   grab my <a onClick={this.handleClick}>Resume</a> here. If you want to hire me or just to talk, <Link to="/contact">connect</Link> with me.</p>
              </div>
            </div>
          </div>
        </section>
    );
  }
});


module.exports = About;

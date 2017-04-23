var React = require("React");

var Footer = React.createClass({

  componentDidMount:function(){
    $('#togglemail').tooltip({title: "Email", placement: "top"});
    $('#togglelinkedin').tooltip({title: "Linkedin", placement: "top"});
    $('#togglegithub').tooltip({title: "Github", placement: "top"});
    $('#togglecodepen').tooltip({title: "Codepen", placement: "top"});
  },

  render: function(){
    return (
        <footer id='footer' className="text-center sec-footer">
            <ul>
                <li className='highlight'>
                    <a className="fa-stack fa-1x" id="togglemail" href="mailto:ylinzeng69@gmail.com">
                        <i className="fa fa-square fa-stack-2x"></i>
                        <i className="fa fa-envelope fa-stack-1x blacktext"></i>
                    </a>
                </li>
                <li className='highlight'>
                    <a className="fa-stack fa-1x" id="togglelinkedin" href="https://www.linkedin.com/in/yunlin-zeng-99a862115/" target="_blank">
                      <i className="fa fa-linkedin-square fa-stack-2x"></i>
                    </a>
                </li>

                <li className='highlight'>
                    <a className="fa-stack fa-1x" id="togglegithub" href="https://github.com/yl-zeng" target="_blank">
                      <i className="fa fa-github-square fa-stack-2x"></i>
                    </a>
                </li>

                <li className='highlight'>
                    <a className="fa-stack fa-1x" id="togglecodepen" href="http://codepen.io/d26842684/" target="_blank">
                        <i className="fa fa-square fa-stack-2x"></i>
                        <i className="fa fa-codepen fa-stack-1x blacktext"></i>
                    </a>
                </li>
                <li style={{display:"block",padding:"0px"}}><p>COPYRIGHT © 2017 YUNLIN ZENG</p></li>
            </ul>
        </footer>

    );
  }
});

module.exports = Footer;

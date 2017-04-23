var React = require("React");

var Footer = (props) =>{
  return (
      <div id='footer' className="text-center sec-footer">
          <ul>
              <li className='highlight'>
                  <a className="fa-stack fa-1x" data-toggle="tooltip" title="Email" data-placement="top" href="mailto:2am.ninja@outlook.com">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-envelope fa-stack-1x blacktext"></i>
                  </a>
              </li>
              <li className='highlight'>
                  <a className="fa-stack fa-1x" data-toggle="tooltip" title="Linkedin" data-placement="top" href="https://www.linkedin.com/in/brucewilliamyoung" target="_blank">
                    <i className="fa fa-linkedin-square fa-stack-2x"></i>
                  </a>
              </li>

              <li className='highlight'>
                  <a className="fa-stack fa-1x" data-toggle="tooltip" title="GitHub" data-placement="top" href="https://github.com/mutantspore" target="_blank">
                    <i className="fa fa-github-square fa-stack-2x"></i>
                  </a>
              </li>

              <li className='highlight'>
                  <a className="fa-stack fa-1x" data-toggle="tooltip" title="CodePen" data-placement="top" href="http://codepen.io/MutantSpore/" target="_blank">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-codepen fa-stack-1x blacktext"></i>
                  </a>
              </li>
              <li style={{display:"block",padding:"0px"}}><p>COPYRIGHT © 2017 YUNLIN ZENG</p></li>
          </ul>
      </div>

  );
};

module.exports = Footer;

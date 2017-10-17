var React = require("React");

export default class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   $('#togglemail').tooltip({title: "Email", placement: "top"});
  //   $('#togglelinkedin').tooltip({title: "Linkedin", placement: "top"});
  //   $('#togglegithub').tooltip({title: "Github", placement: "top"});
  //   $('#togglecodepen').tooltip({title: "Codepen", placement: "top"});
  // }

  render() {
    return (
        <div id='footer'>
            <div className="row footer-row1">
              <ul>
                <li><i className="fa fa-twitter fa-3x" aria-hidden="true"></i></li>
                <li><i className="fa fa-linkedin fa-3x" aria-hidden="true"></i></li>
                <li><i className="fa fa-github fa-3x" aria-hidden="true"></i></li>
                <li><i className="fa fa-google fa-3x" aria-hidden="true"></i></li>
              </ul>
            </div>
            <div className="row footer-row2">
              <div className="row">
                <ul className="footer-category">
                  <li><a href="#">ABOUT</a></li>
                  <li><a href="#">CAREER</a></li>
                  <li><a href="#">UPCOMING</a></li>
                </ul>
              </div>
              <div className="row">
                <ul className="privacy">
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Copyright</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Licenses</a></li>
                </ul>
              </div>
              <div className="copyright">
                <p>Copyright © 2017–2018 Yunlin. All rights reserved.</p>
              </div>
            </div>
        </div>

    );
  }
}

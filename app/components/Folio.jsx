var React = require("react");
var Card = require("Card");


var Folio = React.createClass({

  render: function(){
    var data = [{
      title: 'Portfolio',
      text: (
        <div>
          <p style={{"padding-top":"10px"}}>My personal website, built with React and Bootstrap. Using webpack with loaders to manage all resource & modules.
            Breaking website into small components, using props and state to control action. </p>
          <br/>
          <br/>
          <strong>Technology:</strong> React jQuery Bootstrap Node.js webpack<br/>
        </div>
      ),
      image: ['folio/portfolio3.png'],
      site: [['Live Site', 'fa-link', 'http://yunlin.io/'],
      ['Github','fa-github','https://github.com/yl-zeng/portfolio']]
    },{
      title: 'Chat',
      text: (
        <div>
          <p style={{"padding-top":"10px"}}>A Node.js full stack app. Build Restful API with express.js & socket.io.
          Store Data with MongoDB and authenticate users with JSON web token. Create full test suite with Mocha framework and HTTP assertions via supertest.</p>
          <br/>
          <strong>Technology:</strong> Node.js MongoDB Express.js Socket.io<br/>
        </div>
      ),
      image: ['folio/chat.png'],
      site: [['Live Site', 'fa-link', '#'],
      ['Github','fa-github','https://github.com/yl-zeng/node-chat']]
    },
    {
      title: 'Todo List App',
      text: (
        <div>
          <p style={{"padding-top":"10px"}}>A React.js web application helps users to manage todo lists online.
          Create test suite with Karma and use Google firebase database to maintain data and authenticate users.
         Using Redux to manage state, babel to compile JSX and Webpack to handle third-party dependencies.</p>
          <strong>Technology:</strong> React Node.js JSX Webpack <br/>
        </div>
      ),
      image: ['folio/todo.png'],
      site: [['Live Site', 'fa-link', '#'],
      ['Github','fa-github','https://github.com/yl-zeng']]
    },{
      title: 'Weather App - Android',
      text: (
        <div>
          <p style={{"padding-top":"10px"}}>An android weather forecast application. Build maintainable back-end with SQLite database.
          Create full Junit test suite for debugging.
        leverage UI compatibility for both phones and tablets.</p>
          <br/>
          <br/>
          <strong>Technology:</strong> Android Junit SQlite <br/>
        </div>
      ),
      image: ['folio/weather-android.png'],
      site: [['Overview', 'fa-eye', '#'],
      ['Github','fa-github','https://github.com/yl-zeng']]
    },{
      title: 'Weather App - React',
      text: (
        <div>
          <p style={{"padding-top":"10px"}}>A React.js weather forecast application, built with Foundation, SCSS and OpenWeatherMap API. </p>
          <br/>
          <br/>
          <strong>Technology:</strong> React Foundation SCSS <br/>
        </div>
      ),
      image: ['folio/weather-react.png'],
      site: [['Live Site', 'fa-link', '#'],
      ['Github','fa-github','https://github.com/yl-zeng/react-weather']]
    },{
      title: 'Quotes',
      text: (
        <div>
          <p style={{"padding-top":"10px"}}>Build a Random Quote Machine with random famous quotes api. The user is able to show a new random quote and send that quote to Twitter.</p>
          <br/>
          <br/>
          <strong>Technology:</strong> HTML5, CSS3, Javascript, jQuery<br/>
        </div>
      ),
      image: ['folio/quotes.png'],
      site: [['Codepen', 'fa-codepen', 'http://codepen.io/d26842684/full/oBzPwR/'],
      ['Github','fa-github','https://github.com/yl-zeng/quotes']]
    },{
      title: 'Blog',
      text: (
        <div>
          <p style={{"padding-top":"10px"}}>A group project of Python course. Built with python jinja2 template, Bootstrap and Google App Engine.
          I am responsible for render html.</p>
          <br/>
          <br/>
          <strong>Technology:</strong> HTML5, CSS3, Javascript, Python<br/>
        </div>
      ),
      image: ['folio/blog.png'],
      site: [['Live Site', 'fa-link', 'https://dotted-weft-151521.appspot.com/'],
      ['Github','fa-github','https://github.com/yl-zeng']]
    }
  ];

    return (
      <div>
        <section id="folio" className="sec-folio">
          <div className="container">
            <h1 className="text-center">FOLIO</h1>
            <hr />
            <div className="row" id="theProjects">
              <Card projectData={data[0]}></Card>
              <Card projectData={data[1]}></Card>
              <Card projectData={data[2]}></Card>
              <Card projectData={data[3]}></Card>
              <Card projectData={data[4]}></Card>
              <Card projectData={data[5]}></Card>
              <Card projectData={data[6]}></Card>
            </div>
          </div>
        </section>
      </div>
    );
  }
});


module.exports = Folio;

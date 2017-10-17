var React = require("react");
import Card from "Components/Card.jsx";


export default class Folio extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
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
    },
    {
      title: 'Todoist',
      text: (
        <div>
          <p style={{"padding-top":"10px"}}>A React.js web application helps users to manage todo lists online.
          Create test suite with Karma and use Google firebase database to maintain data and authenticate users.
         Using Redux to manage state, babel to compile JSX and Webpack to handle third-party dependencies.</p>
          <strong>Technology:</strong> React Node.js JSX Webpack <br/>
        </div>
      ),
      image: ['folio/todo.jpg'],
      site: [['Live Site', 'fa-link', 'https://yunlin-todo.herokuapp.com/'],
      ['Github','fa-github','https://github.com/yl-zeng/react-todo']]
    },
    {
      title: 'OnlineBanking',
      text: (
        <div>
          <p style={{"padding-top":"10px"}}>Developed admin portal as SPA with Angular and used angular http to interact with REST API via JSON.
              Used Thymeleaf as Java template engine to develop user portal, deployed to AWS cloud platform.</p>
            <strong>Technology:</strong> Spring Boot, Angular, Thymeleaf, Hibernate <br/><br/>
        </div>
      ),
      image: ['folio/onlinebanking.jpg'],
      site: [['Live Site', 'fa-link', '#'],
      ['Github','fa-github','#']]
    },
    {
      title: 'Chat Room',
      text: (
        <div>
          <p style={{"padding-top":"10px"}}>Implemented WebSocket based real-time bidirectional communication with Socket.io API.
            Used node redis client to store chat history in redis and used mongoose to save user credentials.</p>
          <br/>
          <strong>Technology:</strong> Node.js, MongoDB, Redis, Express.js, Socket.io<br/>
        </div>
      ),
      image: ['folio/chat.jpg'],
      site: [['Live Site', 'fa-link', 'https://yunlin-chat-node.herokuapp.com/'],
      ['Github','fa-github','#']]
    },
    {
      title: 'DevOps Buddy',
      text: (
        <div>
          <p style={{"padding-top":"10px"}}>A Node.js full stack app. Build Restful API with express.js & socket.io.
          Store Data with MongoDB and authenticate users with JSON web token. Create full test suite with Mocha framework and HTTP assertions via supertest.</p>
          <br/>
          <strong>Technology:</strong> Node.js MongoDB Express.js Socket.io<br/>
        </div>
      ),
      image: ['folio/buddy.jpg'],
      site: [['Live Site', 'fa-link', '#'],
      ['Github','fa-github','#']]
    },
    {
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
      site: [['Demo', 'fa-eye', 'https://drive.google.com/file/d/0B1B6d6uqGpUZOVRKZXg1YlpiV3M/view?usp=sharing'],
      ['Github','fa-github','#']]
    },{
      title: 'E-Commerce Store',
      text: (
        <div>
          <p style={{"padding-top":"10px"}}>Built up view layer with JSP with JSTL and used jQuery to fire AJAX request to consume REST API.
            Implemented Payment feature with Stripe API and used spring web flow to wrap up confirmation steps.</p>
          <br/>
          <br/>
          <strong>Technology:</strong> Spring MVC, Hibernate, JSP, MySQL <br/>
        </div>
      ),
      image: ['folio/store.jpg'],
      site: [['Live Site', 'fa-link', 'https://yunlin-e-store.herokuapp.com/'],
      ['Github','fa-github','https://github.com/yl-zeng/E-Music-Store']]
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
    },{
      title: 'Twitter Like',
      text: (
        <div>
          <p style={{"padding-top":"10px"}}>A Twitter like social network website.
            User can follow, unfollow, tweet and comment.
            Implement News feed feature with Push model.
          Implemented error handling by using RxJS Observable subscription with self-built Angular Error Service.</p>
          <br/>
          <br/>
          <strong>Technology:</strong> MEAN stack <br/>
        </div>
      ),
      image: ['folio/twitter.jpg'],
      site: [['Demo', 'fa-eye', '#'],
      ['Github','fa-github','#']]
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
      site: [['Live Site', 'fa-link', 'https://yunlin69-react-weather.herokuapp.com/'],
      ['Github','fa-github','https://github.com/yl-zeng/react-weather']]
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
              <Card projectData={data[8]}></Card>
              <Card projectData={data[9]}></Card>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

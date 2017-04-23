var React = require("react");
var Card = require("Card");


var Folio = React.createClass({

  render: function(){

    var data = [{
      title: 'Quotes',
      text: (
        <div>
          <p>A FreeCodeCamp project, <a href="http://www.freecodecamp.com/challenges/zipline-build-a-random-quote-machine" target="_blank"><i>Build a Random Quote Machine</i></a>. The user is able to show a new random quote and send that quote to Twitter.
          <strong>Quotes</strong> was designed and optimized to be a mobile web app first.</p>
          <strong>Code:</strong> HTML5, CSS3, Javascript, jQuery<br/>
          <strong>Layout:</strong> Bootstrap<br/>
          <strong>Graphics Editor:</strong> Gimp, pixlr.com<br/>
          <strong>Images:</strong> lorempixel.com<br/>
          <strong>Fonts:</strong> Font-awesome<br/>
          <strong>Data:</strong> random famous quotes API
        </div>
      ),

      image: ['http://2am.ninja/img/quotes.jpg'],
      site: [
        ['CodePen', 'fa-codepen', 'http://s.codepen.io/MutantSpore/debug/dojjre'],
        ['Live Site', 'fa-link', 'http://2am.ninja/quotes/']
      ]
    }, {
      title: 'Twitch TV',
      text: '<p>A FreeCodeCamp project, <a href="http://www.freecodecamp.com/challenges/zipline-use-the-twitchtv-json-api" target="_blank"><i>Use the Twitchtv JSON API</i></a>. A user can see if Free Code Camp is currently streaming on Twitch.tv.</p> <strong>Code:</strong> HTML5, CSS3, Javascript, jQuery<br> <strong>Layout:</strong> Bootstrap<br> <strong>Fonts:</strong> Ubuntu Mono<br> <strong>Data:</strong> Twitchtv API',

      image: ['http://2am.ninja/img/twitch3.jpg'],
      site: [
        ['CodePen', 'fa-codepen', 'http://s.codepen.io/MutantSpore/debug/jrEBgq']
  //      ,['Live Site', 'fa-link', 'http://2am.ninja/twitch/']
      ]
    }, {
      title: 'Wiki Search',
      text: '<p>A FreeCodeCamp project, <a href="http://www.freecodecamp.com/challenges/zipline-build-a-wikipedia-viewer" target="_blank"><i>Build a Wikipedia Viewer</i></a>. A user can search Wikipedia entries in a search box and see the resulting Wikipedia entries.</p> <strong>Code:</strong> HTML5, CSS3, Javascript, jQuery<br> <strong>Layout:</strong> Bootstrap<br> <strong>Graphics Editor:</strong> pixlr.com<br> <strong>Images:</strong> unsplash.com<br> <strong>Data:</strong> Wikipedia API',

      image: ['http://2am.ninja/img/wiki.jpg'],
      site: [
        ['CodePen', 'fa-codepen', 'http://s.codepen.io/MutantSpore/debug/rVRwor']
      ]
    }, {
      title: 'Pomodoro Timer',
      text: '<p>A FreeCodeCamp project, <a href="http://www.freecodecamp.com/challenges/zipline-build-a-pomodoro-clock" target="_blank"><i>Build a Pomodoro Clock</i></a>. A user can start a 25 minute pomodoro, and the timer will go off once 25 minutes has elapsed. <strong>Pomodoro Timer</strong> was designed and optimized to be a mobile web app first.</p> <strong>Code:</strong> HTML5, HTML5 Canvas, CSS3, Javascript, jQuery, ion.sound<br> <strong>Layout:</strong> Bootstrap, HTML5 Canvas<br> <strong>Fonts:</strong> IcoMoon',

      image: ['http://2am.ninja/img/timer.jpg'],
      site: [
        ['CodePen', 'fa-codepen', 'http://s.codepen.io/MutantSpore/debug/WvVZyM'],
        ['Live Site', 'fa-link', 'http://2am.ninja/timer/']
      ]
    }, {
      title: 'Local Weather',
      text: '<p>A FreeCodeCamp project, <a href="http://www.freecodecamp.com/challenges/zipline-show-the-local-weather" target="_blank"><i>Show the Local Weather</i></a>. A user can see the weather in my current location.. <strong>Local Weather</strong> was designed and optimized to be a mobile web app first.</p> <strong>Code:</strong> HTML5, CSS3, Javascript, jQuery<br> <strong>Layout:</strong> Bootstrap<br> <strong>Images:</strong> flickr.com<br> <strong>Fonts:</strong> Climacons, Open Sans<br> <strong>Data:</strong> Open Weather Map API, IP-API.com Geolocation API',

      image: ['http://2am.ninja/img/weather.jpg'],
      site: [
        ['CodePen', 'fa-codepen', 'http://s.codepen.io/MutantSpore/debug/oXaoxb']
      ]
    },

    {
      title: 'Bar Graph',
      text: '<p>A FreeCodeCamp project, <a href="https://www.freecodecamp.com/challenges/visualize-data-with-a-bar-chart" target="_blank"><i>Visualize Data with a Bar Chart </i></a>. The user can see US Gross Domestic Product by quarter, over time, with a mouse over tooltip.</p> <strong>Code:</strong> HTML5, CSS3, D3, SVG, Javascript, jQuery<br> <strong>Layout:</strong> Bootstrap',

      image: ['http://2am.ninja/img/bar-graph.jpg'],
      site: [
        ['CodePen', 'fa-codepen', 'http://s.codepen.io/MutantSpore/debug/PNJMpg']
      ]
    }, {
      title: 'Heat Map',
      text: '<p>A FreeCodeCamp project, <a href="https://www.freecodecamp.com/challenges/visualize-data-with-a-heat-map" target="_blank"><i>Visualize Data with a Heat Map</i></a>. The user can view a heat map with data represented both on the Y and X axis, with mouse over tooltip.</p> <strong>Code:</strong> HTML5, CSS3, D3, SVG, Javascript, jQuery<br> <strong>Layout:</strong> Bootstrap',

      image: ['http://2am.ninja/img/heat-map.jpg'],
      site: [
        ['CodePen', 'fa-codepen', 'http://s.codepen.io/MutantSpore/debug/VeKNEa']
      ]
    },
    {
      title: 'Tic-Tac-Toe',
      text: '<p>A FreeCodeCamp project, <a href="https://www.freecodecamp.com/challenges/build-a-tic-tac-toe-game" target="_blank"><i>Build a Tic Tac Toe Game</i></a>. The user can play a game of Tic Tac Toe with the computer.</p> <strong>Code:</strong> HTML5, CSS3, Javascript, jQuery<br> <strong>Layout:</strong> Materialize.css',

      image: ['http://2am.ninja/img/ttt.jpg'],
      site: [
        ['CodePen', 'fa-codepen', 'http://s.codepen.io/MutantSpore/debug/jWWYLo']
      ]
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
            </div>
          </div>
        </section>
      </div>
    );
  }
});


module.exports = Folio;

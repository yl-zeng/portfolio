var React = require("React");


var About = (props) =>{
  return (
      <section id="about" className="sec-about section">
        <div className="container">
          <h1 className="text-center">ABOUT ME</h1>
          <hr />
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <p>Hi, my name is Alex Devero and I am a Web Designer & Developer based in Prague. I love crafting beautiful web pages in HTML5, CSS3 and JavaScript or jQuery. My other skills include WordPress, Photoshop, Illustrator. You can grab my CV in
                <a href="#">English</a> or <a href="#">Czech</a> version. If you want to hire me or just to talk, <a class="js-connect" href="#footer">connect</a> with me.</p>
            </div>
          </div>
        </div>
      </section>
  );
};

module.exports = About;

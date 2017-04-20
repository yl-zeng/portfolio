var React = require("react");
var {Link,IndexLink} = require("react-router");


var Nav = React.createClass({

  render: function(){
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
      	<div className="container">
      		<div className="navbar-header">
      			<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
      				<span className="sr-only">Toggle navigation</span>
      				<span className="icon-bar"></span>
      				<span className="icon-bar"></span>
      				<span className="icon-bar"></span>
      			</button>
      			<a className="navbar-brand" href="#">Balance Web Development</a>
      		</div>
      		<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      			<ul className="nav navbar-nav navbar-right">
      				<li><a href="#">About</a></li>
      				<li className="dropdown">
      					<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Services<span class="caret"></span></a>
      					<ul className="dropdown-menu">
      						<li><a href="#">Design</a></li>
      						<li><a href="#">Development</a></li>
      						<li><a href="#">Consulting</a></li>
      					</ul>
      				</li>
      				<li><a href="#">Contact</a></li>
      			</ul>
      		</div>
      	</div>
      </nav>
      // <div data-sticky-container="">
      //   <div className="sticky" data-sticky="" data-options="marginTop:-0.8;">
      //     <div className="top-bar">
      //       <div className="row column">
      //         <div className="top-bar-left">
      //           <ul className="menu">
      //             <li className="menu-text">YUNLIN</li>
      //             <li>
      //               <Link to="/about" activeClassName="active" activeStyle={{fontWeight:"bold"}}>About</Link>
      //             </li>
      //             <li>
      //               <Link to="/contact" activeClassName="active" activeStyle={{fontWeight:"bold"}}>Contact</Link>
      //             </li>
      //           </ul>
      //         </div>
      //         <div className="top-bar-right">
      //           <form>
      //             <ul className="menu">
      //               <li>
      //                 <input type="search" placeholder="Search Weather by Zip Code" ref="search"/>
      //               </li>
      //               <li>
      //                 <input type="submit" className="button" value="Get Weather"/>
      //               </li>
      //             </ul>
      //           </form>
      //         </div>
      //
      //       </div>
      //     </div>
      //   </div>
      // </div>

    );
  }
})

module.exports = Nav;

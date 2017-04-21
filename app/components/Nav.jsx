var React = require("react");
var {Link,IndexLink} = require("react-router");


var Nav = React.createClass({

  render: function(){
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" >YUNLIN's PORTFOLIO</a>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to="/home" activeClassName="active" activeStyle={{fontWeight:"bold"}}>Home</Link></li>
            <li><Link to="/contact" activeClassName="active" activeStyle={{fontWeight:"bold"}}>Contact</Link></li>
            <li><a href="#test">Test</a></li>
          </ul>
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

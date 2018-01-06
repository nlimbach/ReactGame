import React from "react";
// import Displayimages from "Displayimages"


const Bootstrapsetup = () => (
    <div>
        <nav className="deep-purple darken-1 white-text">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">Click any image to get started!</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="#">Clicky Game</a></li>
                </ul>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#">Score | Top Score:</a></li>
                </ul>
            </div>
        </nav>
        <div className="col s12  grey darken-3 grey-container z-depth-5 white-text" style={{ height: '200px'}}>
            <h1 className = "center">CLICKY GAME</h1>
            <h5 className = "center">Click on any image to get started, but don't click on any more than once!</h5>
        </div>
        <div id = "images">
            {/*<Displayimages />*/}
        </div>

    </div>
);

export default Bootstrapsetup;

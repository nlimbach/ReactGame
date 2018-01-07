import React from "react";


class Main extends React.Component {
    // Setting the initial state of the Counter component
    state = {
        count: 0
    };

    // handleIncrement increases this.state.count by 1
    handleIncrement = () => {
        // We always use the setState method to update a component's state
        this.setState({ count: this.state.count + 1 });
    };

    imagearray = [ {imagesrc: 'https://qph.ec.quoracdn.net/main-qimg-48f394cd9bf6bfa6fe087e1137f26216-c', clicked: false},
            {imagesrc: 'http://static.tvtropes.org/pmwiki/pub/images/spongebob_gary.jpg', clicked: false},
            {imagesrc: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-03/23/9/enhanced/webdr15/original-grid-image-532-1458740822-7.jpg?crop=189:284;277,0&downsize=715:*&output-format=auto&output-quality=auto', clicked: false},
            {imagesrc: 'https://vignette.wikia.nocookie.net/spongebob/images/9/9d/Spongebob_Imagination_by_kssael.png/revision/latest?cb=20120225122618', clicked:false},
            {imagesrc: 'https://i.pinimg.com/originals/e6/bc/0b/e6bc0b37b16c1e4bbdb272bf3aa0c9c8.jpg', clicked:false},
            {imagesrc: 'http://vignette2.wikia.nocookie.net/nickelodeon/images/1/1f/Ripped_Pants.png/revision/latest?cb=20060224035530', clicked:false},
            {imagesrc: 'http://cdn6.gurl.com/wp-content/uploads/2017/05/spongebob-mocking-meme.jpg', clicked:false},
            {imagesrc: 'https://pbs.twimg.com/media/C2oOB0iVQAEdvDq.jpg', clicked:false},
            {imagesrc: 'https://i.ytimg.com/vi/IIjPP0x0ulE/hqdefault.jpg', clicked:false},
            {imagesrc: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-09/25/12/campaign_images/webdr11/25-of-the-most-hilarious-spongebob-quotes-2-28213-1443196910-0_dblbig.jpg', clicked:false},
            {imagesrc: 'https://vignette.wikia.nocookie.net/spongebobb/images/c/cf/HallMonitor2.jpg/revision/latest?cb=20140413205735', clicked:false},
            {imagesrc: 'http://media.sbmania.net/pictures/52a/17.png', clicked:false}

        ]


    render() {

        return (
            <div>
                <nav className="deep-purple darken-1 white-text">
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo center">Click any image to get started!</a>
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                            <li><a href="#">Clicky Game</a></li>
                        </ul>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="#">Score:   {this.state.count}   |   Top Score: {this.state.count}</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="col s12  grey darken-3 grey-container z-depth-5 white-text" style={{height: '200px'}}>
                    <h1 className="center">CLICKY GAME</h1>
                    <h5 className="center">Click on any image to get started, but don't click on any more than
                        once!</h5>
                </div>
                <div id="images">


                    {this.imagearray.map(item => (

                        <img src = {item.imagesrc} style={{height: '160px', width:'160px', margin: '25px'}} onClick={this.handleIncrement}/>
                    ))}
                </div>

            </div>
        );
    }
}

export default Main;


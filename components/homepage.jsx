const { StyleSheet, css } = require('../lib/aphrodite.js');
const React = require('react');
const Router = require('react-router');

const SS = require('../styles.js');

const RP = React.PropTypes;

const Header = require("./header.jsx");

const Icon = React.createClass({
    propTypes: {
        imageName: RP.string,
        linkTo: RP.string,
    },
    render: function() {
        return <a href={this.props.linkTo} target="_blank">
            <img
                src={"images/" + this.props.imageName}
                className={css(ST.icon)}
            />
        </a>;
    },
})

const Page = React.createClass({
    render: function() {
        return <div className={css(ST.page)}>
            <Header page="home"/>
            <div className={css(ST.pageContent)}>
            <img src="images/Kay-banner.jpg" className={css(ST.banner)}/>
            <div className={css(ST.iconGroup)}>
                <Icon
                    imageName="facebook.png"
                    linkTo="https://www.facebook.com/kay.kassirer"
                />
                <Icon
                    imageName="twitter.png"
                    linkTo="https://twitter.com/queerkay"
                />
                <Icon
                    imageName="youtube.png"
                    linkTo="http://youtube.com/queerkay"
                />
                <Icon
                    imageName="email.png"
                    linkTo="malito:kay.kassirer@gmail.com"
                />
            </div>
            <span className={css(ST.bio)}>
            <br/>
            Kay Kassirer (they/them) is a spoken-word poet, organizer, and activist who currently resides on the unceded lands of the Musqueam, Squamish, and Tseil-Waututh First Nations.
            <br/> <br/>
            Kay has taken the North American poetry community by storm. This past year alone, they not only took on the role of Festival Director for SpoCan’s official youth poetry slam “Voices of Today,” but also stepped up as assistant slam master for the Canadian Festival of Spoken word.
            <br/> <br/>
            Notably, Kay was the 2016 Capturing Fire rep for Hot Damn! It's a Queer Slam, and went on to take second in the festival. Kay has performed on numerous other final stages, including CFSW 2015 (the Canadian Festival of Spoken Word), CIPS 2016 and 2017 (the Canadian Individual Poetry Slam), & The Queer Resurgence Poetry Slam, Hosted by the Seattle Poetry Slam.
            <br/> <br/>
            Education, healing, and community are three amongst many pillars supporting the voice of this established artist, creating an undeniable force for social innovation through literary arts.
            <br/> <br/>
            Using their voice to evoke change, Kay can be found facilitating workshops, or presenting as a feature performer throughout the various vibrant North American poetry scenes.
            <br/> <br/>
            </span>
            </div>
        </div>;
    }
});

const ST = StyleSheet.create({
    banner : {
        width: "100%",
    },
    bio : {
        lineHeight: 1.5,
    },
    page : {
        width: "100%",
    },
    pageContent: {
        paddingTop: "70px",
        width: "730px",
        margin: "0 auto",
    },
    iconGroup: {
        textAlign: "center",
    },
    icon: {
        height: "50px",
        margin: "15px",
    }
});

module.exports = Page;

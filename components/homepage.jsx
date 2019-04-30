const { StyleSheet, css } = require('../lib/aphrodite.js'); const React =
require('react'); const Router = require('react-router');

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
                    linkTo="mailto:kay.kassirer@gmail.com"
                />
            </div>
            <span className={css(ST.bio)}>
            <br/>
            Kay Kassirer (they/them) is a poet, activist, youth advocate, community organizer, and sex worker. They have toured internationally with the chapbooks Confessions of a Queer and Unbandage the Wounds, and have earned their place on several competitive final stages - notably the Capturing Fire International Queer Slam (2016), the Canadian Individual Poetry Slam (2016, 2017), and the Canadian Festival of Spoken Word where they placed third nationally (2018). Kay currently resides on the unceded lands of the Musqueam, Squamish, and Tsleil-Waututh First Nations - colonially known as Vancouver.
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

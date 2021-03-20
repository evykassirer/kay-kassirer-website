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
                    linkTo="https://www.facebook.com/KayKassirerPoetry/"
                />
                <Icon
                    imageName="twitter.png"
                    linkTo="https://twitter.com/kaykassirer"
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
            Kay Kassirer (they/them) is a spoken word poet, community organizer, and sex worker currently residing on the unceded lands of the Musqueam, Squamish, and Tsleil-Waututh First Nations - colonially known as Vancouver.
            <br/><br/>
            Kay has performed, led workshops, and volunteered at poetry events across Turtle Island, The UK, and the Netherlands with their biographical poetry talking about gender and sexuality, judaism, grief, mental health, and being a whore. Their work has been featured on Button Poetry, Slamfind, Write About Now, and Voicemail Poems. They dreamed up, curated, and edited ‘A Whore’s Manifesto: An Anthology of Art and Writing by Sex Workers’. They are a Co-Founder and Director of Voices of Today, a poetry festival run by youth for youth, and sit on the SpeakNorth Board of Directors.
            <br/><br/>
            Kay has competed at over a dozen national and international poetry slam competitions. Notably, Kay placed 2nd at Capturing Fire International Queer Slam (2016) while representing Hot Damn! It's A Queer Slam. They placed 3rd at the Canadian Festival of Spoken Word (2018) with the Vancouver Poetry Slam Team, and 3rd at the Canadian Individual Poetry Slam (2019).
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

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
            Kay Kassirer (they/them) is a spoken word poet currently residing on the unceded lands of the Musqueam, Squamish, and Tsleil-Waututh First Nations - colonially known as Vancouver. Their autobiographical poetry focuses on gender & sexuality, grief, disability, and sex work.
            <br/><br/>
            Kay has toured internationally performing at venues like Buddies in Bad Times Theatre, the Bowery Poetry Club, Busboys and Poets, Write About Now, and Hillside Festival. They have competed at over a dozen national and international poetry slam festivals earning their place on several competitive final stages. Notably, Kay placed 2nd at Capturing Fire International Queer Slam (2016) while representing Hot Damn! It's A Queer Slam, and 3rd at the Canadian Festival of Spoken Word (2018) and the Canadian Individual Poetry Slam (2019) while representing Vancouver Poetry Slam.
            <br/><br/>
            Kay co-founded and directed Voices of Today, a poetry festival run by youth for youth (2017-2020), and sat on the SpeakNorth Board of Directors (2016-2020). They curated and edited ‘A Whore’s Manifesto: An Anthology of Writing and Artwork by Sex Workers’ published by Thorntree Press. Their work has been featured on Button Poetry, Slamfind, Voicemail Poems, and The Rusty Toque.
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

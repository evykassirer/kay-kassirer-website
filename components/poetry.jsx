const { StyleSheet, css } = require('../lib/aphrodite.js');
const React = require('react');

const SS = require('../styles.js');

const RP = React.PropTypes;

const Header = require("./header.jsx");


const Poetry = React.createClass({
    render: function() {
        return <div className={css(ST.page)}>
            <Header page="poetry"/>
            <div className={css(ST.pageContent)}>

                <div className={css(ST.publication)}>
                    <div className={css(ST.publicationTitle)}>
                        The Rusty Toque: published in <a href="http://www.therustytoque.com/issue-13.html">
                            Issue 13
                        </a>
                    </div>
                    ~~ <a href="http://www.therustytoque.com/poetry-kay-kassirer.html">
                        He Can't Take Something I Never Had
                    </a>
                </div>

                <div className={css(ST.publication)}>
                    <div className={css(ST.publicationTitle)}>
                        Voicemail Poems: published in the <a href="http://voicemailpoems.org/post/159115161387/voicemail-poems-spring-2017-just-dropped">
                            Spring 2017
                        </a> episode
                    </div>
                    ~~ <a href="https://soundcloud.com/voicemailpoems/dancefloorsanctuaryofficebedroom-by-kay-kassirer">
                        Dancefloor/Sanctuary/Office/Bedroom
                    </a>
                </div>

                <br/>
                <br/>
                <hr/>

                <div className={css(ST.title)}>YouTube</div>

                <div className={css(ST.videoWrapper)}>
                    <div className={css(ST.suscribe)}>
                        <span
                            className="g-ytsubscribe"
                            data-channel="queerKay"
                            data-layout="full"
                            data-count="default">
                        </span>
                    </div>
                    <iframe
                        src="http://www.youtube.com/embed/?listType=user_uploads&list=QueerKay"
                        className={css(ST.video)}>
                    </iframe>
                    <br/>
                    Canadian Individual Poetry Slam
                    <iframe
                        src="https://www.youtube.com/embed/videoseries?list=PLLGnibIm00NbKkXEvK0MPZF0rnKjmKj8O"
                        className={css(ST.video)}>
                    </iframe>
                    <br/>
                    6th Annual Capturing Fire: The International Queer Spoken Word Poetry Slam
                    <iframe
                        src="https://www.youtube.com/embed/videoseries?list=PLLGnibIm00NaJkJsubXQwHhmPC7Yhq_Mo"
                        className={css(ST.video)}>
                    </iframe>
                    <br/>
                    More Kay:
                    <iframe
                        src="https://www.youtube.com/embed/w9J_F1o7MF4"
                        className={css(ST.video)}
                        frameborder="0" allowfullscreen>
                    </iframe>
                    <iframe
                        src="https://www.youtube.com/embed/pBWw3jRlQmA"
                        className={css(ST.video)}
                        frameborder="0" allowfullscreen>
                    </iframe>

                </div>
            </div>
        </div>;
    }
});

const ST = StyleSheet.create({
    page : {
        width: "100%",
    },
    pageContent: {
        paddingTop: "70px",
        width: "730px",
        margin: "0 auto",
    },
    publication: {
        marginLeft: 40
    },
    publicationTitle: {
        fontSize: 22,
        margin: "30px 0 10px 0"
    },
    title: {
        fontSize: 40,
        textAlign: "center"
    },
    video: {
        width: "90%",
        height: 400,
        align: "center",
        margin: "10px",
    },
    videoWrapper: {
       textAlign: "center",
    },
    suscribe: {
        padding: "20px",
    }
});

module.exports = Poetry;

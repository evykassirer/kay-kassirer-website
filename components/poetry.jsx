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
                        src="https://www.youtube.com/embed/iOZWoRFNs44"
                        className={css(ST.video)}
                        frameborder="0" allowfullscreen>
                    </iframe>

                    <iframe
                        src="https://www.youtube.com/embed/JHIiCsdSTeU"
                        className={css(ST.video)}
                        frameborder="0" allowfullscreen>
                    </iframe>

                    <iframe
                        src="https://www.youtube.com/embed/sJ27dbVHnI0"
                        className={css(ST.video)}
                        frameborder="0" allowfullscreen>
                    </iframe>

                    <iframe
                        src="https://www.youtube.com/embed/KRpVyYBRhPg"
                        className={css(ST.video)}
                        frameborder="0" allowfullscreen>
                    </iframe>


                    <iframe
                        src="https://www.youtube.com/embed/zRLkgr-8TRA"
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

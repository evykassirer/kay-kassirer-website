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

            <div className={css(ST.title)}>Selected Poems</div>

                <div className={css(ST.publication)}>
                    <div className={css(ST.publicationTitle)}>
                        Frontier Poetry
                    </div>
                    <a className={css(ST.poemTitleAndLink)} href="https://www.frontierpoetry.com/2024/11/14/kay-kassirer/">
                        golden shovel after my mother’s affidavit for medical assistance in dying
                    </a>
                </div>

                <div className={css(ST.publication)}>
                    <div className={css(ST.publicationTitle)}>
                        Water Damaged Paper Anthology Volume 3: Through Community We Reimagine
                    </div>
                    <a className={css(ST.poemTitleAndLink)} href="https://online.fliphtml5.com/jeymc/bfcy/#p=36">
                        misunderstood signals
                    </a>
                </div>

                <div className={css(ST.publication)}>
                    <div className={css(ST.publicationTitle)}>
                        Stoked Words: An Anthology of Queer Poetry from the Capturing Fire Slam & Summit
                    </div>
                    <a className={css(ST.poemTitleAndLink)} href="https://capfireslam.org/wp-content/uploads/2018/10/stokedwords-final102418.pdf#page=118">
                        Sink Girl Part 5 - Cold Air on Naked Skin & Two Soft Bodies (Sad & Gay)
                    </a>
                </div>


                <div className={css(ST.publication)}>
                    <div className={css(ST.publicationTitle)}>
                        Voicemail Poems, <a href="http://voicemailpoems.org/post/159115161387/voicemail-poems-spring-2017-just-dropped">
                            Spring 2017 episode
                        </a>
                    </div>
                    <a className={css(ST.poemTitleAndLink)} href="https://soundcloud.com/voicemailpoems/dancefloorsanctuaryofficebedroom-by-kay-kassirer">
                        Dancefloor/Sanctuary/Office/Bedroom
                    </a>
                </div>

                <div className={css(ST.publication)}>
                    <div className={css(ST.publicationTitle)}>
                        The Rusty Toque, <a href="http://www.therustytoque.com/issue-13.html">
                            Issue 13
                        </a>
                    </div>
                    <a className={css(ST.poemTitleAndLink)} href="http://www.therustytoque.com/poetry-kay-kassirer.html">
                        He Can't Take Something I Never Had
                    </a>
                </div>

                <br/>
                <br/>

                <div className={css(ST.title)}>YouTube</div>
                <br/>

                <div className={css(ST.videoWrapper)}>



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
                        src="https://www.youtube.com/embed/Uh7zH6Pt0jw?si=LdsXZulOFsuCQlsL"
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
        width: "800px",
        margin: "0 auto",
    },
    publication: {
        marginLeft: 40
    },
    publicationTitle: {
        fontSize: 20,
        margin: "30px 0 10px 0"
    },
    poemTitleAndLink: {
        fontSize: 18,
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

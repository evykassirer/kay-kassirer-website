const { StyleSheet, css } = require('../lib/aphrodite.js');
const React = require('react');

const SS = require('../styles.js');

const RP = React.PropTypes;

const Header = require("./header.jsx");

const NUM_PHOTOS = 8

const Gallery = React.createClass({
    render: function() {
        let photoIDs = [];
        for (let i = 1; i < NUM_PHOTOS; i++) {
            photoIDs.push(i);
        }
        return <div className={css(ST.page)}>
            <Header page="gallery"/>
            <div className={css(ST.pageContent)}>
                {photoIDs.map(function(i) {
                    const photographer = i === 4 ? "Patrick Shannon (InnoNative.ca)" : null;
                    return <Image number={i} photographer={photographer}/>
                })}
            </div>
        </div>
    }
});

const Image = React.createClass({
    render: function() {
        const image = <img className={css(ST.image)}
            key={this.props.number.toString()}
            src={"images/gallery/" + this.props.number + ".jpg"}
        />

        if (this.props.photographer) {
            return <div>
                {image}
                <span> 📷 {this.props.photographer}</span>
            </div>
        }
        return image;
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
    image: {
        maxWidth: 700,
        marginTop: 40,
        maxHeight: 600
    }
});

module.exports = Gallery;

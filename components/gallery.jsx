const { StyleSheet, css } = require('../lib/aphrodite.js');
const React = require('react');

const SS = require('../styles.js');

const RP = React.PropTypes;

const Header = require("./header.jsx");

const NUM_PHOTOS = 12

const Gallery = React.createClass({
    render: function() {
        let photoIDs = [];
        for (let i = 1; i <= NUM_PHOTOS; i++) {
            photoIDs.push(i);
        }
        return <div className={css(ST.page)}>
            <Header page="gallery"/>
            <div className={css(ST.pageContent)}>
                {photoIDs.map(function(i) {
                    const photographer = i === 10 ? "Patrick Shannon (InnoNative.ca)" : null;
                    const img_extension = [3, 9].includes(i) ? "jpeg" : "jpg";
                    const src = `images/gallery/${i}.${img_extension}`;
                    return <Image number={i} photographer={photographer} src={src}/>
                })}
            </div>
        </div>
    }
});

const Image = React.createClass({
    render: function() {
        const image = <img className={css(ST.image)}
            key={this.props.number.toString()}
            src={this.props.src}
        />

        if (this.props.photographer) {
            return <div className={css(ST.image_with_caption)}>
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
        paddingBottom: "50px",
        maxWidth: "1000px",
        margin: "0 auto",
        display: "flex",
        "flex-wrap": "wrap",
        "justify-content": "center",
        gap: "10px"
    },
    image: {
        maxWidth: 700,
        maxHeight: 600
    },
    image_with_caption: {
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
    }
});

module.exports = Gallery;

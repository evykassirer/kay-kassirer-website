const { StyleSheet, css } = require('../lib/aphrodite.js');
const React = require('react');

const SS = require('../styles.js');

const RP = React.PropTypes;

const Header = require("./header.jsx");


const Merch = React.createClass({
    render: function() {
        return <div className={css(ST.page)}>
            <Header page="merch"/>
            <div className={css(ST.pageContent)}>
            
            <a href="http://wefliptables.bigcartel.com/product/confessions-of-a-queer-by-kay-kassirer">
                <img
                    src="https://images.bigcartel.com/product_images/172153456/Kay_Cover-01.png?auto=format&fit=max&h=1000&w=1000"     
                    className={css(ST.pic)}
                />
            </a>
            <p className={css(ST.itemTitle)}>Confessions of a Queer by Kay Kassirer</p>
            <br/>
            <p className={css(ST.itemDescription)}>
                This is the first ever publication by WE FLIP TABLES! PRESS, as well as,
                the very first book released by Kay Kassirer. <a 
                    href="http://wefliptables.bigcartel.com/product/confessions-of-a-queer-by-kay-kassirer">
                    You can buy it online for only $10!
                </a>
            </p>
            <p className={css(ST.itemDescription)}>
                <br/>~~~~~<br/><br/>
                Kay has other merch too, that they bring with them to their performances.
            </p>
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
    pic: {
        maxHeight: "500px",
    },
    itemTitle: {
        fontSize: "30px",
        textAlign: "center",
        margin: "10px",
    },
    itemDescription: {
        lineHeight: "1.2",
        margin: "auto",
        textAlign: "center",
        width: "80%",
    }
});

module.exports = Merch;
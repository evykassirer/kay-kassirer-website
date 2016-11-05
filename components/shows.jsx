const { StyleSheet, css } = require('../lib/aphrodite.js');
const React = require('react');
const moment = require('moment');

const SS = require('../styles.js');

const RP = React.PropTypes;

const Header = require("./header.jsx");

const Show = React.createClass({
    propTypes: {
        details: RP.shape({
            startDate: RP.any.required,
            endDate: RP.any,
            title: RP.string.required,
            location: RP.string.required,
            linkToEvent: RP.string.required,
            blurb: RP.string.required,
            image: RP.string.required,
            id: RP.number.required,
        })
    },
    render: function() {
        const details = this.props.details;
        return <div className={css(ST.oneShow)}>
            <a href={details.linkToEvent} className={css(ST.eventTitle)}>
                {details.title}
            </a>
            <div className={css(ST.timeAndPlace)}>
                <span className={css(ST.boldText)}>When:</span> {details.endDate ?
                    details.startDate.format("MMM D") + " to " +
                        details.endDate.format("MMM D, YYYY") :
                    details.startDate.format("MMM D, YYYY @ h:mm A")}
            </div>
            <div className={css(ST.timeAndPlace)}>
                <span className={css(ST.boldText)}>Where: </span> {details.location}
            </div>
            <div className={css(ST.blurbBox)}>
                <image
                    src={details.image.startsWith("http") ? details.image : 'images/shows/' + details.image}
                    className={css(ST.eventIcon)}
                />
                <span className={css(ST.eventBlurb)}>{details.blurb}</span>
            </div>
        </div>;
    },
})

const Shows = React.createClass({
    render: function() {
        const upcomingShows = LIST_OF_SHOWS.filter(function(e) {
            if (e.endDate) {
                return e.endDate.isSameOrAfter(moment());
            }
            return e.startDate.isSameOrAfter(moment());
        }).sort(function(a, b) {
            if (a.startDate.isBefore(b.startDate)) {
                return -1;
            } else if (b.startDate.isBefore(a.startDate)) {
                return 1;
            }
            return 0;
        });

        const pastShows = LIST_OF_SHOWS.filter(function(e) {
            if (e.endDate) {
                return e.endDate.isBefore(moment());
            }
            return e.startDate.isBefore(moment());
        }).sort(function(a, b) {
            if (a.startDate.isBefore(b.startDate)) {
                return 1;
            } else if (b.startDate.isBefore(a.startDate)) {
                return -1;
            }
            return 0;
        });
        console.log("upcoming!", upcomingShows);

        return <div className={css(ST.page)}>
            <Header page="shows"/>
            <div className={css(ST.pageContent)}>
                <div className={css(ST.showsHeader)}>UPCOMING SHOWS</div>
                {upcomingShows.map(function(result) {
                    return <Show details={result} key={result.id}/>;
                })}
                <div className={css(ST.showsHeader)}>PAST SHOWS</div>
                {pastShows.map(function(result) {
                    return <Show details={result} key={result.id}/>;
                })}
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
    eventTitle: {
        fontSize: "25px",
    },
    blurbBox: {
        marginTop: "20px",
    },
    eventBlurb: {
        display: "inline-block",
        fontSize: "16px",
        lineHeight: 1.5,
        marginLeft: "30px",
        verticalAlign: "middle",
        width: "50%",
    },
    eventIcon: {
        maxWidth: "40%",
        verticalAlign: "middle",
    },
    oneShow: {
        margin: "20px",
    },
    timeAndPlace: {
        marginTop: "10px",
    },
    boldText: {
        fontWeight: "bold",
    },
    showsHeader: {
        color: SS.colors.teal.light,
        fontSize: "30px",
        fontWeight: "bold",
        margin: "20px",
    },
});

const LIST_OF_SHOWS = [
    {
        startDate: moment("April 27 16", "MMMM DD YY"),
        endDate: moment("April 30 16", "MMMM DD YY"),
        title: "Canadian Individual Poetry Slam",
        location: "Vancouver",
        linkToEvent: "http://versesfestival.ca/about-verses/poetry-slam/",
        blurb: `Kay competed as one of 40 poets from across the nation
            in a large-scale national event to determine the best slammer
            in Canada. They performed on the finals stage and placed 8th!
            CIPS is sponsored by SpoCan (Spoken Word Canada),
            the governing body of Canadian poetry slam.`,
        image: 'CIPS2016.jpeg',
        id: 1,
    },
    {
        startDate: moment("June 9 16 9:00 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "KAY Kassirer, ALAIN Ginsberg, Basura BABY, Cecily Schuler, Eunb1!poetry @ Holy Underground",
        location: "Holy Underground, 2021 Maryland Ave, Baltimore, Maryland",
        linkToEvent: "https://www.facebook.com/events/1112998162100890/",
        blurb: `$5 show, Canada is real far away!
            Doors at 9, show will start at 930!
            Might do like one smoke break? but also show up on time because this is
            Not To Be Missed. ---
            ACCESSIBILITY NOTICE: There is a short set of stairs to enter the building,
            and chairs will be available once inside. If you need assistance with the stairs let Alain Ginsberg know and they will help you.`,
        image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/13254278_10154226035423817_3240621814156479362_n.jpg?oh=a048662a54e56c7c1a1dbc5a0319dfea&oe=586DD815',
        id: 2,
    },
    {
        startDate: moment("May 26 16 7:30 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Regina Word Up! Youth Stage Season Closer ft Kay Kassirer",
        location: "Creative City Centre, 1843 Hamilton St., Regina, Saskatchewan",
        linkToEvent: "https://www.facebook.com/events/189633021372214/",
        blurb: `From 5:00 pm - 6:00 pm participate in the workshop
            "Spoken Word & Mental Health - Writing to survive" presented by feature
            artist Kay Kassirer. From 6:00 pm -7:30 pm we will eat food!  At 7:30
            doors open for Youth Stage which starts around 8.
            Admission is $5 + GST or PWYC (No one turned away.)`,
        image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/10933751_853644418011744_989745671437084657_n.png?oh=7161cb9e4c6e5a2e7ddbee933b576ed8&oe=583DEAA6',
        id: 3,
    },
    {
        startDate: moment("May 29 16 7:30 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Tonight It's Poetry ft. Kay Kassirer",
        location: "The Woods Ale House - 148 2nd Ave North, Saskatoon, Saskatchewan",
        linkToEvent: "https://www.facebook.com/events/1528837284083651/",
        blurb: `Tonight it's Poetry is Saskatoon's only weekly poetry series.
            This week featuring Kay! $5 // 19+`,
        image: 'https://scontent-yyz1-1.xx.fbcdn.net/t31.0-8/13483135_672549602897119_8573873878527753570_o.png',
        id: 4,
    },
    {
        startDate: moment("June 3 16", "MMMM DD YY"),
        endDate: moment("June 5 16", "MMMM DD YY"),
        title: "Capturing Fire - International Queer Poetry Summit & Slam",
        location: "Washington, DC",
        linkToEvent: "https://capfireslam.org/",
        blurb: `Capturing Fire is the only international Queer Spoken Word Slam.
            In its 6th year, The literary event showcases poets from North America
            and The United Kingdom. Kay placed second and was the Queer Cookie Slam Champion.`,
        image: 'https://duncantarmstrong.files.wordpress.com/2015/01/fire.jpg',
        id: 5,
    },
    {
        startDate: moment("July 3 16 7:00 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Throw Poetry Collective July Slam - Featuring Kay Kassirer",
        location: "Le Divan Orange - 4234 Boulevard Saint-Laurent, Montreal, Quebec",
        linkToEvent: "https://www.facebook.com/events/1750362858569324/",
        blurb: `Sign up for the open mic and competition starts at 7,
            the show starts at 8. All competing poets must have two poems.
            Entry is $5 for Students and members of the Quebec Writers Federation;
            $7 for everyone else. `,
        image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/13495090_1145420682147549_2061438658706155183_n.jpg?oh=5ba66a138e34770e66ed662d2db76589&oe=58850BC8',
        id: 6,
    },
    {
        startDate: moment("July 8 16 7:30 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "St. Catharines Poetry SLAM July ft Kay Kassirer",
        location: "Mahtay Café & Lounge - 241 St. Paul Street, Saint Catharines, Ontario",
        linkToEvent: "https://www.facebook.com/events/259608111062392/",
        blurb: `The St. Catharines POETRY SLAM is a monthly competitive spoken word event.
            Doors @ 7:30 pm // $5 // Open mic @ 8pm followed by a 2 round slam with
            Kay featuring between rounds. `,
        image: 'https://static.youcaring.com/api/uploads/fundraisers/640475/de7a000b-8701-403c-85cb-4ccffeb29e27_profile.jpg',
        id: 7,
    },
    {
        startDate: moment("July 10 16 6:30 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Spoken Weird Open Mic & Poetry Slam",
        location: "45 Queen St, Oshawa, Ontario - in the auditorium of the Arts Resource ",
        linkToEvent: "https://www.facebook.com/events/247143885658618/",
        blurb: `Come on down to Spoken Weird Open Mic & Poetry Slam to help kick off the
            summer right. This month, featuring the fantastical Kay Kassirer!
            // Open mic // Slam starts @ 6:30pm // Cover: $6`,
        image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/13428623_1037278893007126_7971140840243997270_n.jpg?oh=739405f23f5a351fcbc8d2dbc78af5be&oe=58729CFF',
        id: 8,
    },
    {
        startDate: moment("July 6 16 7:00 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "WordSpell Spoken Word Showcase/Open Mic PRIDE TRIBUTE feat. Rabbit Richards & Kay Kassirer!",
        location: "Free Times Cafe - 320 College Street, Toronto, Ontario",
        linkToEvent: "https://www.facebook.com/events/950791465037620/",
        blurb: `The WordSpell Collective runs the only series bringing together
            talented established and emerging trans/cis women and gender non-binary
            spoken word artists on a recurring basis in Toronto.
            // Doors: open at 7 pm | Open Mic (open to all women and gender non-binary
                folks) sign up at 7:30 | Show at 8 // Tickets at door: $6 and up (cash)
            // ALL ages & genders welcome in the audience!`,
        image: 'https://pbs.twimg.com/profile_images/2725509143/bba42a63b4a18094f02a1004a82dc14d_400x400.png',
        id: 9,
    },
    {
        startDate: moment("July 26 16 6:30 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Shab-e She'r (Poetry Night) XLII feat. Kay Kassirer & John Portelli ",
        location: "Beit Zatoun - 612 Markham St, Toronto, Ontario",
        linkToEvent: "https://www.facebook.com/events/620619974765278/",
        blurb: `The most diverse poetry reading and open mic in Toronto
                At Shab-e She’r (Poetry Night) we don’t just wait for diversity to
                happen: we actively invite it. // Doors open 6:15 p.m. //
                Open-mic sign-up 6:30 p.m. // Show 7 p.m. // Admission: $5`,
        image: 'http://beitzatoun.org/wp-content/uploads/2014/05/XVIII-Poster-B-1.jpg',
        id: 10,
    },
    {
        startDate: moment("July 14 16 9:00 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Poets and Pancakes",
        location: "Flapjack's Canadian Diner - 354A PRESTON ST., Ottawa, Ontario",
        linkToEvent: "https://www.facebook.com/events/146990275709125/",
        blurb: `Just Peace, Jon Hedderwick, Kay Kassirer, and Anthony Bansfield //
        Doors open at 9pm // $10`,
        image: 'urban-legends.png',
        id: 11,
    },
    {
        startDate: moment("July 11 16 7:00 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "(workshop) Spoken Word & Mental Health: Writing to Survive",
        location: "1506 Quantum-Nano Centre, UW, Waterloo, Ontario",
        linkToEvent: "https://www.facebook.com/events/265803637112986/",
        blurb: `Free workshop: Join us at an inner journey of validation as we
            write about the struggles and traumas we have faced. Learn more about
            yourself and your mental health as Kay leads us in a series of writing
            exercises. Come prepared to hear some heavy stories, and share your own
            if you'd like. All skill levels welcome.`,
        image: 'http://kaykassirer.com/images/Kay-banner.jpg',
        id: 12,
    },
    {
        startDate: moment("July 18 16 7:30 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "The Poetry Show ft Kay Kassirer & Danielle Altrogge",
        location: "The Mansion Kingston - 506 Princess Street, Kingston, Ontario",
        linkToEvent: "https://www.facebook.com/events/1764470660467376",
        blurb: `FThis is a call to all wordsmiths, literary lovers and other
        creative weirdos to converge for the verbal wizardry we call a poetry show!
        // Doors at 7:30pm // Show at 8pm // Admission: $12/pay what you can
        // All ages!`,
        image: 'https://scontent-yyz1-1.xx.fbcdn.net/t31.0-8/13497696_10101468320656241_4002979172575316259_o.jpg',
        id: 13,
    },
    {
        startDate: moment("July 18 16 3 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Workshop: Exploring Gender & Sexuality through Spoken Word",
        location: "room 352, John Deutsch University Center, 99 University Ave, Kingston, Ontario",
        linkToEvent: "https://www.facebook.com/events/1615620208729426/",
        blurb: `Delve into your identity as we write about our experiences with gender and
        sexuality. Kay Kassirer will lead us through writing exercises to help us better
        understand ourselves and others. Come prepared to hear some personal stories, and
        share your own if you’d like. All skill levels welcome. Just bring a pen/paper and
        your lovely selves. // Admission is $10/pay what you can`,
        image: 'http://kaykassirer.com/images/Kay-banner.jpg',
        id: 14,
    },
    {
        startDate: moment("August 13 16 6 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "The Loud Mouth Free 4 Yr. Anniversary Slam! Feat. Casandra Faith & Kay Kassirer!",
        location: "Howie & Son's Pizza Parlor, 2430 S Mooney Blvd, Visalia, California",
        linkToEvent: "https://www.facebook.com/events/1757668861178173/",
        blurb: ` It's been 4 Amazing Years since we first started hosting slams in Visalia
        and have accomplished so much in that time frame. So for one night, we are gonna
        celebrate and try to pull off our BIGGEST SHOW EVER the best way we know how:
        With a Slam Competition! // 3 min time limit // 3 rounds // show is free //
        competing poets pay $5 to go towards the cash prize!`,
        image: 'https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-9/13645295_935384909903440_603828627364549639_n.jpg?oh=920382427ba7c68abe5726990e2dd339&oe=58364098',
        id: 15,
    },
    {
        startDate: moment("August 8 16 7 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Human Experience featuring Kay Kassirer",
        location: "Hop Nuts Brewing - 1120 S Main St, Ste 150, Las Vegas, Nevada",
        linkToEvent: "https://www.facebook.com/events/1093721864029427/",
        blurb: `Come join us at The Human Experience, Las Vegas' longest running weekly open mic.
        Bring your words, instruments, beats, jokes, or just your wonderful self, and join our Human
        Experience community! // 21+ // Free // 6:30pm sign up // 7:00pm open mic start`,
        image: 'https://scontent-yyz1-1.xx.fbcdn.net/t31.0-8/13669420_1034292089941885_6891007103373071983_o.jpg',
        id: 16,
    },
    {
        startDate: moment("August 15 16 4 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Word Church featuring Kay Kassirer",
        location: "Santa Cruz Food Lounge - 1001 Center St, Ste 1, Santa Cruz, California",
        linkToEvent: "https://www.facebook.com/events/1093721864029427/",
        blurb: `4:00pm - Free Writing Workshop // 5:00pm - Legendary Collective Community Check-In //
                5:30pm - Sign Up List opens (also Food is Served!!) // 6:00pm - Poetry Begins!!!!! //
                7:15pm - This Week's Featured Reader ~ Kay Kassirer // entrance by donation, all money goes to Kay`,
        image: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/11988779_1716760371879495_3958066578436902824_n.jpg?oh=bb3566c57cb759731ae6df7fbccaa6b9&oe=581F1ECA',
        id: 17,
    },
    {
        startDate: moment("August 20 16 5 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "The Burning Tale: Chapter XVII, featuring Kay Kassirer",
        location: "Studio Bongiorno - 500 Lincoln St, Santa Clara, California",
        linkToEvent: "https://www.facebook.com/events/1133347880054950/",
        blurb: `5–7pm: Mighty Mike McGee will facilitate a writing workshop at Studio Bongiorno for writers of all shapes and sizes.
        Admission is $5 and is split between the venue and the facilitator. //
        7–9pm: Potluck & open-mic sign-up. Bring a dish and mingle! //
        9–11:59+ — The Burning Tale: Chapter XVII. Admission is $5. Featuring special guest, Kay Kassirer`,
        image: 'https://scontent.fsnc1-1.fna.fbcdn.net/t31.0-8/13925969_621462974683005_3990412832183405669_o.jpg',
        id: 17,
    },
    {
        startDate: moment("September 22 16 8 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Tongues of Fire featuring Kay Kassirer",
        location: "Wheelies Motorcycles & Cafe -  2620 Rock Bay Ave, Victoria, BC",
        linkToEvent: "https://www.facebook.com/events/1598083047150883/",
        blurb: `Tongues of Fire is our twice monthly spoken word open mic with a feature performance.
        There are 12 spots on the open mic and each performer gets 5 minutes maximum. Sign up for the open mic is
        at 7:30pm and the show starts at 8pm. Suggested donation: $6-10 sliding scale.`,
        image: 'https://pbs.twimg.com/profile_images/3350544597/dd64754a96f03f1d48d7d2d7b9ff0e2a_400x400.jpeg',
        id: 18,
    },
    {
        startDate: moment("September 11 16 6:30 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Portland Poetry Slam featuring Kay Kassirer",
        location: "Portland Center Stage at The Armory - 128 NW 11th Ave Portland, OR",
        linkToEvent: "https://www.facebook.com/events/1200766623298778/",
        blurb: `6:30 PM/suggested donation $5/Portland Center Stage/all ages --- also Where Are You Press is
        running a FREE, OPEN TO THE PUBLIC writing workshop before every slam! It is at 5 PM - you come to Portland
        Center Stage and ask the concierge and you get to go to a fancy hidden room and have interesting and educational
        discussions and prompts about writing and how to do it bigger, weirder, better.`,
        image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/10416585_10152188577417793_6383848504610993430_n.jpg?oh=c0280912c7e8cee386b1efd28c4d0505&oe=5839224A',
        id: 19,
    },
    {
        startDate: moment("September 6 16 7:30 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Seattle Poetry Slam presents the first WOWPS Qualifier!",
        location: "Seattle Poetry Slam - 1114 Howell St, Seattle, Washington",
        linkToEvent: "https://www.facebook.com/events/1322413457798688/",
        blurb: `Doors @ 7pm, Show @ 7:30pm // a DOUBLE feature: Marshall "Gripp" Gillson and Kay Kassirer // an open mic
        (OPEN to ALL Poets) // and the first Woman of the World Poetry Slam Qualifier!  // $5 // 21 + ID required //
        **Competition at WOWps is limited to poets who live their lives as women. Qualified poets include female assigned
        or identified individuals who are PSi members and are 18+ years of age, including gender
        non-conforming individuals.**`,
        image: 'https://scontent-lga3-1.xx.fbcdn.net/t31.0-8/14053791_1773725279563844_3030242262007278413_o.jpg',
        id: 20,
    },
    {
        startDate: moment("September 15 16 6:45 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Slamapalooza September 2016 - Featuring Kay Kassirer",
        location: "KSA GrassRoots Cafe - 12666 72nd Avenue, Surrey, British Columbia",
        linkToEvent: "https://www.facebook.com/events/620730448102203/",
        blurb: `The new semester has started and so begins the new season of Slamapalooza!
        Come join us for our September SEASON OPENER! As always the slam will consist of two
        3 minute rounds separated by a performance by our amazing feature performer Kay Kassirer!
        Signup for the slam happen from 6:30pm-7:15pm.
        The cafe and washrooms are wheelchair accessible, however the stage is not.`,
        image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/10443360_10152433815722768_3230317547320504308_n.jpg?oh=f414fd647ad7e90bd965d5bc622edb88&oe=583A8637',
        id: 21,
    },
    {
        startDate: moment("September 19 16 7:00 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Kay Kassirer features at the Van Slam",
        location: "Cafe Deux Soleils - 2096 Commercial Drive, Vancouver, British Columbia",
        linkToEvent: "https://www.facebook.com/events/657478454408982/",
        blurb: `A two-minute round of 12 poets, a one-minute round of 6 poets,
        and then a four-minute round of 3 poets. Cut from below, clean slate each round.
        Cafe Deux Soleils and the Van Slam strive to be a trans friendly place and a hate speech
        free zone. Help us with that. We also acknowledge that this event takes place on unceded
        First Nations Territory // cash ONLY // Get there before 7pm if you want a seat or want to slam`,
        image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/11046497_10153389999245450_1136118491117114332_n.jpg?oh=f5a0768099af0c6709a389011663f00b&oe=583A208D',
        id: 22,
    },
    {
        startDate: moment("October 12 16", "MMMM DD YY"),
        endDate: moment("October 15 16", "MMMM DD YY"),
        title: "Individual World Poetry Slam",
        location: "Flagstaff, AZ",
        linkToEvent: "http://iwps.poetryslam.com/",
        blurb: `The Individual World Poetry Slam is a four day poetry slam
        festival created by PSi giving poets the opportunity to compete outside
        of a team competition for the title of the Individual World Poetry Slam
        Champion. The event brings world acclaimed feature performers,
        poetry and performance workshops, specialty slams, open mics, and events
        for all ages to Flagstaff, AZ. Kay came 25th out of 96 poets.`,
        image: 'https://scontent-lga3-1.xx.fbcdn.net/t31.0-8/13767254_1033053813436848_3291862825680207589_o.jpg',
        id: 23,
    },
    {
        startDate: moment("October 23 16", "MMMM DD YY"),
        endDate: moment("October 30 16", "MMMM DD YY"),
        title: "Canadian Festival of Spoken Word",
        location: "Winnipeg, Manitoba",
        linkToEvent: "http://cfsw.ca/",
        blurb: `From Oct 23-30 the biggest poetry slam tournament in the country,
        featuring 22 teams from Halifax to Victoria, will be held amongst a week
        of showcases, workshops and parties.  `,
        image: 'http://victoriaeventcentre.ca/wp-content/uploads/2014/02/10689463_355236511299156_2340740808886682990_n-300x300.jpg',
        id: 24,
    },
];

module.exports = Shows;

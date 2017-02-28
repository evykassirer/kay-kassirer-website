const { StyleSheet, css } = require('../lib/aphrodite.js');
const React = require('react');
const moment = require('moment');

const SS = require('../styles.js');

const RP = React.PropTypes;

const Header = require("./header.jsx");

const LIST_OF_SHOWS = [
    {
        startDate: moment("March 24 17 9:00 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "BattleBorn Slam featuring Kay Kassirer",
        location: "PublicUs Coffee Shop - 1126 Fremont St, Las Vegas, NV",
        linkToEvent: "https://www.facebook.com/battleborn.slam",
        blurb: `Show is all ages, 7-9 pm, $5.00 donation.`,
        image: 'battleborn.jpeg',
        id: 34,
    },
    {
        startDate: moment("March 22 17 8:00 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "FlagSlam featuring Kay Kassirer",
        location: "FireCreek Coffee Company - 22 Historic Route 66, Flagstaff, AZ",
        linkToEvent: "https://www.facebook.com/flagstaffpoetryslam/",
        blurb: `Every Wednesday - Signup at 7:00, Starts at 8:00!`,
        image: 'flagslam.jpg',
        id: 33,
    },
    {
        startDate: moment("March 15 17", "MMMM DD YY"),
        endDate: moment("March 18 17", "MMMM DD YY"),
        title: "Women of the World Poetry Slam 2017",
        location: "Dallas, TX",
        linkToEvent: "http://www.wowps2017.com/",
        blurb: `Kay will be volunteering at WOWPS | a performance poetry tournament
        designed for individual competition. The top poets will go on to finals
        to compete for the title of, The 2017 Women of the World Champion!`,
        image: 'wowps17.jpeg',
        id: 32,
    },
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
        image: 'snake.jpg',
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
        image: 'regina_word_up.jpg',
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
        image: 'TIP.png',
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
        image: 'capturing_fire.jpg',
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
        image: 'throw_poetry.jpg',
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
        image: 'stcatherines.jpg',
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
        image: 'spoken_weird.jpg',
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
        image: 'wordspell.png',
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
        image: 'Shab-e-Sher.jpg',
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
        image: 'workshop.jpg',
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
        image: 'the_poetry_show.jpg',
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
        image: 'workshop.jpg',
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
        image: 'loud_mouth.jpg',
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
        image: 'human_experience.jpg',
        id: 16,
    },
    {
        startDate: moment("August 15 16 4 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Word Church featuring Kay Kassirer",
        location: "Santa Cruz Food Lounge - 1001 Center St, Ste 1, Santa Cruz, California",
        linkToEvent: "https://www.facebook.com/events/485358481665466/",
        blurb: `4:00pm - Free Writing Workshop // 5:00pm - Legendary Collective Community Check-In //
                5:30pm - Sign Up List opens (also Food is Served!!) // 6:00pm - Poetry Begins!!!!! //
                7:15pm - This Week's Featured Reader ~ Kay Kassirer // entrance by donation, all money goes to Kay`,
        image: 'word_church.jpg',
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
        image: 'burning_tale.jpg',
        id: 18,
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
        image: 'tof.jpeg',
        id: 19,
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
        image: 'portland.jpg',
        id: 20,
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
        image: 'seattle_wowps.jpg',
        id: 21,
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
        image: 'slam-a-palooza.jpg',
        id: 22,
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
        image: 'vps.jpg',
        id: 23,
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
        image: 'iwps.jpg',
        id: 24,
    },
    {
        startDate: moment("October 23 16", "MMMM DD YY"),
        endDate: moment("October 30 16", "MMMM DD YY"),
        title: "Canadian Festival of Spoken Word",
        location: "Winnipeg, Manitoba",
        linkToEvent: "http://cfsw.ca/",
        blurb: `From Oct 23-30 the biggest poetry slam tournament in the country,
        featuring 22 teams from Halifax to Victoria, will be held amongst a week
        of showcases, workshops and parties. Kay made it to the final round at
        Underground Indies/NUPIC.`,
        image: 'cfsw.jpg',
        id: 25,
    },
    {
        startDate: moment("November 5 16 7:00 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "2016 Cascadia Regional Poetry Slam",
        location: "5608 Rainier Ave S, Seattle, Washington",
        linkToEvent: "https://www.facebook.com/events/1749495215310429/permalink/1771405956452688/",
        blurb: `The Cascadia Regional Poetry Slam brings together teams from all
        over the Northwest to compete in a tournament of the region's finest performance poetry. `,
        image: 'cascadia.jpg',
        id: 27,
    },
    {
        startDate: moment("January 5 17 6:00 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Slamlandia! Open Mic and Poetry Slam w/ Kay Kassirer Spotlight!",
        location: "2211 SE Hawthorne Blvd, Portland, Oregon",
        linkToEvent: "https://www.facebook.com/events/1253478781357278/",
        blurb: `Doors are at 6. Show at 6:30.
                Sign ups are also at 6 and it is first come, first serve.
                Get there on time to get a spot in the open mic or slam!
                There is a $0-1 suggested donation.`,
        image: 'slamandia.jpg',
        id: 28,
    },
    {
        startDate: moment("May 4 17 6:00 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Olympia People's Mic feat. Kay Kassirer",
        location: "Ben Moore's Restaurant - 112 4th Ave W, Olympia, Washington",
        linkToEvent: "https://www.facebook.com/events/652455218212837/",
        blurb: `Sign-ups for the open mic and slam start at 6pm; show starts at
        6:30 pm. We charge a $0-5 cover fee to pay our feature.
        www.oldgrowthpoetrycollective.org`,
        image: 'olympia.jpg',
        id: 29,
    },
    {
        startDate: moment("January 22 17", "MMMM DD YY "),
        endDate: moment("January 24 17", "MMMM DD YY "),
        title: "Queer Resurgence on Capitol Hill",
        location: "Capitol Hill in Seattle",
        linkToEvent: "http://www.queerpoetrycapitolhill.org/",
        blurb: `Kay competed and made it to the finals stage // "A three day
        all-ages poetry festival and competition open to those who identify as
        LGBTQ in the neighborhood of Capitol Hill in Seattle.  With the recent
        changes in the city, we are committed to reclaiming the neighborhood
        that was once Queer and bringing art back into Capitol Hill."`,
        image: 'queer_resurgence.png',
        id: 30,
    },
    {
        startDate: moment("March 14 17 8:00 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Weekly Real Talk Poetry and Spoken Word feat. Kay Kassirer",
        location: "Tribeca - 907 Houston Street, Fort Worth TX",
        linkToEvent: "https://www.facebook.com/Tribeca-FORT-WORTH-472964279406621/",
        blurb: ``,
        image: 'fort_worth.jpg',
        id: 31,
    },
];



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
                    src={'images/shows/' + details.image}
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

module.exports = Shows;

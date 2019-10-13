const { StyleSheet, css } = require('../lib/aphrodite.js');
const React = require('react');
const moment = require('moment');

const SS = require('../styles.js');

const RP = React.PropTypes;

const Header = require("./header.jsx");

const LIST_OF_SHOWS = [
    // {
    //     startDate: moment("March 19 19 7 PM", "MMMM DD YY h:mm A"),
    //     endDate: null,
    //     title: "",
    //     location: "",
    //     linkToEvent: "",
    //     blurb: ``,
    //     image: '',
    //     id: ,
    // },
    {
        startDate: moment("November 9 19 7 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "A Whore's Manifesto Book Reading + Q&A",
        location: "Babeland 707 East Pike St. Seattle, WA",
        linkToEvent: "https://www.eventbrite.com/e/book-party-with-kay-kassirer-editor-of-a-whores-manifesto-tickets-76371285571",
        blurb: `Kay Kassirer is a spoken-word poet, organizer, and activist who contributed to and edited A Whore's Manifesto: An Anthology of Writing and Artwork by Sex Workers. This is not a collection of sob stories of heartbroken whores. This is a testament of life at ground zero of sexual discourse, the songs of canaries in the coal mines of sex, gender, class, race and disability. Join Kay for a reading from the collection.`,
        image: 'good_vibrations.jpg',
        id: 80,
    },
    {
        startDate: moment("November 15 19 7 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Book Party with Kay Kassirer, Editor of A Whore’s Manifesto: An Anthology of Writing and Artwork by Sex Workers at Polk Good Vibrations",
        location: "Good Vibrations 1620 Polk Street (at Sacramento), San Francisco",
        linkToEvent: "https://www.facebook.com/events/1088174094706476/",
        blurb: `Not a collection of sob stories of heartbroken whores, A Whore's Manifesto: An Anthology of Writing and Artwork by Sex Workers is a testament of life at ground zero of sexual discourse, the songs of canaries in the coal mines of sex, gender, class, race and disability. Join us as we celebrate this one-of-a-kind anthology with Kay Kassirer, spoken word poet, organizer, activist, and contributor and editor of the anthology, as well as contributors J. Mork and Kristy Linn Billuni. Enjoy sips and bites while Kay reads from the collection, followed by Q and A, a book signing and 10% off shopping.`,
        image: 'good_vibrations.jpg',
        id: 79,
    },
    {
        startDate: moment("November 10 19 7:30 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "A Whore's Manifesto Book Reading + Q&A",
        location: "She Bop, 909 N Beech St, Portland",
        linkToEvent: "https://www.facebook.com/events/486713292109274/",
        blurb: `A Whore's Manifesto isn't a collection of sob stories of heartbroken whores. This is a testament of life at ground zero of sexual discourse, the songs of canaries in the coal mines of sex, gender, class, race, and disability. Join contributors Kay Kassirer, Julia Laxer, and Anna Suarez for a reading from the collection.`,
        image: 'whore_manifesto.jpg',
        id: 78,
    },
    {
        startDate: moment("October 29 19 7 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Whore's Manifesto Vancouver Launch Event",
        location: "Massey Books, 229 E Georgia st. Vancouver",
        linkToEvent: "https://www.facebook.com/events/969502480059686/",
        blurb: `Join us at Massy Books as Kay Kassirer reads from "A Whore's Manifesto: An Anthology of Writing and Artwork by Sex Work." There will also be performances by Q and Dominique Wakeland.`,
        image: 'massy_books.jpg',
        id: 77,
    },
    {
        startDate: moment("October 24 19 6:30 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "The Poetry Brothel: A Whore's Manifesto",
        location: "Bogart House 230 Bogart St, Brooklyn, NY",
        linkToEvent: "https://www.eventbrite.com/e/the-poetry-brothel-halloween-tickets-67908420915",
        blurb: `The Madame presents a rotating cast of poets in the lush interiors of a bordello, each operating within a carefully crafted character, who share their work in public readings, spontaneous eruptions of poetry, and most distinctly, as purveyors of private poetry readings on beds, chaise lounges and in private rooms. For a fee, all of the poets are available for these sequestered readings at any time during the event. Of course, any true bordello need a good cover; ours is an immersive cabaret featuring poetry, burlesque, live music, vaudeville, aerials, visual art, magic, and mysticism, with newly integrated themes, performances and installations at each event. This special event will double as the New York release of Thorntree Press'A Whore’s Manifesto: An Anthology of Writing and Artwork by Sex Workers, edited by Kay Kassirer, and will feature contributors to this anthology, including Robin Gow, Liv McKee, and Clementine Von Radics.`,
        image: 'poetry_brothel.jpeg',
        id: 76,
    },
    {
        startDate: moment("October 19 19 4 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Discovering Literature: Book Launch",
        location: "10C, 42 Carden St, Guelph",
        linkToEvent: "https://www.facebook.com/events/855737764802060/",
        blurb: `Celebrate the talent among us with readings from THREE established poets: local writer and performer Lisa Baird, youth organizer and advocate Kay Kassirer, and recently named Uganada’s best-selling author, Mugabi Byenka. Hear readings from and grab your own copies of Winter's Cold Girls (Baird), A Whore’s Manifesto (Kassirer) and Dear Philomena (Byenka)`,
        image: 'cfsw2019.png',
        id: 75,
    },
    {
        startDate: moment("October 2 19 7 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "A Whore's Manifesto - Book Launch",
        location: "PACE Society, 148 W Hastings, Vancouver",
        linkToEvent: "https://www.facebook.com/events/2459883280949424/",
        blurb: `Kay Kassirer is a spoken-word poet, organizer, and activist who contributed to and edited A Whore's Manifesto: An Anthology of Writing and Artwork by Sex Workers. This is not a collection of sob stories of heartbroken whores. This is a testament of life at ground zero of sexual discourse, the songs of canaries in the coal mines of sex, gender, class, race and disability. Join Kay for a reading from the collection as well as performances by Q and Dominique Wakeland.`,
        image: 'whore_manifesto.jpg',
        id: 74,
    },
    {
        startDate: moment("August 20 19", "MMMM DD YY"),
        endDate: moment("August 24 19", "MMMM DD YY"),
        title: "Voices of Today",
        location: "Toronto Media Arts Centre 32 Lisgar st. Toronto",
        linkToEvent: "https://voicesoftoday.ca",
        blurb: `Voices of Today is a four day festival with workshops, open mics, and showcases run by youth for youth. It is the  newest addition to the set of festivals run by Spoken Word Canada, and its goal is to bring together youth poets from all across this colonial nation to learn from community leaders and each other. Kay helps organize the festival, acting as executive director.`,
        image: 'vot2019.png',
        id: 73,
    },

    {
        startDate: moment("March 12 19", "MMMM DD YY"),
        endDate: null,
        title: "Patreon",
        location: "Patreon HQ, SF",
        linkToEvent: "https://patreon.com",
        blurb: `Kay performed at the Patreon office and sat on a panel of non-binary artists talking about their gender identity and their art.`,
        image: 'patreon.png',
        id: 72,
    },
    {
        startDate: moment("March 6 19", "MMMM DD YY"),
        endDate: null,
        title: "Poly Queer Love Ballad",
        location: "425-268 Keefer St (4th floor in the Sun Wah Building), Vancouver, BC",
        linkToEvent: "https://www.facebook.com/events/391173451642283/?event_time_id=391173454975616",
        blurb: `"Poly Queer Love Ballad is an intimate, edgy new musical merging slam poetry with catchy pop-folk tunes. Nina, a polyamorous bisexual poet, meets Gabbie, a monogamous lesbian songwriter, at Cafe Deux Soleil. With two microphones, a loop pedal, and array of instruments, they struggle to reconcile their fierce mutual attraction with their opposing perspectives on love.
        Kay was invited to open the show as a "sacrificial poet"`,
        image: 'poly-queer-love-ballad.jpg',
        id: 71,
    },
    {
        startDate: moment("April 25 19", "MMMM DD YY"),
        endDate: moment("May 4 19", "MMMM DD YY"),
        title: "Canadian Individual Poetry Slam",
        location: "Vancouver, BC, Canada",
        linkToEvent: "http://versesfestival.ca/about-verses/poetry-slam/",
        blurb: `"The Canadian Individual Poetry Slam (CIPS) is a dedicated large-scale national event where poets from coast to coast gather to compete and connect. Kay represented Vancouver Poetry Slam and placed 3rd in the competition.`,
        image: 'cips2019.jpg',
        id: 70,
    },
    {
        startDate: moment("May 7 19", "MMMM DD YY"),
        endDate: moment("May 11 19", "MMMM DD YY"),
        title: "Saskatoon Poetic Arts Festival",
        location: "Saskatoon, Saskatchewan, Canada",
        linkToEvent: "https://www.saskatoonpoeticarts.com/",
        blurb: `The Saskatoon Poetic Arts Festival is a week-long exploration of the power and potential of spoken word poetry. An ensemble of 10 artists from across Canada will engage in a week of workshops to learn new skills, expand on their existing talents, and collaborate with artists in other fields.
        Each night you’ll see the festival ensemble show off new skills and new poetic work, accompanied by a dynamic series of featured artists and marquee performances. It all builds to the Festival Finale, in which the ensemble perform a theatrical poetry show that they create together (all in one day!).`,
        image: 'saskatoonpoeticarts.png',
        id: 69,
    },
    {
        startDate: moment("May 31 19", "MMMM DD YY"),
        endDate: moment("June 1 19", "MMMM DD YY"),
        title: "Capturing Fire International Queer Poetry Slam & Summit",
        location: "Washington, DC",
        linkToEvent: "capfireslam.org",
        blurb: `Capturing Fire promotes trans and queer artists of the poetry slam and encourages allyship, risk and artistic career growth as poets make invaluable professional and personal friendships so that a Queer literary lineage is set in motion.`,
        image: 'capturing_fire.jpg',
        id: 68,
    },
    {
        startDate: moment("July 24 18", "MMMM DD YY"),
        endDate:  moment("July 28 18", "MMMM DD YY"),
        title: "Voices of Today",
        location: "Palmerston Library Theatre, Toronto, Ontario",
        linkToEvent: "http://voicesoftoday.ca",
        blurb: `Kay is the Executive Director for Voices of Today,
        a poetry festival run by youth for youth.`,
        image: 'vot.png',
        id: 67,
    },
    {
        startDate: moment("Sep 3 18 7 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "VanSlam Individual Playoffs!",
        location: "Cafe Deux Soleils - 2096 Commercial Drive, Vancouver, British Columbia",
        linkToEvent: "https://www.facebook.com/events/473177756535070/",
        blurb: `Kay won 1st place at Individual Poetry Slam finals in Vancouver,
        and will be repping Vancouver at Canadian Individual Poetry Slam 2019`,
        image: 'vps.jpg',
        id: 66,
    },
    {
        startDate: moment("October 10 18", "MMMM DD YY"),
        endDate: moment("October 13 18", "MMMM DD YY"),
        title: "Individual World Poetry Slam",
        location: "San Diego, CA",
        linkToEvent: "https://www.iwps2018.com/",
        blurb: `The Individual World Poetry Slam is a four day poetry slam
        festival created by PSi giving poets the opportunity to compete outside
        of a team competition for the title of the Individual World Poetry Slam
        Champion. Kay competed in this year's IWPS.`,
        image: 'iwps2018.png',
        id: 65,
    },
    {
        startDate: moment("June 22 18 7 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Voices of Today fundraiser ft. yes the poet and the VanSlam team and more",
        location: "echo house in vancouver",
        linkToEvent: "https://www.facebook.com/events/219048402220435/",
        blurb: `Join us on the 22nd at Echo House for a fundraiser in honour of
        the upcoming festival. With features by: yes the poet / Frankie McGee /
        Kay Kassirer / Rabbit Richards / jaye simpson`,
        image: 'vot.png',
        id: 64,
    },

    {
        startDate: moment("Dec 16 18 8 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Community Stage ft. Kay Kassirer & Jess Tollestrup",
        location: "Amigos Cantina - 806 Dufferin Avenue, Saskatoon, Saskatchewan",
        linkToEvent: "https://www.facebook.com/events/257690211558513/",
        blurb: `$5 // 19+ // No one turned away for lack of funds.
        // Our double feature is Kay Kassier and Jess Tollestrup!`,
        image: 'tonightitspoetry.jpg',
        id: 63,
    },
    {
        startDate: moment("Dec 16 18 2 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Poetry Workshops! (for all ages!)",
        location: "Amigos Cantina - 806 Dufferin Avenue, Saskatoon, Saskatchewan",
        linkToEvent: "https://www.facebook.com/events/1824102577695268/",
        blurb: `All ages welcome
        // 2:00 pm Kay Kassirer will help you explore gender and sexuality through your spoken word art!
        // 3:15 pm Jess Tollestrup will help you mix music and words into something new and exciting!
        // By donation - $10 per workshop or $15 for both, suggested donation`,
        image: 'poetryworkshops.jpg',
        id: 62,
    },
    {
        startDate: moment("Dec 14 18 7:30 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Regina Word Up Poetry Slam ft Kay Kassirer and Jess Tollestrup",
        location: "Creative City Centre - 1843 Hamilton St., Regina, Saskatchewan",
        linkToEvent: "https://www.facebook.com/events/2322389514443550/",
        blurb: `Youth Stage & All ages Open Mic // Doors 7:30pm // Show 8pm //
        $10+gst (PWYC) // All Ages`,
        image: 'reginawordup.jpg',
        id: 61,
    },
    {
        startDate: moment("Oct 28 18", "MMMM DD YY"),
        endDate: moment("Nov 3 18", "MMMM DD YY"),
        title: "15th Annual Canadian Festival of Spoken Word",
        location: "Guelph, Ontario",
        linkToEvent: "https://www.facebook.com/events/280177902838164/",
        blurb: `At CFSW 2018, Kay competed on the VanSlam team, won 1st in both prelims,
        won 3rd overall, and was re-elected as member at large for the Spoken Word Canada board`,
        image: 'cfsw17.png',
        id: 60,
    },
    {
        startDate: moment("September 14 18 7 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "The Vancouver Poetry Slam Fundraiser!",
        location: "Massy Books - 229 E. Georgia St., Vancouver, British Columbia",
        linkToEvent: "https://www.facebook.com/events/699829413710715/",
        blurb: `The Vancouver Poetry Slam Team 2018/2019 is comprised of Rabbit
        Richards, mitcholos touchie, Kay Kassirer & jaye simpson.`,
        image: 'vpsfundraiser.jpg',
        id: 59,
    },
    {
        startDate: moment("July 2 18 7 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Vancouver Poetry Slam featuring Kay Kassirer!",
        location: "Cafe Deux Soleils - 2096 Commercial Drive, Vancouver, British Columbia",
        linkToEvent: "https://www.facebook.com/events/783579622030258/",
        blurb: `The Vancouver Poetry Slam has been wowing audiences since 1996,
        making it the longest-running poetry slam in Canada.
        It is a program of the non-profit organization, Vancouver Poetry House.`,
        image: 'vps.jpg',
        id: 58,
    },
    {
        startDate: moment("April 26 18", "MMMM DD YY"),
        endDate: moment("April 27 18", "MMMM DD YY"),
        title: "Canadian Individual Poetry Slam",
        location: "Vancouver",
        linkToEvent: "http://versesfestival.ca/about-verses/poetry-slam/",
        blurb: `The Canadian Individual Poetry Slam (CIPS) is a dedicated
        large-scale national event to determine the best slammer in Canada.
        Kay volunteered as Venue Captain, managing volunteers at preliminary bouts.`,
        image: 'cips2018.jpg',
        id: 57,
    },
    {
        startDate: moment("April 23 18 7 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "2018 Van Slam Team Finals",
        location: "The Wise Hall & Lounge - 1882 Adanac Street, Vancouver, British Columbia",
        linkToEvent: "https://www.facebook.com/events/602937626721294/",
        blurb: `Kay competed at the Vancouver Poetry Slam finals, making it onto the 2018 VanSlam team along with Rabbit Richards, mitcholos touchie, and jaye simpson. The team went on to place 3rd at the Canadian Festival of Spoken Word`,
        image: 'vps.jpg',
        id: 56,
    },
    {
        startDate: moment("April 5 18 6 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Olympia People's Mic Feat. Kay Kassirer and Semifinal Slam!",
        location: "Shirro’s Plate - 3432 Cherry Blossom Dr NE, Olympia, Washington",
        linkToEvent: "https://www.facebook.com/events/1125462677595391/",
        blurb: `Come see the amazing poets who've competed throughout our season
        slam again to win places in the grand slam! This week's event will include an
        open mic, semifinal slam, and feature from Kay Kassirer`,
        image: 'olympia2.jpg',
        id: 55,
    },
    {
        startDate: moment("Jan 24 18", "MMMM DD YY"),
        endDate: null,
        title: "[Winner of] Vancouver Women of the World Poetry Slam quailfier",
        location: "The Wise Hall & Lounge - 1882 Adanac Street, Vancouver, British Columbia",
        linkToEvent: "https://www.facebook.com/events/381516675630511/",
        blurb: `Kay was the poet with the highest cumulative score and will be this year's
        Vancouver Women’s Poetry Slam Champion and WOWPS Representative.`,
        image: 'wowps2018.jpg',
        id: 54,
    },
    {
        startDate: moment("March 19 18 7 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Human Experience feat Kay Kassirer",
        location: "HumanExperienceLV - 1009 S MAIN STREET, Las Vegas, Nevada",
        linkToEvent: "https://www.facebook.com/events/1303699903064222/",
        blurb: `Come join us at The Human Experience, Las Vegas' longest running weekly open mic. Our mission is to be the action of Love through Art, Music, Poetry, and Culture. Bring your words, instruments, beats, jokes, or just your wonderful self, and join our Human Experience community!
        // FREE EVENT //  21+
       `,
        image: 'human_exp_LV.jpg',
        id: 53,
    },
    {
        startDate: moment("March 14 18 7:30 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Poetry Slam ft. Kay Kassirer",
        location: "Write About Now - 411 Westheimer Rd, Houston, Texas",
        linkToEvent: "https://www.facebook.com/events/941660595985711/",
        blurb: `www.wanpoetry.com //
        Cover: $5 Cash, $6 Card
       `,
        image: 'write-about-now.jpg',
        id: 52,
    },
    {
        startDate: moment("March 27 18 6 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Word Humboldt Ft. Kay Kassirer",
        location: "Northtown Coffee - 1603 G St, Arcata, CA",
        linkToEvent: "https://www.facebook.com/events/1248352848628165/",
        blurb: `
        Hottest Spoken Word Open Mic in Humboldt County, California
        Word Humboldt is a space for you to speak your mind, be heard,
        be free and enjoy yourself away from the stress of the week.
        So crack open your notebook, freshen up your freestyle and come join
        us for a night of spoken word, good times and community at Northtown Coffee!
       `,
        image: 'word_humboldt.jpg',
        id: 51,
    },
    {
        startDate: moment("March 24 18 6 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "The Loud Mouth Death Match Slam! feat. Kay Kassirer!",
        location: "Howie & Son's Pizza Parlor - 2430 S Mooney Blvd, Visalia, CA",
        linkToEvent: "https://www.facebook.com/events/751895455015140/",
        blurb: `
        We're bringing together 8 poets to enter a bracketed style competition
        to go head-2-head against their fellow poets! By the end of the night,
        only two poets shall be left standing, but there can only be 1 Champion!
        Pajama attire is highly recommended! All competing poets must wear pajamas,
        or face consequences! Poets who don't wear pajamas are subject to the
        Wheel of Misery! Along with our Death Match antics, we will have Kay as
        our special feature! // Cost: $5, $3 w Student ID
       `,
        image: 'loud_mouth2.jpg',
        id: 50,
    },
    {
        startDate: moment("Jan 6 18 3 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "SCPS Poetry Workshop Series ft Kay Kassirer And Linette Wade",
        location: "To Be Determined (somewhere in St Catherines)",
        linkToEvent: "https://www.facebook.com/events/576643466011577/",
        blurb: `
        New to poetry and want help starting out? Have a bunch of work you've been sitting on and need some help with direction?
        Been writing and performinh poetry for a while but want to gain some new skills?
        Come join us for the first of a workshop series we're hoping to make a semi regular fixature for the SCPS scene!
        This particular workshop will be lead by the amazing Kay Kassirer and the wonderful Linette Wade!
        Entry: $5 - $10 or PWYC`,
        image: 'stcatherines.jpg',
        id: 49,
    },
    {
        startDate: moment("Jan 6 18 6 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Hot Damn It's a Queer Slam St Catharines feat Kay & Linette",
        location: "Fine Grind Café - 37 James St, St. Catharines, ON",
        linkToEvent: "https://www.facebook.com/events/1592704924147359/",
        blurb: `
        Thank you St Catharines Poetry Slam for bringing us back.
        So proud to be having our Season 2 winner Kay Kassirer featuring with
        the electrifying Linette Wade - we've been so excited for this duo feature!
        Sign up for the open mic or the 2 round poetry slam. We also provide mardi gras
        beads for those who would prefer not to be photographed. For more info on our southern
        ontario circuit, rules and grand prize visit www.queerslam.com - hit, the circuit winner
        is taken to Capturing Fire the International Queer Summit & Slam in Washington DC!`,
        image: 'hot_damn_k_l.jpg',
        id: 48,
    },
    {
        startDate: moment("Jan 3 18 4 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Workshop : Transcending gender with Kay Kassirer and Linette Wade",
        location: "Glad Day Bookshop - 499 Church Street, Toronto, ON",
        linkToEvent: "https://www.facebook.com/events/1592704924147359/",
        blurb: `Suggested donation $5-$10 //
        In this workshop, Linette and Kay will lead participants through a series of exercises to help them apply tangible concepts to their individual genders. Through prompts, Linette and Kay will encourage participants to dismantle gender in their writing, and to workshop their writing skills. This workshop will also include a close reading and discussion of poems that Linette and Kay believe best exemplify concepts of gender, and will end with the opportunity for participants to read what they wrote in the workshop, or to share something that they’ve written previously. Bring a writing implement of some kind and yourselves, and come prepared to ~ feel ~! While this workshop is designed to engage gender non conforming people in writing about their gender, cis people are also welcome to attend as long as they respect the space they’re being invited into as spectators and not participants.`,
        image: 'feather_anchor.jpg',
        id: 47,
    },
    {
        startDate: moment("Jan 2 18 7 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Open Mic at Dreams of Beans Feat. Kay Kassirer and Linette Wade",
        location: "Dreams of Beans Cafe - 138 Hunter Street W, Peterborough, ON",
        linkToEvent: "https://www.facebook.com/events/389238018183247/",
        blurb: `$5-10 (No one will be turned away for lack of funds) //
            Open Mic followed by Features (i.e. this is not a slam) //
            Doors: 7:00 p.m. //  Show: 7:30 p.m.`,
        image: 'comet_tour.jpg',
        id: 46,
    },
    {
        startDate: moment("Jan 3 18 8 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "WordSpell featuring Sheri-D Wilson, Kay Kassirer & Linette Wade!",
        location: "Free Times Cafe - 320 College Street, Toronto, ON",
        linkToEvent: "https://www.facebook.com/events/151814855452662/",
        blurb: `The WordSpell Collective runs the only series bringing together
        talented established and emerging trans/cis women and genderqueer spoken
        word artists on a recurring basis in Toronto. We are thrilled to bring
        you some of the most brilliant voices in spoken word // Show at 8 // Tickets $6 and up (cash)`,
        image: 'wordspell2.jpg',
        id: 45,
    },
    {
        startDate: moment("June 9 17", "MMMM DD YY"),
        endDate: moment("June 10 17", "MMMM DD YY"),
        title: "Capturing Fire - International Queer Poetry Summit & Slam",
        location: "Washington, DC",
        linkToEvent: "https://capfireslam.org/",
        blurb: `Capturing Fire is the only international Queer Spoken Word Slam.
            In its 6th year, The literary event showcases poets from North America
            and The United Kingdom.`,
        image: 'capturing_fire.jpg',
        id: 44,
    },
    {
        startDate: moment("June 18 17 8:30 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "PoetNY Open Mic ft Kay Kassirer",
        location: "Bowery Poetry Club - 308 Bowery, New York, NY",
        linkToEvent: "https://www.facebook.com/events/921611911306486/",
        blurb: `
        NYC's Poetry Open Mic, Hosted by Mason Granger.
        Signups and doors at 8pm. 20, 3-minute slots, first come, first served. //
        $10 admission. Advance discount tickets: $7
        http://www.brownpapertickets.com/event/2734821`,
        image: 'nyc_bowery.jpg',
        id: 43,
    },
    {
        startDate: moment("April 26 17 9:30 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Mashed Poetics at The Verses Festival: SPICE Girls",
        location: "1882 Adanac St, Vancouver, BC, Canada",
        linkToEvent: "https://www.facebook.com/events/126987397837264/",
        blurb: `
        Mashed Poetics is a night of spoken word and music mash up. We pick a
        music album, find a cover band and ask poets to write new poems based on
        the songs.

        This year we have 10 poets and a 9 piece SPICE GIRLS cover band. //

        Show starts at 9:30. Doors at 9. //

        Tickets are $10 in advance through Brown Paper Tickets here and $12
        at the door (cash only).
        Get your advance tickets here: http://mashedpoeticsspice.bpt.me/`,
        image: 'spice_girls.jpg',
        id: 42,
    },
    {
        startDate: moment("April 1 17 3 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Workshops: Gender and Sexuality + Mental Health in Spoken Word",
        location: "iCafe Sauchiehall Street - 315-317 Sauchiehall Street, Glasgow, UK",
        linkToEvent: "https://www.facebook.com/events/137747370083257/",
        blurb: `Kay will be hosting two daytime workshops on the 1st of April
        at the iCafe Sauchiehall Street before their show at the Project Cafe
        that night!

        Exploring Gender& Sexuality through Spoken Word Poetry (1.5 hours)

        and

        Spoken Word & Mental Health: Writing to Survive (1.5 hours) //

        £10 per person per workshop.
        Attendees to both worshops will be given free entry to see Kay at
        The Project Cafe the same night.
        Advance tickets will be available from Friday 17th March`,
        image: 'glasgow.jpg',
        id: 41,
    },
    {
        startDate: moment("April 11 17 6:30 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Workshop: Exploring Gender&Sexuality through Spoken Word Poetry",
        location: "Mazalino - Reinwardtstraat 44, Amsterdam, Netherlands",
        linkToEvent: "https://www.facebook.com/events/1089185751193457/",
        blurb: `Delve into your identity as we write about our experiences with
        gender and sexuality.  Kay Kassirer will lead us through writing
        exercises to help us better understand ourselves and others. Come
        prepared to hear some personal stories, and share your own if you’d
        like. All skill levels welcome. Just bring a pen/paper and your lovely
        selves.`,
        image: 'mazalino.jpg',
        id: 40,
    },
    {
        startDate: moment("April 1 17 7:30 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Kay Kassirer UK Tour - w/ support from Age-Otori and Syd Briscoe",
        location: "The Project Cafe - 134 Renfrew Street, Glasgow, UK",
        linkToEvent: "https://www.facebook.com/events/1980036825572901/",
        blurb: `Come one, come all! Poetry and Music at the Project Cafe //
        For one night only in Glasgow, Kay will be perfoming a feature length
        set, with support from the wonderful Age-otori and Syd Briscoe. //
        £5 full price / £3 concession. BYOB - £2 corckage.`,
        image: 'glasgow.jpg',
        id: 39,
    },
    {
        startDate: moment("March 21 17 5:30 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Workshop: Exploring Gender&Sexuality through Spoken Word Poetry",
        location: "The Hive - 2222 N 16th St, Phoenix, AZ",
        linkToEvent: "",
        blurb: `Workshop followed by a short reading`,
        image: 'uk_workshop.jpg',
        id: 38,
    },
    {
        startDate: moment("April 2 17 6:30 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Spoken Word: Kay Kassirer, with Dominic Berry, plus open mic",
        location: "The Kings Arms - 11 Bloom Street, Salford, UK",
        linkToEvent: "https://www.facebook.com/events/1794082257582276/",
        blurb: `A night with a very special, internationally touring guest
        spoken word poet Kay Kassirer! // plus Manchester's adpoted queer, vegan
        poet Dominic Berry will be performing his 'No Tigers' show in a special
        support guest slot // plus short open mic section - 1st come, 1st
        reserved - email thepoetdominic@hotmail.co.uk to secure an open mic space //
        suggested donation £5 / £3 / free if you are skint.`,
        image: 'uk_open_mic.jpg',
        id: 37,
    },
    {
        startDate: moment("April 2 17 2 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Workshop: Exploring Gender&Sexuality through Spoken Word Poetry",
        location: "The Wonder Inn: 29 Shudehill, Manchester, UK",
        linkToEvent: "https://www.facebook.com/events/340206769714282/",
        blurb: `Delve into your identity as we write about our experiences with
        gender and sexuality.  Kay Kassirer will lead us through writing
        exercises to help us better understand ourselves and others. Come
        prepared to hear some personal stories, and share your own if you’d
        like. All skill levels welcome. Just bring a pen/paper and your lovely
        selves. suggested donation £5 / £3 / free if you are skint.`,
        image: 'uk_workshop.jpg',
        id: 36,
    },
    {
        startDate: moment("March 29 17 7:30 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Punk in Drublic Poetry I",
        location: "The Old Pint Pot - 2 Adelphi Street, Salford, UK",
        linkToEvent: "https://www.facebook.com/events/708215936022449/",
        blurb: `Want to help prevent homelessnes? Not adverse to chortling at
        punchlines and poems? We've just the thing...
        PUNK IN DRUBLIC POETRY is a new night where stand up comedy and
        performance poetry violently clash. It's door takings (£6) go to Mustard Tree,
         a wonderful group who are helping alleviate and eliminate the plight of
         Manchester's homeless. To bolster out charitable endeavours further-
         We'll be holding a charity raffle with prizes from The Comedy Store -
         Manchester, Zymurgorium Manchester Gin, The Old Pint Pot + more generous
         folks. `,
        image: 'drublic.jpg',
        id: 35,
    },
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
        startDate: moment("March 22 17 7:30 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "FlagSlam featuring Kay Kassirer",
        location: "FireCreek Coffee Company - 22 Historic Route 66, Flagstaff, AZ",
        linkToEvent: "https://www.facebook.com/events/1361444450569220/",
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
    {
        startDate: moment("Oct 22 17", "MMMM DD YY"),
        endDate: moment("Oct 28 17", "MMMM DD YY"),
        title: "Slam Master at Canadian Festival of Spoken Word 2017",
        location: "Peterborough, Ontario",
        linkToEvent: "https://www.facebook.com/events/506471826361842/",
        blurb: `The Peterborough Poetry Slam, in partnership with Public Energy
         and Spoken Word Canada are honoured to be hosting the Canadian Festival
         of Spoken Word (CFSW) this year in Nogojiwanong – Peterborough, Ontario.
         The festival will bring between 150 and 200 poets from across the country
         for a week of poetry slams, master classes and feature performances.
         22 teams form 7 provinces will compete to win the festival's Poetry
         Slam Tournament and be named Canada's 2017 Champions!`,
        image: 'cfsw17.png',
        id: 32,
    },
    {
        startDate: moment("Sept 20 17 7:00 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "UBC Slam - Featuring Kay Kassirer",
        location: "Benny's Bagels - 2503 W. Broadway, Vancouver, British Columbia",
        linkToEvent: "https://www.facebook.com/events/125376808192195/",
        blurb: `The slam is open to ANYONE. Whether you are a student at UBC,
        80 years old, a high school student, no matter. You are welcome and we
        are excited to have you! Open mic poems can be any time
        (please keep under/around 5 minutes.) Poems for the slam are a 3 minute
        time limit (plus 10 second grace period before points are deducted.)`,
        image: 'ubcslam.jpg',
        id: 33,
    },
    {
        startDate: moment("Sept 17 17 5:00 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Portland Poetry Slam iWPS Finals featuring Kay Kassirer!",
        location: "Portland Poetry Slam - 1036 NE Alberta, Portland, Oregon",
        linkToEvent: "https://www.facebook.com/events/179268899285072/",
        blurb: `It's time to select who will represent Portland at the Individual World Poetry Slam in Spokane Washington.
        ***No preticketing for this event! Please bring cash to donate
        at the door to help us get the winning poet to iWPS, or to buy merch
        from the poets! As always, it's a suggested $0-$5 donation - no one is
        ever turned away for lack of funds. *****`,
        image: 'portland_slam.jpg',
        id: 34,
    },
    {
        startDate: moment("July 17 17 4 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Word Church featuring Kay Kassirer",
        location: "Tannery Arts Center - 1050 River Street, Santa Cruz, California",
        linkToEvent: "https://www.facebook.com/events/494997667521346/",
        blurb: `4:00pm-- Free Writing Workshop led by Kay Kassirer //
                5:30pm-- Open Mic Sign-up List goes out //
                6:00pm-- Poetry begins! //
                7:00pm-- This Week's Featured Poet: Kay Kassirer`,
        image: 'word_church.jpg',
        id: 35,
    },
    {
        startDate: moment("July 12 17 9 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Mahogany Poetry feat. Kay Kassirer from Canada!",
        location: "Queen Sheba - 1704 Broadway, Sacramento, California",
        linkToEvent: "https://www.facebook.com/events/103590200283512/",
        blurb: `Please join me in welcoming an international poet to our stage!! Let's fill the seats!!
                Hosted by Khiry Malik and DJ Shonie Shon`,
        image: 'mahogany.jpg',
        id: 36,
    },
    {
        startDate: moment("June 24 17 8 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "The TPS double-bill feature -> Kay Kassirer + Rabbit Richards!",
        location: "The Drake Hotel - 1150 Queen Street West, Toronto, Ontario",
        linkToEvent: "https://www.facebook.com/events/1939294379624446/",
        blurb: `Pride Month is here, the Drake has been celebrating Pride all
         month long, your host Charlie just came back from the LGBTQ literary
         festival Capturing Fire, and on June 24 we have two incredible features
         who have been showing their Pride in their respective communities (and beyond)!
         // doors open at 7 // signup to slam/open mic 730 // show 8 // $7 cover // All ages`,
        image: 'tps.jpg',
        id: 37,
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
            {details.location && <div className={css(ST.timeAndPlace)}>
                <span className={css(ST.boldText)}>Where: </span> {details.location}
            </div>}
            <div className={css(ST.blurbBox)}>
                {details.image && <image
                    src={'images/shows/' + details.image}
                    className={css(ST.eventIcon)}
                />}
                {details.blurb && <span className={css(ST.eventBlurb)}>{details.blurb}</span>}
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

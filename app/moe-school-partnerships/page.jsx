"use client";

import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    useEffect,
    useRef,
    useState
} from "react";

import {

    ArrowRight,

    Baby,

    Blocks,

    Calculator,

    Cpu,

    FlaskConical,

    Trophy,

} from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

export default function SchoolPartnerships() {

    const pageRef = useRef(null);

    const [showSchools, setShowSchools] = useState(false);




    /*==================================================
        SCHOOL PROGRAMMES
    ==================================================*/

    const schoolProgrammes = [

        {
            className:"steam",

            icon: Blocks,

            title: "STEAM Interdisciplinary Programmes",

            description:
                "Hands-on interdisciplinary learning experiences combining Science, Technology, Engineering, Art and Mathematics through engaging school-based projects that inspire creativity, innovation and collaboration.",

            tags: [

                "STEAM",
                "Engineering",
                "Collaboration",

            ],

        },

        {
            className:"maths",

            icon: Calculator,

            title: "Real World Mathematics & Science",

            description:
                "Applying Mathematics and Science concepts to authentic real-world scenarios through modelling, financial literacy and investigative learning experiences.",

            tags: [

                "Mathematical Modelling",
                "Critical Thinking",

            ],

        },

        {
            className:"olympiad",

            icon: Trophy,

            title: "Olympiad Preparation",

            description:
                "Advanced Mathematics and Science Olympiad programmes that strengthen analytical thinking, reasoning and higher-order problem-solving skills.",

            tags: [

                "Math Olympiad",
                "Science Olympiad",

            ],

        },

        {
            className:"entrepreneur",

            icon: FlaskConical,

            title: "Math & Science Investigation",

            description:
                "An interdisciplinary programme integrating Mathematics, Science and entrepreneurship through innovation, investigation and real-world applications.",

            tags: [

                "Innovation",
                "Entrepreneurship",
                "Data Analysis",

            ],

        },

    ];



    /*==================================================
        PRIMARY SCHOOLS
    ==================================================*/

const primarySchools = [

    "Admiralty Primary School",
    "Alexandra Primary School",
    "Anchor Green Primary School",
    "Anderson Primary School",
    "Ang Mo Kio Primary School",
    "Angsana Primary School",
    "Bedok Green Primary School",
    "Bendemeer Primary School",
    "Blangah Rise Primary School",
    "Boon Lay Garden Primary School",
    "Bukit Panjang Primary School",
    "Bukit Timah Primary School",
    "Bukit View Primary School",
    "Canossa Catholic Primary School",
    "Cantonment Primary School",
    "Casuarina Primary School",
    "Catholic High School",
    "Changkat Primary School",
    "CHIJ (Katong) Primary",
    "CHIJ Our Lady Queen of Peace",
    "CHIJ Primary (Toa Payoh)",
    "Chongzheng Primary School",
    "Chua Chu Kang Primary School",
    "Compassvale Primary School",
    "Concord Primary School",
    "Corporation Primary School",
    "Dazhong Primary School",
    "De La Salle School",
    "East Spring Primary School",
    "Edgefield Primary School",
    "Elias Park Primary School",
    "Evergreen Primary School",
    "Fernvale Primary School",
    "First Toa Payoh Primary School",
    "Frontier Primary School",
    "Fuchun Primary School",
    "Gan Eng Seng Primary School",
    "Geylang Methodist School (Primary)",
    "Greendale Primary School",
    "Greenridge Primary School",
    "Greenwood Primary School",
    "Haig Girls’ School",
    "Henry Park Primary School",
    "Holy Innocents’ Primary School",
    "Horizon Primary School",
    "Hougang Primary School",
    "Innova Primary School",
    "Jiemin Primary School",
    "Jing Shan Primary School",
    "Jurong Primary School",
    "Jurong West Primary School",
    "Kheng Cheng School",
    "Kranji Primary School",
    "Kuo Chuan Presbyterian Primary School",
    "Lakeside Primary School",
    "Maha Bodhi School",
    "Maris Stella High School",
    "Marsiling Primary School",
    "Marymount Convent School",
    "Mayflower Primary School",
    "Methodist Girls’ School (Primary)",
    "Montfort Junior School",
    "Nan Chiau Primary School",
    "Nan Hua Primary School",
    "Naval Base Primary School",
    "New Town Primary School",
    "Ngee Ann Primary School",
    "North Spring Primary School",
    "North View Primary School",
    "Northoaks Primary School",
    "Opera Estate Primary School",
    "Paya Lebar Methodist Girls’ School (Primary)",
    "Pei Chun Public School",
    "Pei Hwa Presbyterian Primary School",
    "Peiying Primary School",
    "Pioneer Primary School",
    "Poi Ching School",
    "Princess Elizabeth Primary School",
    "Punggol View Primary School",
    "Qihua Primary School",
    "Raffles Girls’ Primary School",
    "Red Swastika School",
    "River Valley Primary School",
    "Riverside Primary School",
    "Rivervale Primary School",
    "Sembawang Primary School",
    "Seng Kang Primary School",
    "Shuqun Primary School",
    "Si Ling Primary School",
    "Singapore Chinese Girls’ School (Primary)",
    "South View Primary School",
    "Springdale Primary School",
    "St Gabriel’s Primary School",
    "St Stephen’s Primary School",
    "St. Anthony’s Primary School",
    "St. Hilda’s Primary School",
    "St. Margaret’s School (Primary)",
    "Tampines North Primary School",
    "Tampines Primary School",
    "Tanjong Katong Primary School",
    "Teck Ghee Primary School",
    "Teck Whye Primary School",
    "Telok Kurau Primary School",
    "Temasek Primary School",
    "Townsville Primary School",
    "Unity Primary School",
    "Waterway Primary School",
    "Wellington Primary School",
    "West Grove Primary School",
    "West Spring Primary School",
    "West View Primary School",
    "White Sands Primary School",
    "Woodgrove Primary School",
    "Woodlands Primary School",
    "Woodlands Ring Primary School",
    "Xinghua Primary School",
    "Xingnan Primary School",
    "Xishan Primary School",
    "Yangzheng Primary School",
    "Yew Tee Primary School",
    "Yishun Primary School",
    "Yu Neng Primary School",
    "Yumin Primary School",
    "Zhangde Primary School",
    "Zhenghua Primary School",
    "Zhonghua Primary School",

];



    /*==================================================
        SECONDARY SCHOOLS
    ==================================================*/

    const secondarySchools = [

    "Admiralty Secondary School",
    "Ahmad Ibrahim Secondary School",
    "Ang Mo Kio Secondary School",
    "Beatty Secondary School",
    "Bedok Green Secondary School",
    "Bedok South Secondary School",
    "Bendemeer Secondary School",
    "Bukit Batok Secondary School",
    "Bukit Merah Secondary School",
    "Bukit View Secondary School",
    "Canberra Secondary School",
    "Catholic High School",
    "Cedar Girls’ Secondary School",
    "CHIJ Secondary (Toa Payoh)",
    "Chung Cheng High School (Main)",
    "Clementi Town Secondary School",
    "Compassvale Secondary School",
    "Crescent Girls’ School",
    "Dunearn Secondary School",
    "Dunman High School",
    "Dunman Secondary School",
    "Evergreen Secondary School",
    "Guangyang Secondary School",
    "Hai Sing Catholic School",
    "Holy Innocents’ High School",
    "Hougang Secondary School",
    "Hua Yi Secondary School",
    "Jurong West Secondary School",
    "Junyuan Secondary School",
    "Loyang View Secondary School",
    "Manjusri Secondary School",
    "Maris Stella High School",
    "Marsiling Secondary School",
    "Meridian Secondary School",
    "Methodist Girls’ School (Independent)",
    "Montfort Secondary School",
    "Nan Chiau High School",
    "Naval Base Secondary School",
    "New Town Secondary School",
    "Ngee Ann Secondary School",
    "Orchid Park Secondary School",
    "Pasir Ris Crest Secondary School",
    "Paya Lebar Methodist Girls’ School (Secondary)",
    "Pei Hwa Secondary School",
    "Peicai Secondary School",
    "Queenstown Secondary School",
    "Queensway Secondary School",
    "Riverside Secondary School",
    "Seng Kang Secondary School",
    "Singapore Chinese Girls’ School (Independent)",
    "Springfield Secondary School",
    "St. Andrew’s School (Secondary)",
    "St. Anthony’s Canossian Secondary School",
    "St Margaret’s Secondary School",
    "Swiss Cottage Secondary School",
    "Unity Secondary School",
    "Victoria Junior College",
    "Westwood Secondary School",
    "Whitley Secondary School",
    "Woodlands Ring Secondary School",
    "Woodlands Secondary School",
    "Xinmin Secondary School",
    "Yio Chu Kang Secondary School",
    "Yishun Town Secondary School",
    "Yuan Ching Secondary School",
    "Yusof Ishak Secondary School",
    "Zhenghua Secondary School",
    "Zhonghua Secondary School",

];

useEffect(() => {

    if (window.matchMedia("(max-width: 768px), (prefers-reduced-motion: reduce)").matches) {
        return;
    }

    const ctx = gsap.context(() => {

        /*==================================================
            FLOATING BEE
        ==================================================*/

        gsap.to(".school-hero-bee", {
            y: -44,
            rotation: 3,
            duration: 1.5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
        });

        /*==================================================
            HERO
        ==================================================*/

        gsap.fromTo(
            ".school-hero-content > *",
            {
                opacity: 0,
                y: 24,
            },
            {
                opacity: 1,
                y: 0,

                duration: 0.75,
                stagger: 0.12,

                ease: "power2.out",
            }
        );


        /*==================================================
            STATISTICS HEADER
        ==================================================*/

        gsap.fromTo(
            ".school-stats-header > *",
            {
                opacity: 0,
                y: 22,
            },
            {
                opacity: 1,
                y: 0,

                duration: 0.65,
                stagger: 0.1,

                ease: "power2.out",

                scrollTrigger: {
                    trigger: ".school-stats",
                    start: "top 82%",
                    once: true,
                },
            }
        );


        /*==================================================
            STATISTICS
        ==================================================*/

        gsap.fromTo(
            ".school-stat",
            {
                opacity: 0,
                y: 25,
            },
            {
                opacity: 1,
                y: 0,

                duration: 0.6,
                stagger: 0.12,

                ease: "power2.out",

                scrollTrigger: {
                    trigger: ".school-stats-grid",
                    start: "top 86%",
                    once: true,
                },
            }
        );

        /*==================================================
    COUNTING STATISTICS
==================================================*/

const statNumbers = [
    {
        element: ".school-stat:nth-child(1) h3",
        end: 20,
        suffix: "+"
    },
    {
        element: ".school-stat:nth-child(2) h3",
        end: 100,
        suffix: "+"
    },
    {
        element: ".school-stat:nth-child(3) h3",
        end: 50000,
        suffix: "+"
    }
];


statNumbers.forEach((stat) => {

    const element =
        document.querySelector(stat.element);

    if (!element) return;


    const counter = {
        value: 0
    };


    gsap.to(counter, {

        value: stat.end,

        duration: 1.8,

        ease: "power2.out",

        scrollTrigger: {

            trigger: ".school-stats-grid",

            start: "top 85%",

            once: true,

        },

        onUpdate: () => {

            element.textContent =
                Math.round(counter.value).toLocaleString()
                + stat.suffix;

        },

    });

});


        /*==================================================
            FEATURED SCHOOLS HEADER
        ==================================================*/

        gsap.fromTo(
            ".featured-schools-header > *",
            {
                opacity: 0,
                y: 22,
            },
            {
                opacity: 1,
                y: 0,

                duration: 0.65,
                stagger: 0.1,

                ease: "power2.out",

                scrollTrigger: {
                    trigger: ".featured-schools",
                    start: "top 80%",
                    once: true,
                },
            }
        );


        /*==================================================
            SCHOOL DIRECTORY CARD
        ==================================================*/

        gsap.fromTo(
            ".school-directory-card",
            {
                opacity: 0,
                y: 28,
            },
            {
                opacity: 1,
                y: 0,

                duration: 0.75,

                ease: "power2.out",

                scrollTrigger: {
                    trigger: ".school-directory-card",
                    start: "top 86%",
                    once: true,
                },
            }
        );


        /*==================================================
            PROGRAMMES HEADER
        ==================================================*/

        gsap.fromTo(
            ".programme-header > *",
            {
                opacity: 0,
                y: 22,
            },
            {
                opacity: 1,
                y: 0,

                duration: 0.65,
                stagger: 0.1,

                ease: "power2.out",

                scrollTrigger: {
                    trigger: ".school-programmes",
                    start: "top 80%",
                    once: true,
                },
            }
        );


        /*==================================================
            PROGRAMME CARDS
        ==================================================*/

        const programmeCards =
            gsap.utils.toArray(".programme-card");


        programmeCards.forEach((card, index) => {

            gsap.fromTo(
                card,
                {
                    opacity: 0,
                    y: 28,
                },
                {
                    opacity: 1,
                    y: 0,

                    duration: 0.65,

                    delay: index * 0.07,

                    ease: "power2.out",

                    scrollTrigger: {
                        trigger: card,
                        start: "top 88%",
                        once: true,
                    },
                }
            );


            /*==============================================
                ICON
            ==============================================*/

            const icon =
                card.querySelector(".programme-icon");

            if (icon) {

                gsap.fromTo(
                    icon,
                    {
                        opacity: 0,
                        y: 10,
                    },
                    {
                        opacity: 1,
                        y: 0,

                        duration: 0.45,
                        delay: 0.12,

                        ease: "power2.out",

                        scrollTrigger: {
                            trigger: card,
                            start: "top 88%",
                            once: true,
                        },
                    }
                );

            }


            /*==============================================
                TAGS
            ==============================================*/

            const tags =
                card.querySelectorAll(".programme-tags span");


            if (tags.length) {

                gsap.fromTo(
                    tags,
                    {
                        opacity: 0,
                        y: 8,
                    },
                    {
                        opacity: 1,
                        y: 0,

                        duration: 0.35,
                        stagger: 0.06,
                        delay: 0.15,

                        ease: "power2.out",

                        scrollTrigger: {
                            trigger: card,
                            start: "top 88%",
                            once: true,
                        },
                    }
                );

            }

        });


    }, pageRef);


    /*==================================================
        CLEANUP
    ==================================================*/

    return () => {

        ctx.revert();

    };

}, []);

    return (

    <main
        ref={pageRef}
        className="school-page"
    >

                        {/*==================================================
                HERO
            ==================================================*/}

            <section className="school-hero">

                <div className="section-container">

                    <div className="school-hero-content">

                        <p className="school-small-title">

                            PARTNERING WITH SCHOOLS ACROSS SINGAPORE

                        </p>

                        <h1 className="school-title">

                            MOE SCHOOL PARTNERSHIPS
                            <br />

                        </h1>

                        <p className="school-description">

                            Since 2005, Simply Smart Enrichment has proudly
                            partnered with schools across Singapore to deliver
                            engaging Mathematics, Science, STEAM, Olympiad and
                            customised enrichment programmes that inspire
                            curiosity, creativity and lifelong learning.

                        </p>

                    </div>

                    {/* FLOATING BEE */}

                    <div className="school-hero-bee">
                        <img
                            src="/images/bee.png"
                            alt=""
                        />
                    </div>

                </div>

            </section>



            {/*==================================================
                STATISTICS
            ==================================================*/}

            <section className="school-stats">

                <div className="section-container">

                    <div className="school-stats-header">

                        <p className="section-label">

                            SCHOOL PARTNERSHIPS AT A GLANCE

                        </p>

                        <h2>

                            Trusted By
                            <br />


                                Schools Since 2005


                        </h2>

                    </div>

                    <div className="school-stats-grid">

                        <div className="school-stat">

                            <h3>

                                20+

                            </h3>

                            <p>

                                Years Partnering With Schools

                            </p>

                        </div>

                        <div className="school-stat">

                            <h3>

                                100+

                            </h3>

                            <p>

                                MOE School Partnerships

                            </p>

                        </div>

                        <div className="school-stat">

                            <h3>

                                50,000+

                            </h3>

                            <p>

                                Students Engaged

                            </p>

                        </div>

                    </div>

                </div>

            </section>



            {/*==================================================
                FEATURED SCHOOL PARTNERS
            ==================================================*/}

            <section className="featured-schools">

                <div className="section-container">

                    <div className="featured-schools-header">

                        <p className="section-label">

                            FEATURED MOE SCHOOL PARTNERS

                        </p>

                        <h2>

                            Trusted By Schools
                            <br />


                                Across Singapore


                        </h2>

                        <p>

                            We are honoured to have partnered with
                            schools throughout Singapore in delivering
                            enriching Mathematics, Science, STEAM,
                            Olympiad and customised learning
                            programmes.

                        </p>

                    </div>



                    {/*==============================================
                        TRUST PANEL
                    ==============================================*/}

                    <div className="school-directory-card">

                        <p className="directory-small">

                            TRUSTED BY OVER

                        </p>

                        <h3>

                            100+ MOE Schools

                        </h3>

                        <p>

                            Since 2005, Simply Smart Enrichment has
                            collaborated with primary and secondary
                            schools across Singapore through
                            customised Mathematics, Science,
                            STEAM and Olympiad programmes.

                        </p>

                        <button

                            className="directory-button"

                            onClick={()=>

                                setShowSchools(true)

                            }

                        >

                            View All School Partners

                            <ArrowRight

                                size={18}

                                strokeWidth={2.5}

                            />

                        </button>

                    </div>

                </div>

            </section>

                        {/*==================================================
                SCHOOL PROGRAMMES
            ==================================================*/}

            <section className="school-programmes">

                <div className="section-container">

                    <div className="programme-header">

                        <p className="section-label">

                            PROGRAMMES FOR SCHOOLS

                        </p>

                        <h2>

                            Inspiring Learning
                            <br />


                                Beyond The Classroom


                        </h2>

                        <p>

                            Our customised school programmes are designed
                            to complement curriculum objectives while
                            nurturing creativity, collaboration, critical
                            thinking and authentic learning experiences.

                        </p>

                    </div>



                    <div className="programme-grid">

                        {schoolProgrammes.map((programme, index) => {

                            const Icon = programme.icon;

                            return (
                                <article

                                    key={index}

                                    className={`programme-card ${programme.className}`}

                                >

                                    <div className={`programme-icon ${programme.className}`}>

                                        <Icon

                                            size={42}

                                            strokeWidth={2}

                                        />

                                    </div>

                                    <h3>

                                        {programme.title}

                                    </h3>

                                    <p>

                                        {programme.description}

                                    </p>

                                    <div className="programme-tags">

                                        {programme.tags.map((tag) => (

                                            <span key={tag}>

                                                {tag}

                                            </span>

                                        ))}

                                    </div>

                                </article>

                            );

                        })}

                    </div>

                </div>

            </section>



            {/*==================================================
                SCHOOL DIRECTORY MODAL
            ==================================================*/}

            {showSchools && (

                <div

                    className="directory-overlay"

                    onClick={() => setShowSchools(false)}

                >

                    <div

                        className="directory-modal"

                        onClick={(e) => e.stopPropagation()}

                    >

                        <button

                            className="directory-close"

                            onClick={() => setShowSchools(false)}

                        >

                            ×

                        </button>

                        <p className="section-label">

                            OUR SCHOOL PARTNERS

                        </p>

                        <h2>

                            Complete School Directory

                        </h2>

                        <p className="directory-description">

                            Since 2005, Simply Smart Enrichment has
                            partnered with schools across Singapore,
                            delivering Mathematics, Science, STEAM,
                            Olympiad and customised enrichment
                            programmes.

                        </p>

                        <div className="directory-columns">

                            <div className="directory-column">

                                <h3>

                                    Primary Schools

                                </h3>

                                <ul>

                                    {primarySchools.map((school) => (

                                        <li key={school}>

                                            {school}

                                        </li>

                                    ))}

                                </ul>

                            </div>

                            <div className="directory-column">

                                <h3>

                                    Secondary Schools

                                </h3>

                                <ul>

                                    {secondarySchools.map((school) => (

                                        <li key={school}>

                                            {school}

                                        </li>

                                    ))}

                                </ul>

                            </div>

                        </div>

                    </div>

                </div>

            )}

        </main>

    );

}


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

    Quote,
    GraduationCap,
    Users,
    BookOpen,
    School,
    ChevronRight,
    X,

} from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {

    const pageRef = useRef(null);

    /*==================================================
        STATES
    ==================================================*/

    const [activeFilter, setActiveFilter] =
        useState("professionals");

    const [showZaobaoModal, setShowZaobaoModal] =
        useState(false);



    /*==================================================
        FILTERS
    ==================================================*/

    const filters = [

        {

            id:"professionals",

            label:"Education Professionals",

            icon:GraduationCap,

        },

        {

            id:"parents",

            label:"Parents",

            icon:Users,

        },

        {

            id:"primary",

            label:"Primary",

            icon:BookOpen,

        },

        {

            id:"secondary",

            label:"Secondary",

            icon:School,

        },

        {

            id:"jc",

            label:"Junior College",

            icon:GraduationCap,

        },

    ];



    /*==================================================
        PROFESSIONAL ENDORSEMENTS
    ==================================================*/

    const professionalTestimonials = [

        {

            category:"professionals",

            badge:"Education Leader",

            name:"Tay",

            role:"Ex-HOD of Science Division • SAP School",

            quote:
                "I believe you could deliver your lessons and ensure kids can understand and apply without losing temper. You are a great teacher.",

        },

        {

            category:"professionals",

            badge:"Mathematics Leader",

            name:"Ms Lim",

            role:"Current Level Head of Mathematics Division • SAP School",

            quote:
                "Your enrichment questions encourage higher-order thinking and match our objective of providing meaningful learning.",

        },

        {

            category:"professionals",

            badge:"Professor",

            name:"Darren",

            role:"Professor • NTU",

            quote:
                "It seems that your team are doing a good job in the education field.",

        },

        {

            category:"professionals",

            badge:"Founder",

            name:"Han",

            role:"Founder • Personal Mastery Resources",

            quote:
                "Congratulations! You have found your niche. Keep it up and continue making a positive impact on education.",

        },

        {

            category:"professionals",

            badge:"Education Founders",

            name:"Conrad Kang & Amanda Lian",

            role:"Founders • e&p Learning Place",

            quote:
                "Your recommendation means more than displaying our brochures. Thank you for supporting quality education.",

        },

        {

            category:"professionals",

            badge:"Business Owner",

            name:"Mrs Eu",

            role:"Owner • Preschool & Student Care",

            quote:
                "Both my sons enjoy Simply Smart programmes. I hope Simply Smart can create similar programmes for my own preschool.",

        },

        {

            category:"professionals",

            badge:"Vice President",

            name:"Jac",

            role:"Vice President • Training & Consultancy",

            quote:
                "I often see Simply Smart introducing wonderful ideas that genuinely help children learn.",

        },

        {

            category:"professionals",

            badge:"Managing Director",

            name:"Charles Tan",

            role:"Managing Director • Education Consultancy",

            quote:
                "I will continue referring quality students and teachers because Simply Smart genuinely helps children enjoy learning.",

        },


        {

            category:"professionals",

            badge:"Managing Director",

            name:"Tony",

            role:"Managing Director • Architecture Consultancy",

            quote:
                "Professional, dedicated and committed towards education.",

        },

    ];



    /*==================================================
        PARENTS
    ==================================================*/

    const parentTestimonials = [

        {

            category:"parents",

            badge:"Human Resource Director",

            name:"Mr Yeo",

            role:"Parent",

            quote:
                "Ms Law's personalised approach towards Rachel really helped. She performed very well in her recent test.",

        },

        {

            category:"parents",

            badge:"90+ Science",

            name:"Mum of Edlind",

            role:"Parent • Pei Hwa Primary",

            quote:
                "I didn't buy any assessment books this year. I left everything to Simply Smart and she scored above 90 for Science.",

        },

        {

            category:"parents",

            badge:"Physics",

            name:"Mother of Elaine",

            role:"Parent",

            quote:
                "Mr Gan built a strong Science foundation for my daughter. She is much more motivated now.",

        },

        {

            category:"parents",

            badge:"Happy Parent",

            name:"Aida",

            role:"Student's Mum",

            quote:
                "Ms Celine is excellent. We are very happy with her.",

        },

        {

            category:"parents",

            badge:"Happy Parent",

            name:"Sandra",

            role:"Student's Mum",

            quote:
                "Ms Soh has helped Darren tremendously. He finds her lessons very useful.",

        },

        {

            category:"parents",

            badge:"Managing Director",

            name:"Doris",

            role:"Managing Director",

            quote:
                "Ms Rachel Lim is committed and responsible. Douglas enjoys every lesson and has become much more motivated.",

        },

        {

            category:"parents",

            badge:"📈 C6 → B3",

            name:"Mrs Ng",

            role:"Student's Mother",

            quote:
                "After only two lessons, my son's Chemistry improved from C6 to B3. He is now highly motivated.",

        },

        {

            category:"parents",

            badge:"⭐ 97% Maths",

            name:"Mrs Oshima",

            role:"Student's Mother",

            quote:
                "Erika scored 97 for SA2 and entered the top class. Thank you for your wonderful guidance.",

        },

        {

            category:"parents",

            badge:"🎓 A2 A Maths",

            name:"Vanessa",

            role:"Dawn's Mum",

            quote:
                "Mr Lim's dedication helped Dawn achieve A2 for both A Maths and E Maths. We are truly grateful.",

        },

        {

            category:"parents",

            badge:"🏆 4As",

            name:"Nancy",

            role:"Parent",

            quote:
                "Simply Smart changed my daughter's life. She eventually achieved 4As and received an SMU double-degree offer.",

        },

    ];

        /*==================================================
        PRIMARY
    ==================================================*/

    const primaryTestimonials = [

        {

            category:"primary",

            badge:"🏆 258 PSLE",

            name:"Hui Min",

            role:"River Valley IP",

            quote:
                "I achieved A* for Mathematics, A for Science and scored 258 for PSLE. Thank you Simply Smart!",

        },

        {

            category:"primary",

            badge:"🏆 237 PSLE",

            name:"Leong Shi Lin",

            role:"Primary Student",

            quote:
                "I achieved A for Mathematics, A* for Science and scored 237 for PSLE.",

        },

        {

            category:"primary",

            badge:"🏆 235 PSLE",

            name:"Tommy",

            role:"West View Primary",

            quote:
                "I achieved A for Mathematics, A* for Science and scored 235 for PSLE.",

        },

        {

            category:"primary",

            badge:"Primary 5",

            name:"Liu Zheng",

            role:"P5 Student",

            quote:
                "How I wish Simply Smart was nearer to my home because learning there is so enjoyable!",

        },

        {

            category:"primary",

            badge:"A Mathematics",

            name:"Grace & Hui Joo",

            role:"Princess Elizabeth Primary",

            quote:
                "Mr Tan's explanations were clear. I thought I would only get a D, but I achieved an A for Mathematics.",

        },

    ];



    /*==================================================
        SECONDARY
    ==================================================*/

    const secondaryTestimonials = [

        {

            category:"secondary",

            badge:"Mathematics",

            name:"Mei Qi",

            role:"Unity Secondary",

            quote:
                "The Mathematics teacher, Mr Lim, is very good.",

        },

        {

            category:"secondary",

            badge:"Improved Mathematics",

            name:"Tze Jie",

            role:"Hua Yi Secondary",

            quote:
                "My Mathematics improved a lot under Mr Lim's guidance. Thank you!",

        },

        {

            category:"secondary",

            badge:"Science",

            name:"Ying Hao",

            role:"Hua Yi Secondary",

            quote:
                "I improved in Science and am continuing to work harder for Mathematics.",

        },

        {

            category:"secondary",

            badge:"🏆 Physics A2",

            name:"Kawai",

            role:"ACS (Independent)",

            quote:
                "I achieved A2 for Physics and B3 for Chemistry. Thank you!",

        },

        {

            category:"secondary",

            badge:"🏆 Physics A1",

            name:"Kenneth",

            role:"Victoria School",

            quote:
                "I achieved A1 for Physics and A2 for Chemistry. Thanks!",

        },

        {

            category:"secondary",

            badge:"📈 C6 → A1",

            name:"Douglas",

            role:"Clementi Town Secondary",

            quote:
                "For the first time I achieved A1 for both Mathematics and Science after previously scoring around the 50s.",

        },

        {

            category:"secondary",

            badge:"Mentorship",

            name:"Yuzhe",

            role:"Chung Cheng High",

            quote:
                "Mr Teo became my mentor and guided me towards achieving the results I wanted.",

        },

        {

            category:"secondary",

            badge:"Raffles Girls' School",

            name:"Vithya",

            role:"RGS",

            quote:
                "Teacher Weihuang explains concepts clearly and patiently answers all my difficult questions.",

        },

        {

            category:"secondary",

            badge:"Patient Teaching",

            name:"Rachel",

            role:"Westwood Secondary",

            quote:
                "Ms Law is patient and her teaching approach is very systematic.",

        },

        {

            category:"secondary",

            badge:"🏆 Straight As",

            name:"Arilyn",

            role:"Nanyang Girls' High",

            quote:
                "I achieved A1 for Science, A2 for Mathematics and straight As overall.",

        },

        {

            category:"secondary",

            badge:"🏆 Biology A1",

            name:"Secondary 4 Student",

            role:"Chung Cheng High (Main)",

            quote:
                "Ms Soh's lessons are amazing. I achieved A1 for my Biology test.",

        },

    ];



    /*==================================================
        JUNIOR COLLEGE
    ==================================================*/

    const juniorCollegeTestimonials = [

        {

            category:"jc",

            badge:"Improvement",

            name:"Aaron",

            role:"Saint Andrew's Junior College",

            quote:
                "I achieved ABB with Bs for both Physics and Chemistry. My teacher even praised me.",

        },

        {

            category:"jc",

            badge:"Teacher's Day",

            name:"Jane & Samuel",

            role:"NUS High • Catholic JC • Hwa Chong Institution",

            quote:
                "Thank you for being such a wonderful teacher and mentor throughout our academic journey.",

        },

        {

            category:"jc",

            badge:"🏆 A for H2 Mathematics",

            name:"Jamie",

            role:"National Junior College",

            quote:
                "I achieved an A for H2 Mathematics and topped my tutorial class. Thank you Mr Tan!",

        },

        {

            category:"jc",

            badge:"A Level Results",

            name:"Ming Juan",

            role:"National Junior College",

            quote:
                "I was very satisfied with my A Level results, achieving A for Economics and Bs for Physics and Mathematics.",

        },

    ];



    /*==================================================
        MERGE DATA
    ==================================================*/

    const testimonials = [

        ...professionalTestimonials,

        ...parentTestimonials,

        ...primaryTestimonials,

        ...secondaryTestimonials,

        ...juniorCollegeTestimonials,

    ];



    const filteredTestimonials = testimonials.filter(

        testimonial => testimonial.category === activeFilter

    );



    /*==================================================
        ZAOBAO ARTICLES
    ==================================================*/

    const articles = [

        "/images/article1.jpg",

        "/images/article2.jpg",

    ];

    useEffect(() => {

    if (window.matchMedia("(max-width: 768px), (prefers-reduced-motion: reduce)").matches) {
        return;
    }

    const ctx = gsap.context(() => {


        /*==================================================
            HERO TEXT
        ==================================================*/

        gsap.fromTo(
            ".testimonials-hero-content > *",
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
            HERO IMAGE
        ==================================================*/

        gsap.fromTo(
            ".testimonials-hero-image",
            {
                opacity: 0,
            },
            {
                opacity: 1,

                duration: 1.1,
                delay: 0.2,

                ease: "power2.out",
            }
        );


        /*==================================================
            FILTER BUTTONS
        ==================================================*/

        gsap.fromTo(
            ".testimonial-filter",
            {
                opacity: 0,
                y: 16,
            },
            {
                opacity: 1,
                y: 0,

                duration: 0.5,
                stagger: 0.07,

                ease: "power2.out",

                scrollTrigger: {
                    trigger: ".testimonial-filter-section",
                    start: "top 88%",
                    once: true,
                },
            }
        );


        /*==================================================
            TESTIMONIAL CARDS
        ==================================================*/

        gsap.fromTo(
            ".testimonial-card",
            {
                opacity: 0,
                y: 22,
            },
            {
                opacity: 1,
                y: 0,

                duration: 0.55,
                stagger: 0.08,

                ease: "power2.out",

                scrollTrigger: {
                    trigger: ".testimonial-grid",
                    start: "top 88%",
                    once: true,
                },
            }
        );


        /*==================================================
            LIANHE ZAOBAO — NEWSPAPER
        ==================================================*/

        gsap.fromTo(
            ".zaobao-left",
            {
                opacity: 0,
                x: -30,
            },
            {
                opacity: 1,
                x: 0,

                duration: 0.85,

                ease: "power2.out",

                scrollTrigger: {
                    trigger: ".zaobao-section",
                    start: "top 80%",
                    once: true,
                },
            }
        );


        /*==================================================
            LIANHE ZAOBAO — TEXT
        ==================================================*/

        gsap.fromTo(
            ".zaobao-right > *",
            {
                opacity: 0,
                x: 30,
            },
            {
                opacity: 1,
                x: 0,

                duration: 0.7,
                stagger: 0.1,

                ease: "power2.out",

                scrollTrigger: {
                    trigger: ".zaobao-section",
                    start: "top 80%",
                    once: true,
                },
            }
        );


    }, pageRef);


    return () => {

        ctx.revert();

    };

}, []);

        return (

            <main
                ref={pageRef}
                className="testimonials-page"
            >

            {/*==================================================
                HERO
            ==================================================*/}

            <section className="testimonials-hero">

                <div className="section-container">

                    <div className="testimonials-hero-grid">

                        <div className="testimonials-hero-content">

                            <p className="testimonials-small-title">

                                TRUSTED BY FAMILIES, RECOGNISED BY PROFESSIONALS

                            </p>

                            <h1 className="testimonials-title">

                                Testimonials

                            </h1>

                            <p className="testimonials-description">

                                Hear directly from education professionals,
                                parents and students whose learning journeys
                                have been transformed through Simply Smart
                                Enrichment.

                            </p>

                        </div>

                        <div className="testimonials-hero-image">

                            <img

                                src="/images/studentteacher.png"

                                alt="Simply Smart Enrichment"

                            />

                        </div>

                    </div>

                </div>

            </section>



            {/*==================================================
                FILTERS
            ==================================================*/}

            <section className="testimonial-filter-section">

                <div className="section-container">

                    <div className="testimonial-filter-wrapper">

                        {filters.map((filter) => {

                            const Icon = filter.icon;

                            return (

                                <button

                                    key={filter.id}

                                    className={`testimonial-filter ${
                                        activeFilter === filter.id
                                            ? "active"
                                            : ""
                                    }`}

                                    onClick={() =>
                                        setActiveFilter(filter.id)
                                    }

                                >

                                    <Icon size={18} />

                                    <span>

                                        {filter.label}

                                    </span>

                                </button>

                            );

                        })}

                    </div>

                </div>

            </section>



            {/*==================================================
                TESTIMONIAL GRID
            ==================================================*/}

            <section className="testimonial-grid-section">

                <div className="section-container">

                    <div className="testimonial-grid">

                        {filteredTestimonials.map((testimonial, index) => (

                            <article

                                className="testimonial-card"

                                key={index}

                            >

                                <div className="testimonial-top">

                                    <Quote size={34}/>

                                    <span className="testimonial-badge">

                                        {testimonial.badge}

                                    </span>

                                </div>

                                <p className="testimonial-quote">

                                    “{testimonial.quote}”

                                </p>

                                <div className="testimonial-author">

                                    <h3>

                                        {testimonial.name}

                                    </h3>

                                    <p>

                                        {testimonial.role}

                                    </p>

                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </section>

                    {/*==================================================
            RECOGNISED BY LIANHE ZAOBAO
        ==================================================*/}

        <section className="zaobao-section">

            <div className="section-container">

                <div className="zaobao-grid">

                    {/* LEFT */}

                    <div className="zaobao-left">

                        <div className="newspaper-stack">

                            <img
                                src="/images/lianhezaobao.png"
                                alt="Lianhe Zaobao Feature"
                                className="newspaper-preview"
                            />

                        </div>

                    </div>



                    {/* RIGHT */}

                    <div className="zaobao-right">

                        <p className="section-label">

                            RECOGNISED BY THE LOCAL PRESS

                        </p>

                        <h2>

                            Featured On
                            <br />

                                Lianhe Zaobao


                        </h2>

                        <p>

                            Simply Smart Enrichment has been featured by
                            <strong> Lianhe Zaobao </strong>
                            for its dedication to quality education,
                            meaningful learning experiences and helping
                            students achieve academic excellence.

                        </p>

                        <button

                            className="zaobao-button"

                            onClick={() => setShowZaobaoModal(true)}

                        >

                            View Article

                            <ChevronRight size={18} />

                        </button>

                    </div>

                </div>

            </div>

        </section>



        {/*==================================================
            ZAOBAO MODAL
        ==================================================*/}

        {showZaobaoModal && (

            <div className="zaobao-modal show">

                <div

                    className="zaobao-overlay"

                    onClick={() => setShowZaobaoModal(false)}

                />



                <div className="zaobao-content">

                    <button

                        className="zaobao-close"

                        onClick={() => setShowZaobaoModal(false)}

                    >

                        <X size={22} />

                    </button>

                    <h2>

                        ★ ARTICLE FEATURE ★

                    </h2>

                    <div className="zaobao-images">

                        <img
                            src={articles[0]}
                            alt="Article Page 1"
                        />

                        <img
                            src={articles[1]}
                            alt="Article Page 2"
                        />

                    </div>

                </div>

            </div>

        )}

    </main>

);
}

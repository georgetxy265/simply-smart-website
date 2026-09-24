"use client";

import "./style.css";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import {

    Lightbulb,
    PencilLine,
    Target,
    Sprout,

    GraduationCap,
    Users,
    BookOpenCheck,
    Brain,
    HeartHandshake,
    Trophy,

} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function WhyUs() {

    const pageRef = useRef(null);

    useEffect(() => {

    if (window.matchMedia("(max-width: 768px), (prefers-reduced-motion: reduce)").matches) {
        return;
    }

    const ctx = gsap.context(() => {


        /* ==================================================
           HERO
        ================================================== */

        gsap.fromTo(
            ".why-hero-content > *",
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


        /* ==================================================
           OUR STORY

           Image comes gently from left.
           Content comes gently from right.
        ================================================== */

        gsap.fromTo(
            ".story-image-wrapper",
            {
                opacity: 0,
                x: -35,
            },
            {
                opacity: 1,
                x: 0,

                duration: 0.85,

                ease: "power2.out",

                scrollTrigger: {
                    trigger: ".our-story",
                    start: "top 78%",
                    once: true,
                },
            }
        );


        gsap.fromTo(
            ".story-content",
            {
                opacity: 0,
                x: 35,
            },
            {
                opacity: 1,
                x: 0,

                duration: 0.85,

                ease: "power2.out",

                scrollTrigger: {
                    trigger: ".our-story",
                    start: "top 78%",
                    once: true,
                },
            }
        );


        /* ==================================================
           STORY TAGS
        ================================================== */

        gsap.fromTo(
            ".story-tag",
            {
                opacity: 0,
                y: 12,
            },
            {
                opacity: 1,
                y: 0,

                duration: 0.45,
                stagger: 0.09,

                ease: "power2.out",

                scrollTrigger: {
                    trigger: ".story-tags",
                    start: "top 88%",
                    once: true,
                },
            }
        );


        /* ==================================================
           WHY STUDENTS CHOOSE US — HEADER
        ================================================== */

        gsap.fromTo(
            ".why-features-header > *",
            {
                opacity: 0,
                y: 22,
            },
            {
                opacity: 1,
                y: 0,

                duration: 0.65,
                stagger: 0.09,

                ease: "power2.out",

                scrollTrigger: {
                    trigger: ".why-features-header",
                    start: "top 82%",
                    once: true,
                },
            }
        );


        /* ==================================================
           WHY STUDENTS CHOOSE US — CARDS

           Alternating directions gives this section
           a slightly different feel from the homepage.
        ================================================== */

        const featureCards =
            gsap.utils.toArray(".why-feature-card");


        featureCards.forEach((card, index) => {

            gsap.fromTo(
                card,
                {
                    opacity: 0,

                    x:
                        index % 2 === 0
                            ? -22
                            : 22,
                },
                {
                    opacity: 1,
                    x: 0,

                    duration: 0.6,

                    ease: "power2.out",

                    scrollTrigger: {
                        trigger: card,
                        start: "top 88%",
                        once: true,
                    },
                }
            );

        });


        /* ==================================================
           INSIDE OUR CENTRE — HEADER
        ================================================== */

        gsap.fromTo(
            ".centre-header > *",
            {
                opacity: 0,
                y: 22,
            },
            {
                opacity: 1,
                y: 0,

                duration: 0.65,
                stagger: 0.08,

                ease: "power2.out",

                scrollTrigger: {
                    trigger: ".centre-header",
                    start: "top 82%",
                    once: true,
                },
            }
        );


        /* ==================================================
           CENTRE ROWS

           Image and text move slightly toward one another.
        ================================================== */

        const centreRows =
            gsap.utils.toArray(".centre-row");


        centreRows.forEach((row) => {

            const image =
                row.querySelector(".centre-image");

            const content =
                row.querySelector(".centre-content");

            const isReverse =
                row.classList.contains("reverse");


            if (image) {

                gsap.fromTo(
                    image,
                    {
                        opacity: 0,

                        x:
                            isReverse
                                ? 30
                                : -30,
                    },
                    {
                        opacity: 1,
                        x: 0,

                        duration: 0.8,

                        ease: "power2.out",

                        scrollTrigger: {
                            trigger: row,
                            start: "top 82%",
                            once: true,
                        },
                    }
                );

            }


            if (content) {

                gsap.fromTo(
                    content,
                    {
                        opacity: 0,

                        x:
                            isReverse
                                ? -30
                                : 30,
                    },
                    {
                        opacity: 1,
                        x: 0,

                        duration: 0.8,

                        ease: "power2.out",

                        scrollTrigger: {
                            trigger: row,
                            start: "top 82%",
                            once: true,
                        },
                    }
                );

            }

        });


        /* ==================================================
           CENTRE NUMBERS

           Tiny emphasis after their section appears.
        ================================================== */

        gsap.utils
            .toArray(".centre-number")
            .forEach((number) => {

                gsap.fromTo(
                    number,
                    {
                        opacity: 0,
                        y: 10,
                    },
                    {
                        opacity: 1,
                        y: 0,

                        duration: 0.45,

                        ease: "power2.out",

                        scrollTrigger: {
                            trigger: number,
                            start: "top 88%",
                            once: true,
                        },
                    }
                );

            });


        /* ==================================================
           TEACHING PHILOSOPHY — HEADER
        ================================================== */

        gsap.fromTo(
            ".philosophy-header > *",
            {
                opacity: 0,
                y: 22,
            },
            {
                opacity: 1,
                y: 0,

                duration: 0.65,
                stagger: 0.09,

                ease: "power2.out",

                scrollTrigger: {
                    trigger: ".philosophy-section",
                    start: "top 80%",
                    once: true,
                },
            }
        );


        /* ==================================================
           LEARNING JOURNEY

           Understand → Practise → Apply → Grow
        ================================================== */

        gsap.fromTo(
            ".journey-card",
            {
                opacity: 0,
                y: 22,
            },
            {
                opacity: 1,
                y: 0,

                duration: 0.55,
                stagger: 0.13,

                ease: "power2.out",

                scrollTrigger: {
                    trigger: ".journey-grid",
                    start: "top 84%",
                    once: true,
                },
            }
        );


        /* ==================================================
           JOURNEY CONNECTING LINES

           Only fade them — no width animation, so their
           layout cannot be changed.
        ================================================== */

        gsap.fromTo(
            ".journey-line",
            {
                opacity: 0,
            },
            {
                opacity: 1,

                duration: 0.5,
                stagger: 0.12,

                ease: "power1.out",

                scrollTrigger: {
                    trigger: ".journey-grid",
                    start: "top 84%",
                    once: true,
                },
            }
        );


        /* ==================================================
           LEARNING LADDER PHOTO
        ================================================== */

        gsap.fromTo(
            ".journey-photo",
            {
                opacity: 0,
                y: 28,
            },
            {
                opacity: 1,
                y: 0,

                duration: 0.8,

                ease: "power2.out",

                scrollTrigger: {
                    trigger: ".journey-photo",
                    start: "top 86%",
                    once: true,
                },
            }
        );


    }, pageRef);


    /* ==================================================
       CLEANUP
    ================================================== */

    return () => {

        ctx.revert();

    };

}, []);


    return (

        <main
            ref={pageRef}
            className="why-page"
        >

            {/*==================================================
                HERO
            ==================================================*/}

            <section className="why-hero">

                <div className="section-container">

                    <div className="why-hero-content">

                        <p className="why-small-title">

                            DISCOVER OUR STORY

                        </p>

                        <h1 className="why-title">

                            WHY

                            <br></br>

                            

                            SIMPLY SMART


                        </h1>

                        <p className="why-description">

                            Since 2005, Simply Smart Enrichment
                            has helped students build confidence
                            through structured Mathematics and
                            Science learning. We believe every
                            child can succeed when concepts are
                            explained clearly, practised
                            consistently and understood
                            step by step.

                        </p>

                    </div>

                </div>

            </section>



            {/*==================================================
                OUR STORY
            ==================================================*/}

            <section className="our-story">

                <div className="section-container">

                    <div className="our-story-grid">


                        {/* IMAGE */}


                        <div className="story-image-wrapper">

                            <img

                                src="/images/centrestory.jpeg"

                                alt="Simply Smart Enrichment Centre"

                                className="story-image"

                            />

                        </div>



                        {/* CONTENT */}


                        <div className="story-content">

                            <p className="story-small">

                                OUR STORY

                            </p>


                            <h2>

                                Helping Students

                                <br />

                                

                                    Learn Smarter,
                                    Step by Step.

                                

                            </h2>


                            <p>

                                Since opening our doors in
                                2005, Simply Smart Enrichment
                                has remained committed to
                                helping students develop
                                confidence through meaningful
                                learning.

                            </p>


                            <p>

                                Rather than encouraging
                                rote learning, we guide
                                students to understand
                                concepts clearly so they
                                can apply their knowledge
                                confidently in new situations.

                            </p>



                            <div className="story-tags">

                                <div className="story-tag">

                                    Since 2005

                                </div>

                                <div className="story-tag">

                                    Mathematics &
                                    Science Specialists

                                </div>

                                <div className="story-tag">

                                    Small Class Learning

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

                        {/*==================================================
                WHY STUDENTS CHOOSE SIMPLY SMART
            ==================================================*/}

            <section className="why-features">

                <div className="section-container">

                    <div className="why-features-header">

                        <p className="story-small">

                            WHY STUDENTS CHOOSE US

                        </p>
                        <br></br>

                        <h2>

                            Small steps.
                            <br />

                            <span>

                                Big progress.

                            </span>

                        </h2>

                        <p>

                            Every lesson is customised around
                            understanding, consistency and
                            confidence. We help students build
                            strong foundations that last beyond
                            examinations.

                        </p>

                    </div>
                    <br></br>
                    <br></br>


                    <div className="why-features-grid">



                        {/* CARD 1 */}

                        <div className="why-feature-card">

                            <GraduationCap
                                size={42}
                                strokeWidth={2}
                            />

                            <h3>

                                Experienced Educators

                            </h3>

                            <p>

                                Years of teaching experience
                                helping Primary, Secondary and
                                Junior College students master
                                Mathematics and Science.

                            </p>

                        </div>
                        <br></br>
                        <br></br>



                        {/* CARD 2 */}

                        <div className="why-feature-card">

                            <Brain
                                size={42}
                                strokeWidth={2}
                            />

                            <h3>

                                Understanding First

                            </h3>

                            <p>

                                Students learn why concepts
                                work instead of memorising
                                answers, allowing them to solve
                                unfamiliar questions confidently.

                            </p>

                        </div>
                        <br></br>
                        <br></br>



                        {/* CARD 3 */}

                        <div className="why-feature-card">

                            <BookOpenCheck
                                size={42}
                                strokeWidth={2}
                            />

                            <h3>

                                Structured Practice

                            </h3>

                            <p>

                                Carefully selected exercises
                                reinforce learning progressively,
                                strengthening problem-solving
                                skills over time.

                            </p>

                        </div>
                        <br></br>
                        <br></br>



                        {/* CARD 4 */}

                        <div className="why-feature-card">

                            <Users
                                size={42}
                                strokeWidth={2}
                            />

                            <h3>

                                Small Class Learning

                            </h3>

                            <p>

                                Smaller class sizes allow every
                                student to receive individual
                                attention, personalised learning and participate
                                confidently during lessons.

                            </p>

                        </div>
                        <br></br>
                        <br></br>


                        {/* CARD 5 */}

                        <div className="why-feature-card">

                            <HeartHandshake
                                size={42}
                                strokeWidth={2}
                            />

                            <h3>

                                Encouraging Environment

                            </h3>

                            <p>

                                We create a positive classroom
                                where students feel comfortable
                                asking questions and learning
                                from mistakes.

                            </p>

                        </div>
                        <br></br>
                        <br></br>



                        {/* CARD 6 */}

                        <div className="why-feature-card">

                            <Trophy
                                size={42}
                                strokeWidth={2}
                            />

                            <h3>

                                Long-Term Growth

                            </h3>

                            <p>

                                Our goal is not only better
                                grades, but also stronger
                                confidence, independence and a
                                genuine enjoyment of learning.

                            </p>

                        </div>

                    </div>

                </div>

            </section>

                        {/*==================================================
                INSIDE OUR CENTRE
            ==================================================*/}

            <section className="centre-showcase">

                <div className="section-container">

                    <div className="centre-header">

                        <p className="story-small">

                            INSIDE OUR CENTRE

                        </p>

                        <h2>

                            Designed for
                            <br></br>

                                comfortable learning.


                        </h2>
                        <br></br>
                        <br></br>
                        <p>

                            Every learning space has been thoughtfully
                            designed to create a welcoming environment
                            where students feel comfortable asking
                            questions, exploring ideas and building
                            confidence through meaningful learning.

                        </p>

                    </div>



                    {/* ROW 1 */}

                    <div className="centre-row">

                        <div className="centre-image">

                            <img
                                src="/images/classroom2.jpeg"
                                alt="Simply Smart classroom"
                            />

                        </div>

                        <div className="centre-content">

                            <div className="centre-number">

                                01

                            </div>

                            <h3>

                                Modern Learning Spaces

                            </h3>

                            <p>

                                Bright, spacious classrooms provide
                                students with an environment where
                                they can stay focused, participate
                                confidently and enjoy learning.

                            </p>

                        </div>

                    </div>



                    {/* ROW 2 */}

                    <div className="centre-row reverse">

                        <div className="centre-image">

                            <img
                                src="/images/interactiveteaching.png"
                                alt="Teacher conducting lesson"
                            />

                        </div>

                        <div className="centre-content">

                            <div className="centre-number">

                                02

                            </div>

                            <h3>

                                Interactive Teaching

                            </h3>

                            <p>

                                Lessons encourage discussion,
                                questions and active participation,
                                allowing students to understand
                                concepts rather than simply memorise
                                answers.

                            </p>

                        </div>

                    </div>



                    {/* ROW 3 */}

                    <div className="centre-row">

                        <div className="centre-image">

                            <img
                                src="/images/reception.jpeg"
                                alt="Reception area"
                            />

                        </div>

                        <div className="centre-content">

                            <div className="centre-number">

                                03

                            </div>

                            <h3>

                                A Welcoming Environment

                            </h3>

                            <p>

                                We strive to create a positive
                                atmosphere where every student feels
                                encouraged to learn, grow and become
                                more confident each week.

                            </p>

                        </div>

                    </div>

                </div>

            </section>

                        {/*==================================================
                OUR TEACHING PHILOSOPHY
            ==================================================*/}

            <section className="philosophy-section">

                <div className="section-container">

                    <div className="philosophy-header">

                        <p className="story-small">

                            OUR TEACHING PHILOSOPHY

                        </p>

                        <h2>

                            Learning is a journey,
                            <br></br>
                            


                                not a race.

                        </h2>

                        <p>

                            We believe every student develops confidence
                            through understanding, consistent practice
                            and gradual progress. Our teaching approach
                            encourages students to master every concept
                            before taking the next step.

                        </p>

                    </div>



                    <div className="journey-layout">

                        <div className="journey-grid">



                        <div className="journey-card">

                            <div className="journey-icon">

                                <Lightbulb
                                    size={42}
                                    strokeWidth={2}
                                />

                            </div>

                            <h3>

                                Understand

                            </h3>

                            <p>

                                Learn every concept clearly before
                                moving forward.

                            </p>

                        </div>



                        <div className="journey-line"></div>



                        <div className="journey-card">

                            <div className="journey-icon">

                                <PencilLine
                                    size={42}
                                    strokeWidth={2}
                                />

                            </div>

                            <h3>

                                Practise

                            </h3>

                            <p>

                                Strengthen understanding through
                                guided practice and discussion.

                            </p>

                        </div>



                        <div className="journey-line"></div>



                        <div className="journey-card">

                            <div className="journey-icon">

                                <Target
                                    size={42}
                                    strokeWidth={2}
                                />

                            </div>

                            <h3>

                                Apply

                            </h3>

                            <p>

                                Solve increasingly challenging
                                problems confidently.

                            </p>

                        </div>



                        <div className="journey-line"></div>



                        <div className="journey-card">

                            <div className="journey-icon">

                                <Sprout
                                    size={42}
                                    strokeWidth={2}
                                />

                            </div>

                            <h3>

                                Grow

                            </h3>

                            <p>

                                Build confidence that extends
                                beyond examinations.

                            </p>

                        </div>

                            </div>

                            <div className="journey-photo">

                                <img
                                    src="/images/learningladder.jpeg"
                                    alt="Learning ladder"
                                />

                            </div>

                        </div>

                    </div>

            </section>

        </main>

    );

}


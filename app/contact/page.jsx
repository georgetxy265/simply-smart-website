"use client";

import "./style.css";

import {
    useEffect,
    useRef
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
    MapPin,
    Phone,
    Mail,
    Instagram,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);


export default function Contact() {
    const pageRef = useRef(null);

useEffect(() => {

    if (window.matchMedia("(max-width: 768px), (prefers-reduced-motion: reduce)").matches) {
        return;
    }

    const ctx = gsap.context(() => {


        /*==================================================
        CONTACT US TEXT
        ==================================================*/

        gsap.fromTo(
            ".contact-hero-content > *",
            {
                opacity: 0,
                y: 24,
            },
            {
                opacity: 1,
                y: 0,

                duration: 0.7,
                stagger: 0.1,

                ease: "power2.out",

                scrollTrigger: {
                    trigger: ".contact-hero",
                    start: "top 78%",
                    once: true,
                },
            }
        );


/*==================================================
BIRDS — INFINITE FLYING LOOP
==================================================*/

const birds = gsap.utils.toArray(".bird");

birds.forEach((bird, index) => {

    const birdTimeline = gsap.timeline({

        repeat: -1,

        repeatDelay: 2.5 + index * 0.5,

        delay: index * 0.65,

    });


    /* RESET BIRD TO LEFT */

    birdTimeline.set(bird, {

        x: -150,
        y: 0,
        opacity: 0,

    });


    /* FADE IN */

    birdTimeline.to(bird, {

        opacity: 0.45,

        duration: 0.5,

    });


    /* FLY ACROSS */

    birdTimeline.to(
        bird,
        {

            x: () => window.innerWidth + 300,

            y: index % 2 === 0 ? -30 : 22,

            duration: 6 + index * 0.45,

            ease: "none",

        },
        "<"
    );


    /* FADE OUT */

    birdTimeline.to(
        bird,
        {

            opacity: 0,

            duration: 0.4,

        },
        "-=0.4"
    );

});


        /*==================================================
        VISIT CENTRE — IMAGE
        ==================================================*/

        gsap.fromTo(
            ".visit-image",
            {
                opacity: 0,
                x: -28,
            },
            {
                opacity: 1,
                x: 0,

                duration: 0.8,

                ease: "power2.out",

                scrollTrigger: {
                    trigger: ".visit-centre",
                    start: "top 80%",
                    once: true,
                },
            }
        );


        /*==================================================
        VISIT CENTRE — TEXT
        ==================================================*/

        gsap.fromTo(
            ".visit-content",
            {
                opacity: 0,
                x: 28,
            },
            {
                opacity: 1,
                x: 0,

                duration: 0.8,

                ease: "power2.out",

                scrollTrigger: {
                    trigger: ".visit-centre",
                    start: "top 80%",
                    once: true,
                },
            }
        );


        /*==================================================
        CONTACT CARDS
        ==================================================*/

        gsap.fromTo(
            ".contact-card",
            {
                opacity: 0,
                y: 15,
            },
            {
                opacity: 1,
                y: 0,

                duration: 0.45,
                stagger: 0.08,

                ease: "power2.out",

                scrollTrigger: {
                    trigger: ".contact-cards",
                    start: "top 87%",
                    once: true,
                },
            }
        );


        /*==================================================
        FIND US HEADER
        ==================================================*/

        gsap.fromTo(
            ".contact-map-header > *",
            {
                opacity: 0,
                y: 20,
            },
            {
                opacity: 1,
                y: 0,

                duration: 0.6,
                stagger: 0.09,

                ease: "power2.out",

                scrollTrigger: {
                    trigger: ".contact-map-section",
                    start: "top 80%",
                    once: true,
                },
            }
        );


        /*==================================================
        MAP
        ==================================================*/

        gsap.fromTo(
            ".contact-map-wrapper",
            {
                opacity: 0,
                y: 25,
            },
            {
                opacity: 1,
                y: 0,

                duration: 0.8,

                ease: "power2.out",

                scrollTrigger: {
                    trigger: ".contact-map-wrapper",
                    start: "top 85%",
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
    className="contact-page"
>






            {/*==================================================
                HERO
            ==================================================*/}

<section className="contact-hero">

    {/* FLYING BIRDS */}

<div
    className="contact-birds"
    aria-hidden="true"
>
    {[1, 2, 3, 4, 5].map((bird) => (
        <svg
            key={bird}
            className={`bird bird-${bird}`}
            viewBox="0 0 80 35"
        >
            <path
                d="
                    M 4 25
                    C 14 10, 26 9, 39 22
                    C 52 9, 65 10, 76 25
                    C 61 17, 51 18, 39 29
                    C 27 18, 17 17, 4 25
                    Z
                "
                fill="currentColor"
            />
        </svg>
    ))}
</div>


    <div className="section-container">

                    <div className="contact-hero-content">

                        <p className="contact-small-title">

                            GET IN TOUCH

                        </p>


                        <h1 className="contact-title">

                            CONTACT US!

                        </h1>


                        <p className="contact-description">

                            Whether you’re exploring our programmes
                            or interested in signing up, we’d be
                            delighted to hear from you.

                        </p>

                    </div>

                </div>

            </section>



            {/*==================================================
                VISIT OUR CENTRE
            ==================================================*/}

            <section className="visit-centre">

                <div className="section-container">

                    <div className="visit-grid">


                        {/* PHOTO */}

                        <div className="visit-image">

                            <img
                                src="/images/centreliftview.jpeg"
                                alt="Simply Smart Enrichment Centre"
                            />

                        </div>



                        {/* CONTENT */}

                        <div className="visit-content">

                            <p className="section-label">

                                VISIT OUR CENTRE

                            </p>


                            <h2>

                                We’d love to
                                <br />

                                    welcome you.

                            </h2>


                            <p className="visit-description">

                                If you have any questions about
                                our programmes or would simply
                                like to find out more about
                                Simply Smart Enrichment,
                                feel free to get in touch.

                            </p>



                            <div className="contact-cards">


                                {/* ADDRESS */}

                                <div className="contact-card">

                                    <MapPin size={26} />

                                    <div>

                                        <h3>

                                            Address

                                        </h3>


                                        <p>

                                            Block 503 #03-845,
                                            Jurong West Avenue 1,
                                            <br />

                                            Singapore 640503

                                        </p>

                                    </div>

                                </div>



                                {/* PHONE */}

                                <div className="contact-card">

                                    <Phone size={26} />

                                    <div>

                                        <h3>

                                            Phone & WhatsApp

                                        </h3>


                                        <p>

                                            +65 8112 2068

                                        </p>

                                    </div>

                                </div>



                                {/* INSTAGRAM */}

                                <div className="contact-card">

                                    <Instagram size={26} />

                                    <div>

                                        <h3>

                                            Instagram

                                        </h3>


                                        <p>

                                            @simplysmart.eductr

                                        </p>

                                    </div>

                                </div>



                                {/* EMAIL */}

                                <div className="contact-card">

                                    <Mail size={26} />

                                    <div>

                                        <h3>

                                            Email

                                        </h3>


                                        <p>

                                            email@simplysmarteductr.com

                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>



            {/*==================================================
                FIND US
            ==================================================*/}

            <section className="contact-map-section">

                <div className="section-container">

                    <div className="contact-map-header">

                        <p className="contact-small-title">

                            FIND US

                        </p>


                        <h2>

                            Easy to find.
                            <br />

                                Easy to visit.


                        </h2>


                        <p>

                            Visit Simply Smart Enrichment in
                            Jurong West, Singapore.

                        </p>

                    </div>



                    <div className="contact-map-wrapper">

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7109267935384!2d103.71543607394497!3d1.3499637615776214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da103dba891cbd%3A0x41837ae57f3c0d3c!2sSimply%20Smart%20Enrichment!5e0!3m2!1sen!2ssg!4v1786204396420!5m2!1sen!2ssg"
                            width="100%"
                            height="100%"
                            style={{
                                border: 0
                            }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                            title="Simply Smart Enrichment Location"
                        />

                    </div>



                    <a
                        href="https://maps.google.com/?q=Simply+Smart+Enrichment+Jurong+West"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-map-button"
                    >

                        <MapPin size={22} />


                        <span>

                            Open in Google Maps

                        </span>


                        <span className="map-arrow">

                            →

                        </span>

                    </a>

                </div>

            </section>


        </main>

    );

}

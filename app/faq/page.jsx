"use client";

import "./style.css";

import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
    Plus,
    Minus,
} from "lucide-react";


export default function FAQPage() {

    const pageRef = useRef(null);

    const [openFAQ, setOpenFAQ] = useState(-1);


    /*==================================================
        FAQ CONTENT
    ==================================================*/

    const faqs = [

        {
            question: "What programmes does Simply Smart Enrichment offer?",
            answer:
                "Simply Smart Enrichment offers Mathematics and Science programmes for students across different academic levels, together with enrichment programmes designed to strengthen understanding, problem-solving and confidence.",
        },

        {
            question: "Which levels do you teach?",
            answer:
                "Our programmes are available for Primary School, Secondary School and Junior College students. Lessons are carefully tailored to each academic level while following the latest Singapore MOE syllabus.",
        },

        {
            question: "What subjects do you teach?",
            answer:
                "We specialise primarily in Mathematics and Science, with programmes designed to help students build strong foundations, deepen conceptual understanding and apply what they learn confidently.",
        },

        {
            question: "How are lessons conducted?",
            answer:
                "Lessons focus on clear explanations, guided practice and application. Students are encouraged to understand concepts rather than simply memorise methods.",
        },

        {
            question: "Do you offer Olympiad preparation?",
            answer:
                "Yes. Simply Smart Enrichment offers Mathematics and Science Olympiad programmes that develop analytical thinking, reasoning and higher-order problem-solving skills.",
        },

        {
            question: "How can I register my child?",
            answer:
                "You can contact Simply Smart Enrichment to enquire about suitable programmes, available classes and registration.",
        },

    ];


    /*==================================================
        GSAP
    ==================================================*/

    useEffect(() => {

        if (window.matchMedia("(max-width: 768px), (prefers-reduced-motion: reduce)").matches) {
            return;
        }

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {

            /* HEADER */

            gsap.from(".faq-header > *", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: "power2.out",
            });



            /* QUESTION MARKS */

            gsap.to(".mark-1", {
                y: -18,
                duration: 2.4,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
            });

            gsap.to(".mark-2", {
                y: -18,
                duration: 2.4,
                delay: 0.3,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
            });

            gsap.to(".mark-3", {
                y: -18,
                duration: 2.4,
                delay: 0.6,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
            });

        }, pageRef);


        return () => ctx.revert();

    }, []);


    return (

        <main
            className="faq-page"
            ref={pageRef}
        >

            {/*==================================================
                FAQ
            ==================================================*/}

            <section className="faq-section">


                {/* DECORATIVE QUESTION MARKS */}

                <div
                    className="faq-question-marks"
                    aria-hidden="true"
                >

                    <span className="faq-mark mark-1">
                        ?
                    </span>

                    <span className="faq-mark mark-2">
                        ?
                    </span>

                    <span className="faq-mark mark-3">
                        ?
                    </span>

                </div>


                <div className="section-container">


                    {/* HEADER */}

                    <div className="faq-header">

                        <p className="section-label">
                            EVERYTHING YOU NEED TO KNOW
                        </p>


                        <h1>
                            FREQUENTLY ASKED
                            <br />
                            QUESTIONS
                        </h1>


                        <p>
                            Here are some of the most common questions
                            parents ask about Simply Smart Enrichment.
                        </p>

                    </div>


                    {/* FAQ LIST */}

                    <div className="faq-list">

                        {faqs.map((faq, index) => (

                            <div
                                className={`faq-item ${
                                    openFAQ === index
                                        ? "active"
                                        : ""
                                }`}
                                key={index}
                            >

                                <button
                                    className="faq-question"
                                    type="button"
                                    aria-expanded={openFAQ === index}
                                    onClick={() =>
                                        setOpenFAQ(
                                            openFAQ === index
                                                ? -1
                                                : index
                                        )
                                    }
                                >

                                    <span>
                                        {faq.question}
                                    </span>


                                    {openFAQ === index ? (

                                        <Minus size={22} />

                                    ) : (

                                        <Plus size={22} />

                                    )}

                                </button>


                                <div
                                    className={`faq-answer ${
                                        openFAQ === index
                                            ? "show"
                                            : ""
                                    }`}
                                >

                                    <p>
                                        {faq.answer}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

        </main>

    );

}

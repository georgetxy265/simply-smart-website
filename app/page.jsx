"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
    Check,
    Users,
    BookOpenCheck,
    Sparkles,
    Target,
    HeartHandshake,
    GraduationCap,
} from "lucide-react";

import {
    FlaskConical,
    Calculator,
    BookOpen,
    Atom,
    Lightbulb,
    Brain,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

    const pageRef = useRef(null);

    const [reviewSlide, setReviewSlide] = useState(0);
    const [cloudExpanded, setCloudExpanded] = useState(false);
    const [mobileReviews, setMobileReviews] = useState(false);
    const reviewTouchStart = useRef(null);

    const getLastReviewSlide = () => mobileReviews ? 3 : 1;

    const showPreviousReview = () => {
        setCloudExpanded(false);
        setReviewSlide((current) => Math.max(0, current - 1));
    };

    const showNextReview = () => {
        setCloudExpanded(false);
        setReviewSlide((current) => Math.min(getLastReviewSlide(), current + 1));
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1024px)");
        const updateReviewMode = () => {
            setMobileReviews(mediaQuery.matches);
            setReviewSlide(0);
            setCloudExpanded(false);
        };

        updateReviewMode();
        mediaQuery.addEventListener("change", updateReviewMode);

        return () => mediaQuery.removeEventListener("change", updateReviewMode);
    }, []);

    useEffect(() => {

        if (window.matchMedia("(max-width: 768px), (prefers-reduced-motion: reduce)").matches) {
            return;
        }

        const ctx = gsap.context(() => {

            /* ==========================================
               HERO
            ========================================== */

            gsap.fromTo(
                ".hero-center > *",
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    stagger: 0.1,
                    ease: "power2.out",
                }
            );


            /* ==========================================
               WHO WE ARE
            ========================================== */

            gsap.fromTo(
                ".about-home-images",
                {
                    opacity: 0,
                    y: 30,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",

                    scrollTrigger: {
                        trigger: ".about-home-section",
                        start: "top 80%",
                        once: true,
                    },
                }
            );


            gsap.fromTo(
                ".about-home-content",
                {
                    opacity: 0,
                    y: 30,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.1,
                    ease: "power2.out",

                    scrollTrigger: {
                        trigger: ".about-home-section",
                        start: "top 80%",
                        once: true,
                    },
                }
            );


            /* ==========================================
               ABOUT BENEFITS
            ========================================== */

            gsap.fromTo(
                ".about-benefit",
                {
                    opacity: 0,
                    y: 18,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.08,
                    ease: "power2.out",

                    scrollTrigger: {
                        trigger: ".about-benefits",
                        start: "top 85%",
                        once: true,
                    },
                }
            );


            /* ==========================================
               LEARNING SPACE
            ========================================== */

            gsap.fromTo(
                ".learning-space-section .section-heading, .learning-intro",
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.65,
                    stagger: 0.1,
                    ease: "power2.out",

                    scrollTrigger: {
                        trigger: ".learning-space-section",
                        start: "top 80%",
                        once: true,
                    },
                }
            );


            gsap.fromTo(
                ".learning-main-image",
                {
                    opacity: 0,
                    y: 30,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",

                    scrollTrigger: {
                        trigger: ".learning-main-image",
                        start: "top 85%",
                        once: true,
                    },
                }
            );


            gsap.fromTo(
                ".learning-feature",
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.55,
                    stagger: 0.1,
                    ease: "power2.out",

                    scrollTrigger: {
                        trigger: ".learning-features",
                        start: "top 85%",
                        once: true,
                    },
                }
            );


            /* ==========================================
               WHY SIMPLY SMART
            ========================================== */

            gsap.fromTo(
                ".features-header",
                {
                    opacity: 0,
                    y: 25,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power2.out",

                    scrollTrigger: {
                        trigger: ".features-section",
                        start: "top 80%",
                        once: true,
                    },
                }
            );


            gsap.fromTo(
                ".feature-card",
                {
                    opacity: 0,
                    y: 25,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.55,
                    stagger: 0.1,
                    ease: "power2.out",

                    scrollTrigger: {
                        trigger: ".features-grid",
                        start: "top 85%",
                        once: true,
                    },
                }
            );


            /* ==========================================
               REVIEWS
            ========================================== */

            gsap.fromTo(
                ".reviews-section .section-label, .reviews-section .section-heading, .reviews-intro",
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.08,
                    ease: "power2.out",

                    scrollTrigger: {
                        trigger: ".reviews-section",
                        start: "top 80%",
                        once: true,
                    },
                }
            );


            gsap.fromTo(
                ".overall-rating, .review-card",
                {
                    opacity: 0,
                    y: 25,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out",

                    scrollTrigger: {
                        trigger: ".reviews-overview",
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

        <main ref={pageRef}>



            <section className="hero-section">

    <div className="hero-bg-circle hero-bg-1"></div>
    <div className="hero-bg-circle hero-bg-2"></div>

    <div className="hero-center">

        <div className="hero-eyebrow">
            Inspiring Confident Learners Since 2005
        </div>

        <h1 className="hero-title">

            SIMPLY SMART
            
            ENRICHMENT

        </h1>

        <p className="hero-tagline">

            A step-by-step smart guide...

            <strong> since 2005.</strong>

        </p>

        <p className="hero-description">

            Helping students build stronger foundations,
            confidence and a genuine passion for learning
            through engaging Mathematics and Science education.

        </p>


    </div>

    {/* Floating Icons */}

    <div className="floating-icon pi">
        <span className="math-symbol">π</span>
    </div>

    <div className="floating-icon sigma">
        <span className="math-symbol">Σ</span>
    </div>
    <div className="floating-icon flask">
        <FlaskConical size={40}/>
    </div>

    <div className="floating-icon atom">
        <Atom size={42}/>
    </div>

    <div className="floating-icon book">
        <BookOpen size={38}/>
    </div>

    <div className="floating-icon calc">
        <Calculator size={38}/>
    </div>

    <div className="floating-icon bulb">
        <Lightbulb size={40}/>
    </div>

    <div className="floating-icon brain">
        <Brain size={40}/>
    </div>

</section>



            {/* ==========================================================
    WHO WE ARE
========================================================== */}

<section className="about-home-section">

    <div className="section-container about-home-grid">

        {/* IMAGE */}

<div className="about-home-images">

    <div className="about-home-image-wrap">

        <img
            src="/images/simplysmartcentre.jpeg"
            alt="Simply Smart Enrichment"
            className="about-home-image"
        />

        <div className="about-home-badge">

            <span>EST.</span>

            <strong>2005</strong>

            <small>Jurong West<br />Singapore</small>

        </div>

    </div>



</div>


        {/* CONTENT */}

        <div className="about-home-content">

            <div className="section-label">
                WHO WE ARE
            </div>

            <h2 className="section-heading">

                Helping students learn

                smarter, step by step.
                

            </h2>

            <p className="about-home-lead">

                Simply Smart Enrichment is a Math and Science
                tuition centre in Jurong West, Singapore,
                supporting students through structured,
                engaging and confidence-building learning.

            </p>

            <p className="about-home-copy">

                Since 2005, our approach has focused on helping
                students understand concepts rather than simply
                memorising answers. Lessons are broken down into
                clear, manageable steps so students can build
                strong foundations and become more independent
                learners.

            </p>


            <Link
    href="/why-us"
    className="about-home-link"
>
    Discover Our Story
</Link>

</div>


{/* BENEFITS */}

<div className="about-benefits">

    <div className="about-benefit">
        <div className="about-benefit-icon blue">
            <Users size={21} />
        </div>

        <div>
            <strong>Focused Guidance</strong>
            <span>
                Support customised around student understanding.
            </span>
        </div>
    </div>


    <div className="about-benefit">
        <div className="about-benefit-icon green">
            <BookOpenCheck size={21} />
        </div>

        <div>
            <strong>Strong Foundations</strong>
            <span>
                Concepts developed progressively and clearly.
            </span>
        </div>
    </div>


    <div className="about-benefit">
        <div className="about-benefit-icon purple">
            <Target size={21} />
        </div>

        <div>
            <strong>Purposeful Practice</strong>
            <span>
                Exercises selected to strengthen key skills.
            </span>
        </div>
    </div>


    <div className="about-benefit">
        <div className="about-benefit-icon orange">
            <Sparkles size={21} />
        </div>

        <div>
            <strong>Engaging Lessons</strong>
            <span>
                Learning made approachable and meaningful.
            </span>
        </div>
    </div>


    <div className="about-benefit">
        <div className="about-benefit-icon pink">
            <HeartHandshake size={21} />
        </div>

        <div>
            <strong>Supportive Environment</strong>
            <span>
                Students are encouraged to ask and improve.
            </span>
        </div>
    </div>


    <div className="about-benefit">
        <div className="about-benefit-icon cyan">
            <GraduationCap size={21} />
        </div>

        <div>
            <strong>Growing Confidence</strong>
            <span>
                Building independent and capable learners.
            </span>
        </div>
    </div>

</div>

</div>

</section>


<section className="learning-space-section">

    <div className="section-container">

        <h2 className="section-heading">

            Our Learning Space

        </h2>

        <p className="learning-intro">

            Every classroom has been designed to
            encourage curiosity, discussion and
            active participation while providing
            students with a comfortable environment
            to grow in confidence.

        </p>

        <img
            src="/images/classroom1.png"
            alt="Simply Smart classrooms"
            className="learning-main-image"
        />

        <div className="learning-features">

            <div className="learning-feature">

                <BookOpenCheck size={26}/>

                <h3>

                    Interactive Lessons

                </h3>

                <p>

                    Every lesson encourages
                    participation and understanding.

                </p>

            </div>

            <div className="learning-feature">

                <FlaskConical size={26}/>

                <h3>

                    Concept-Focused Science

                </h3>

                <p>

                    Build strong scientific understanding and learn to apply key concepts confidently to different types of questions.

                </p>

            </div>

            <div className="learning-feature">

                <Users size={26}/>

                <h3>

                    Small Class Sizes

                </h3>

                <p>

                    Every student receives
                    individual attention.

                </p>

            </div>

        </div>

    </div>

</section>


            {/* ==================================================
                WHY SIMPLY SMART
            ================================================== */}

            <section className="features-section">

                <div className="section-container">

                    <div className="features-header">

                        <div>

                            <div className="section-label">
                                THE SIMPLY SMART APPROACH
                            </div>

                            <h2 className="section-heading">
                                Small steps.
                                <br />
                                Big progress.
                            </h2>

                        </div>

                        <p>
                            Our teaching approach focuses on helping
                            students understand why an answer works,
                            giving them the skills to approach new
                            questions with confidence.
                        </p>

                    </div>


                    <div className="features-grid">

                        <div className="feature-card">

                            <div className="feature-number">
                                01
                            </div>

                            <div className="feature-icon">
                                ✦
                            </div>

                            <h3>
                                Clear Explanations
                            </h3>

                            <p>
                                Complex Math and Science concepts are
                                broken down into logical, manageable
                                steps students can understand.
                            </p>

                        </div>


                        <div className="feature-card">

                            <div className="feature-number">
                                02
                            </div>

                            <div className="feature-icon">
                                ◎
                            </div>

                            <h3>
                                Structured Practice
                            </h3>

                            <p>
                                Carefully selected exercises reinforce
                                concepts and progressively develop
                                stronger problem-solving skills.
                            </p>

                        </div>


                        <div className="feature-card">

                            <div className="feature-number">
                                03
                            </div>

                            <div className="feature-icon">
                                ↑
                            </div>

                            <h3>
                                Exam Confidence
                            </h3>

                            <p>
                                Students develop the techniques,
                                discipline and confidence needed to
                                tackle examinations effectively.
                            </p>

                        </div>


                        <div className="feature-card">

                            <div className="feature-number">
                                04
                            </div>

                            <div className="feature-icon">
                                ♡
                            </div>

                            <h3>
                                Guided Support
                            </h3>

                            <p>
                                We encourage students to ask questions,
                                learn from mistakes and steadily become
                                independent learners.
                            </p>

                        </div>

                    </div>

                </div>

            </section>



 <section className="reviews-section">

    <div className="section-container">

        <div className="section-label">
            GOOGLE REVIEWS
        </div>

        <h2 className="section-heading">
            Trusted by
            <span> Singapore families.</span>
        </h2>

        <p className="reviews-intro">
            Parents and students have trusted
            Simply Smart Enrichment to support
            their learning journey.
        </p>


        <div className="reviews-overview">

            <div className="overall-rating">

                <h3>
                    5.0
                </h3>

                <div className="stars">
                    ★★★★★
                </div>

                <p>
                    Based on our Google Reviews
                </p>

            </div>

        </div>


        <div className="reviews-carousel">

            {/* LEFT ARROW */}

            <button
                className="review-arrow review-arrow-left"
                onClick={showPreviousReview}
                disabled={reviewSlide === 0}
                aria-label="Previous reviews"
            >
                ←
            </button>


            {/* REVIEWS VIEWPORT */}

            <div
                className="review-viewport"
                onTouchStart={(event) => {
                    reviewTouchStart.current = event.touches[0].clientX;
                }}
                onTouchEnd={(event) => {
                    if (reviewTouchStart.current === null) return;

                    const distance = event.changedTouches[0].clientX - reviewTouchStart.current;
                    reviewTouchStart.current = null;

                    if (distance > 45) showPreviousReview();
                    if (distance < -45) showNextReview();
                }}
            >

                <div
                    className={`review-track review-track-slide-${reviewSlide}`}
                >


                    {/* REVIEW 1 — JY */}

                    <div className={`review-card ${reviewSlide === 0 ? "review-card-active" : ""}`}>

                        <div className="review-top">

                            <img
                                src="/images/google-logo.png"
                                className="google-logo"
                                alt="Google"
                            />

                            <span>
                                ★★★★★
                            </span>

                        </div>

                        <p>
                            Simply Smart Enrichment has been a great place
                            for Math and Science tuition. The teachers are
                            patient and explain difficult concepts in a clear,
                            step-by-step way. The lessons are well structured
                            and focused on helping students understand rather
                            than just memorise. A good tuition centre in Jurong
                            West for students looking to improve their
                            confidence and results.
                        </p>

                        <div className="review-author">

                            <strong>
                                Jy
                            </strong>

                            <small>
                                Google Review
                            </small>

                        </div>

                    </div>


                    {/* REVIEW 2 — YING HSIA LAW */}

                    <div className={`review-card ${reviewSlide === 1 ? "review-card-active" : ""}`}>

                        <div className="review-top">

                            <img
                                src="/images/google-logo.png"
                                className="google-logo"
                                alt="Google"
                            />

                            <span>
                                ★★★★★
                            </span>

                        </div>

                        <p>
                            I’ve improved a lot in Math since joining Simply
                            Smart Enrichment. The lessons are easy to follow
                            and the teacher takes time to explain difficult
                            questions instead of just giving the answers.
                            The practice and exam tips have been really useful
                            too. Highly recommend!
                        </p>

                        <div className="review-author">

                            <strong>
                                YH Law
                            </strong>

                            <small>
                                Google Review
                            </small>

                        </div>

                    </div>


                    {/* REVIEW 3 — LAW ZHENG YI */}

                    <div className={`review-card ${reviewSlide === 2 ? "review-card-active" : ""}`}>

                        <div className="review-top">

                            <img
                                src="/images/google-logo.png"
                                className="google-logo"
                                alt="Google"
                            />

                            <span>
                                ★★★★★
                            </span>

                        </div>

                        <p>
                            Very happy with the teaching at Simply Smart
                            Enrichment. The teachers are patient and make
                            Math and Science much easier to understand.
                            I especially like that they focus on building
                            a strong foundation while preparing students
                            for exams. Definitely worth considering if
                            you’re looking for a tuition centre in Jurong West.
                        </p>

                        <div className="review-author">

                            <strong>
                                Law ZY
                            </strong>

                            <small>
                                Google Review
                            </small>

                        </div>

                    </div>


                    {/* REVIEW 4 — CLOUD */}

                    <div className={`review-card ${reviewSlide === 3 ? "review-card-active" : ""}`}>

                        <div className="review-top">

                            <img
                                src="/images/google-logo.png"
                                className="google-logo"
                                alt="Google"
                            />

                            <span>
                                ★★★★★
                            </span>

                        </div>

                        <p
                            className={
                                cloudExpanded
                                    ? "cloud-review expanded"
                                    : "cloud-review"
                            }
                        >
                            As a parent, I am very satisfied with Simply Smart
                            Enrichment. It is a very professional math and science
                            tuition centre in Singapore that truly cares about
                            students’ progress.
                            {"\n\n"}
                            The teachers provide clear explanations and give
                            students plenty of practice, which has helped my child
                            improve both understanding and results. The centre is
                            well-organised and located conveniently in the Jurong
                            area.
                            {"\n\n"}
                            Before joining, my kid struggled with Mathematics,
                            but after attending their classes, her grades improved
                            significantly. Their teaching methods are very
                            effective, especially for exam preparation.
                            {"\n\n"}
                            I would highly recommend Simply Smart Enrichment to
                            any parent looking for a good math tuition centre in
                            Singapore.
                        </p>

                        <button
                            className="review-read-more"
                            onClick={() =>
                                setCloudExpanded(!cloudExpanded)
                            }
                        >
                            {cloudExpanded ? "Show less" : "Read more"}
                        </button>

                        <div className="review-author">

                            <strong>
                                Cloud
                            </strong>

                            <small>
                                Google Review
                            </small>

                        </div>

                    </div>

                </div>

            </div>


            {/* RIGHT ARROW */}

            <button
                className="review-arrow review-arrow-right"
                onClick={showNextReview}
                disabled={reviewSlide === (mobileReviews ? 3 : 1)}
                aria-label="Next reviews"
            >
                →
            </button>

        </div>


        <div className="review-dots">

            {[0, 1, 2, 3].map((slide) => (
                <button
                    key={slide}
                    className={`review-dot ${reviewSlide === slide ? "active" : ""}`}
                    onClick={() => {
                        setCloudExpanded(false);
                        setReviewSlide(slide);
                    }}
                    aria-label={`Show review ${slide + 1}`}
                />
            ))}

        </div>


        <a
            href="https://www.google.com/maps/search/?api=1&query=Simply+Smart+Enrichment&query_place_id=ChIJvRyJuj0Q2jERPA08f-V6g0E"
            target="_blank"
            rel="noopener noreferrer"
            className="review-button"
        >
            View All Google Reviews →
        </a>

    </div>

</section>


        </main>

    );

}

"use client";

import "./style.css";

export default function Register() {

    return (

        <main className="register-page">

            {/*==================================================
                HERO
            ==================================================*/}

            <section className="register-hero">

                <div className="section-container">

                    <div className="register-hero-content">

                        <p className="register-small-title">

                            BEGIN YOUR LEARNING JOURNEY

                        </p>

                        <h1 className="register-title">

                            Register for
                            <br />

                            <span>

                                Simply Smart Enrichment

                            </span>

                        </h1>

                        <p className="register-description">

                            We are excited to welcome your child to
                            Simply Smart Enrichment. Complete the
                            registration form below and our team
                            will contact you as soon as possible. Alternatively, you can 
                            reach out to us at by WhatsApp/Phone (+65 8112 2068) to sign up for lessons

                        </p>

                    </div>

                </div>

            </section>



            {/*==================================================
                ABOUT REGISTRATION
            ==================================================*/}

            <section className="register-intro">

                <div className="section-container">

                    <div className="register-intro-content">

                        <p className="section-label">

                            THE SIMPLY SMART DIFFERENCE

                        </p>

                        <h2>

                            Learning That
                            <br></br>

                            <span>

                                Makes A Difference

                            </span>

                        </h2>

                        <p>

                            Simply Smart Enrichment is a Singapore enrichment centre dedicated to helping Primary, Secondary and Junior College students excel in Mathematics, Science and other core subjects. Through personalised learning, experienced educators and engaging lessons, we build strong academic foundations, improve confidence and inspire a genuine passion for learning in every student.

                        </p>

                    </div>

                </div>

            </section>



            {/*==================================================
                GOOGLE FORM
            ==================================================*/}

            <section className="register-form-section">

                <div className="section-container">

                    <div className="register-form-card">

                        <p className="section-label">

                            STUDENT REGISTRATION

                        </p>

                        <h2>

                            Registration Form

                        </h2>

                        <p>

                            Please complete the registration form below.
                            Once submitted, our team will review your
                            application and contact you shortly.

                        </p>

                        <iframe

                            src="YOUR_GOOGLE_FORM_EMBED_LINK"

                            title="Simply Smart Registration Form"

                            loading="lazy"

                        />

                    </div>

                </div>

            </section>

        </main>

    );

}
"use client";

import Link from "next/link";

export default function Footer() {

    return (

        <footer className="site-footer">

            <div className="footer-container">

                {/* MAIN FOOTER */}

                <div className="footer-main">

                    {/* BRAND */}

                    <div className="footer-brand">

                        <img
                            src="/images/simplysmartlogo.png"
                            alt="Simply Smart Enrichment"
                            className="footer-logo"
                        />

                        <p className="footer-description">

                            Helping students build confidence,
                            strengthen their foundations and
                            reach their potential.

                        </p>

                    </div>


                    {/* EXPLORE */}

                    <div className="footer-column">

                        <h3>

                            Explore

                        </h3>

                        <Link href="/">

                            Home

                        </Link>

                        <Link href="/why-us">
                            Why Us
                        </Link>

                        <Link href="/testimonials">

                            Testimonials

                        </Link>


                        {/* PROGRAMMES */}

                    <div className="footer-column">

                        <h3>

                            Programmes

                        </h3>

                        <Link href="/moe-school-partnerships">

                            MOE School Partnerships

                        </Link>

                        <Link href="/mathematics">

                            Mathematics

                        </Link>

                        <Link href="/science">

                            Science

                        </Link>


                    </div>

                        <Link href="/blog">

                            Blog

                        </Link>

                    </div>


                        {/* CONTACT */}

                        <div className="footer-column">

                            <h3>
                                Contact
                            </h3>

                            <a href="tel:+6581122068">
                                +65 8112 2068
                            </a>

                            <Link href="/faq">
                                FAQ
                            </Link>

                            <a
                                href="https://www.instagram.com/simplysmart.eductr/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Instagram
                            </a>

                        </div>
                    

                </div>


                {/* BOTTOM */}

                <div className="footer-bottom">

                    <p>

                        © 2026 Simply Smart Enrichment.
                        All rights reserved.

                    </p>

                </div>

            </div>

        </footer>

    );

}

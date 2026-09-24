"use client";

import { useEffect, useState } from "react";
import Link from "next/link";


export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const closeMenu = () => {
        setMenuOpen(false);
        setOpenDropdown(null);
    };

    const handleNavigation = () => {
        window.setTimeout(closeMenu, 0);
    };


    useEffect(() => {

        if (menuOpen) {

            document.body.classList.add("menu-open");

        } else {

            document.body.classList.remove("menu-open");

        }

        return () => {

            document.body.classList.remove("menu-open");

        };

    }, [menuOpen]);

    return (

        <header className="site-header">

            {/* LOGO */}

            <Link
                href="/"
                className="logo"
            >

                <img
                    src="/images/simplysmartlogo.png"
                    alt="Simply Smart Enrichment"
                    className="logo-image"
                />

            </Link>


            {/* MOBILE BUTTON */}

            <button
                className={`menu-button ${menuOpen ? "active" : ""}`}
                type="button"
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
                onClick={() => {
                    setMenuOpen((current) => !current);
                    if (menuOpen) setOpenDropdown(null);
                }}
            >

                <span></span>
                <span></span>
                <span></span>

            </button>


            {/* NAVIGATION */}

            <nav
                className={`main-navigation ${menuOpen ? "open" : ""}`}
                aria-label="Main navigation"
            >

                {/* HOME */}

                <Link
                    href="/"
                    onClick={handleNavigation}
                >
                    Home
                </Link>


                {/* ABOUT */}

                <div className={`nav-dropdown ${openDropdown === "about" ? "mobile-open" : ""}`}>

                    <button
                        type="button"
                        className="nav-dropdown-trigger"
                        aria-haspopup="true"
                        aria-expanded={openDropdown === "about"}
                        onClick={() => setOpenDropdown((current) => current === "about" ? null : "about")}
                    >

                        About

                        <span
                            className="dropdown-arrow"
                            aria-hidden="true"
                        ></span>

                    </button>

                    <div className="nav-dropdown-menu">

                        <Link
                            href="/why-us"
                            onClick={handleNavigation}
                        >
                            Why Us
                        </Link>

                        <Link
                            href="/testimonials"
                            onClick={handleNavigation}
                        >
                            Testimonials
                        </Link>

                    </div>

                </div>


                {/* PROGRAMMES */}

                <div className={`nav-dropdown ${openDropdown === "programmes" ? "mobile-open" : ""}`}>

                    <button
                        type="button"
                        className="nav-dropdown-trigger"
                        aria-haspopup="true"
                        aria-expanded={openDropdown === "programmes"}
                        onClick={() => setOpenDropdown((current) => current === "programmes" ? null : "programmes")}
                    >

                        Programmes

                        <span
                            className="dropdown-arrow"
                            aria-hidden="true"
                        ></span>

                    </button>

                    <div className="nav-dropdown-menu programmes-dropdown-menu">

                        <Link
                            href="/moe-school-partnerships"
                            onClick={handleNavigation}
                        >
                            MOE School Partnerships
                        </Link>

                        <Link
                            href="/mathematics"
                            onClick={handleNavigation}
                        >
                            Mathematics
                        </Link>

                        <Link
                            href="/science"
                            onClick={handleNavigation}
                        >
                            Science
                        </Link>

                    </div>

                </div>


                {/* BLOG */}

                <Link
                    href="/blog"
                    onClick={handleNavigation}
                >
                    Blog
                </Link>


                {/* FAQ */}

                <Link
                    href="/faq"
                    onClick={handleNavigation}
                >
                    FAQ
                </Link>

                {/* CONTACT */}

                <Link
                    href="/contact"
                    onClick={handleNavigation}
                >
                    Contact
                </Link>

            </nav>

        </header>

    );

}


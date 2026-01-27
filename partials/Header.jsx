"use client";
import { useState } from "react";
import Link from "next/link";
import Menu from "@/components/Menu.jsx"

export default function Header() {
    const [isNavbarActive, setIsNavbarActive] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMenuClose = () => {
        setMobileMenuOpen(false);
        setIsNavbarActive(false)
    }

    return (
        <>
            <section className="navbar-area navbar-nine">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <Link className="navbar-brand" href={"/"}>
                                    <img
                                        className="logo"
                                        src="/images/logo-gold-horizontal.png"
                                        alt="Logo"
                                    />
                                </Link>

                                {/* === Navbar Toggler === */}
                                <button
                                    className={`navbar-toggler ${isNavbarActive ? "active" : ""}`}
                                    type="button"
                                    aria-controls="navbarNine"
                                    aria-expanded={isNavbarActive}
                                    aria-label="Toggle navigation"
                                    onClick={() => {
                                        setIsNavbarActive(!isNavbarActive);
                                        setMobileMenuOpen(!isMobileMenuOpen);
                                    }}
                                >
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                </button>

                                <Menu show={isMobileMenuOpen} closeMenu={handleMenuClose} />

                                {/* === Sidebar Menu Button === */}
                                <div className="navbar-btn d-none d-lg-inline-block">
                                    <a
                                        className="menu-bar"
                                        onClick={() => setIsSidebarOpen(true)}
                                    >
                                        <i className="lni lni-menu"></i>
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Sidebar ===== */}
            <div className={`sidebar-left ${isSidebarOpen ? "open" : ""}`}>
                <div className="sidebar-close">
                    <button className="close btn" onClick={() => setIsSidebarOpen(false)}>
                        <i className="lni lni-close"></i>
                    </button>
                </div>
                <div className="sidebar-content">
                    <div className="sidebar-logo">
                        <a href="/">
                            <img
                                className="mw-80"
                                src="/images/logo-gold-alone.png"
                                alt="Logo"
                            />
                        </a>
                    </div>
                    <h4 className="gold-text mt-10">SAGE CONSULTANCY</h4>
                    <p className="text">Your global journey begins here</p>

                    <div className="sidebar-menu">
                        <h5 className="menu-title">Quick Links</h5>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Team</a></li>
                            <li><a href="#">Latest News</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="sidebar-social align-items-center justify-content-center">
                        <h5 className="social-title">Follow Us On</h5>
                        <ul>
                            <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
                            <li><a href="#"><i className="lni lni-twitter-original"></i></a></li>
                            <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                            <li><a href="#"><i className="lni lni-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ===== Overlay ===== */}
            <div
                className={`overlay-left ${isSidebarOpen ? "open" : ""}`}
                onClick={() => setIsSidebarOpen(false)}
            ></div>
        </>
    );
}

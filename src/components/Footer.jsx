import {NavLink} from "react-router-dom";
import PrivacyPolicy from "../pages/PrivacyPolicy";

export  default function Footer () {
    return(
        <>
            <footer className="footer-area footer-eleven">
                {/* Start Footer Top */}
                <div className="footer-top">
                    <div className="container">
                        <div className="inner-content">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-12">
                                    {/* Single Widget */}
                                    <div className="footer-widget f-about">
                                        <div className="logo">
                                            <a href="index.html">
                                                <img src="/assets/images/logo-gold-alone.png" width="200" alt="#"
                                                     className="img-fluid"/>
                                            </a>
                                        </div>
                                        <h3 className="gold-text mt-20 ">SAGE CONSULTANCY</h3>
                                        <p>
                                            Your global journey begins here
                                        </p>
                                        <p className="copyright-text">
                                            <span>© 2024 Sage Consultancy</span>

                                        </p>
                                    </div>
                                    {/* End Single Widget */}
                                </div>
                                <div className="col-lg-2 col-md-6 col-12">
                                    {/* Single Widget */}
                                    <div className="footer-widget f-link">
                                        <h5>Solutions</h5>
                                        <ul>
                                            <li><NavLink to='/PrivacyPolicy'>Privacy Policy</NavLink></li>
                                            <li><a href="javascript:void(0)">Analytics</a></li>
                                            <li><a href="javascript:void(0)">Commerce</a></li>
                                            <li><a href="javascript:void(0)">Insights</a></li>
                                        </ul>
                                    </div>
                                    {/* End Single Widget */}
                                </div>
                                <div className="col-lg-2 col-md-6 col-12">
                                    {/* Single Widget */}
                                    <div className="footer-widget f-link">
                                        <h5>Support</h5>
                                        <ul>
                                            <li><a href="javascript:void(0)">Pricing</a></li>
                                            <li><a href="javascript:void(0)">Documentation</a></li>
                                            <li><a href="javascript:void(0)">Guides</a></li>
                                            <li><a href="javascript:void(0)">API Status</a></li>
                                        </ul>
                                    </div>
                                    {/* End Single Widget */}
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    {/* Single Widget */}
                                    <div className="footer-widget newsletter">
                                        <h5>Subscribe</h5>
                                        <p>Subscribe to our newsletter for the latest updates</p>
                                        <form action="#" method="get" target="_blank" className="newsletter-form">
                                            <input name="EMAIL" placeholder="Email address" required="required"
                                                   type="email"/>
                                            <div className="button">
                                                <button className="sub-btn">
                                                    <i className="lni lni-envelope"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    {/* End Single Widget */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*/ End Footer Top */}
            </footer>
            <a href="#" className="scroll-top btn-hover">
                <i className="lni lni-chevron-up"></i>
            </a>
        </>
    )
}
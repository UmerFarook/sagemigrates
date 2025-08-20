import Menu from "./components/Menu.jsx";

export default function Header() {
    return (
        <>
        <section className="navbar-area navbar-nine">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand" href="/index.html">
                                <img className="logo" src="src/assets/images/logo-gold-horizontal.png" alt="Logo"/>
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarNine"
                                    aria-controls="navbarNine" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                            </button>

                            <Menu></Menu>


                            <div className="navbar-btn d-none d-lg-inline-block">
                                <a className="menu-bar" href="#side-menu-left"><i className="lni lni-menu"></i></a>
                            </div>
                        </nav>
                        {/* navbar */}
                    </div>
                </div>
                {/* row */}
            </div>
            {/* container */}
        </section>

    {/*====== NAVBAR NINE PART ENDS ======*/}

    {/*====== SIDEBAR PART START ======*/}

    <div class="sidebar-left">
        <div class="sidebar-close">
            <a class="close" href="#close"><i class="lni lni-close"></i></a>
        </div>
        <div class="sidebar-content">
            <div class="sidebar-logo">
                <a href="index.html"><img class="mw-80" src="src/assets/images/logo-gold-alone.png" alt="Logo"/></a>
            </div>
            <h4 class="gold-text  mt-10">SAGE CONSULTANCY</h4>
            <p class="text">Your global journey begins here</p>
            {/* logo */}
            <div class="sidebar-menu">
                <h5 class="menu-title">Quick Links</h5>
                <ul>
                    <li><a href="javascript:void(0)">About Us</a></li>
                    <li><a href="javascript:void(0)">Our Team</a></li>
                    <li><a href="javascript:void(0)">Latest News</a></li>
                    <li><a href="javascript:void(0)">Contact Us</a></li>
                </ul>
            </div>
            {/* menu */}
            <div class="sidebar-social align-items-center justify-content-center">
                <h5 class="social-title">Follow Us On</h5>
                <ul>
                    <li>
                        <a href="javascript:void(0)"><i class="lni lni-facebook-filled"></i></a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"><i class="lni lni-twitter-original"></i></a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"><i class="lni lni-linkedin-original"></i></a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"><i class="lni lni-youtube"></i></a>
                    </li>
                </ul>
            </div>
            {/* sidebar social */}
        </div>
        {/* content */}
    </div>
    <div class="overlay-left"></div>
        </>
)
}
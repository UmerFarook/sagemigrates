import Counter from "../components/components/counter.jsx";

export default function Home() {
    return(
        <>
        <section id="hero-area"className="header-area header-eight">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-12 col-12">
                        <div className="header-content">
                            <h1>Your successful migration starts here.</h1>
                            <p>
                                We are committed to delivering exceptional service to our clients, ensuring a seamless and positive experience throughout the entire process.
                            </p>
                            <div className="button">

                                <a
                                    href="https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM"
                                   className="glightbox video-button">
                <span className="btn icon-btn rounded-full">
                  <i className="lni lni-play"></i>
                </span>
                                    <span className="text">Watch Intro</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-12">
                        <div className="header-image">
                            <video className="bg-video" autoPlay muted playsInline loop>
                                <source src="/assets/video/banner.mp4" type="video/mp4"/>
                                    Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        {/*====== ABOUT FIVE PART START ======*/}

        <section className="about-area about-five">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="about-image-five">
                            <svg className="shape" width="106" height="134" viewBox="0 0 106 134" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="1.66654" cy="1.66679" r="1.66667" fill="#DADADA" />
                                <circle cx="1.66654" cy="16.3335" r="1.66667" fill="#DADADA" />
                                <circle cx="1.66654" cy="31.0001" r="1.66667" fill="#DADADA" />
                                <circle cx="1.66654" cy="45.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="1.66654" cy="60.3335" r="1.66667" fill="#DADADA" />
                                <circle cx="1.66654" cy="88.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="1.66654" cy="117.667" r="1.66667" fill="#DADADA" />
                                <circle cx="1.66654" cy="74.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="1.66654" cy="103" r="1.66667" fill="#DADADA" />
                                <circle cx="1.66654" cy="132" r="1.66667" fill="#DADADA" />
                                <circle cx="16.3333" cy="1.66679" r="1.66667" fill="#DADADA" />
                                <circle cx="16.3333" cy="16.3335" r="1.66667" fill="#DADADA" />
                                <circle cx="16.3333" cy="31.0001" r="1.66667" fill="#DADADA" />
                                <circle cx="16.3333" cy="45.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="16.333" cy="60.3335" r="1.66667" fill="#DADADA" />
                                <circle cx="16.333" cy="88.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="16.333" cy="117.667" r="1.66667" fill="#DADADA" />
                                <circle cx="16.333" cy="74.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="16.333" cy="103" r="1.66667" fill="#DADADA" />
                                <circle cx="16.333" cy="132" r="1.66667" fill="#DADADA" />
                                <circle cx="30.9998" cy="1.66679" r="1.66667" fill="#DADADA" />
                                <circle cx="74.6665" cy="1.66679" r="1.66667" fill="#DADADA" />
                                <circle cx="30.9998" cy="16.3335" r="1.66667" fill="#DADADA" />
                                <circle cx="74.6665" cy="16.3335" r="1.66667" fill="#DADADA" />
                                <circle cx="30.9998" cy="31.0001" r="1.66667" fill="#DADADA" />
                                <circle cx="74.6665" cy="31.0001" r="1.66667" fill="#DADADA" />
                                <circle cx="30.9998" cy="45.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="74.6665" cy="45.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="31" cy="60.3335" r="1.66667" fill="#DADADA" />
                                <circle cx="74.6668" cy="60.3335" r="1.66667" fill="#DADADA" />
                                <circle cx="31" cy="88.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="74.6668" cy="88.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="31" cy="117.667" r="1.66667" fill="#DADADA" />
                                <circle cx="74.6668" cy="117.667" r="1.66667" fill="#DADADA" />
                                <circle cx="31" cy="74.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="74.6668" cy="74.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="31" cy="103" r="1.66667" fill="#DADADA" />
                                <circle cx="74.6668" cy="103" r="1.66667" fill="#DADADA" />
                                <circle cx="31" cy="132" r="1.66667" fill="#DADADA" />
                                <circle cx="74.6668" cy="132" r="1.66667" fill="#DADADA" />
                                <circle cx="45.6665" cy="1.66679" r="1.66667" fill="#DADADA" />
                                <circle cx="89.3333" cy="1.66679" r="1.66667" fill="#DADADA" />
                                <circle cx="45.6665" cy="16.3335" r="1.66667" fill="#DADADA" />
                                <circle cx="89.3333" cy="16.3335" r="1.66667" fill="#DADADA" />
                                <circle cx="45.6665" cy="31.0001" r="1.66667" fill="#DADADA" />
                                <circle cx="89.3333" cy="31.0001" r="1.66667" fill="#DADADA" />
                                <circle cx="45.6665" cy="45.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="89.3333" cy="45.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="45.6665" cy="60.3335" r="1.66667" fill="#DADADA" />
                                <circle cx="89.3333" cy="60.3335" r="1.66667" fill="#DADADA" />
                                <circle cx="45.6665" cy="88.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="89.3333" cy="88.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="45.6665" cy="117.667" r="1.66667" fill="#DADADA" />
                                <circle cx="89.3333" cy="117.667" r="1.66667" fill="#DADADA" />
                                <circle cx="45.6665" cy="74.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="89.3333" cy="74.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="45.6665" cy="103" r="1.66667" fill="#DADADA" />
                                <circle cx="89.3333" cy="103" r="1.66667" fill="#DADADA" />
                                <circle cx="45.6665" cy="132" r="1.66667" fill="#DADADA" />
                                <circle cx="89.3333" cy="132" r="1.66667" fill="#DADADA" />
                                <circle cx="60.3333" cy="1.66679" r="1.66667" fill="#DADADA" />
                                <circle cx="104" cy="1.66679" r="1.66667" fill="#DADADA" />
                                <circle cx="60.3333" cy="16.3335" r="1.66667" fill="#DADADA" />
                                <circle cx="104" cy="16.3335" r="1.66667" fill="#DADADA" />
                                <circle cx="60.3333" cy="31.0001" r="1.66667" fill="#DADADA" />
                                <circle cx="104" cy="31.0001" r="1.66667" fill="#DADADA" />
                                <circle cx="60.3333" cy="45.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="104" cy="45.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="60.333" cy="60.3335" r="1.66667" fill="#DADADA" />
                                <circle cx="104" cy="60.3335" r="1.66667" fill="#DADADA" />
                                <circle cx="60.333" cy="88.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="104" cy="88.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="60.333" cy="117.667" r="1.66667" fill="#DADADA" />
                                <circle cx="104" cy="117.667" r="1.66667" fill="#DADADA" />
                                <circle cx="60.333" cy="74.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="104" cy="74.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="60.333" cy="103" r="1.66667" fill="#DADADA" />
                                <circle cx="104" cy="103" r="1.66667" fill="#DADADA" />
                                <circle cx="60.333" cy="132" r="1.66667" fill="#DADADA" />
                                <circle cx="104" cy="132" r="1.66667" fill="#DADADA" />
                            </svg>
                            <img src="assets/images/about/about-img1.jpg" alt="about" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="about-five-content">
                            <h6 className="small-title text-lg">OUR STORY</h6>
                            <h2 className="main-title fw-bold">Most trusted names in immigration law</h2>
                            <div className="about-five-tab">
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <button className="nav-link active" id="nav-who-tab" data-bs-toggle="tab" data-bs-target="#nav-who"
                                                type="button" role="tab" aria-controls="nav-who" aria-selected="true">About Us</button>
                                        <button className="nav-link" id="nav-vision-tab" data-bs-toggle="tab" data-bs-target="#nav-vision"
                                                type="button" role="tab" aria-controls="nav-vision" aria-selected="false">our Vision</button>
                                        <button className="nav-link" id="nav-history-tab" data-bs-toggle="tab" data-bs-target="#nav-history"
                                                type="button" role="tab" aria-controls="nav-history" aria-selected="false">our Mission</button>
                                    </div>
                                </nav>
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-who" role="tabpanel" aria-labelledby="nav-who-tab">
                                        <p>Our team of highly experienced immigration specialists possesses in-depth knowledge of the entire immigration process, offering expert guidance at every stage of your journey. We are committed to delivering exceptional service to our clients, ensuring a seamless and positive experience throughout the entire process.<br/> <br/> With years of expertise, our consultants are dependable and trustworthy, dedicated to fulfilling all of your unique needs. Recognizing the significance of a successful immigration application, we prioritize meticulous care and attention in managing every case.
                                        </p>
                                    </div>
                                    <div className="tab-pane fade" id="nav-vision" role="tabpanel" aria-labelledby="nav-vision-tab">
                                        <p>Our vision is to establish ourselves as the global leader in immigration services, recognized for our unwavering reliability and trustworthiness. We are dedicated to streamlining the process of securing immigration and residency permits, making it faster, more efficient, and consistently dependable for our clients.
                                        </p>
                                    </div>
                                    <div className="tab-pane fade" id="nav-history" role="tabpanel" aria-labelledby="nav-history-tab">
                                        <p>At SAGE, our mission is to deliver unparalleled service and comprehensive support to our clients as they embark on their journey to their desired destinations, whether for education, employment, or permanent relocation. We are dedicated to ensuring a seamless transition for our clients as they settle into their new environments, equipping them with the resources and knowledge necessary to navigate any challenges along the way. <br/><br/> Our team is unwavering in its commitment to providing exceptional customer service, ensuring that every client has access to the critical information and expert guidance required for a successful international move.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* container */}
        </section>

        {/*====== ABOUT FIVE PART ENDS ======*/}

        {/* ===== service-area start ===== */}
        <section id="services"className="services-area services-eight">
            {/*======  Start Section Title Five ======*/}
            <div className="section-title-five">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="content">
                                <h6>Services</h6>
                                <h2 className="fw-bold">Our Best Services</h2>
                                <p>
                                    Planning to study abroad? SAGE Consultancy offers end-to-end guidance from choosing the right program to settling in confidently overseas.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* row */}
                </div>
                {/* container */}
            </div>
            {/*======  End Section Title Five ======*/}
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-services">
                            <div className="service-icon">
                                <i className="lni lni-capsule"></i>
                            </div>
                            <div className="service-content">
                                <h4>Identify Course, Country & University</h4>
                                <p>
                                    Discover the best study program for your skills and interests with expert guidance from SAGE Consultancy. We help you choose top universities and the ideal country for an exceptional educational experience.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-services">
                            <div className="service-icon">
                                <i className="lni lni-layers"></i>
                            </div>
                            <div className="service-content">
                                <h4>Application process</h4>
                                <p>
                                    Applying can feel overwhelming, but with SAGE Consultancy, it doesn't have to be. Our experts help you craft strong essays, perfect your application, and submit everything accurately and on time. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-services">
                            <div className="service-icon">
                                <i className="lni lni-reload"></i>
                            </div>
                            <div className="service-content">
                                <h4>Pre-Departure Guidance</h4>
                                <p>Get ready for your international journey with SAGE Consultancy. We help with foreign exchange, airport pickup, insurance, and a packing list ensuring you're fully prepared for your adventure.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        {/* ===== service-area end ===== */}


        {/* Start Pricing  Area */}

        {/*/ End Pricing  Area */}



        {/* Start Cta Area */}
        <section id="call-action"className="call-action">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-9">
                        <div className="inner-content">
                            <img src="/assets/images/logo-white.png" width="200"/>
                                <h2 className="mt-20">We love creating perfect<br/>
                                    solutions for your migration journey</h2>
                                <p>
                                    With years of expertise in global education and immigration, we simplify complex visa processes and unlock life-changing opportunities.<br/> Whether you're aiming to study, work, or settle abroad, our team guides you every step of the way with clarity, care, and commitment.
                                </p>
                                <div className="light-rounded-buttons">
                                    <a className="btn primary-btn-outline page-scroll" href="#contact">Get Started</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Cta Area */}

            <Counter></Counter>

        {/* Start Latest News Area */}
        <div id="migrate"className="latest-news-area section">
            {/*======  Start Section Title Five ======*/}
            <div className="section-title-five">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="content">
                                <h6>Personalized migration solutions</h6>
                                <h2 className="fw-bold">Migrate</h2>
                                <p>
                                    Your global journey begins here to unlock career, study, and settlement opportunities in Europe, Canada, Australia, and New Zealand.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* row */}
                </div>
                {/* container */}
            </div>
            {/*======  End Section Title Five ======*/}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                        {/* Single News */}
                        <div className="single-news">
                            <div className="image">
                                <a href="javascript:void(0)"><img className="thumb" src="/assets/images/blog/australia.jpg" alt="Blog" /></a>
                                <div className="meta-details">
                                    <img className="thumb" src="/assets/images/blog/australia.jpg" alt="Author" />
                                    <span>Read More</span>
                                </div>
                            </div>
                            <div className="content-body">
                                <h4 className="title">
                                    <a href="javascript:void(0)">
                                        Australia
                                    </a>
                                </h4>
                                <p>
                                    Australia continues to attract professionals from around the world with its strong economy, diverse job market, and exceptional quality of life. It’s not just about employment it’s about building a future in a country known for opportunity, innovation, and balance.

                                </p>
                            </div>
                        </div>
                        {/* End Single News */}
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        {/* Single News */}
                        <div className="single-news">
                            <div className="image">
                                <a href="javascript:void(0)"><img className="thumb" src="/assets/images/blog/europe-3.jpg" alt="Blog" /></a>
                                <div className="meta-details">
                                    <img className="thumb" src="/assets/images/blog/europe-3.jpg" alt="Author" />
                                    <span>Read more </span>
                                </div>
                            </div>
                            <div className="content-body">
                                <h4 className="title">
                                    <a href="javascript:void(0)"> Europe </a>
                                </h4>
                                <p>
                                    Why Choose Europe for Your Career and Education?
                                    Europe isn’t just a destination, it’s a launchpad for opportunity. With world-renowned universities, a culturally rich ecosystem, and progressive career landscapes, Europe offers more than a degree or a job; it offers transformation.

                                </p>
                            </div>
                        </div>
                        {/* End Single News */}
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        {/* Single News */}
                        <div className="single-news">
                            <div className="image">
                                <a href="javascript:void(0)"><img className="thumb" src="/assets/images/blog/canada.jpg" alt="Blog" /></a>
                                <div className="meta-details">
                                    <img className="thumb" src="/assets/images/blog/canada.jpg" alt="Author" />
                                    <span>Read More</span>
                                </div>
                            </div>
                            <div className="content-body">
                                <h4 className="title">
                                    <a href="javascript:void(0)">
                                        Canada
                                    </a>
                                </h4>
                                <p>Canada is more than breathtaking landscapes and rich diversity.
                                    It’s a global leader in education and career advancement.
                                    Students benefit from world-class academics.
                                    Professionals find inclusive, long-term growth opportunities. </p>
                            </div>
                        </div>
                        {/* End Single News */}
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        {/* Single News */}
                        <div className="single-news">
                            <div className="image">
                                <a href="javascript:void(0)"><img className="thumb" src="/assets/images/blog/new-zealand.jpg" alt="Blog" /></a>
                                <div className="meta-details">
                                    <img className="thumb" src="/assets/images/blog/new-zealand.jpg" alt="Author" />
                                    <span>Read More</span>
                                </div>
                            </div>
                            <div className="content-body">
                                <h4 className="title">
                                    <a href="javascript:void(0)">
                                        New Zealand
                                    </a>
                                </h4>
                                <p>
                                    New Zealand is fast becoming a top destination for professionals seeking not just jobs but meaningful careers and a lifestyle to match. With its innovative industries, inclusive work culture, and exceptional quality of life, it’s more than a workplace it’s a fresh start.

                                </p>
                            </div>
                        </div>
                        {/* End Single News */}
                    </div>

                </div>
            </div>
        </div>
        {/* End Latest News Area */}

        {/* Start Brand Area */}

        {/* End Brand Area */}

        {/* ========================= contact-section start ========================= */}
        <section id="contact"className="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="contact-item-wrapper">
                            <div className="row">
                                <div className="col-12 col-md-6 col-xl-12">
                                    <div className="contact-item">
                                        <div className="contact-icon">
                                            <i className="lni lni-phone"></i>
                                        </div>
                                        <div className="contact-content">
                                            <h4>Contact</h4>
                                            <p>+971 xx xxx xxx</p>
                                            <p>mail@sagemigrates.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-xl-12">
                                    <div className="contact-item">
                                        <div className="contact-icon">
                                            <i className="lni lni-map-marker"></i>
                                        </div>
                                        <div className="contact-content">
                                            <h4>Address</h4>
                                            <p>Burj Al Salam Tower, <br/>Suit no: 3601 - 23, <br/>Level 36 - Sheraton Grand Hotel, Sheikh Zayed Rd, <br/>World Trade Centre, </p><p>Dubai, UAE</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-xl-12">
                                    <div className="contact-item">
                                        <div className="contact-icon">
                                            <i className="lni lni-alarm-clock"></i>
                                        </div>
                                        <div className="contact-content">
                                            <h4>Our Timings</h4>
                                            <p>Monday to Friday<br/>
                                                10:00 am to 7.00 pm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="contact-form-wrapper">
                            <div className="row">
                                <div className="col-xl-10 col-lg-8 mx-auto">
                                    <div className="section-title text-center">
                                        <span> Get in Touch </span>
                                        <h2>
                                            Ready to Get Started
                                        </h2>
                                        <p>
                                            Got migration questions? Fill out the form below and our team will connect with you to guide your next steps.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <form action="#"className="contact-form">
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" name="name" id="name" placeholder="Name" required />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" name="email" id="email" placeholder="Email" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" name="phone" id="phone" placeholder="Phone" required />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" name="subject" id="email" placeholder="Subject" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <textarea name="message" id="message" placeholder="Type Message" rows="5"></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="button text-center rounded-buttons">
                                            <button type="submit"className="btn primary-btn rounded-full">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* ========================= contact-section end ========================= */}

        {/* ========================= map-section end ========================= */}
        <section className="map-section map-style-9">
            <div className="map-container">
                <object style={{border:0, height: '500px', width: '100%'}}
                        data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d917.6681463542436!2d55.286050153055086!3d25.222793620035127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42e912bc6305%3A0x1e486da5f44c6a2b!2sDubai%20World%20Trade%20Centre!5e0!3m2!1sen!2sin!4v1753813032363!5m2!1sen!2sin"></object>
            </div>

        </section>
        </>
    )
}
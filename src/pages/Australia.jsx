import Tabs from "../components/components/Tabs";
import {countryData} from "../data/country_data";
import CountrySections from "../components/components/CountrySections";


export default function Australia() {

    const australia = countryData.countries.find(c => c.name === "Australia");
    const tabData =[
        {
            "id": "who",
            "title": "Why Australia?",
            "paragraphs":['Discover the key advantages of migrating to Australia:'],
            "list": [
                "No economic downturn forecast for the next 25 years.",
                "Plan to welcome 500,000 migrants by 2027.",
                "90% of immigration applications are processed within 8 to 10 months.",
                "Stay in Australia long-term without a time limit.",
                "Access affordable or free healthcare for you and your family.",
                "Ability to sponsor eligible family members for permanent residency."
            ]
        },
        {
            "id": "vision",
            "title": "Programmes offered",
            "paragraphs":['Popular immigration programmes available in Australia include:',],
            "list": [
                "Subclass 482",
                "Subclass 189",
                "Subclass 186",
                "Subclass 190",
                "Open work permit (spouse sponsorship visa)"
            ]
        }
    ]
    return(
        <>
            <section id="call-action" className="call-action australia">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-9">
                            <div className="inner-content">
                                <img src="/assets/images/logo-gold-alone.png" className="margin-30 pt-90" width="200"/>
                                <h2>Australia</h2>


                                <div className="light-rounded-buttons">
                                    <a href="javascript:void(0)" className="btn primary-btn-outline">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="about-area about-five">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <div className="about-image-five">
                                <svg className="shape" width="106" height="134" viewBox="0 0 106 134" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="1.66654" cy="1.66679" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="1.66654" cy="16.3335" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="1.66654" cy="31.0001" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="1.66654" cy="45.6668" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="1.66654" cy="60.3335" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="1.66654" cy="88.6668" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="1.66654" cy="117.667" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="1.66654" cy="74.6668" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="1.66654" cy="103" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="1.66654" cy="132" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="16.3333" cy="1.66679" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="16.3333" cy="16.3335" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="16.3333" cy="31.0001" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="16.3333" cy="45.6668" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="16.333" cy="60.3335" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="16.333" cy="88.6668" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="16.333" cy="117.667" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="16.333" cy="74.6668" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="16.333" cy="103" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="16.333" cy="132" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="30.9998" cy="1.66679" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="74.6665" cy="1.66679" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="30.9998" cy="16.3335" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="74.6665" cy="16.3335" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="30.9998" cy="31.0001" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="74.6665" cy="31.0001" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="30.9998" cy="45.6668" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="74.6665" cy="45.6668" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="31" cy="60.3335" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="74.6668" cy="60.3335" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="31" cy="88.6668" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="74.6668" cy="88.6668" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="31" cy="117.667" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="74.6668" cy="117.667" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="31" cy="74.6668" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="74.6668" cy="74.6668" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="31" cy="103" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="74.6668" cy="103" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="31" cy="132" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="74.6668" cy="132" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="45.6665" cy="1.66679" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="89.3333" cy="1.66679" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="45.6665" cy="16.3335" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="89.3333" cy="16.3335" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="45.6665" cy="31.0001" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="89.3333" cy="31.0001" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="45.6665" cy="45.6668" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="89.3333" cy="45.6668" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="45.6665" cy="60.3335" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="89.3333" cy="60.3335" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="45.6665" cy="88.6668" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="89.3333" cy="88.6668" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="45.6665" cy="117.667" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="89.3333" cy="117.667" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="45.6665" cy="74.6668" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="89.3333" cy="74.6668" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="45.6665" cy="103" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="89.3333" cy="103" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="45.6665" cy="132" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="89.3333" cy="132" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="60.3333" cy="1.66679" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="104" cy="1.66679" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="60.3333" cy="16.3335" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="104" cy="16.3335" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="60.3333" cy="31.0001" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="104" cy="31.0001" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="60.3333" cy="45.6668" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="104" cy="45.6668" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="60.333" cy="60.3335" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="104" cy="60.3335" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="60.333" cy="88.6668" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="104" cy="88.6668" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="60.333" cy="117.667" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="104" cy="117.667" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="60.333" cy="74.6668" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="104" cy="74.6668" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="60.333" cy="103" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="104" cy="103" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="60.333" cy="132" r="1.66667" fill="#DADADA"></circle>
                                    <circle cx="104" cy="132" r="1.66667" fill="#DADADA"></circle>
                                </svg>
                                <img src="/assets/images/australia-1.jpg" alt="about"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="about-five-content">
                                <h6 className="small-title text-lg">OUR SERVICES</h6>
                                <h2 className="main-title fw-bold">Discover the key advantages of migrating to
                                    Australia</h2>
                                <Tabs tabs={tabData} ><p></p></Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* container */}
            </section>
            <div>
                <CountrySections country={australia} image="australia-1.jpg" />
            </div>
        </>
    )
}
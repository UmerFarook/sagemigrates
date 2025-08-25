import Tabs from "../components/components/Tabs";
import {countryData} from "../data/country_data";
import CountrySections from "../components/components/CountrySections";

export default function NewZealand() {
    const newzealand = countryData.countries.find(c => c.name === "New Zealand");
    const newZealandTabData = [
        {
            id: "who-nz",
            title: "Why New Zealand?",
            list: [
                "One of the most sought-after immigration programs globally.",
                "Settle in New Zealand in less than 6 months.",
                "New Zealand aims to welcome a significant number of immigrants by 2027.",
                "Enjoy access to free or affordable education for your children.",
                "Sponsor family members to join you in New Zealand.",
                "New Zealand’s immigration policies aim to attract thousands of migrants by 2027."
            ]
        },
        {
            id: "vision-nz",
            title: "Programmes offered",
            list: [
                "Tourist Visa",
                "Working Holiday Visa",
                "Essential Skills Work Visa",
                "Working Visa for Partnership",
                "Skilled Migrant Residence Visa",
                "Residence from Work Visa"
            ]
        }
    ];
    return(
        <>
            <section id="call-action" className="call-action newzealand">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-9">
                            <div className="inner-content">
                                <img src="/assets/images/logo-gold-alone.png" className="margin-30 pt-90" width="200"/>
                                <h2>New Zealand</h2>


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
                                <img src="/assets/images/newzealand-1.jpg" alt="New Zealand Immigration"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="about-five-content">
                                <h6 className="small-title text-lg">OUR SERVICES</h6>
                                <h2 className="main-title fw-bold">Discover the key advantages of migrating to New
                                    Zealand</h2>
                                <Tabs tabs={newZealandTabData} ><p></p></Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <CountrySections country={newzealand} image="newzealand-1.jpg" />
            </div>
        </>
    )
}
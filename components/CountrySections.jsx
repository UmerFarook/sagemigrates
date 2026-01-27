import React from "react";

export default function CountrySections({ country, image }) {
    return (
       <>
                {country.sections.map((section, index) => {
                    const isImageLeft = index % 2 === 0;
                    section.image = section.image? `${section.image}`: `${image}`;
                    return (
                        <section className={ isImageLeft ? "about-area about-five short" : "about-area short"}>
                            <div className="container">
                        <div
                            className="row align-items-center my-5"
                            key={index}
                            style={{ flexDirection: isImageLeft ? "row" : "row-reverse" }}
                        >

                            {/* Image Side */}
                            <div className="col-lg-5 col-12">
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
                                    <img
                                        src={`/images/${section.image}`}
                                        alt={section.image}
                                        className="img-fluid rounded-2xl shadow"
                                    />
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="col-lg-7 col-12">
                                <div className="about-five-content services-eight">
                                    <h2 className="main-title fw-bold mb-3">{section.title}</h2>
                                        <div className='list-wrapp row'>
                                    {typeof section.content === "object" && !Array.isArray(section.content) ? (
                                        Object.entries(section.content).map(([region, cities]) => (
                                            <div key={region} className=' col-lg-4 col-md-4 col-12 mb-4'>
                                              <div className="single-services">
                                                  <div className='service-content'>
                                                      <h5 >{region}</h5>
                                                      <ul className="">
                                                          {cities.map((city, i) => (
                                                              <li key={i}>{city}</li>
                                                          ))}
                                                      </ul>
                                                  </div>
                                              </div>
                                            </div>
                                        ))
                                    ) : Array.isArray(section.content) ? (
                                        <ul className="general-list">
                                            {section.content.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>{section.content}</p>
                                    )}
                                        </div>
                                </div>
                            </div>
                        </div>
                            </div>
                        </section>
                    );
                })}

    </>
    );
}

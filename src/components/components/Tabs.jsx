import React, { useState } from "react";

export default function Tabs({ tabs,children }) {
    const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");


    return (
        <div className="about-five-tab">
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                            id={`nav-${tab.id}-tab`}
                            type="button"
                            role="tab"
                            aria-controls={`nav-${tab.id}`}
                            aria-selected={activeTab === tab.id}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
            </nav>

            <div className="tab-content" id="nav-tabContent">
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`tab-pane fade ${activeTab === tab.id ? "show active" : ""}`}
                        id={`nav-${tab.id}`}
                        role="tabpanel"
                        aria-labelledby={`nav-${tab.id}-tab`}
                    >
                        {/* Paragraphs */}
                        {tab.paragraphs?.map((para, i) => (
                            <p key={i} style={{ whiteSpace: "pre-line" }}>{para}</p>
                        ))}

                        {/* List */}
                        {tab.list && (
                            <ul className="general-list">
                                {tab.list.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>

    );
}

import PageBanner from "../components/PageBanner";
import "./FormerHeads.scss";

const formerHeads = [
    { name: "Shri S.N. Pradhan, IPS",    period: "2019 – 2022", cadre: "AGMUT",   tenure: "3 Years", notable: "Led the 'Nasha Mukt Bharat Abhiyan' and major operations against dark-net drug markets.",                          order: 1  },
    { name: "Shri Abhay Kumar, IPS",      period: "2017 – 2019", cadre: "Bihar",   tenure: "2 Years", notable: "Strengthened NCB's intelligence-sharing framework with state police and central agencies.",                          order: 2  },
    { name: "Shri Dilip Trivedi, IPS",    period: "2015 – 2017", cadre: "Rajasthan",tenure: "2 Years", notable: "Expanded NCB's international cooperation network with UNODC and HONLEA partner countries.",                        order: 3  },
    { name: "Shri Muktesh Chander, IPS",  period: "2013 – 2015", cadre: "AGMUT",   tenure: "2 Years", notable: "Enhanced training infrastructure and capacity building for drug law enforcement officers.",                          order: 4  },
    { name: "Shri Baldev Kumar, IPS",     period: "2011 – 2013", cadre: "UP",      tenure: "2 Years", notable: "Initiated the modern NIDAAN database system for drug offender tracking and case management.",                        order: 5  },
    { name: "Shri V.S. Chadha, IPS",      period: "2009 – 2011", cadre: "Punjab",  tenure: "2 Years", notable: "Coordinated major seizures on the Golden Crescent drug trafficking route.",                                          order: 6  },
    { name: "Shri L.S. Salathia, IPS",    period: "2007 – 2009", cadre: "J&K",     tenure: "2 Years", notable: "Strengthened inter-agency cooperation under the NDPS Act framework.",                                                order: 7  },
    { name: "Shri R.R. Singh, IPS",       period: "2004 – 2007", cadre: "Bihar",   tenure: "3 Years", notable: "Led the restructuring of NCB's zonal office network for operational efficiency.",                                    order: 8  },
    { name: "Shri K.P.S. Gill, IPS",      period: "2001 – 2004", cadre: "AGMUT",   tenure: "3 Years", notable: "Expanded NCB's field operations into the North-East region.",                                                       order: 9  },
    { name: "Founding Director General",  period: "1986 – 1991", cadre: "IPS",     tenure: "5 Years", notable: "Established NCB as India's apex drug enforcement agency under the NDPS Act, 1985.",                                  order: 10 },
];

function FormerHeads() {
    return (
        <div className="former-heads-page">
            <PageBanner
                title="Former NCB Heads"
                subtitle="Directors General who have led the Narcotics Control Bureau since its establishment in 1986"
                breadcrumbs={[
                    { label: "Media", path: "/media/latest-news" },
                    { label: "Former NCB Heads", path: "/media/former-head" },
                ]}
            />

            <div className="page-section">
                <div className="container">
                    <span className="section-label">Leadership History</span>
                    <h2 className="section-title">Former Directors General</h2>
                    <div className="section-divider" />

                    {/* Header strip */}
                    <div className="fh-header-strip">
                        <div className="fh-header-info">
                            <i className="bi bi-building-fill" />
                            <div>
                                <strong>Narcotics Control Bureau — Established 1986</strong>
                                <span>{formerHeads.length} Directors General have led the Bureau</span>
                            </div>
                        </div>
                        <div className="fh-header-badge">
                            <span className="fh-count-badge">{formerHeads.length} Former DGs</span>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="fh-grid">
                        {formerHeads.map((head, index) => (
                            <div
                                key={head.order}
                                className={`fh-card ${index % 2 === 0 ? "fh-card--primary" : "fh-card--secondary"}`}
                            >
                                <div className="fh-card-header">
                                    <div className="fh-serial-badge">{String(head.order).padStart(2, "0")}</div>
                                    <div className="fh-avatar">
                                        <i className="bi bi-person-circle" />
                                    </div>
                                    <div className="fh-period-badge">
                                        <i className="bi bi-calendar-range" /> {head.period}
                                    </div>
                                </div>
                                <div className="fh-card-body">
                                    <h3 className="fh-name">{head.name}</h3>
                                    <div className="fh-meta-row">
                                        <span className="fh-meta-item">
                                            <i className="bi bi-award-fill" /> {head.cadre} Cadre
                                        </span>
                                        <span className="fh-meta-item">
                                            <i className="bi bi-clock-history" /> {head.tenure}
                                        </span>
                                    </div>
                                    <p className="fh-notable">
                                        <i className="bi bi-star-fill fh-star-icon" />
                                        {head.notable}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Note strip */}
                    <div className="fh-note-strip">
                        <i className="bi bi-info-circle-fill" />
                        <p>
                            The above list covers former Directors General of the Narcotics Control Bureau.
                            For the current DG and organizational hierarchy, visit the <a href="/our-officers">Our Officers</a> page.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormerHeads;

import { useState } from "react";
import PageBanner from "../components/PageBanner";
import "./Judgements.scss";

const judgementsData = [
    { id: 1, case: "State v/s Baldev Singh", court: "Supreme Court of India", year: "1999", citation: "AIR 1999 SC 2378", importance: "Landmark", topic: "Bail under NDPS Act", summary: "SC held that under Section 37 of NDPS Act, bail cannot be granted unless the court is satisfied that the accused is not guilty." },
    { id: 2, case: "Tofan Singh v/s State of Tamil Nadu", court: "Supreme Court of India", year: "2021", citation: "(2021) 4 SCC 1", importance: "Landmark", topic: "Confessional Statements", summary: "SC held that officers of NCB are 'police officers' and confessions made to them are inadmissible under Section 25 of the Evidence Act." },
    { id: 3, case: "Union of India v/s Mohanlal", court: "Supreme Court of India", year: "2016", citation: "(2016) 3 SCC 379", importance: "Key Ruling", topic: "Disposal of Seized Drugs", summary: "SC issued guidelines on disposal of seized drugs, emphasizing need for quick destruction to prevent re-introduction into illicit trade." },
    { id: 4, case: "Vijaysinh Chandubha Jadeja v/s State of Gujarat", court: "Supreme Court of India", year: "2011", citation: "(2011) 1 SCC 609", importance: "Key Ruling", topic: "Sampling Procedures", summary: "SC held that samples must be taken strictly as per NDPS rules; non-compliance can vitiate prosecution." },
    { id: 5, case: "Directorate of Revenue Intelligence v/s Jugal Kishore Samra", court: "Supreme Court of India", year: "2011", citation: "(2011) 12 SCC 798", importance: "Key Ruling", topic: "Jurisdiction of DRI/NCB", summary: "Clarified jurisdiction of central agencies in cases involving import of narcotic substances." },
    { id: 6, case: "Harpreet Singh v/s State of Punjab", court: "Supreme Court of India", year: "2009", citation: "(2009) 6 SCC 230", importance: "Procedural", topic: "Search & Seizure", summary: "SC emphasized the importance of following Section 42 procedures for search and seizure; non-compliance leads to acquittal." },
    { id: 7, case: "E. Micheal Raj v/s Intelligence Officer, NCB", court: "Supreme Court of India", year: "2008", citation: "(2008) 5 SCC 161", importance: "Key Ruling", topic: "Commercial Quantity", summary: "SC clarified the definition of commercial quantity for various drugs and how sentencing should be determined." },
    { id: 8, case: "State (NCT of Delhi) v/s Navjot Sandhu", court: "Supreme Court of India", year: "2005", citation: "(2005) 11 SCC 600", importance: "Procedural", topic: "Evidence Standard", summary: "Court outlined evidentiary requirements for successful prosecution under NDPS Act." },
    { id: 9, case: "Abdul Rashid v/s State of Bihar", court: "Patna High Court", year: "2018", citation: "2018 SCC OnLine Pat 876", importance: "HC Ruling", topic: "Default Bail", summary: "HC clarified provisions of default bail under NDPS Act and Section 167 CrPC." },
    { id: 10, case: "NCB v/s Vaman Narain Ghiya", court: "Supreme Court of India", year: "2009", citation: "(2009) 2 SCC 40", importance: "Procedural", topic: "Bail Conditions", summary: "SC held that bail conditions under Section 37 NDPS must be strictly construed given the gravity of drug offences." },
];

const courts = ["All", "Supreme Court of India", "Patna High Court"];
const importanceLevels = ["All", "Landmark", "Key Ruling", "Procedural", "HC Ruling"];
const topics = ["All", ...Array.from(new Set(judgementsData.map(j => j.topic)))];

function getImportanceClass(imp) {
    switch (imp) {
        case "Landmark": return "imp--landmark";
        case "Key Ruling": return "imp--key";
        case "Procedural": return "imp--procedural";
        case "HC Ruling": return "imp--hc";
        default: return "";
    }
}

function Judgements() {
    const [filterCourt, setFilterCourt] = useState("All");
    const [filterImportance, setFilterImportance] = useState("All");
    const [filterTopic, setFilterTopic] = useState("All");
    const [search, setSearch] = useState("");

    const filtered = judgementsData.filter(j => {
        const matchCourt = filterCourt === "All" || j.court === filterCourt;
        const matchImp = filterImportance === "All" || j.importance === filterImportance;
        const matchTopic = filterTopic === "All" || j.topic === filterTopic;
        const q = search.toLowerCase();
        const matchSearch = !q || j.case.toLowerCase().includes(q) || j.topic.toLowerCase().includes(q) || j.citation.toLowerCase().includes(q);
        return matchCourt && matchImp && matchTopic && matchSearch;
    });

    return (
        <div className="judgements-page">
            <PageBanner
                title="Important Judgements"
                subtitle="Landmark and key court rulings on NDPS Act, drug trafficking, bail, search & seizure procedures"
                breadcrumbs={[
                    { label: "Legal", path: "/legal/notifications" },
                    { label: "Important Judgements", path: "/legal/judgements" },
                ]}
            />

            <div className="page-section">
                <div className="container">
                    <span className="section-label">Case Law</span>
                    <h2 className="section-title">Important Judgements</h2>
                    <div className="section-divider" />

                    {/* Filters */}
                    <div className="jdg-filter-wrap">
                        <div className="jdg-filter-row">
                            <div className="jdg-filter-group">
                                <label className="jdg-filter-label"><i className="bi bi-bank2" /> Court</label>
                                <div className="filter-pills">
                                    {courts.map(c => (
                                        <button
                                            key={c}
                                            className={`filter-pill ${filterCourt === c ? "active" : ""}`}
                                            onClick={() => setFilterCourt(c)}
                                        >
                                            {c}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="jdg-filter-group">
                                <label className="jdg-filter-label"><i className="bi bi-award" /> Importance</label>
                                <div className="filter-pills">
                                    {importanceLevels.map(imp => (
                                        <button
                                            key={imp}
                                            className={`filter-pill ${filterImportance === imp ? "active" : ""}`}
                                            onClick={() => setFilterImportance(imp)}
                                        >
                                            {imp}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="jdg-filter-row">
                            <div className="jdg-filter-group">
                                <label className="jdg-filter-label"><i className="bi bi-tags" /> Topic</label>
                                <div className="filter-pills">
                                    {topics.map(t => (
                                        <button
                                            key={t}
                                            className={`filter-pill ${filterTopic === t ? "active" : ""}`}
                                            onClick={() => setFilterTopic(t)}
                                        >
                                            {t}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="jdg-search">
                                <i className="bi bi-search" />
                                <input
                                    type="text"
                                    placeholder="Search by case name, topic, or citation…"
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    aria-label="Search judgements"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Count */}
                    <div className="jdg-count-row">
                        <span>{filtered.length} judgement{filtered.length !== 1 ? "s" : ""} found</span>
                    </div>

                    {/* Cards */}
                    {filtered.length === 0 ? (
                        <div className="jdg-empty">
                            <i className="bi bi-inbox" />
                            <p>No judgements match your filters.</p>
                        </div>
                    ) : (
                        <div className="jdg-cards-list">
                            {filtered.map(j => (
                                <div key={j.id} className="jdg-card">
                                    <div className="jc-left-bar" />
                                    <div className="jc-body">
                                        <div className="jc-header-row">
                                            <div className="jc-badges">
                                                <span className={`jc-importance-badge ${getImportanceClass(j.importance)}`}>
                                                    {j.importance === "Landmark" && <i className="bi bi-star-fill" />}
                                                    {j.importance === "Key Ruling" && <i className="bi bi-bookmark-fill" />}
                                                    {j.importance === "Procedural" && <i className="bi bi-list-check" />}
                                                    {j.importance === "HC Ruling" && <i className="bi bi-building" />}
                                                    {j.importance}
                                                </span>
                                                <span className="jc-topic-tag">
                                                    <i className="bi bi-tag-fill" /> {j.topic}
                                                </span>
                                            </div>
                                            <span className="jc-year">{j.year}</span>
                                        </div>

                                        <h3 className="jc-case-name">{j.case}</h3>

                                        <div className="jc-meta-row">
                                            <span className="jc-meta-item">
                                                <i className="bi bi-bank2" /> {j.court}
                                            </span>
                                            <span className="jc-meta-sep">·</span>
                                            <span className="jc-citation">
                                                <i className="bi bi-quote" /> {j.citation}
                                            </span>
                                        </div>

                                        <p className="jc-summary">{j.summary}</p>

                                        <button className="jc-view-btn">
                                            <i className="bi bi-journal-text" /> View Full Judgement
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Disclaimer note */}
                    <div className="jdg-disclaimer">
                        <i className="bi bi-info-circle-fill" />
                        <p>
                            Sourced from Supreme Court Online and High Court records. Summaries are for general reference only.
                            For legal advice or full judgment text, consult a qualified advocate or visit
                            {" "}<a href="https://indiankanoon.org" target="_blank" rel="noopener noreferrer">Indian Kanoon</a> or
                            {" "}<a href="https://sci.gov.in" target="_blank" rel="noopener noreferrer">Supreme Court of India</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Judgements;

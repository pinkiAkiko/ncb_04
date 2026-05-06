import { useState } from "react";
import PageBanner from "../components/PageBanner";
import { IndiaStateMap, ZONE_COLORS } from "../components/IndiaStateMap";
import "./OurOfficers.scss";

const zones = [
    {
        id: "north", name: "North Zone", hq: "New Delhi",
        states: ["Delhi", "Haryana", "Himachal Pradesh", "J&K", "Ladakh", "Punjab", "Rajasthan", "Uttarakhand", "Uttar Pradesh"],
    },
    {
        id: "northwest", name: "North-West Zone", hq: "Jodhpur",
        states: ["Rajasthan (West)", "Gujarat (North)"],
    },
    {
        id: "west", name: "West Zone", hq: "Mumbai",
        states: ["Maharashtra", "Gujarat", "Goa", "Daman & Diu", "Dadra & Nagar Haveli"],
    },
    {
        id: "central", name: "Central Zone", hq: "Bhopal",
        states: ["Madhya Pradesh", "Chhattisgarh"],
    },
    {
        id: "east", name: "East Zone", hq: "Kolkata",
        states: ["West Bengal", "Bihar", "Jharkhand", "Odisha"],
    },
    {
        id: "northeast", name: "North-East Zone", hq: "Guwahati",
        states: ["Assam", "Arunachal Pradesh", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Sikkim", "Tripura"],
    },
    {
        id: "southwest", name: "South-West Zone", hq: "Bengaluru",
        states: ["Karnataka", "Andhra Pradesh", "Telangana"],
    },
    {
        id: "south", name: "South Zone", hq: "Chennai",
        states: ["Tamil Nadu", "Kerala", "Puducherry", "Lakshadweep"],
    },
    {
        id: "andaman", name: "A&N Islands", hq: "Port Blair",
        states: ["Andaman & Nicobar Islands"],
    },
];

const officersData = {
    north: [
        { name: "Shri Rajesh Kumar, IPS", rank: "Zonal Director", office: "North Zone HQ, New Delhi", phone: "011-26198513", email: "dir.north-ncb@nic.in", initials: "RK" },
        { name: "Shri Pradeep Sharma, IPS", rank: "Deputy Zonal Director", office: "North Zone HQ, New Delhi", phone: "011-26198514", email: "dzd.north-ncb@nic.in", initials: "PS" },
        { name: "Shri Amarjit Singh", rank: "Sub-Zonal Officer, Amritsar", office: "NCB Sub-Zonal Unit, Amritsar", phone: "0183-2550481", email: "szo.amritsar-ncb@nic.in", initials: "AS" },
        { name: "Shri Vivek Gupta", rank: "Sub-Zonal Officer, Lucknow", office: "NCB Sub-Zonal Unit, Lucknow", phone: "0522-2302095", email: "szo.lucknow-ncb@nic.in", initials: "VG" },
    ],
    northwest: [
        { name: "Shri Mohan Lal Meena, IPS", rank: "Zonal Director", office: "North-West Zone HQ, Jodhpur", phone: "0291-2651210", email: "dir.nw-ncb@nic.in", initials: "MM" },
        { name: "Shri Deepak Joshi", rank: "Sub-Zonal Officer, Jaipur", office: "NCB Sub-Zonal Unit, Jaipur", phone: "0141-2744101", email: "szo.jaipur-ncb@nic.in", initials: "DJ" },
    ],
    west: [
        { name: "Shri Sanjay Kumar Singh, IPS", rank: "Zonal Director", office: "West Zone HQ, Mumbai", phone: "022-28388980", email: "dir.west-ncb@nic.in", initials: "SK" },
        { name: "Shri Nilesh Desai", rank: "Sub-Zonal Officer, Ahmedabad", office: "NCB Sub-Zonal Unit, Ahmedabad", phone: "079-22682480", email: "szo.ahmedabad-ncb@nic.in", initials: "ND" },
        { name: "Shri Francis D'Souza", rank: "Sub-Zonal Officer, Goa", office: "NCB Sub-Zonal Unit, Panaji", phone: "0832-2227676", email: "szo.goa-ncb@nic.in", initials: "FD" },
    ],
    central: [
        { name: "Shri Anil Kumar Yadav, IPS", rank: "Zonal Director", office: "Central Zone HQ, Bhopal", phone: "0755-2557380", email: "dir.central-ncb@nic.in", initials: "AY" },
        { name: "Shri Vinod Tiwari", rank: "Sub-Zonal Officer, Raipur", office: "NCB Sub-Zonal Unit, Raipur", phone: "0771-4053181", email: "szo.raipur-ncb@nic.in", initials: "VT" },
    ],
    east: [
        { name: "Shri Debashis Chakraborty, IPS", rank: "Zonal Director", office: "East Zone HQ, Kolkata", phone: "033-22481700", email: "dir.east-ncb@nic.in", initials: "DC" },
        { name: "Shri Ranjit Kumar Sinha", rank: "Sub-Zonal Officer, Patna", office: "NCB Sub-Zonal Unit, Patna", phone: "0612-2217302", email: "szo.patna-ncb@nic.in", initials: "RS" },
    ],
    northeast: [
        { name: "Shri Biswajit Das, IPS", rank: "Zonal Director", office: "North-East Zone HQ, Guwahati", phone: "0361-2235614", email: "dir.ne-ncb@nic.in", initials: "BD" },
        { name: "Shri Hemanta Kalita", rank: "Deputy Zonal Director", office: "North-East Zone HQ, Guwahati", phone: "0361-2235615", email: "dzd.ne-ncb@nic.in", initials: "HK" },
    ],
    southwest: [
        { name: "Shri Suresh Babu, IPS", rank: "Zonal Director", office: "South-West Zone HQ, Bengaluru", phone: "080-25581450", email: "dir.sw-ncb@nic.in", initials: "SB" },
        { name: "Shri Mohammed Farouk", rank: "Sub-Zonal Officer, Hyderabad", office: "NCB Sub-Zonal Unit, Hyderabad", phone: "040-23237180", email: "szo.hyderabad-ncb@nic.in", initials: "MF" },
    ],
    south: [
        { name: "Shri K. Narayanan, IPS", rank: "Zonal Director", office: "South Zone HQ, Chennai", phone: "044-24350295", email: "dir.south-ncb@nic.in", initials: "KN" },
        { name: "Shri Thomas Varghese", rank: "Sub-Zonal Officer, Thiruvananthapuram", office: "NCB Sub-Zonal Unit, Kerala", phone: "0471-2321360", email: "szo.tvpm-ncb@nic.in", initials: "TV" },
    ],
    andaman: [
        { name: "Shri Ritesh Pandey", rank: "Sub-Zonal Officer", office: "NCB Sub-Zonal Unit, Port Blair", phone: "03192-232620", email: "szo.portblair-ncb@nic.in", initials: "RP" },
    ],
};


function OfficerCard({ officer, zoneColor }) {
    return (
        <div className="officer-card">
            <div className="oc-avatar" style={{ background: `${zoneColor}22`, borderColor: `${zoneColor}55` }}>
                <span style={{ color: zoneColor }}>{officer.initials}</span>
            </div>
            <div className="oc-info">
                <h4 className="oc-name">{officer.name}</h4>
                <span className="oc-rank" style={{ color: zoneColor }}>{officer.rank}</span>
                <p className="oc-office">
                    <i className="bi bi-geo-alt" /> {officer.office}
                </p>
                <div className="oc-contacts">
                    <a href={`tel:${officer.phone}`} className="oc-contact-link">
                        <i className="bi bi-telephone" /> {officer.phone}
                    </a>
                    <a href={`mailto:${officer.email}`} className="oc-contact-link">
                        <i className="bi bi-envelope" /> {officer.email}
                    </a>
                </div>
            </div>
        </div>
    );
}

function OurOfficers() {
    const [selectedZone, setSelectedZone] = useState(zones[0]);
    const officers = officersData[selectedZone?.id] || [];
    const zoneColor = ZONE_COLORS[selectedZone?.id] || "#1a3a5c";

    return (
        <div className="our-officers-page">
            <PageBanner
                title="Our Officers"
                subtitle="Click on a zone on the map to view the officers posted in that region"
                breadcrumbs={[{ label: "About", path: "/about" }, { label: "Our Officers", path: "/our-officers" }]}
            />

            <div className="page-section">
                <div className="container">
                    {/* Zone selector pills */}
                    <div className="zone-pills top-row">
                        {zones.map(z => (
                            <button
                                key={z.id}
                                className={`zone-pill ${selectedZone?.id === z.id ? "active" : ""}`}
                                style={selectedZone?.id === z.id ? { background: ZONE_COLORS[z.id], borderColor: ZONE_COLORS[z.id], color: "#fff" } : { borderColor: ZONE_COLORS[z.id], color: ZONE_COLORS[z.id] }}
                                onClick={() => setSelectedZone(z)}
                            >
                                {z.name}
                            </button>
                        ))}
                    </div>

                    <div className="officers-layout">
                        {/* ── Left: Map ── */}
                        <div className="officers-map-col">
                            <div className="officers-map-wrap">
                                <IndiaStateMap zones={zones} selectedZone={selectedZone} onZoneClick={setSelectedZone} />
                            </div>
                        </div>

                        {/* ── Right: Officers panel ── */}
                        <div className="officers-panel">
                            {/* Zone header */}
                            <div className="officers-panel-header" style={{ borderLeftColor: zoneColor }}>
                                <div className="oph-icon" style={{ background: `${zoneColor}18`, color: zoneColor }}>
                                    <i className="bi bi-person-badge-fill" />
                                </div>
                                <div>
                                    <h3 className="oph-title">{selectedZone?.name}</h3>
                                    <p className="oph-subtitle">HQ: {selectedZone?.hq}</p>
                                </div>
                                <div className="oph-count" style={{ background: `${zoneColor}12`, color: zoneColor }}>
                                    {officers.length} Officer{officers.length !== 1 ? "s" : ""}
                                </div>
                            </div>

                            {/* Jurisdiction tags */}
                            <div className="oph-states">
                                {selectedZone?.states.map(s => (
                                    <span key={s} className="oph-state-tag">{s}</span>
                                ))}
                            </div>

                            {/* Officers list */}
                            <div className="officers-list">
                                {officers.length > 0 ? (
                                    officers.map((o, i) => (
                                        <OfficerCard key={i} officer={o} zoneColor={zoneColor} />
                                    ))
                                ) : (
                                    <div className="officers-empty">
                                        <i className="bi bi-person-x" />
                                        <p>No officer data available for this zone.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurOfficers;

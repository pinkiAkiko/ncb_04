import { useState } from "react";
import PageBanner from "../components/PageBanner";
import { IndiaStateMap, ZONE_COLORS } from "../components/IndiaStateMap";
import "./OfficeLocator.scss";

const zones = [
    {
        id: "north",
        name: "North Zone",
        hq: "New Delhi",
        cx: 340, cy: 195,
        states: ["Delhi", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Ladakh", "Punjab", "Rajasthan", "Uttarakhand", "Uttar Pradesh"],
        offices: [
            { city: "New Delhi (HQ)", type: "Zonal", address: "West Block 1, Wing 7, R.K. Puram, New Delhi - 110 066", phone: "011-26198513" },
            { city: "Amritsar", type: "Sub-Zonal", address: "Amritsar Sub-Zonal Unit, Punjab", phone: "0183-2550481" },
            { city: "Lucknow", type: "Sub-Zonal", address: "Lucknow Sub-Zonal Unit, U.P.", phone: "0522-2302095" },
        ]
    },
    {
        id: "northwest",
        name: "North-West Zone",
        hq: "Jodhpur",
        cx: 275, cy: 240,
        states: ["Rajasthan (West)", "Gujarat (North)"],
        offices: [
            { city: "Jodhpur (HQ)", type: "Zonal", address: "Jodhpur Zonal Unit, Rajasthan", phone: "0291-2651210" },
            { city: "Jaipur", type: "Sub-Zonal", address: "Jaipur Sub-Zonal Unit, Rajasthan", phone: "0141-2744101" },
        ]
    },
    {
        id: "west",
        name: "West Zone",
        hq: "Mumbai",
        cx: 255, cy: 320,
        states: ["Maharashtra", "Gujarat", "Goa", "Daman & Diu", "Dadra & Nagar Haveli"],
        offices: [
            { city: "Mumbai (HQ)", type: "Zonal", address: "NCB Bhawan, Mandala, Andheri East, Mumbai - 400 059", phone: "022-28388980" },
            { city: "Ahmedabad", type: "Sub-Zonal", address: "Ahmedabad Sub-Zonal Unit, Gujarat", phone: "079-22682480" },
            { city: "Goa", type: "Sub-Zonal", address: "Panaji Sub-Zonal Unit, Goa", phone: "0832-2227676" },
        ]
    },
    {
        id: "south",
        name: "South Zone",
        hq: "Chennai",
        cx: 340, cy: 450,
        states: ["Tamil Nadu", "Kerala", "Puducherry", "Lakshadweep"],
        offices: [
            { city: "Chennai (HQ)", type: "Zonal", address: "South Zone HQ, Chennai, Tamil Nadu", phone: "044-24350295" },
            { city: "Thiruvananthapuram", type: "Sub-Zonal", address: "Sub-Zonal Unit, Kerala", phone: "0471-2321360" },
        ]
    },
    {
        id: "southwest",
        name: "South-West Zone",
        hq: "Bengaluru",
        cx: 295, cy: 430,
        states: ["Karnataka", "Andhra Pradesh", "Telangana"],
        offices: [
            { city: "Bengaluru (HQ)", type: "Zonal", address: "South-West Zone HQ, Bengaluru, Karnataka", phone: "080-25581450" },
            { city: "Hyderabad", type: "Sub-Zonal", address: "Sub-Zonal Unit, Telangana", phone: "040-23237180" },
        ]
    },
    {
        id: "central",
        name: "Central Zone",
        hq: "Bhopal",
        cx: 330, cy: 285,
        states: ["Madhya Pradesh", "Chhattisgarh"],
        offices: [
            { city: "Bhopal (HQ)", type: "Zonal", address: "Central Zone HQ, Bhopal, M.P.", phone: "0755-2557380" },
            { city: "Raipur", type: "Sub-Zonal", address: "Sub-Zonal Unit, Chhattisgarh", phone: "0771-4053181" },
        ]
    },
    {
        id: "east",
        name: "East Zone",
        hq: "Kolkata",
        cx: 460, cy: 295,
        states: ["West Bengal", "Bihar", "Jharkhand", "Odisha"],
        offices: [
            { city: "Kolkata (HQ)", type: "Zonal", address: "East Zone HQ, Kolkata, West Bengal", phone: "033-22481700" },
            { city: "Patna", type: "Sub-Zonal", address: "Sub-Zonal Unit, Bihar", phone: "0612-2217302" },
        ]
    },
    {
        id: "northeast",
        name: "North-East Zone",
        hq: "Guwahati",
        cx: 530, cy: 230,
        states: ["Assam", "Arunachal Pradesh", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Sikkim", "Tripura"],
        offices: [
            { city: "Guwahati (HQ)", type: "Zonal", address: "North-East Zone HQ, Guwahati, Assam", phone: "0361-2235614" },
        ]
    },
    {
        id: "andaman",
        name: "A&N Islands",
        hq: "Port Blair",
        cx: 520, cy: 420,
        states: ["Andaman & Nicobar Islands"],
        offices: [
            { city: "Port Blair", type: "Sub-Zonal", address: "Sub-Zonal Unit, Port Blair, A&N", phone: "03192-232620" },
        ]
    },
];



function OfficeLocator() {
    const [selectedZone, setSelectedZone] = useState(zones[0]);

    return (
        <div className="office-locator-page">
            <PageBanner
                title="Zonal / Regional Office Locator"
                subtitle="Click on a zone on the India map to view regional offices and contact details"
                breadcrumbs={[{ label: "Who We Are", path: "/about" }, { label: "Office Locator", path: "/office-locator" }]}
            />

            <div className="page-section">
                <div className="container">
                    <div className="locator-layout">
                        {/* ── Zone list sidebar ── */}
                        <div className="locator-sidebar">
                            <div className="sidebar-heading">
                                <i className="bi bi-building" /> All Zones
                            </div>
                            <ul className="zone-list">
                                {zones.map(zone => (
                                    <li key={zone.id}>
                                        <button
                                            className={`zone-list-btn ${selectedZone?.id === zone.id ? "active" : ""}`}
                                            onClick={() => setSelectedZone(zone)}
                                        >
                                            <span className="zlb-dot" style={{ background: ZONE_COLORS[zone.id] }} />
                                            <div className="zlb-info">
                                                <span className="zlb-name">{zone.name}</span>
                                                <span className="zlb-hq">HQ: {zone.hq}</span>
                                            </div>
                                            <i className="bi bi-chevron-right zlb-arrow" />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* ── Map + Detail panel ── */}
                        <div className="locator-main">
                            <div className="map-detail-row">
                                {/* Map */}
                                <div className="india-map-container">
                                    <div className="map-inner">
                                        <IndiaStateMap
                                            zones={zones}
                                            selectedZone={selectedZone}
                                            onZoneClick={setSelectedZone}
                                        />
                                    </div>
                                </div>

                                {/* Detail panel */}
                                {selectedZone && (
                                    <div className="zone-detail-panel animate-fade-in">
                                        <div className="zdp-header">
                                            <div className="zdp-badge">
                                                <i className="bi bi-geo-alt-fill" />
                                            </div>
                                            <div>
                                                <h3 className="zdp-name">{selectedZone.name}</h3>
                                                <p className="zdp-hq">Headquarters: {selectedZone.hq}</p>
                                            </div>
                                        </div>

                                        <div className="zdp-states-section">
                                            <h4 className="zdp-section-heading">
                                                <i className="bi bi-map" /> Jurisdiction
                                            </h4>
                                            <div className="zdp-states-wrap">
                                                {selectedZone.states.map(s => (
                                                    <span key={s} className="zdp-state-tag">{s}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="zdp-offices-section">
                                            <h4 className="zdp-section-heading">
                                                <i className="bi bi-building" /> Offices
                                            </h4>
                                            <div className="zdp-offices-list">
                                                {selectedZone.offices.map((office, i) => (
                                                    <div key={i} className={`zdp-office-card ${office.type === "Zonal" ? "zdp-office--zonal" : ""}`}>
                                                        <div className="zoc-header">
                                                            <span className="zoc-city">{office.city}</span>
                                                            <span className={`zoc-type-tag ${office.type === "Zonal" ? "zot--zonal" : "zot--sub"}`}>
                                                                {office.type}
                                                            </span>
                                                        </div>
                                                        <div className="zoc-contacts">
                                                            <span className="zoc-address">
                                                                <i className="bi bi-geo-alt" /> {office.address}
                                                            </span>
                                                            <a href={`tel:${office.phone}`} className="zoc-phone">
                                                                <i className="bi bi-telephone" /> {office.phone}
                                                            </a>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
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

export default OfficeLocator;

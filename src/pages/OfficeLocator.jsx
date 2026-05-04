import { useState } from "react";
import PageBanner from "../components/PageBanner";
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

// Simple, clean India outline in SVG — schematic representation
function IndiaMapSVG({ selectedZone, onZoneClick }) {
    return (
        <svg
            viewBox="0 0 640 560"
            className="india-map-svg"
            aria-label="Map of India showing NCB zones"
            role="img"
        >
            {/* India outline - simplified */}
            <path
                className="india-base-path"
                d="M180 80 L220 60 L280 55 L340 50 L400 60 L440 80 L480 110 L510 150 L530 190 L545 230 L550 270 L540 310 L520 350 L500 390 L470 420 L450 450 L430 480 L410 510 L390 530 L370 545 L350 550 L330 548 L310 540 L295 520 L280 495 L265 470 L250 445 L235 415 L220 390 L205 360 L195 330 L185 300 L178 270 L175 240 L175 210 L178 180 L180 80Z"
                fill="none"
                stroke="none"
            />

            {/* Fill regions per zone — coloured zones */}
            {zones.map(zone => (
                <circle
                    key={zone.id}
                    cx={zone.cx}
                    cy={zone.cy}
                    r={selectedZone?.id === zone.id ? 20 : 12}
                    className={`zone-dot ${selectedZone?.id === zone.id ? "selected" : ""}`}
                    onClick={() => onZoneClick(zone)}
                    role="button"
                    tabIndex={0}
                    aria-label={`${zone.name} - Click for details`}
                    onKeyDown={e => e.key === "Enter" && onZoneClick(zone)}
                >
                    <title>{zone.name} — {zone.hq}</title>
                </circle>
            ))}

            {/* Zone labels */}
            {zones.map(zone => (
                <text
                    key={`label-${zone.id}`}
                    x={zone.cx}
                    y={zone.cy + (selectedZone?.id === zone.id ? 35 : 26)}
                    className={`zone-label ${selectedZone?.id === zone.id ? "selected" : ""}`}
                    textAnchor="middle"
                >
                    {zone.hq}
                </text>
            ))}

            {/* Simplified India outline shape */}
            <path
                className="india-outline"
                d="
                    M 200 75 L 245 52 L 295 50 L 360 48 L 415 58 L 455 82 L 490 112
                    L 518 152 L 535 195 L 548 238 L 552 280 L 544 318 L 524 358
                    L 498 395 L 468 425 L 445 455 L 422 483 L 400 510 L 378 530
                    L 358 545 L 338 552 L 318 550 L 300 542 L 283 525 L 268 500
                    L 252 472 L 236 442 L 220 410 L 205 378 L 192 345 L 182 312
                    L 175 278 L 173 244 L 174 210 L 178 178 L 185 145 L 195 115
                    L 200 75 Z
                "
                fill="none"
                stroke="rgba(200,168,75,0.3)"
                strokeWidth="1.5"
                strokeDasharray="6 3"
            />

            {/* Connection lines between HQ dots */}
            {zones.map((zone, i) =>
                i < zones.length - 1 ? (
                    <line
                        key={`line-${i}`}
                        x1={zone.cx} y1={zone.cy}
                        x2={zones[i + 1].cx} y2={zones[i + 1].cy}
                        className="zone-connector"
                    />
                ) : null
            )}
        </svg>
    );
}

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
                                            <span className="zlb-dot" />
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
                                        <IndiaMapSVG
                                            selectedZone={selectedZone}
                                            onZoneClick={setSelectedZone}
                                        />
                                        <div className="map-legend">
                                            <span className="ml-item">
                                                <span className="ml-dot selected" /> Selected Zone
                                            </span>
                                            <span className="ml-item">
                                                <span className="ml-dot" /> Other Zones
                                            </span>
                                        </div>
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

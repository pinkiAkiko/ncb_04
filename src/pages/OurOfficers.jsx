import { useState } from "react";
import PageBanner from "../components/PageBanner";
import "./OurOfficers.scss";

// Zone colours (mirror OfficeLocator)
const ZONE_COLORS = {
    north:     "#1a6eb0",
    northwest: "#7b4fa3",
    west:      "#2a9d5c",
    central:   "#c07c1a",
    east:      "#b03030",
    northeast: "#16a085",
    south:     "#b8860b",
    southwest: "#c0392b",
    andaman:   "#6c3483",
};

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

// Zone polygon paths (same viewBox 0 0 600 680 as OfficeLocator)
const zonePaths = {
    north:     "M195,72 L355,48 L415,56 L448,84 L442,118 L420,140 L390,158 L352,170 L315,178 L278,174 L250,165 L224,152 L208,138 L196,118 L192,95 Z",
    northwest: "M192,95 L196,118 L208,138 L224,152 L222,170 L218,202 L218,238 L222,262 L198,268 L185,258 L178,240 L174,214 L174,182 L176,152 L182,128 Z",
    west:      "M185,258 L198,268 L222,262 L218,295 L214,330 L210,365 L208,395 L205,418 L194,428 L182,418 L176,398 L174,368 L176,335 L178,305 L180,278 Z",
    central:   "M222,262 L218,295 L218,330 L232,348 L258,360 L282,354 L302,342 L316,322 L316,295 L308,272 L290,258 L268,252 L244,252 Z",
    east:      "M352,170 L390,158 L418,168 L434,190 L438,222 L430,252 L415,270 L393,285 L365,292 L340,288 L318,278 L310,260 L314,238 L326,215 L340,196 Z",
    northeast: "M415,56 L448,84 L482,110 L512,148 L530,192 L544,235 L545,268 L530,282 L512,278 L490,265 L464,254 L438,244 L430,222 L434,190 L418,168 L415,148 L420,118 L435,96 Z",
    southwest: "M214,370 L240,365 L265,368 L290,375 L310,390 L316,415 L305,435 L282,448 L258,452 L233,445 L215,432 L208,415 Z",
    south:     "M208,415 L215,432 L233,445 L258,452 L282,448 L305,435 L318,420 L326,440 L322,465 L312,488 L296,510 L276,526 L256,540 L235,546 L214,542 L196,530 L183,510 L178,485 L176,458 L180,438 L192,426 Z",
    andaman:   "M558,320 L566,320 L570,335 L565,348 L556,348 L552,335 Z",
};

const hqDots = {
    north:     { x: 305, y: 148 },
    northwest: { x: 196, y: 228 },
    west:      { x: 198, y: 352 },
    central:   { x: 270, y: 308 },
    east:      { x: 390, y: 238 },
    northeast: { x: 490, y: 212 },
    southwest: { x: 258, y: 408 },
    south:     { x: 244, y: 478 },
    andaman:   { x: 560, y: 334 },
};

function OfficersMapSVG({ selectedZone, onZoneClick }) {
    return (
        <svg viewBox="0 0 600 680" className="officers-map-svg" aria-label="India NCB Zones Map">
            <rect x="0" y="0" width="600" height="680" fill="rgba(14,42,71,0.9)" rx="12" />

            {zones.map(zone => {
                const path = zonePaths[zone.id];
                const color = ZONE_COLORS[zone.id];
                const isSelected = selectedZone?.id === zone.id;
                if (!path) return null;
                return (
                    <g
                        key={zone.id}
                        onClick={() => onZoneClick(zone)}
                        onKeyDown={e => e.key === "Enter" && onZoneClick(zone)}
                        role="button"
                        tabIndex={0}
                        aria-label={`${zone.name} — click to see officers`}
                        style={{ cursor: "pointer" }}
                    >
                        <path
                            d={path}
                            fill={isSelected ? color : `${color}88`}
                            stroke={isSelected ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.25)"}
                            strokeWidth={isSelected ? 2 : 0.8}
                            style={{
                                transition: "all 0.3s ease",
                                filter: isSelected ? `drop-shadow(0 0 12px ${color}cc)` : "none",
                            }}
                        />
                        <title>{zone.name}</title>
                    </g>
                );
            })}

            {zones.map(zone => {
                const dot = hqDots[zone.id];
                const color = ZONE_COLORS[zone.id];
                const isSelected = selectedZone?.id === zone.id;
                if (!dot) return null;
                return (
                    <g key={`d-${zone.id}`} style={{ pointerEvents: "none" }}>
                        <circle
                            cx={dot.x} cy={dot.y}
                            r={isSelected ? 7 : 4}
                            fill={isSelected ? "#fff" : color}
                            stroke={isSelected ? color : "rgba(255,255,255,0.6)"}
                            strokeWidth={isSelected ? 2.5 : 1.5}
                            style={{ transition: "all 0.3s ease" }}
                        />
                        <text
                            x={dot.x} y={dot.y - (isSelected ? 12 : 8)}
                            textAnchor="middle"
                            fontSize={isSelected ? "8.5" : "7"}
                            fontFamily="Inter, sans-serif"
                            fontWeight={isSelected ? "700" : "500"}
                            fill={isSelected ? "#fff" : "rgba(255,255,255,0.7)"}
                            style={{ transition: "all 0.3s ease" }}
                        >
                            {zone.hq}
                        </text>
                    </g>
                );
            })}

            <path
                d="M195,72 L355,48 L415,56 L448,84 L482,110 L512,148 L530,192 L544,235 L545,268 L530,282 L512,278 L490,265 L464,254 L438,244 L430,252 L415,270 L393,285 L365,292 L340,288 L318,278 L310,260 L316,295 L316,322 L302,342 L282,354 L258,360 L232,348 L218,330 L218,295 L214,330 L210,365 L208,395 L205,418 L194,428 L182,418 L176,398 L174,368 L176,335 L178,305 L180,278 L185,258 L198,268 L222,262 L218,238 L218,202 L222,170 L224,152 L208,138 L196,118 L192,95 L195,72 Z"
                fill="none"
                stroke="rgba(200,168,75,0.45)"
                strokeWidth="1.2"
            />

            <text x="300" y="660" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.35)" fontFamily="Inter,sans-serif">
                Click a zone to view officers
            </text>
        </svg>
    );
}

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
                    <div className="officers-layout">
                        {/* ── Left: Map ── */}
                        <div className="officers-map-col">
                            <div className="officers-map-wrap">
                                <OfficersMapSVG selectedZone={selectedZone} onZoneClick={setSelectedZone} />
                            </div>
                            {/* Zone selector pills */}
                            <div className="zone-pills">
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

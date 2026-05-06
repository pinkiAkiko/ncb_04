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

// Zone colour map
const ZONE_COLORS = {
    north:     { fill: "#1a6eb0", label: "#cde4f7" },
    northwest: { fill: "#7b4fa3", label: "#e8d8f7" },
    west:      { fill: "#2a9d5c", label: "#c8f0db" },
    central:   { fill: "#c07c1a", label: "#fde8c2" },
    east:      { fill: "#b03030", label: "#facccc" },
    northeast: { fill: "#16a085", label: "#c2ede4" },
    south:     { fill: "#b8860b", label: "#fdefc2" },
    southwest: { fill: "#c0392b", label: "#fadad5" },
    andaman:   { fill: "#6c3483", label: "#e8d5f5" },
};

// Each zone has a simplified polygon path (viewBox 0 0 600 680)
// Paths trace geographic zone regions inside India's outline
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

// HQ dot positions (kept from original for reference labels)
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

function IndiaMapSVG({ selectedZone, onZoneClick }) {
    return (
        <svg
            viewBox="0 0 600 680"
            className="india-map-svg"
            aria-label="Map of India showing NCB zones"
            role="img"
        >
            {/* Ocean background */}
            <rect x="0" y="0" width="600" height="680" fill="rgba(14,42,71,0.85)" rx="10" />

            {/* India outer shadow / glow */}
            <path
                d="M195,72 L355,48 L415,56 L448,84 L482,110 L512,148 L530,192 L544,235 L545,268 L530,282 L512,278 L490,265 L464,254 L438,244 L430,222 L434,190 L418,168 L415,148 L420,118 L435,96 L415,56 L448,84 L442,118 L420,140 L390,158 L352,170 L340,196 L326,215 L314,238 L310,260 L318,278 L340,288 L365,292 L393,285 L415,270 L430,252 L438,244 L464,254 L490,265 L512,278 L530,282 L545,268 L544,235 L530,192 L512,148 L482,110 L448,84 L415,56 L355,48 L195,72 L192,95 L182,128 L176,152 L174,182 L174,214 L178,240 L185,258 L198,268 L222,262 L218,295 L214,330 L210,365 L208,395 L205,418 L194,428 L182,418 L176,398 L174,368 L176,335 L178,305 L180,278 L185,258 L198,268 L222,262 L218,295 L218,330 L232,348 L258,360 L282,354 L302,342 L316,322 L316,295 L308,272 L290,258 L268,252 L244,252 L222,262 L218,238 L218,202 L222,170 L224,152 L250,165 L278,174 L315,178 L352,170 L390,158 L420,140 L442,118 L448,84"
                fill="rgba(200,168,75,0.08)"
                filter="blur(6px)"
            />

            {/* Zone regions — clickable */}
            {zones.map(zone => {
                const path = zonePaths[zone.id];
                const colors = ZONE_COLORS[zone.id];
                const isSelected = selectedZone?.id === zone.id;
                if (!path || !colors) return null;
                return (
                    <g
                        key={zone.id}
                        onClick={() => onZoneClick(zone)}
                        onKeyDown={e => e.key === "Enter" && onZoneClick(zone)}
                        role="button"
                        tabIndex={0}
                        aria-label={`${zone.name} — click for details`}
                        style={{ cursor: "pointer" }}
                    >
                        <path
                            d={path}
                            fill={isSelected ? colors.fill : `${colors.fill}99`}
                            stroke={isSelected ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)"}
                            strokeWidth={isSelected ? 2 : 0.8}
                            style={{
                                transition: "all 0.3s ease",
                                filter: isSelected ? `drop-shadow(0 0 10px ${colors.fill}cc)` : "none",
                            }}
                        />
                        <title>{zone.name} — {zone.hq}</title>
                    </g>
                );
            })}

            {/* HQ city dots */}
            {zones.map(zone => {
                const dot = hqDots[zone.id];
                const colors = ZONE_COLORS[zone.id];
                const isSelected = selectedZone?.id === zone.id;
                if (!dot || !colors) return null;
                return (
                    <g key={`dot-${zone.id}`} style={{ pointerEvents: "none" }}>
                        <circle
                            cx={dot.x} cy={dot.y}
                            r={isSelected ? 7 : 4.5}
                            fill={isSelected ? "#fff" : colors.fill}
                            stroke={isSelected ? colors.fill : "rgba(255,255,255,0.7)"}
                            strokeWidth={isSelected ? 2.5 : 1.5}
                            style={{ transition: "all 0.3s ease" }}
                        />
                        <text
                            x={dot.x}
                            y={dot.y - (isSelected ? 13 : 9)}
                            textAnchor="middle"
                            fontSize={isSelected ? "9" : "7.5"}
                            fontFamily="Inter, sans-serif"
                            fontWeight={isSelected ? "700" : "500"}
                            fill={isSelected ? "#fff" : "rgba(255,255,255,0.75)"}
                            style={{ transition: "all 0.3s ease", pointerEvents: "none" }}
                        >
                            {zone.hq}
                        </text>
                    </g>
                );
            })}

            {/* Andaman islands label */}
            <text x="558" y="316" textAnchor="middle" fontSize="6.5" fill="rgba(255,255,255,0.6)" fontFamily="Inter, sans-serif">A&N</text>

            {/* India outline border */}
            <path
                d="M195,72 L355,48 L415,56 L448,84 L482,110 L512,148 L530,192 L544,235 L545,268 L530,282 L512,278 L490,265 L464,254 L438,244 L430,252 L415,270 L393,285 L365,292 L340,288 L318,278 L310,260 L316,295 L316,322 L302,342 L282,354 L258,360 L232,348 L218,330 L218,295 L214,330 L210,365 L208,395 L205,418 L194,428 L182,418 L176,398 L174,368 L176,335 L178,305 L180,278 L185,258 L198,268 L222,262 L218,238 L218,202 L222,170 L224,152 L208,138 L196,118 L192,95 L195,72 Z
                M180,438 L192,426 L205,418 M326,440 L318,420 L305,435 L282,448 L258,452 L233,445 L215,432 L208,415 L194,428
                M322,465 L312,488 L296,510 L276,526 L256,540 L235,546 L214,542 L196,530 L183,510 L178,485 L176,458 L180,438"
                fill="none"
                stroke="rgba(200,168,75,0.55)"
                strokeWidth="1.2"
            />

            {/* Legend */}
            <g transform="translate(12, 580)">
                {Object.entries(ZONE_COLORS).slice(0, 5).map(([id, c], i) => {
                    const z = zones.find(z => z.id === id);
                    return (
                        <g key={id} transform={`translate(${i * 110}, 0)`}>
                            <rect x="0" y="0" width="10" height="10" fill={c.fill} rx="2" />
                            <text x="14" y="9" fontSize="7" fill="rgba(255,255,255,0.65)" fontFamily="Inter,sans-serif">{z?.name}</text>
                        </g>
                    );
                })}
            </g>
            <g transform="translate(12, 596)">
                {Object.entries(ZONE_COLORS).slice(5).map(([id, c], i) => {
                    const z = zones.find(z => z.id === id);
                    return (
                        <g key={id} transform={`translate(${i * 110}, 0)`}>
                            <rect x="0" y="0" width="10" height="10" fill={c.fill} rx="2" />
                            <text x="14" y="9" fontSize="7" fill="rgba(255,255,255,0.65)" fontFamily="Inter,sans-serif">{z?.name}</text>
                        </g>
                    );
                })}
            </g>
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
                                            <span className="zlb-dot" style={{ background: ZONE_COLORS[zone.id]?.fill }} />
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

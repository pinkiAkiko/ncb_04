import { useMemo } from "react";
import { statePaths } from "../data/indiaMapPaths";
import "./IndiaStateMap.scss";

export const ZONE_COLORS = {
    north:     "#1a6eb0",
    northwest: "#7b4fa3",
    west:      "#2a9d5c",
    central:   "#c07c1a",
    east:      "#b03030",
    northeast: "#16a085",
    southwest: "#c0392b",
    south:     "#b8860b",
    andaman:   "#6c3483",
};

// ISO 3166-2:IN state code → NCB zone ID
const STATE_ZONE = {
    INDL: "north", INHR: "north", INHP: "north", INJK: "north",
    INLA: "north", INPB: "north", INCH: "north", INUT: "north", INUP: "north",
    INRJ: "northwest",
    INMH: "west",  INGJ: "west",  INGA: "west",  INDH: "west",
    INMP: "central", INCT: "central",
    INWB: "east",  INBR: "east",  INJH: "east",  INOR: "east",
    INAS: "northeast", INAR: "northeast", INMN: "northeast", INML: "northeast",
    INMZ: "northeast", INNL: "northeast", INSK: "northeast", INTR: "northeast",
    INKA: "southwest", INAP: "southwest", INTG: "southwest",
    INTN: "south", INKL: "south", INPY: "south", INLD: "south",
    INAN: "andaman",
};

// Approximate HQ city positions on 1000×1000 viewBox
const HQ_POS = {
    north:     { x: 344, y: 316, label: "New Delhi" },
    northwest: { x: 218, y: 388, label: "Jodhpur" },
    west:      { x: 208, y: 628, label: "Mumbai" },
    central:   { x: 365, y: 488, label: "Bhopal" },
    east:      { x: 640, y: 492, label: "Kolkata" },
    northeast: { x: 773, y: 392, label: "Guwahati" },
    southwest: { x: 305, y: 728, label: "Bengaluru" },
    south:     { x: 400, y: 832, label: "Chennai" },
    andaman:   { x: 771, y: 814, label: "Port Blair" },
};

export function IndiaStateMap({ zones, selectedZone, onZoneClick }) {
    const zoneById = useMemo(
        () => Object.fromEntries((zones || []).map(z => [z.id, z])),
        [zones]
    );

    const stateEntries = useMemo(() => Object.entries(statePaths), []);

    function handleStateClick(zoneId) {
        const zone = zoneById[zoneId];
        if (zone) onZoneClick(zone);
    }

    return (
        <svg
            viewBox="0 0 1000 1000"
            className="india-state-map-svg"
            aria-label="India NCB Zones Map — real state boundaries"
        >
            <rect width="1000" height="1000" fill="rgba(10,30,58,0.92)" rx="12" />

            {stateEntries.map(([code, pathData]) => {
                const zoneId = STATE_ZONE[code];
                if (!zoneId) return null;
                const color = ZONE_COLORS[zoneId];
                const isSelected = selectedZone?.id === zoneId;
                return (
                    <path
                        key={code}
                        d={pathData}
                        fill={isSelected ? color : `${color}99`}
                        stroke={isSelected ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.22)"}
                        strokeWidth={isSelected ? 1.5 : 0.6}
                        style={{
                            cursor: "pointer",
                            transition: "fill 0.25s ease, stroke 0.25s ease, filter 0.25s ease",
                            filter: isSelected ? `drop-shadow(0 0 6px ${color}cc)` : "none",
                        }}
                        onClick={() => handleStateClick(zoneId)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={e => e.key === "Enter" && handleStateClick(zoneId)}
                        aria-label={`${zoneId} zone — ${code}`}
                    />
                );
            })}

            {/* HQ city dots and labels */}
            {Object.entries(HQ_POS).map(([zoneId, pos]) => {
                const color = ZONE_COLORS[zoneId];
                const isSelected = selectedZone?.id === zoneId;
                return (
                    <g key={`hq-${zoneId}`} style={{ pointerEvents: "none" }}>
                        {isSelected && (
                            <circle
                                cx={pos.x} cy={pos.y}
                                r={14}
                                fill={`${color}30`}
                                stroke={`${color}60`}
                                strokeWidth={1}
                            />
                        )}
                        <circle
                            cx={pos.x} cy={pos.y}
                            r={isSelected ? 6 : 3.5}
                            fill={isSelected ? "#fff" : color}
                            stroke={isSelected ? color : "rgba(255,255,255,0.5)"}
                            strokeWidth={isSelected ? 2 : 1}
                            style={{ transition: "all 0.25s ease" }}
                        />
                        <text
                            x={pos.x}
                            y={pos.y - (isSelected ? 11 : 8)}
                            textAnchor="middle"
                            fontSize={isSelected ? "10.5" : "8.5"}
                            fontFamily="Inter, sans-serif"
                            fontWeight={isSelected ? "700" : "500"}
                            fill={isSelected ? "#fff" : "rgba(255,255,255,0.72)"}
                            style={{ transition: "all 0.25s ease" }}
                        >
                            {pos.label}
                        </text>
                    </g>
                );
            })}

            <text
                x="500" y="980"
                textAnchor="middle"
                fontSize="10"
                fill="rgba(255,255,255,0.3)"
                fontFamily="Inter, sans-serif"
            >
                Click a state to select its zone
            </text>
        </svg>
    );
}

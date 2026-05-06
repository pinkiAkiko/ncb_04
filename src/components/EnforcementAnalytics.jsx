import { useState, useEffect, useRef } from "react";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell,
} from "recharts";
import { useTwoPhaseCount } from "../hooks/useTwoPhaseCount";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./EnforcementAnalytics.scss";

const barData = [
    { drug: "Heroin",         arrests: 812  },
    { drug: "Cocaine",        arrests: 156  },
    { drug: "Opium",          arrests: 634  },
    { drug: "Ganja",          arrests: 2940 },
    { drug: "Synthetic",      arrests: 650  },
    { drug: "Psychotropics",  arrests: 245  },
];

const donutData = [
    { name: "Dealers",   value: 38, color: "#c8a84b" },
    { name: "Users",     value: 27, color: "#3a6d9e" },
    { name: "Smugglers", value: 22, color: "#a07c30" },
    { name: "Couriers",  value: 13, color: "#1a4d78" },
];

// ── Custom bar tooltip ──────────────────────────────────────
function BarTooltip({ active, payload, label }) {
    if (!active || !payload?.length) return null;
    return (
        <div className="ea-tooltip">
            <span className="ea-tt-label">{label}</span>
            <span className="ea-tt-val">{payload[0].value.toLocaleString("en-IN")} arrests</span>
        </div>
    );
}

// ── Custom donut tooltip ────────────────────────────────────
function DonutTooltip({ active, payload }) {
    if (!active || !payload?.length) return null;
    return (
        <div className="ea-tooltip">
            <span className="ea-tt-label">{payload[0].name}</span>
            <span className="ea-tt-val">{payload[0].value}%</span>
        </div>
    );
}

// ── Stat card (two-phase looping count) ────────────────────
function StatCard({ icon, title, val2026, valTotal, unit, color }) {
    const { ref, display } = useTwoPhaseCount(val2026, valTotal);
    return (
        <div className={`ea-stat-card ea-stat--${color}`} ref={ref}>
            <div className={`ea-stat-icon ea-ic--${color}`}>
                <i className={`bi ${icon}`} />
            </div>
            <div className="ea-stat-body">
                <span className="ea-stat-title">{title}</span>
                <div className="ea-stat-number">
                    {display.value}
                    <small>{unit}</small>
                </div>
                <span className={`ea-stat-phase ${display.phase === 1 ? "phase1" : "phase2"}`}>
                    {display.phase === 1 ? "In 2026" : "All-time Total"}
                </span>
            </div>
        </div>
    );
}

// ── Custom legend for donut ─────────────────────────────────
function DonutLegend() {
    return (
        <div className="ea-donut-legend">
            {donutData.map(d => (
                <span key={d.name} className="ea-legend-item">
                    <span className="ea-legend-dot" style={{ background: d.color }} />
                    {d.name}
                </span>
            ))}
        </div>
    );
}

export default function EnforcementAnalytics() {
    const headingRef = useScrollReveal("is-visible");
    const dashRef    = useRef(null);
    const [chartKey, setChartKey] = useState(0);

    // Re-mount charts (re-triggers recharts animation) every viewport entry
    useEffect(() => {
        const el = dashRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setChartKey(k => k + 1);
        }, { threshold: 0.15 });
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="ea-section page-section">
            <div className="container">
                {/* Heading — visible immediately, no reveal delay */}
                <div className="ea-heading" ref={headingRef}>
                    <span className="ea-live-dot" />
                    <h2 className="ea-title">
                        <span className="ea-title-white">Live</span>{" "}
                        <span className="ea-title-gold">Enforcement Analytics</span>
                    </h2>
                </div>

                <div className="ea-dashboard" ref={dashRef}>
                    {/* ── Left: Stat Cards ────────────── */}
                    <div className="ea-stats-col">
                        <StatCard
                            icon="bi-box-seam"
                            title="Total Seizures"
                            val2026="3,842"
                            valTotal="14,285"
                            unit=" KG"
                            color="gold"
                        />
                        <StatCard
                            icon="bi-file-earmark-text"
                            title="Cases Registered"
                            val2026="684"
                            valTotal="2,840"
                            unit=""
                            color="gold"
                        />
                        <StatCard
                            icon="bi-people"
                            title="Total Arrests"
                            val2026="1,247"
                            valTotal="5,192"
                            unit=""
                            color="gold"
                        />
                    </div>

                    {/* ── Center: Bar Chart ─── key forces remount on viewport entry */}
                    <div className="ea-chart-card" key={`bar-${chartKey}`}>
                        <h3 className="ea-chart-title">Drug-wise Arrest Statistics</h3>
                        <p className="ea-chart-sub">Arrests categorised by primary substance type</p>
                        <div className="ea-bar-wrap">
                            <ResponsiveContainer width="100%" height={220}>
                                <BarChart data={barData} margin={{ top: 8, right: 8, left: -16, bottom: 40 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" vertical={false} />
                                    <XAxis
                                        dataKey="drug"
                                        tick={{ fontSize: 11, fill: "#6b7f95" }}
                                        axisLine={false}
                                        tickLine={false}
                                        angle={-30}
                                        textAnchor="end"
                                        interval={0}
                                    />
                                    <YAxis
                                        tick={{ fontSize: 11, fill: "#6b7f95" }}
                                        axisLine={false}
                                        tickLine={false}
                                        tickFormatter={v => v >= 1000 ? `${v / 1000}k` : v}
                                    />
                                    <Tooltip content={<BarTooltip />} cursor={{ fill: "rgba(200,168,75,0.08)" }} />
                                    <Bar
                                        dataKey="arrests"
                                        fill="#c8a84b"
                                        radius={[4, 4, 0, 0]}
                                        isAnimationActive
                                        animationBegin={0}
                                        animationDuration={1200}
                                        animationEasing="ease-out"
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* ── Right: Donut Chart ─── key forces remount on viewport entry */}
                    <div className="ea-chart-card" key={`donut-${chartKey}`}>
                        <h3 className="ea-chart-title">Classification of Arrests</h3>
                        <p className="ea-chart-sub">Percentage distribution by role in trafficking ecosystem</p>
                        <div className="ea-donut-wrap">
                            <ResponsiveContainer width="100%" height={200}>
                                <PieChart>
                                    <Pie
                                        data={donutData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={55}
                                        outerRadius={90}
                                        paddingAngle={3}
                                        dataKey="value"
                                        isAnimationActive
                                        animationBegin={0}
                                        animationDuration={1400}
                                        animationEasing="ease-out"
                                    >
                                        {donutData.map((d, i) => (
                                            <Cell key={i} fill={d.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip content={<DonutTooltip />} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <DonutLegend />
                    </div>
                </div>
            </div>
        </section>
    );
}

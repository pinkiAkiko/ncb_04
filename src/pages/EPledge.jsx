import { useState } from "react";
import PageBanner from "../components/PageBanner";
import "./EPledge.scss";

const pledgeText = [
    "I solemnly pledge that I will keep myself away from all kinds of drugs. I will not only keep myself away from drugs but will also make my family, friends, and community aware about the ill-effects of drugs.",
    "I will not encourage the use of drugs in any form. I shall report any drug-related activity to NCB Helpline 1933 or the nearest police station.",
    "I pledge to contribute to making India drug-free.",
];

const ageGroups = ["", "18-25", "26-35", "36-50", "50+"];

const indianStates = [
    "", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh",
    "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand",
    "Karnataka", "Kerala", "Ladakh", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
    "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim",
    "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
];

const campaignCards = [
    { icon: "bi-eye-fill", title: "Know the Signs", body: "Learn to identify signs of drug abuse in yourself, friends, and family members. Early detection saves lives.", color: "blue" },
    { icon: "bi-megaphone-fill", title: "Spread Awareness", body: "Share this pledge on social media. Educate your community about the dangers of drug abuse and support Nasha Mukt Bharat.", color: "gold" },
    { icon: "bi-telephone-fill", title: "Report Drug Activity", body: "Report any suspected drug trafficking or abuse to NCB Helpline 1933 or your nearest police station. Your tip matters.", color: "green" },
];

const COUNTER_BASE = 124582;

function EPledge() {
    const [form, setForm] = useState({ name: "", mobile: "", state: "", ageGroup: "", agreed: false });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = "Name is required";
        if (!/^\d{10}$/.test(form.mobile)) e.mobile = "Enter a valid 10-digit mobile number";
        if (!form.agreed) e.agreed = "You must agree to take the pledge";
        return e;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) { setErrors(errs); return; }
        setSubmitted(true);
        setErrors({});
    };

    return (
        <div className="epledge-page">
            <PageBanner
                title="E-Pledge"
                subtitle="Take the anti-drug pledge — Join India's movement for a drug-free nation"
                breadcrumbs={[
                    { label: "Navigation", path: "/navigation" },
                    { label: "E-Pledge", path: "/e-pledge" },
                ]}
            />

            <div className="page-section">
                <div className="container">

                    {/* ── Pledge Text ── */}
                    <section className="ep-pledge-section">
                        <span className="section-label">The Pledge</span>
                        <h2 className="section-title">Anti-Drug Pledge</h2>
                        <div className="section-divider" />
                        <div className="ep-pledge-card">
                            <div className="ep-pledge-quote-icon"><i className="bi bi-quote" /></div>
                            {pledgeText.map((para, i) => (
                                <p key={i} className="ep-pledge-para">{para}</p>
                            ))}
                            <div className="ep-pledge-footer">
                                <i className="bi bi-flag-fill" /> Nasha Mukt Bharat Abhiyan
                            </div>
                        </div>
                    </section>

                    {/* ── Counter ── */}
                    <div className="ep-counter-strip">
                        <div className="ep-counter-inner">
                            <div className="ep-counter-num">{(COUNTER_BASE + (submitted ? 1 : 0)).toLocaleString("en-IN")}</div>
                            <div className="ep-counter-label">Indians have taken the pledge</div>
                        </div>
                        <div className="ep-counter-badge">
                            <i className="bi bi-people-fill" />
                            <span>Join the movement</span>
                        </div>
                    </div>

                    <div className="ep-layout">
                        {/* ── Pledge Form ── */}
                        <div className="ep-form-col">
                            <span className="section-label">Take Action</span>
                            <h2 className="section-title">Take the Pledge</h2>
                            <div className="section-divider" />

                            {submitted ? (
                                <div className="ep-success">
                                    <div className="ep-success-icon"><i className="bi bi-patch-check-fill" /></div>
                                    <h3>Thank you, {form.name}!</h3>
                                    <div className="ep-cert-card">
                                        <div className="ep-cert-header">
                                            <i className="bi bi-award-fill" />
                                            <span>Pledge Certificate</span>
                                        </div>
                                        <p className="ep-cert-name">{form.name}</p>
                                        <p className="ep-cert-num">You are pledge taker <strong>#{(COUNTER_BASE + 1).toLocaleString("en-IN")}</strong></p>
                                        <p className="ep-cert-msg">Your pledge has been recorded. Share your commitment to a drug-free India on social media.</p>
                                    </div>
                                    <div className="ep-share-strip">
                                        <span className="ep-share-label">Share your pledge:</span>
                                        <a href="#!" className="ep-share-btn ep-share-btn--wa"><i className="bi bi-whatsapp" /> WhatsApp</a>
                                        <a href="#!" className="ep-share-btn ep-share-btn--tw"><i className="bi bi-twitter-x" /> X</a>
                                        <a href="#!" className="ep-share-btn ep-share-btn--fb"><i className="bi bi-facebook" /> Facebook</a>
                                        <a href="#!" className="ep-share-btn ep-share-btn--ig"><i className="bi bi-instagram" /> Instagram</a>
                                    </div>
                                    <button className="ep-back-btn" onClick={() => { setSubmitted(false); setForm({ name: "", mobile: "", state: "", ageGroup: "", agreed: false }); }}>
                                        Back
                                    </button>
                                </div>
                            ) : (
                                <form className="ep-form" onSubmit={handleSubmit} noValidate>
                                    <div className="cf-row">
                                        <div className="cf-field">
                                            <label>Full Name *</label>
                                            <input type="text" placeholder="Your full name" value={form.name} onChange={e => set("name", e.target.value)} />
                                            {errors.name && <span className="cf-error">{errors.name}</span>}
                                        </div>
                                        <div className="cf-field">
                                            <label>Mobile Number *</label>
                                            <input type="tel" placeholder="10-digit mobile number" maxLength={10} value={form.mobile} onChange={e => set("mobile", e.target.value)} />
                                            {errors.mobile && <span className="cf-error">{errors.mobile}</span>}
                                        </div>
                                    </div>
                                    <div className="cf-row">
                                        <div className="cf-field">
                                            <label>State / UT</label>
                                            <select value={form.state} onChange={e => set("state", e.target.value)}>
                                                {indianStates.map((s, i) => <option key={i} value={s}>{s || "— Select State —"}</option>)}
                                            </select>
                                        </div>
                                        <div className="cf-field">
                                            <label>Age Group</label>
                                            <select value={form.ageGroup} onChange={e => set("ageGroup", e.target.value)}>
                                                {ageGroups.map((a, i) => <option key={i} value={a}>{a || "— Select Age Group —"}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="ep-agree-row">
                                        <label className="ep-agree-label">
                                            <input type="checkbox" checked={form.agreed} onChange={e => set("agreed", e.target.checked)} />
                                            <span>I have read and agree to take the anti-drug pledge on behalf of myself and encourage my community to do the same.</span>
                                        </label>
                                        {errors.agreed && <span className="cf-error">{errors.agreed}</span>}
                                    </div>
                                    <button type="submit" className="ep-pledge-btn" disabled={!form.agreed}>
                                        <i className="bi bi-hand-index-fill" /> Take the Pledge
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* ── Campaign Info ── */}
                        <div className="ep-campaign-col">
                            <span className="section-label">Campaign</span>
                            <h2 className="section-title">Nasha Mukt Bharat Abhiyan</h2>
                            <div className="section-divider" />
                            <div className="ep-campaign-cards">
                                {campaignCards.map((c, i) => (
                                    <div key={i} className={`ep-campaign-card ep-campaign-card--${c.color}`}>
                                        <div className="ep-campaign-icon"><i className={`bi ${c.icon}`} /></div>
                                        <div>
                                            <h3 className="ep-campaign-title">{c.title}</h3>
                                            <p className="ep-campaign-body">{c.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="ep-helpline-box">
                                <i className="bi bi-telephone-fill" />
                                <div>
                                    <strong>NCB Drug Helpline</strong>
                                    <a href="tel:1933">1933</a>
                                    <span>Free · 24×7 · Confidential</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default EPledge;

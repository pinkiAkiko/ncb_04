import { useState } from "react";
import PageBanner from "../components/PageBanner";
import "./Grievance.scss";

const categories = ["", "Recruitment", "RTI", "Drug Trafficking Report", "Harassment", "Scam/Impersonation", "Other"];

const indianStates = [
    "", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh",
    "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand",
    "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan",
    "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
];

function generateRef() {
    return "GRV-2026-" + Math.floor(10000 + Math.random() * 90000);
}

function Grievance() {
    const [form, setForm] = useState({
        name: "", mobile: "", email: "", category: "", subject: "",
        description: "", state: "", district: "", file: null,
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [refNum, setRefNum] = useState("");
    const [trackId, setTrackId] = useState("");
    const [tracked, setTracked] = useState(false);

    const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = "Name is required";
        if (!/^\d{10}$/.test(form.mobile)) e.mobile = "Enter a valid 10-digit mobile number";
        if (!form.category) e.category = "Please select a category";
        if (!form.subject.trim()) e.subject = "Subject is required";
        if (!form.description.trim()) e.description = "Description is required";
        if (form.description.length > 2000) e.description = "Maximum 2000 characters allowed";
        return e;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) { setErrors(errs); return; }
        setRefNum(generateRef());
        setSubmitted(true);
        setErrors({});
    };

    return (
        <div className="grievance-page">
            <PageBanner
                title="Grievance Redressal"
                subtitle="Submit a public grievance or complaint to Narcotics Control Bureau"
                breadcrumbs={[
                    { label: "Navigation", path: "/navigation" },
                    { label: "Grievance Redressal", path: "/grievance" },
                ]}
            />

            <div className="page-section">
                <div className="container">

                    {/* ── CPGRAMS Notice ── */}
                    <div className="grv-cpgrams-notice">
                        <div className="grv-cpgrams-icon"><i className="bi bi-info-circle-fill" /></div>
                        <div className="grv-cpgrams-text">
                            <strong>Centralised Public Grievance Redress and Monitoring System (CPGRAMS)</strong>
                            <span>For formal online grievances to the Government of India, please submit through the official CPGRAMS portal at </span>
                            <a href="https://pgportal.gov.in" target="_blank" rel="noopener noreferrer">pgportal.gov.in</a>
                        </div>
                        <a href="https://pgportal.gov.in" target="_blank" rel="noopener noreferrer" className="grv-cpgrams-btn">
                            Go to CPGRAMS <i className="bi bi-arrow-up-right-square" />
                        </a>
                    </div>

                    <div className="grv-layout">
                        {/* ── Form Column ── */}
                        <div className="grv-form-col">
                            <span className="section-label">File a Grievance</span>
                            <h2 className="section-title">Submit Your Complaint</h2>
                            <div className="section-divider" />

                            {submitted ? (
                                <div className="grv-success">
                                    <div className="grv-success-icon"><i className="bi bi-check-circle-fill" /></div>
                                    <h3>Grievance Submitted Successfully</h3>
                                    <p>Your grievance has been received. Please note your reference number for tracking.</p>
                                    <div className="grv-ref-box">
                                        <span className="grv-ref-label">Reference Number</span>
                                        <span className="grv-ref-num">{refNum}</span>
                                    </div>
                                    <p className="grv-success-note">You will receive a response within <strong>30 working days</strong> as per the CPGRAMS guidelines. For urgent matters please call <a href="tel:011-26197900">011-26197900</a>.</p>
                                    <button className="grv-back-btn" onClick={() => { setSubmitted(false); setForm({ name: "", mobile: "", email: "", category: "", subject: "", description: "", state: "", district: "", file: null }); }}>
                                        Submit Another Grievance
                                    </button>
                                </div>
                            ) : (
                                <form className="grv-form" onSubmit={handleSubmit} noValidate>
                                    <div className="cf-row">
                                        <div className="cf-field">
                                            <label>Full Name *</label>
                                            <input type="text" placeholder="Your full name" value={form.name} onChange={e => set("name", e.target.value)} />
                                            {errors.name && <span className="cf-error">{errors.name}</span>}
                                        </div>
                                        <div className="cf-field">
                                            <label>Mobile Number *</label>
                                            <input type="tel" placeholder="10-digit mobile number" value={form.mobile} maxLength={10} onChange={e => set("mobile", e.target.value)} />
                                            {errors.mobile && <span className="cf-error">{errors.mobile}</span>}
                                        </div>
                                    </div>
                                    <div className="cf-row">
                                        <div className="cf-field">
                                            <label>Email Address</label>
                                            <input type="email" placeholder="your@email.com" value={form.email} onChange={e => set("email", e.target.value)} />
                                        </div>
                                        <div className="cf-field">
                                            <label>Category *</label>
                                            <select value={form.category} onChange={e => set("category", e.target.value)}>
                                                {categories.map((c, i) => <option key={i} value={c}>{c || "— Select Category —"}</option>)}
                                            </select>
                                            {errors.category && <span className="cf-error">{errors.category}</span>}
                                        </div>
                                    </div>
                                    <div className="cf-field cf-field--full">
                                        <label>Subject *</label>
                                        <input type="text" placeholder="Brief subject of your grievance" value={form.subject} onChange={e => set("subject", e.target.value)} />
                                        {errors.subject && <span className="cf-error">{errors.subject}</span>}
                                    </div>
                                    <div className="cf-field cf-field--full">
                                        <label>Grievance Description * <span className="cf-char-count">{form.description.length}/2000</span></label>
                                        <textarea rows={6} placeholder="Describe your grievance in detail…" maxLength={2000} value={form.description} onChange={e => set("description", e.target.value)} />
                                        {errors.description && <span className="cf-error">{errors.description}</span>}
                                    </div>
                                    <div className="cf-row">
                                        <div className="cf-field">
                                            <label>State / UT</label>
                                            <select value={form.state} onChange={e => set("state", e.target.value)}>
                                                {indianStates.map((s, i) => <option key={i} value={s}>{s || "— Select State —"}</option>)}
                                            </select>
                                        </div>
                                        <div className="cf-field">
                                            <label>District</label>
                                            <input type="text" placeholder="Your district" value={form.district} onChange={e => set("district", e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="cf-field cf-field--full">
                                        <label>Upload Supporting Documents</label>
                                        <div className="grv-file-input">
                                            <input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={e => set("file", e.target.files[0])} id="grv-file" />
                                            <label htmlFor="grv-file" className="grv-file-label">
                                                <i className="bi bi-upload" />
                                                {form.file ? form.file.name : "Choose PDF or image (max 5 MB)"}
                                            </label>
                                        </div>
                                    </div>
                                    <div className="grv-captcha-note">
                                        <i className="bi bi-shield-check" /> CAPTCHA verification will be required before final submission.
                                    </div>
                                    <p className="cf-disclaimer">* Mandatory fields. Your information is protected. False grievances may attract legal action.</p>
                                    <button type="submit" className="grv-submit-btn">
                                        Submit Grievance <i className="bi bi-send-fill" />
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* ── Right Sidebar ── */}
                        <div className="grv-sidebar">
                            {/* Track Grievance */}
                            <div className="grv-track-card">
                                <h3 className="grv-track-heading"><i className="bi bi-search" /> Track Your Grievance</h3>
                                <div className="cf-field">
                                    <label>Enter Grievance ID</label>
                                    <input type="text" placeholder="GRV-2026-XXXXX" value={trackId} onChange={e => setTrackId(e.target.value)} />
                                </div>
                                <button className="grv-track-btn" onClick={() => setTracked(true)}>
                                    Track Status <i className="bi bi-arrow-right" />
                                </button>
                                {tracked && trackId && (
                                    <div className="grv-track-result">
                                        <i className="bi bi-info-circle" />
                                        <span>Status for <strong>{trackId}</strong>: Under Review — Assigned to Nodal Officer.</span>
                                    </div>
                                )}
                            </div>

                            {/* Nodal Officer */}
                            <div className="grv-nodal-card">
                                <div className="grv-nodal-header">
                                    <i className="bi bi-person-badge-fill" />
                                    <span>Public Grievance Officer</span>
                                </div>
                                <h4 className="grv-nodal-name">Public Grievance Officer</h4>
                                <p className="grv-nodal-org">Narcotics Control Bureau, HQ New Delhi</p>
                                <div className="grv-nodal-contacts">
                                    <a href="tel:011-26197900" className="grv-nodal-contact"><i className="bi bi-telephone-fill" /> 011-26197900</a>
                                    <a href="mailto:pgncb@nic.in" className="grv-nodal-contact"><i className="bi bi-envelope-fill" /> pgncb@nic.in</a>
                                </div>
                            </div>

                            {/* External Links */}
                            <div className="grv-links-card">
                                <h3 className="grv-links-heading">External Grievance Portals</h3>
                                <div className="grv-links-list">
                                    <a href="https://pgportal.gov.in" target="_blank" rel="noopener noreferrer" className="grv-ext-link">
                                        <i className="bi bi-box-arrow-up-right" />
                                        <div>
                                            <strong>CPGRAMS Portal</strong>
                                            <span>Centralised Public Grievance Redress</span>
                                        </div>
                                    </a>
                                    <a href="https://pgportal.gov.in/pmo" target="_blank" rel="noopener noreferrer" className="grv-ext-link">
                                        <i className="bi bi-box-arrow-up-right" />
                                        <div>
                                            <strong>PM's Office Grievance Portal</strong>
                                            <span>Prime Minister's Public Grievance Cell</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Grievance;

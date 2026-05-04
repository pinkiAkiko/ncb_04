import { useState } from "react";
import PageBanner from "../components/PageBanner";
import "./Contact.scss";

function Contact() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="contact-page">
            <PageBanner
                title="Contact Us"
                subtitle="Get in touch with Narcotics Control Bureau"
                breadcrumbs={[{ label: "Contact Us", path: "/contact" }]}
            />

            <div className="page-section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Info Column */}
                        <div className="contact-info-col">
                            <span className="section-label">Reach Us</span>
                            <h2 className="section-title">Get In Touch</h2>
                            <div className="section-divider" />

                            <div className="contact-info-cards">
                                {[
                                    { icon: "bi-geo-alt-fill", title: "Headquarters", lines: ["West Block 1, Wing 7,", "R.K. Puram, New Delhi — 110 066"] },
                                    { icon: "bi-telephone-fill", title: "Phone", lines: ["011-26197915 / 26197916", "FAX: 011-26197930"] },
                                    { icon: "bi-envelope-fill", title: "Email", lines: ["ncb-hq@gov.in", "cpio-ncb@nic.in"] },
                                    { icon: "bi-clock-fill", title: "Office Hours", lines: ["Monday – Friday: 9:00 AM – 5:30 PM", "Closed on Government Holidays"] },
                                ].map(info => (
                                    <div key={info.title} className="contact-info-card">
                                        <div className="cic-icon"><i className={`bi ${info.icon}`} /></div>
                                        <div>
                                            <h4 className="cic-title">{info.title}</h4>
                                            {info.lines.map((line, i) => <p key={i} className="cic-line">{line}</p>)}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="drug-helpline-card">
                                <i className="bi bi-headset" />
                                <div>
                                    <span className="dh-label">Drug Helpline (24×7)</span>
                                    <a href="tel:1933" className="dh-number">1933</a>
                                    <span className="dh-sub">MANAS | Free | 24×7</span>
                                </div>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="contact-form-col">
                            {submitted ? (
                                <div className="contact-success">
                                    <i className="bi bi-check-circle-fill" />
                                    <h3>Message Sent Successfully</h3>
                                    <p>Thank you for contacting NCB. We will respond within 3–5 working days.</p>
                                    <button onClick={() => setSubmitted(false)} className="contact-back-btn">Send Another</button>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                                    <h3 className="cf-heading">Send Us a Message</h3>
                                    <div className="cf-row">
                                        <div className="cf-field">
                                            <label>Full Name *</label>
                                            <input type="text" required placeholder="Your full name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                                        </div>
                                        <div className="cf-field">
                                            <label>Email Address *</label>
                                            <input type="email" required placeholder="your@email.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                                        </div>
                                    </div>
                                    <div className="cf-row">
                                        <div className="cf-field">
                                            <label>Phone Number</label>
                                            <input type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                                        </div>
                                        <div className="cf-field">
                                            <label>Subject *</label>
                                            <select value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} required>
                                                <option value="">— Select Subject —</option>
                                                <option>RTI Information</option>
                                                <option>Drug Reporting</option>
                                                <option>Recruitment Query</option>
                                                <option>General Enquiry</option>
                                                <option>Media / Press</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="cf-field cf-field--full">
                                        <label>Message *</label>
                                        <textarea rows={6} required placeholder="Describe your query or message…" value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                                    </div>
                                    <p className="cf-disclaimer">* Fields marked are mandatory. Your information is protected under the Privacy Policy.</p>
                                    <button type="submit" className="cf-submit-btn">
                                        Send Message <i className="bi bi-send-fill" />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

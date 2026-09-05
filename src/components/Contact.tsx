import { useState } from "react";
import emailjs from "@emailjs/browser";
import { footerText, contactLinks, location } from "../content.js";
import WindowCard from "./WindowCard.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      window.alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <div className="contact-strip">
        <div className="section contact-section">
          <h2 className="section-header contact-heading">Say Hello</h2>
          <div className="contact-grid">
            {/* Left — info panel */}
            <WindowCard title="contact.info" className="contact-info-card">
              <p className="contact-tagline">
                Have a project in mind or just want to chat? Drop a message — I reply fast!
              </p>

              <div className="contact-links-list">
                {contactLinks.map((c) => (
                  <a key={c.id} href={c.href} target="_blank" rel="noopener noreferrer" className="contact-link-row">
                    <span className="contact-icon-wrap">
                      <img src={c.icon} alt={c.label} width={20} height={20} />
                    </span>
                    <span className="contact-link-text">
                      <span className="contact-link-label">{c.label}</span>
                      <span className="contact-link-value">{c.value}</span>
                    </span>
                  </a>
                ))}
              </div>

              <div className="contact-location">
                <span className="location-pin">📍</span>
                <span>{location}</span>
              </div>
            </WindowCard>

            {/* Right — form */}
            <WindowCard title="contact.form" className="lg contact-form-card">
              {sent ? (
                <p className="contact-sent-msg">
                  Message sent! I will get back to you soon 🎉
                </p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="form-input"
                      placeholder="Alex Mercer"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="form-input"
                      placeholder="alex@example.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      className="form-textarea"
                      placeholder="I would love to collaborate on..."
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary form-submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message →"}
                  </button>
                </form>
              )}
            </WindowCard>
          </div>
        </div>
      </div>
      <footer className="footer">{footerText}</footer>
    </>
  );
}

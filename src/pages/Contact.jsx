import React from "react";

const Contact = () => {
  return (
    <section className="contact-section">
      <img
        src="/assets/images/Shri_Yantra.png"
        alt="Shri Yantra"
        className="yantra-bg"
      />

      <h2 className="section-title glow-text">📿 Contact Us</h2>
      <p className="contact-subtext">
        Feel the divine connection ✨ Reach out for puja, hawan or blessings!
      </p>

      <form className="contact-form glass-card">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="tel" placeholder="Mobile Number" required />
        <textarea
          placeholder="Your Message to Maa Baglamukhi..."
          required
        ></textarea>
        <button type="submit">🔱 Send Message</button>
      </form>

      <div className="contact-info">
        <p>
          <strong>📞 Pandit Ji’s Direct Contact:</strong>
        </p>
        <p>+91-9876543210</p>
        <p>📧 panditji@example.com</p>
      </div>
    </section>
  );
};

export default Contact;

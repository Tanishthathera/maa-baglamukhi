import React from "react";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Mobile Number" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <p><strong>Pandit Ji's Contact:</strong></p>
          <p>📞 +91-9876543210</p>
          <p>📧 panditji@example.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
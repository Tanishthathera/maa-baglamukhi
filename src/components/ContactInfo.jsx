import React from "react";

const ContactInfo = () => {
  return (
    <section className="contact-info-section">
      <div className="container">
        <h2 className="section-title">Contact Information</h2>
        <p className="section-subtitle">
          Reach out to us for any queries or puja bookings.
        </p>

        <div className="contact-details">
          <div className="contact-item">
            <h3>📍 Address</h3>
            <p>Maa Baglamukhi Mandir, Nalkheda, Agar Malwa, Madhya Pradesh, India</p>
          </div>
          <div className="contact-item">
            <h3>📞 Phone</h3>
            <p>+91 9876543210</p>
          </div>
          <div className="contact-item">
            <h3>✉️ Email</h3>
            <p>panditji@maabaglamukhi.org</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
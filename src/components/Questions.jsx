import React, { useState } from "react";

const Questions = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    question: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Callback Request:", formData);
    alert("Thank you! Pandit Ji will call you soon.");
    setFormData({ name: "", phone: "", question: "" });
  };

  return (
    <section className="questions-section">
      <div className="container">
        <h2 className="section-title">Still Have Questions?</h2>
        <p className="section-subtitle">Leave your number, we’ll call you back.</p>

        <form className="callback-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="question"
            placeholder="Your Question (optional)"
            value={formData.question}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Request Callback</button>
        </form>
      </div>
    </section>
  );
};

export default Questions;
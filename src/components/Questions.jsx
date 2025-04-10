import React, { useState } from "react";
import { motion } from "framer-motion";

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
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Still Have Questions?
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Leave your number, we’ll call you back.
        </motion.p>

        <motion.form
          className="callback-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
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
        </motion.form>
      </div>
    </section>
  );
};

export default Questions;

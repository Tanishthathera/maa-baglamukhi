import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Select Your Puja",
    desc: "Choose from a variety of Vedic pujas and rituals as per your need.",
  },
  {
    number: "2",
    title: "Book Instantly",
    desc: "Fill in your details and confirm your booking in just a few clicks.",
  },
  {
    number: "3",
    title: "Enjoy Divine Experience",
    desc: "Our Pandit Ji performs the puja with pure Vedic rituals and devotion.",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Experience divinity in just 3 simple steps
        </motion.p>

        <div className="steps">
          {steps.map((step, index) => (
            <motion.div
              className="step"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }}
            >
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

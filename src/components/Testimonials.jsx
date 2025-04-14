import React from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Rohit Sharma",
    location: "Indore, MP",
    message:
      "Maa Baglamukhi ki kripa se meri court case me vijay hui. Pandit ji ne jo puja ki, usse sach me chamatkar hua!",
  },
  {
    name: "Nidhi Verma",
    location: "Delhi",
    message:
      "Pandit ji ne online puja karwayi, pura vishwas bana raha. Maa ka ashirwad mila aur meri job lag gayi.",
  },
  {
    name: "Rajeev Singh",
    location: "Lucknow",
    message:
      "Family ke grah kalesh ke liye puja karwayi. Mahine bhar me hi shaanti ka anubhav hua. Dhanyawad Pandit ji!",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Happy Devotees
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Real experiences. Real blessings.
      </motion.p>

      <div className="testimonial-cards">
        {reviews.map((review, index) => (
          <motion.div
            className="testimonial-card"
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
          >
            <p className="message">“{review.message}”</p>
            <p className="devotee">
              — {review.name}, {review.location}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

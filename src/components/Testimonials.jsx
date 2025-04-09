import React from "react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Rohit Sharma",
      location: "Indore, MP",
      message: "Maa Baglamukhi ki kripa se meri court case me vijay hui. Pandit ji ne jo puja ki, usse sach me chamatkar hua!",
    },
    {
      name: "Nidhi Verma",
      location: "Delhi",
      message: "Pandit ji ne online puja karwayi, pura vishwas bana raha. Maa ka ashirwad mila aur meri job lag gayi.",
    },
    {
      name: "Rajeev Singh",
      location: "Lucknow",
      message: "Family ke grah kalesh ke liye puja karwayi. Mahine bhar me hi shaanti ka anubhav hua. Dhanyawad Pandit ji!",
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Our Happy Devotees</h2>
        <p className="section-subtitle">Real experiences. Real blessings.</p>

        <div className="testimonial-cards">
          {reviews.map((review, index) => (
            <div key={index} className="testimonial-card">
              <p className="message">“{review.message}”</p>
              <p className="devotee">— {review.name}, {review.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
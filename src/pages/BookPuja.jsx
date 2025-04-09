import React from "react";

const BookPuja = () => {
  return (
    <section className="book-puja-section">
      <div className="container">
        <h2 className="section-title">Book a Puja</h2>
        <form className="puja-form">
          <input type="text" placeholder="Full Name" required />
          <input type="tel" placeholder="Mobile Number" required />
          <input type="email" placeholder="Email Address" required />
          <select required>
            <option value="">Select Puja Type</option>
            <option value="Baglamukhi Anushthan">Baglamukhi Anushthan</option>
            <option value="Sarva Karya Siddhi">Sarva Karya Siddhi</option>
            <option value="Shatru Vinash">Shatru Vinash</option>
            <option value="Court Case Victory">Court Case Victory</option>
          </select>
          <input type="date" required />
          <textarea placeholder="Additional Info or Questions..."></textarea>
          <button type="submit">Book Now</button>
        </form>
      </div>
    </section>
  );
};

export default BookPuja;
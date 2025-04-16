import React, { useState } from "react";

const tabs = ["All", "Photos", "Videos"];

const mediaContent = {
  All: [
    { type: "photo", src: "/assets/gallery/hawanp1.jpg" },
    { type: "video", src: "/assets/gallery/hawanv2.mp4" },
  ],
  Photos: [
    { type: "photo", src: "/assets/gallery/hawanp1.jpg" },
    { type: "photo", src: "/assets/gallery/hawanp3.jpg" },
  ],
  Videos: [{ type: "video", src: "/assets/gallery/hawanv2.mp4" }],
};

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <section className="gallery-page">
      <h2 className="section-title">📸 Gallery of Divine Moments</h2>

      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="media-grid">
        {mediaContent[activeTab].map((item, index) =>
          item.type === "photo" ? (
            <img key={index} src={item.src} alt="Gallery" />
          ) : (
            <video key={index} controls>
              <source src={item.src} type="video/mp4" />
            </video>
          )
        )}
      </div>
    </section>
  );
};

export default Gallery;

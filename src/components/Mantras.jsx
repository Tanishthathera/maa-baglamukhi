import React from 'react';
import '../index.css';

const Mantras = () => {
  return (
    <section className="mantras-section">
      <div className="container">
        <h2>Sacred Mantras</h2>
        
        <div className="mantra-block">
          <h3>🔱 Beej Mantra</h3>
          <p className="mantra-text">
            || ह्लीं बगलामुखि सर्वदुष्टानां वाचं मुखं पदं स्तम्भय<br />
            जिव्हां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा ||
          </p>
        </div>

        <div className="mantra-block">
          <h3>📿 Maha Mantra</h3>
          <p className="mantra-text">
            || ॐ बगलामुखि सर्वदुष्टानां वाचं मुखं पदं स्तम्भय<br />
            जिव्हां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा ||
          </p>
        </div>

        <div className="mantra-block">
          <h3>🙏 Benefits</h3>
          <ul>
            <li>Victory over enemies</li>
            <li>Protection from evil forces</li>
            <li>Success in court cases</li>
            <li>Mental peace and divine blessings</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Mantras;

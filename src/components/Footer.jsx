import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }),
  };

  return (
    <footer className="site-footer">
      <div className="divine-aura-bg"></div>{" "}
      {/* Optional floating aura effect */}
      
        <div className="footer-links">
          {["/", "/book-puja", "/contact", "/astrology"].map((path, i) => (
            <motion.div
              key={path}
              custom={i}
              variants={linkVariants}
              initial="hidden"
              whileInView="visible"
            >
              <Link to={path}>
                {path === "/"
                  ? "Home"
                  : path
                      .replace("/", "")
                      .replace("-", " ")
                      .replace(/\b\w/g, (l) => l.toUpperCase())}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="footer-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          © {new Date().getFullYear()} Maa Baglamukhi Mandir, Nalkheda. All
          rights reserved.
        </motion.p>
      
    </footer>
  );
};

export default Footer;

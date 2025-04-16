import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BookPuja from "./pages/BookPuja";
import Contact from "./pages/Contact";
import Astrology from "./pages/Astrology";
import Gallery from "./pages/Gallery";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-puja" element={<BookPuja />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/astrology" element={<Astrology />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

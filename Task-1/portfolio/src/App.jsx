import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<ContactInfo />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;

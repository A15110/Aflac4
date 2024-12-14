import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './pages/About';
import Plans from './pages/Plans';
import FAQ from './pages/FAQ';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import SEOWrapper from './components/SEOWrapper';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={
            <SEOWrapper
              title="Mark Mikko - Aflac Insurance Agent | Redding, CA"
              description="Get personalized Aflac supplemental insurance solutions with Mark Mikko, your dedicated agent in Redding, California."
            >
              <Hero />
            </SEOWrapper>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/*" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

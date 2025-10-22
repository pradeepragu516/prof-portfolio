// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Initialize theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', nextTheme);
      return nextTheme;
    });
  };

  // Apply the selected theme attribute on <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main id="main-content" tabIndex={-1}>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;

// src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import './Navbar.css';

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Skills', to: 'skills' },
  { name: 'Achievements', to: 'achievements' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active navigation link based on scroll position
      const offsets = navItems
        .map((item) => {
          const el = document.getElementById(item.to);
          return el ? { id: item.to, top: el.offsetTop } : null;
        })
        .filter(Boolean);

      const scrollPos = window.scrollY + 100;
      let curr = 'home';
      for (let i = 0; i < offsets.length; i++) {
        if (scrollPos >= offsets[i].top) curr = offsets[i].id;
      }
      setActive(curr);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const themeLabel = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <motion.nav
      className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="navbar-container">
        <button
          className="brand"
          tabIndex={0}
          aria-label="Scroll to top"
          onClick={() => scroll.scrollToTop()}
        >
          Pradeep M<span className="brand-dot"></span>
        </button>

        {/* Desktop navigation */}
        <ul className="nav-links desktop" role="menubar">
          {navItems.map(({ name, to }) => (
            <li key={to} role="none">
              <ScrollLink
                to={to}
                smooth={true}
                duration={600}
                offset={-70}
                spy={true}
                onSetActive={() => setActive(to)}
                className={active === to ? 'active' : ''}
                role="menuitem"
                aria-current={active === to ? 'page' : undefined}
                tabIndex={0}
              >
                {name}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger toggle */}
        <button
          className="hamburger"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          tabIndex={0}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Theme toggle */}
        <motion.button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={themeLabel}
          whileTap={{ rotate: 30, scale: 1.15 }}
        >
          {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
        </motion.button>
      </div>

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className="nav-links mobile"
            id="mobile-menu"
            role="menubar"
            initial={{ x: 220, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 220, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 36 }}
          >
            {navItems.map(({ name, to }) => (
              <li key={to} role="none">
                <ScrollLink
                  to={to}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  spy={true}
                  onSetActive={() => {
                    setActive(to);
                    setMenuOpen(false);
                  }}
                  className={active === to ? 'active' : ''}
                  tabIndex={0}
                  role="menuitem"
                  aria-current={active === to ? 'page' : undefined}
                >
                  {name}
                </ScrollLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

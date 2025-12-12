import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/pradeepragu516',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/pradeep-mahalingam-603891291',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.728-2.004 1.431-.103.25-.129.599-.129.948v5.426h-3.554s.047-8.81 0-9.728h3.554v1.375c.43-.664 1.199-1.61 2.92-1.61 2.134 0 3.733 1.39 3.733 4.384v5.579zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.953.77-1.715 1.958-1.715 1.187 0 1.914.762 1.939 1.715 0 .953-.752 1.715-1.982 1.715zm1.946 11.597H3.392V9.724h3.891v10.728zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
        </svg>
      )
    },
    {
      label: 'Email',
      href: 'mailto:pradeep.m2023it@sece.ac.in',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <path d="m22 6-10 7L2 6"></path>
        </svg>
      )
    }
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        {/* Left Section - Brand */}
        <div className="footer-brand-section">
          <div className="footer-brand">
            <h3 className="brand-name">Pradeep M</h3>
            <p className="brand-tagline">Full Stack Developer passionate about creating innovative digital solutions.</p>
          </div>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="footer-links-section">
          <div className="footer-column">
            <h4 className="footer-section-title">Quick Links</h4>
            <nav className="footer-links">
              {quickLinks.slice(0, 3).map(link => (
                <a key={link.label} href={link.href} className="footer-link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="footer-column">
            <nav className="footer-links">
              {quickLinks.slice(3).map(link => (
                <a key={link.label} href={link.href} className="footer-link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Right Section - Social & CTA */}
        <div className="footer-social-section">
          <h4 className="footer-section-title">Connect</h4>
          <div className="footer-social-links">
            {socialLinks.map(social => (
              <a
                key={social.label}
                href={social.href}
                className="social-icon-link"
                aria-label={social.label}
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Back to top">
            <span className="arrow-icon">↑</span>
            Back to Top
          </button>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <p className="copyright-text">© {currentYear} Pradeep M. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
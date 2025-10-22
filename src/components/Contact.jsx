import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setStatus(null);

    setTimeout(() => {
      const mailtoLink = `mailto:joyandrew.s2023it@sece.ac.in?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.fullName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      setStatus('success');
      setFormData({ fullName: '', email: '', subject: '', message: '' });
      setLoading(false);
      
      setTimeout(() => setStatus(null), 4000);
    }, 600);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-content-wrapper">
          {/* Header */}
          <div className="contact-header">
            <h2 className="contact-main-title">
              Get In <span className="title-accent">Touch</span>
            </h2>
            <p className="contact-subtitle">
              Have a question or proposal? Let's discuss opportunities and bring ideas to life together.
            </p>
          </div>

          <div className="contact-grid">
            {/* Left Side - Contact Details */}
            <div className="contact-details-section">
              {/* Quick Contact Cards */}
              <div className="quick-contact-cards">
                <div className="quick-contact-item">
                  <div className="quick-contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <path d="m22 6-10 7L2 6"></path>
                    </svg>
                  </div>
                  <div className="quick-contact-text">
                    <h4>Email</h4>
                    <a href="mailto:joyandrew.s2023it@sece.ac.in">
                      pradeep.m2023it@sece.ac.in
                    </a>
                  </div>
                </div>

                <div className="quick-contact-item">
                  <div className="quick-contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="quick-contact-text">
                    <h4>Phone</h4>
                    <a href="tel:+917806895713">
                      +91-8807802256
                    </a>
                  </div>
                </div>

                <div className="quick-contact-item">
                  <div className="quick-contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="quick-contact-text">
                    <h4>Location</h4>
                    <p>Tamil Nadu, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="contact-social-box">
                <h4 className="social-title">Connect With Me</h4>
                <div className="social-links-grid">
                  <a href="#" className="social-link-item" title="GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-link-item" title="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.728-2.004 1.431-.103.25-.129.599-.129.948v5.426h-3.554s.047-8.81 0-9.728h3.554v1.375c.43-.664 1.199-1.61 2.920-1.61 2.134 0 3.733 1.39 3.733 4.384v5.579zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.953.77-1.715 1.958-1.715 1.187 0 1.914.762 1.939 1.715 0 .953-.752 1.715-1.982 1.715zm1.946 11.597H3.392V9.724h3.891v10.728zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-link-item" title="Twitter">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 002.856-9.795c-1.737.806-3.56 1.348-5.46 1.603 1.946-1.167 3.435-3.021 4.14-5.251-1.823 1.076-3.84 1.857-5.986 2.279-1.722-1.836-4.173-2.982-6.877-2.982-5.207 0-9.413 4.206-9.413 9.413 0 .738.088 1.46.26 2.16C5.555 10.87 2.959 9.456 1.146 7.232c-.64 1.08-.996 2.337-.996 3.674 0 3.27 1.664 6.144 4.19 7.835-1.547-.05-3.005-.474-4.276-1.18v.12c0 4.568 3.247 8.387 7.557 9.248-.791.213-1.625.329-2.487.329-.608 0-1.2-.058-1.778-.171 1.200 3.722 4.66 6.435 8.758 6.514-3.227 2.527-7.313 4.033-11.746 4.033-.762 0-1.511-.045-2.25-.134 4.182 2.68 9.142 4.244 14.494 4.244 17.393 0 26.89-14.41 26.89-26.89 0-.41-.009-.82-.027-1.228 1.847-1.332 3.45-3.002 4.718-4.905z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-link-item" title="Portfolio">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 6v6l4 2"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Info Box */}
              <div className="info-box">
                <div className="info-box-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="info-box-content">
                  <h5>Response Time</h5>
                  <p>I typically respond within 24-48 hours</p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="contact-form-section">
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`form-input ${errors.fullName ? 'input-error' : ''}`}
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    />
                    {errors.fullName && (
                      <span id="fullName-error" className="error-message">
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`form-input ${errors.email ? 'input-error' : ''}`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <span id="email-error" className="error-message">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className={`form-input ${errors.subject ? 'input-error' : ''}`}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && (
                    <span id="subject-error" className="error-message">
                      {errors.subject}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me more about your project or inquiry..."
                    rows="5"
                    className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  ></textarea>
                  {errors.message && (
                    <span id="message-error" className="error-message">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={loading}
                  aria-busy={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner"></span>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span className="btn-arrow">→</span>
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="status-message success-status" role="alert">
                    <span className="status-icon">✓</span>
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
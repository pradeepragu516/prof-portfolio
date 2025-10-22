// src/components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const professionalExperience = [
  {
    title: 'MERN Stack Internship',
    company: 'Better Tomorrow',
    duration: 'Jan 2024',
    location: 'Remote',
    details: 'Built Task Manager, a dynamic MERN Stack platform that streamlines task tracking and management. Integrated authentication, real-time updates, and a responsive UI to boost collaboration and accessibility across all devices.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
    certificate: true,
  },
];

const education = [
  {
    title: 'B.Tech (Information Technology)',
    institution: 'Sri Eshwar College of Engineering',
    duration: '2023-2027',
    score: '7.82 CGPA',
    details: 'Currently pursuing Bachelor of Technology in Information Technology with focus on software development, data structures, algorithms, and modern web technologies.',
  },
  {
    title: 'HSC (Higher Secondary Certificate)',
    institution: "Sri Lathangi Vidhya Mandir Higher Secondary School",
    duration: '2022-2023',
    score: '86%',
  
  },
   {
    title: 'SSLC (Secondary School Leaving Certificate)',
    institution: "Sri Lathangi Vidhya Mandir Higher Secondary School",
    duration: '2020-2021',
    score: 'PASS',
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience & <span className="highlight">Education</span>
      </motion.h2>
      
      <p className="section-subtitle">My professional journey and academic background</p>

      <div className="experience-grid">
        {/* Professional Experience Column */}
        <div className="experience-column">
          <h3 className="column-title">Professional Experience</h3>
          {professionalExperience.map((exp, idx) => (
            <motion.article
              key={idx}
              className="experience-card"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="card-header">
                <div>
                  <h4 className="card-title">{exp.title}</h4>
                  <p className="card-company">{exp.company}</p>
                </div>
                {exp.certificate && (
                  <a className="certificate-btn" href="https://drive.google.com/file/d/1CDvuKmT1TFzogPQV_q9COdC2AF9r8mAX/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                     View Certificate
                  </a>
                )}
              </div>
              <div className="card-meta">
                <span className="meta-item">📅 {exp.duration}</span>
                <span className="meta-item"> {exp.location}</span>
              </div>
              <p className="card-details">{exp.details}</p>
              <div className="card-tags">
                {exp.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Education Column */}
        <div className="experience-column">
          <h3 className="column-title">Education</h3>
          {education.map((edu, idx) => (
            <motion.article
              key={idx}
              className="experience-card"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="card-header">
                <div>
                  <h4 className="card-title">{edu.title}</h4>
                  <p className="card-institution">{edu.institution}</p>
                </div>
              </div>
              <div className="card-meta">
                <span className="meta-item">📅 {edu.duration}</span>
                <span className="meta-item"> {edu.score}</span>
              </div>
              <p className="card-details">{edu.details}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
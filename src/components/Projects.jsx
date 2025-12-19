// src/components/Projects.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';
import civicfixImg from '../assets/civicfix.png';
import household from '../assets/household.jpg';
import alzheimer from '../assets/alzheimer.jpeg';
import task from '../assets/task.jpg';
import tokyo from '../assets/tokyo.jpg';

const projects = [
  {
    id: 1,
    title: 'CivicFix',
    description:
      'CivicFix is a community-driven platform that enables citizens to report and track local civic issues, streamlining communication between the public and authorities for faster, more transparent resolutions.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Leaflet'],
    image: civicfixImg,
    demo: 'https://melodic-entremet-d1c429.netlify.app',
    github: 'https://github.com/pradeepragu516/civicfix.git',
    date: 'June 2024',
    featured: true,
  },
  {
    id: 2,
    title: 'PrimeFix',
    description:
     'Developed PrimeFix, an on-demand household repair and maintenance platform connecting users with verified technicians, featuring real-time service tracking, secure bookings, and an intuitive dashboard for seamless user–technician interaction.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
    image: household,
    demo: 'https://unrivaled-fairy-06e33f.netlify.app',
    github: 'https://github.com/pradeepragu516/OnDemand.git',
    date: 'nov 2024',
    featured: true,
  },
  {
    id: 3,
    title: 'AI-powered Alzheimer Detection System',
    description:
      'Developed an AI-powered Alzheimer’s Detection System that analyzes MRI brain scans using deep learning models to identify early signs of Alzheimer’s disease, providing accurate predictions, visual insights, and assisting doctors in timely diagnosis.',
    tech: ['HTML', 'CSS', 'Random Forest Algorithm', 'CNN Algorithm', 'Flask', 'Python'],
    image: alzheimer,
    demo: 'https://alzheimer-1.onrender.com/',
    github: 'https://github.com/pradeepragu516/Alzheimer.git',
    date: 'sep 2025',
    featured: true,
  },
  {
    id: 4,
    title: 'Task Manager Pro',
    description:
      'Designed and developed a Task Manager Website that streamlines project and team management with features like task creation, status tracking, real-time collaboration, messaging, file sharing, and role-based dashboards for admins, users, and technicians.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
    image: task,
    demo: 'https://celebrated-truffle-ef8f25.netlify.app',
    github: 'https://github.com/pradeepragu516/taskmanager.git',
    date: 'mar 2024',
    featured: true,
  },
   {
    id: 5,
    title: 'Travel Mate',
    description:
      'Built a Travel Mate travel planning platform enabling users to explore destinations, create and manage itineraries, track travel expenses, receive recommendations, and organize trips through an intuitive and responsive interface.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: tokyo,
    demo: 'http://127.0.0.1:5500/index.html',
    github: 'https://github.com/pradeepragu516/travel.git',
    date: 'august 2024',
    featured: true,
  },
];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Projects = () => {
  const [modalProject, setModalProject] = useState(null);

  // Close modal on ESC key
  const escFunction = useCallback(
    (e) => {
      if (e.key === 'Escape' && modalProject) {
        setModalProject(null);
      }
    },
    [modalProject]
  );

  useEffect(() => {
    document.addEventListener('keydown', escFunction);
    return () => document.removeEventListener('keydown', escFunction);
  }, [escFunction]);

  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-title">
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="projects-title" id="projects-title">
          Featured <span className="highlight">Projects</span>
        </h2>
        <p className="projects-subtitle">A showcase of my recent work and technical expertise</p>
      </motion.div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <motion.article
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            onClick={() => setModalProject(project)}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setModalProject(project);
              }
            }}
            aria-label={`View details for ${project.title}`}
          >
            <div className="project-image-wrapper">
              {project.featured && <span className="featured-badge">Featured</span>}
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
                loading="lazy"
              />
            </div>
            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-date">📅 {project.date}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-actions">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn primary"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`View live demo of ${project.title}`}
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn secondary"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`View source code of ${project.title}`}
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {modalProject && (
          <motion.div
            className="project-modal-overlay"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            onClick={() => setModalProject(null)}
            aria-modal="true"
            role="dialog"
            aria-labelledby="modal-title"
          >
            <motion.div
              className="project-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setModalProject(null)}
                aria-label="Close modal"
              >
                ×
              </button>
              <img
                src={modalProject.image}
                alt={modalProject.title}
                className="modal-image"
              />
              <div className="modal-content">
                <span className="modal-date">📅 {modalProject.date}</span>
                <h3 id="modal-title" className="modal-title">{modalProject.title}</h3>
                <p className="modal-description">{modalProject.description}</p>
                <h4 className="modal-tech-title">Technology Stack</h4>
                <div className="modal-tech-stack">
                  {modalProject.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="modal-actions">
                  <a
                    href={modalProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn primary"
                  >
                    Live Demo
                  </a>
                  <a
                    href={modalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn secondary"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
// src/components/Achievements.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Achievements.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrophy, FaCertificate, FaMedal, FaAward, FaStar, FaCode, FaExternalLinkAlt, FaCheckCircle, FaTimes } from 'react-icons/fa';
import cppDSA from '../assets/cpp-dsa.png';
import fullstack from '../assets/fullstack.jpg';
import javaCert from '../assets/java.png';
import sqlCert from '../assets/sql.png';
import simplelearn from '../assets/simple.png';
import linuxCert from '../assets/linux.jpg';
import zeroday from '../assets/dhruva.jpg';
import leetcodeIcon from '../assets/leetcode.png';
import skillrackIcon from '../assets/skillrack.png';
import codechefIcon from '../assets/codechef.png';
import hackerrankIcon from '../assets/hackerrank.png';


const achievementsData = {
  awards: [
    {
      id: 1,
      title: 'DHRUVA 2k25 - Project Expo',
      organization: 'Karpagam college of Engineering',
      achievement: 'Winner - 1st Place',
      description: 'Secured 1st place among 20+ teams in the DHRUVA 2k25 project expo and showcased the civicfix project and its impact on community issue resolution.',
      date: 'March 2025',
      icon: <FaTrophy />,
      color: '#ffd700',
      verified: true,
      certificate: zeroday,
    },
    {
      id: 2,
      title: 'Buildathon-Expo',
      organization: 'Sri Eshwar College of Engineering',
      achievement: '3rd place',
      description: 'pursued 3rd place among 20+ teams in the department at the C Buildathon held at Sri Eshwar College of Engineering.',
      date: 'Oct 2023',
      icon: <FaMedal />,
      color: '#c0c0c0',
      verified: true,
      certificate: '/certificates/buildathon.jpg',
    },
  ],
  coding: [
    {
      id: 3,
      platform: 'LeetCode',
      achievement: 'Solved 150+ problems',
      rating: 'Contest Rating: 1,524',
      icon: leetcodeIcon,
      link: 'https://leetcode.com/u/pradeepm516',
    },
    {
      id: 4,
      platform: 'SkillRack',
      achievement: 'Solved 150+ problems',
      rating: 'Rank: 23915',
      icon: skillrackIcon,
      link: 'https://www.skillrack.com/faces/resume.xhtml?id=484644&key=92b178a7173ff383073b17c9fae8a14d15dc94de',
    },
    {
      id: 5,
      platform: 'CodeChef',
      achievement: 'Solved 85+ problems',
      rating: '2 Star (1400+)',
      icon: codechefIcon,
      link: 'https://codechef.com/users/pradeepm516',
    },
    {
      id: 6,
      platform: 'HackerRank',
      achievement: 'Java 5★ (Gold)',
      rating: 'C++ 3★, Python 2★, c 3★',
      icon: hackerrankIcon,
      link: 'https://hackerrank.com/pradeep_m2023it',
    },
  ],
  certifications: [
    {
      id: 7,
      title: 'C++/C Data Structures & Algorithms',
      provider: 'Udemy',
      date: 'Completed',
      icon: FaCertificate,
      certificate: cppDSA,
    },
    {
      id: 8,
      title: 'The Ultimate Full Stack Web development',
      provider: 'Udemy',
      date: 'Completed',
      icon: FaCertificate,
      certificate: fullstack,
    },
    {
      id: 9,
      title: 'Java Programming',
      provider: 'Udemy',
      date: 'Completed',
      icon: FaCertificate,
      certificate: javaCert,
    },
    {
      id: 10,
      title: 'SQL Basics & Intermediate',
      provider: 'HackerRank',
      date: 'Completed',
      icon: FaCertificate,
      certificate: sqlCert,
    },
     {
      id: 11,
      title: 'Machine Learning Using Python',
      provider: 'SimpleLearn',
      date: 'Completed',
      icon: FaCertificate,
      certificate: simplelearn,
    },
     {
      id: 12,
      title: 'Introduction to Node.js',
      provider: 'The Linux Foundation',
      date: 'Completed',
      icon: FaCertificate,
      certificate: linuxCert,
    },
  ],
};

const Achievements = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeTab, setActiveTab] = useState('awards');
  const modalRef = useRef(null);

  useEffect(() => {
    if (!selectedCert) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedCert]);

  return (
    <section className="achievements-section" id="achievements" aria-labelledby="achievements-title">
      <motion.div
        className="achievements-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="achievements-title" id="achievements-title">
          Achievements & <span className="highlight">Recognition</span>
        </h2>
        <p className="achievements-subtitle">
          Awards, certifications, and milestones in my journey
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <div className="achievements-tabs">
        <button
          className={`tab-btn ${activeTab === 'awards' ? 'active' : ''}`}
          onClick={() => setActiveTab('awards')}
        >
          <FaTrophy /> Awards & Competitions
        </button>
        <button
          className={`tab-btn ${activeTab === 'coding' ? 'active' : ''}`}
          onClick={() => setActiveTab('coding')}
        >
          <FaCode /> Problem Solving
        </button>
        <button
          className={`tab-btn ${activeTab === 'certifications' ? 'active' : ''}`}
          onClick={() => setActiveTab('certifications')}
        >
          <FaCertificate /> Certifications
        </button>
      </div>

      {/* Awards & Competitions */}
      <AnimatePresence mode="wait">
        {activeTab === 'awards' && (
          <motion.div
            className="awards-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="awards-timeline">
              {achievementsData.awards.map((award, idx) => (
                <motion.div
                  key={award.id}
                  className="timeline-item"
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => award.certificate && setSelectedCert(award)}
                  style={{ cursor: award.certificate ? 'pointer' : 'default' }}
                >
                  <div className="timeline-marker" style={{ background: award.color }}>
                    {award.icon}
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3>{award.title}</h3>
                      {award.verified && (
                        <span className="verified-badge" title="Verified Achievement">
                          <FaCheckCircle /> Verified
                        </span>
                      )}
                    </div>
                    <p className="organization">{award.organization}</p>
                    <div className="achievement-badge">{award.achievement}</div>
                    <p className="description">{award.description}</p>
                    <span className="date">{award.date}</span>
                    {award.certificate && (
                      <button className="view-certificate-btn">
                        View Certificate <FaExternalLinkAlt size={12} />
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Problem Solving */}
        {activeTab === 'coding' && (
          <motion.div
            className="coding-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="coding-grid">
              {achievementsData.coding.map((platform, idx) => (
                <motion.a
                  key={platform.id}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="coding-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="platform-icon">
                    {platform.icon ? (
                      <img src={platform.icon} alt={platform.platform} />
                    ) : (
                      <FaCode size={40} />
                    )}
                  </div>
                  <h3>{platform.platform}</h3>
                  <p className="achievement-text">{platform.achievement}</p>
                  <p className="rating-text">{platform.rating}</p>
                  <div className="view-profile">
                    View Profile <FaExternalLinkAlt size={12} />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}

        {/* Certifications */}
        {activeTab === 'certifications' && (
          <motion.div
            className="certifications-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="certifications-grid">
              {achievementsData.certifications.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  className="certification-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setSelectedCert(cert)}
                >
                  <div className="cert-icon">
                    {typeof cert.icon === 'function' ? (
                      <cert.icon size={32} />
                    ) : (
                      cert.icon
                    )}
                  </div>
                  <h3>{cert.title}</h3>
                  <p className="provider">{cert.provider}</p>
                  <span className="cert-date">{cert.date}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="certificate-modal"
            ref={modalRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="certificate-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setSelectedCert(null)}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
              <img
                src={selectedCert.certificate}
                alt={`Certificate for ${selectedCert.title}`}
                className="certificate-image"
              />
              <div className="modal-info">
                <h3>{selectedCert.title}</h3>
                {selectedCert.organization && <p>{selectedCert.organization}</p>}
                {selectedCert.provider && <p>{selectedCert.provider}</p>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
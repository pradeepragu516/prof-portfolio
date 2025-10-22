// src/components/Skills.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Skills.css';

const skillsData = [
  {
    id: 1,
    category: 'Frontend Development',
    color: '#764aff',
    skills: [
      { name: 'React.js', level: 90, experience: '2+ years' },
      { name: 'JavaScript', level: 88, experience: '3+ years' },
      { name: 'HTML/CSS', level: 92, experience: '3+ years' },
      { name: 'Tailwind CSS', level: 85, experience: '2 years' },
    ],
  },
  {
    id: 2,
    category: 'Backend Development',
    color: '#2480ea',
    skills: [
      { name: 'Node.js', level: 85, experience: '2 years' },
      { name: 'Express.js', level: 82, experience: '2 years' },
      { name: 'MongoDB', level: 80, experience: '2 years' },
      { name: 'REST API', level: 88, experience: '2+ years' },
    ],
  },
  {
    id: 3,
    category: 'Programming Languages',
    color: '#00d9ff',
    skills: [
      { name: 'JavaScript', level: 88, experience: '3+ years' },
      { name: 'Python', level: 82, experience: '2 years' },
      { name: 'Java', level: 75, experience: '2 years' },
      { name: 'C++', level: 78, experience: '2 years' },
    ],
  },
  {
    id: 4,
    category: 'Tools & Technologies',
    color: '#ff6b6b',
    skills: [
      { name: 'Git/GitHub', level: 90, experience: '3+ years' },
      { name: 'VS Code', level: 95, experience: '3+ years' },
      { name: 'Firebase', level: 75, experience: '1 year' },
      { name: 'Postman', level: 85, experience: '2 years' },
      { name: 'Figma', level: 70, experience: '1 year' },
    ],
  },
   {
    id: 5,
    category: 'Mobile App Development',
    color: '#b33bff',
    skills: [
      { name: 'React Native', level: 70, experience: '1 year' },
      { name: 'Flutter', level: 75, experience: '1 year' },
    ],
  },
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(skillsData[0]);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-title">
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="skills-title" id="skills-title">
          Skills & <span className="highlight">Expertise</span>
        </h2>
        <p className="skills-subtitle">
          Technologies and tools I work with to bring ideas to life
        </p>
      </motion.div>

      <div className="skills-content">
        {/* Category Tabs */}
        <div className="category-tabs">
          {skillsData.map((category, idx) => (
            <motion.button
              key={category.id}
              className={`category-tab ${selectedCategory.id === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                '--tab-color': category.color,
              }}
            >
              <span className="tab-number">{String(idx + 1).padStart(2, '0')}</span>
              <span className="tab-text">{category.category}</span>
            </motion.button>
          ))}
        </div>

        {/* Skills Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory.id}
            className="skills-display"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="skills-list">
              {selectedCategory.skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  className="skill-row"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="skill-info">
                    <div className="skill-header">
                      <h3 className="skill-name">{skill.name}</h3>
                      <span className="skill-experience">{skill.experience}</span>
                    </div>
                    <div className="skill-bar-container">
                      <motion.div
                        className="skill-bar"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: idx * 0.1 + 0.3, ease: 'easeOut' }}
                        style={{
                          background: `linear-gradient(90deg, ${selectedCategory.color}, ${selectedCategory.color}dd)`,
                        }}
                      >
                        <motion.span
                          className="skill-percentage"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: idx * 0.1 + 0.8 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </motion.div>
                    </div>
                  </div>
                  <motion.div
                    className="skill-indicator"
                    animate={{
                      scale: hoveredSkill === skill.name ? 1.2 : 1,
                      rotate: hoveredSkill === skill.name ? 180 : 0,
                    }}
                    style={{
                      background: selectedCategory.color,
                    }}
                  >
                    ✓
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Category Summary */}
            <motion.div
              className="category-summary"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="summary-content">
                <h4>Category Overview</h4>
                <div className="summary-stats">
                  <div className="stat-item">
                    <span className="stat-value">{selectedCategory.skills.length}</span>
                    <span className="stat-label">Technologies</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">
                      {Math.round(
                        selectedCategory.skills.reduce((acc, s) => acc + s.level, 0) /
                          selectedCategory.skills.length
                      )}%
                    </span>
                    <span className="stat-label">Avg Proficiency</span>
                  </div>
                </div>
                <div
                  className="category-accent"
                  style={{ background: selectedCategory.color }}
                />
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
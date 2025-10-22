import React from 'react';
import './About.css';
import { MapPin, GraduationCap, Mail, User } from 'lucide-react';

const stats = [
  { label: "Years of Experience", value: 3, suffix: "+" },
  { label: "Projects Completed", value: 6, suffix: "+" },
  { label: "Technologies Mastered", value: 10, suffix: "+" },
  { label: "Problem Solving Rating", value: 1545, suffix: "" }
];

const profileCards = [
  { icon: <User size={19} />, label: "Full Name", value: "Pradeep Mahalingam" },
  { icon: <GraduationCap size={19} />, label: "Education", value: "B.Tech IT, Sri Eshwar College of Engineering (2027)" },
  { icon: <MapPin size={19} />, label: "Location", value: "Tamil Nadu, India" },
  { icon: <Mail size={19} />, label: "Email", value: "pradeep.m2023it@sece.ac.in" },
];

const About = () => (
  <section className="about-section" id="about">
    <div className="about-grid container">
      {/* LEFT SIDE: Main info */}
      <div className="about-left">
        <h2 className="about-heading"><span>About</span> <span className="accent">Me</span></h2>
        <p className="about-desc">
        <b>Hello! I'm Pradeep Mahalingam</b><br />
        A dedicated Full Stack Developer, Web App Developer, and AI Enthusiast pursuing B.Tech in Information Technology at Sri Eshwar College of Engineering. I’m passionate about developing scalable and innovative web applications using modern frameworks and technologies.<br /><br />
        With a strong problem-solving mindset and a basic background in Data Analysis, I enjoy transforming ideas into meaningful digital products. I believe in continuous learning, collaboration, and building technology that improves everyday life while staying at the forefront of emerging trends in AI and web development.

        </p>
        <div className="profile-cards-stack">
          {profileCards.map((item, idx) => (
            <div className="profile-card" key={idx}>
              <div className="profile-icon">{item.icon}</div>
              <div>
                <div className="profile-label">{item.label}</div>
                <div className="profile-value">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* RIGHT SIDE: Stats + Resume */}
      <div className="about-right">
        <div className="stats-row">
          {stats.map((stat, idx) => (
            <div className="stat-box" key={idx}>
              <div className="stat-value">{stat.value}{stat.suffix}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="resume-card">
          <div className="resume-title">Want to know more?</div>
          <div className="resume-desc">
            Download my resume to get detailed information about my skills and experience.
          </div>
          <a className="resume-btn" href="https://drive.google.com/file/d/1WlrszH1_ZcRXfRFS_MG8Mrryu_LSrtcL/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;

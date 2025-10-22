import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Linkedin, Github, Mail } from 'lucide-react';
import headshot from '../assets/headshot.jpg';

const skills = [
  { title: 'Frontend Developer' },
  {  title: 'Backend Developer' },
  {  title: 'Mobile App Developer' },
  {  title: 'Data Analyst' },
];

const socials = [
  { href: 'https://linkedin.com/in/pradeep-mahalingam-603891291', icon: <Linkedin size={22} />, label: 'LinkedIn' },
  { href: 'https://github.com/pradeepragu516', icon: <Github size={22} />, label: 'GitHub' },
  { href: 'mailto:pradeep.m2023it@sece.ac.in', icon: <Mail size={22} />, label: 'Email' },
];

const Home = () => (
  <section className="home-section" id="home" aria-labelledby="home-heading">
    <nav className="nav-filler" aria-hidden="true" />
    <div className="hero-layout">
      <div className="hero-left">
        <h1 id="home-heading">
          <span className="hello">Hello, I’m</span>
          <span className="name">Pradeep Mahalingam</span>
        </h1>
        <h2>
          <TypeAnimation
            sequence={[
              'Full Stack Developer 💻', 1600,
              'AI Enthusiast 🤖', 1600,
              'Problem Solver 🧠', 1600,
              'Mobile App Developer 💻', 1600,
            ]}
            speed={55}
            wrapper="span"
            repeat={Infinity}
            className="typed-desc"
          />
        </h2>
        <div className="desc">
          Driven by a passion for building seamless digital experiences using modern web technologies.<br />
         Skilled in MERN Stack and React Native, delivering efficient, scalable, and user-focused applications.
        </div>
        <div className="socials">
          {socials.map(s => (
            <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer" className="social-icon">
              {s.icon}
            </a>
          ))}
        </div>
        <div className="hero-cta-row">
          <a href="#contact" className="cta-btn primary">Get In Touch</a>
          <a href="#projects" className="cta-btn">View Projects</a>
        </div>
      </div>
      <div className="hero-right">
        <img src={headshot} alt="Pradeep Mahalingam" className="hero-img" draggable="false" />
      </div>
    </div>
    <div className="skills-row1" role="list">
      {skills.map((s) => (
        <div className="skill-card1" role="listitem" key={s.title}>
          <span className="skill-icon1">{s.icon}</span>
          <div>{s.title}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Home;

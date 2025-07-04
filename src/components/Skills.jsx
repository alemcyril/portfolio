import React from "react";
import python from "../assets/svgs/python-svgrepo-com.svg";
import javascript from "../assets/svgs/javascript-svgrepo-com.svg";
import html5 from "../assets/svgs/html-5-svgrepo-com.svg";
import css3 from "../assets/svgs/css-3-svgrepo-com.svg";
import cpp from "../assets/svgs/c-plus-plus-svgrepo-com.svg";
import c from "../assets/svgs/c-1.svg";
import matlab from "../assets/svgs/matlab-svgrepo-com.svg";
import mysql from "../assets/svgs/mysql-logo-svgrepo-com.svg";
import postgresql from "../assets/svgs/postgresql-svgrepo-com.svg";
import nodejs from "../assets/svgs/node-js-svgrepo-com.svg";
import reactjs from "../assets/svgs/react-svgrepo-com.svg";
import express from "../assets/svgs/express-svgrepo-com.svg";
import tailwind from "../assets/svgs/tailwind-svgrepo-com.svg";
import vite from "../assets/svgs/vite-svgrepo-com.svg";
import vscode from "../assets/svgs/visual-studio-code-svgrepo-com.svg";
import github from "../assets/svgs/github-142-svgrepo-com.svg";
import postman from "../assets/svgs/postman-icon-svgrepo-com.svg";
import docker from "../assets/svgs/docker-svgrepo-com.svg";
import intellij from "../assets/svgs/intellij-idea-svgrepo-com.svg";
import pycharm from "../assets/svgs/jb-pycharm-svgrepo-com.svg";
import linux from "../assets/svgs/linux-svgrepo-com.svg";

const skills = [
  // Languages
  { name: "Python", icon: python },
  { name: "JavaScript", icon: javascript },
  { name: "HTML5", icon: html5 },
  { name: "CSS3", icon: css3 },
  { name: "C++", icon: cpp },
  { name: "C", icon: c },
  { name: "MATLAB", icon: matlab },
  // Databases
  { name: "MySQL", icon: mysql },
  { name: "PostgreSQL", icon: postgresql },
  // Frameworks/Libraries
  { name: "Node.js", icon: nodejs },
  { name: "React.js", icon: reactjs },
  { name: "Express.js", icon: express },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Vite", icon: vite },
  // Tools/IDEs
  { name: "Visual Studio Code", icon: vscode },
  { name: "GitHub", icon: github },
  { name: "Postman", icon: postman },
  { name: "Docker", icon: docker },
  { name: "IntelliJ IDEA", icon: intellij },
  { name: "PyCharm", icon: pycharm },
  // Platforms/Services
  { name: "Linux", icon: linux },
];

const particles = Array.from({ length: 8 });

const Skills = () => (
  <section id="skills" className="main-section">
    <div className="animated-bg"></div>
    <div className="grid-overlay"></div>
    <div className="floating-particles">
      {particles.map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: ["10%", "20%", "60%", "80%", "40%", "70%", "30%", "90%"][i],
            top: ["20%", "80%", "30%", "70%", "60%", "10%", "90%", "40%"][i],
            animationDelay: `${i}s`,
          }}
        />
      ))}
    </div>
    <div className="tech-shapes">
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="shape shape-3"></div>
    </div>
    <div className="section-content">
      <style>{`
        .skill-icon {
          transition: transform 0.2s, box-shadow 0.2s, border 0.2s;
          will-change: transform, box-shadow, border;
        }
        .skill-icon:hover {
          transform: scale(1.18);
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
          z-index: 1;
          border: 2px solid #22c55e;
        }
      `}</style>
      <h2
        style={{
          fontSize: "clamp(3rem, 8vw, 6rem)",
          fontWeight: 700,
          marginBottom: "1rem",
          background:
            "linear-gradient(135deg, #ffffff 0%, #a8edea 50%, #fed6e3 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          animation: "titleGlow 3s ease-in-out infinite alternate",
          textAlign: "center",
        }}
      >
        Skills
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
          gap: "2rem",
          alignItems: "center",
          justifyItems: "center",
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        {skills.map((skill) => (
          <div key={skill.name} style={{ textAlign: "center" }}>
            <img
              className="skill-icon"
              src={skill.icon}
              alt={skill.name}
              style={{
                width: 48,
                height: 48,
                marginBottom: 8,
                cursor: "pointer",
                borderRadius: "12px",
                background: "#fff",
                padding: skill.name === "Visual Studio Code" ? 8 : 4,
                objectFit: "contain",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <div style={{ fontSize: 14 }}>{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;

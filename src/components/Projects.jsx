import React from "react";
import Pfp from "../assets/Pfp.jpg";

const particles = Array.from({ length: 8 });

const projects = [
  {
    name: "StyleMate",
    image: "/src/assets/projects/stylemate.png",
    description: "Smart companion for personalised outfit recommendations.",
    github: "https://github.com/alemcyril/stylemate",
    site: "", // under development
  },
  {
    name: "Fuel Tracker",
    image: "/src/assets/projects/fuel-tracker.png",
    description:
      "A web application that displays fuel prices across different towns in Kenya.",
    github: "https://github.com/alemcyril/fuel-tracker",
    site: "https://fuel-tracker-alpha-cyan.vercel.app/",
  },
  {
    name: "Jina Analyzer",
    image: "/src/assets/projects/jina-analyzer.png",
    description:
      "A web application that helps users discover the cultural heritage behind Kenyan names.",
    github: "https://github.com/alemcyril/jina-analyzer",
    site: "https://jina-analyzer.vercel.app/",
  },
  {
    name: "Kenyan Memes Quiz",
    image: "/src/assets/projects/meme-quiz.png",
    description:
      "A fun and interactive quiz about popular Kenyan memes, built with React and Vite.",
    github: "https://github.com/alemcyril/kenyan-meme-quiz",
    site: "https://cozy-donut-4e4bf2.netlify.app/",
  },
  {
    name: "Transaction Viewer",
    image: "/src/assets/projects/transaction-viewer.png",
    description:
      "A responsive web application that displays transaction fees for Kenyan mobile money services.",
    github: "https://github.com/alemcyril/transaction-viewer",
    site: "https://transaction-viewer-cyan.vercel.app/",
  },
  {
    name: "Ferare Group",
    image: "/src/assets/projects/ferare.png",
    description: "Corporate website for a diversified African conglomerate .",
    github: "", // private repo
    site: "https://feraregroup.com/",
  },
];

const cardStyle = {
  background: "rgba(255,255,255,0.08)",
  borderRadius: "12px",
  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
  padding: "1.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  height: "100%",
  minHeight: 420,
  maxHeight: 420,
  boxSizing: "border-box",
};

const imgStyle = {
  width: "100%",
  height: 180,
  objectFit: "cover",
  borderRadius: "8px",
  background: "#eee",
  display: "block",
};

const Projects = () => (
  <section id="projects" className="main-section">
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
        Projects
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "2rem",
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
        }}
      >
        {projects.map((project, idx) => (
          <div key={project.name} style={cardStyle}>
            <img
              src={project.image}
              alt={project.name}
              style={imgStyle}
              onError={(e) => (e.target.src = Pfp)}
            />
            <h3
              style={{
                margin: "0.5rem 0 0.25rem",
                width: "100%",
                fontWeight: 700,
                color: "#fff",
                textShadow: "0 2px 8px rgba(0,0,0,0.18)",
              }}
            >
              {project.name}
            </h3>
            <p
              style={{
                color: "#fff",
                fontSize: "1rem",
                margin: 0,
                width: "100%",
                flex: 1,
                textShadow: "0 2px 8px rgba(0,0,0,0.12)",
              }}
            >
              {project.description}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginTop: "1rem",
              }}
            >
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 600,
                    textShadow: "0 2px 8px rgba(0,0,0,0.18)",
                  }}
                >
                  GitHub
                </a>
              )}
              <span style={{ flex: 1 }}></span>
              {project.site && (
                <a
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#a8edea",
                    textDecoration: "none",
                    fontWeight: 600,
                    textShadow: "0 2px 8px rgba(0,0,0,0.18)",
                  }}
                >
                  Site
                </a>
              )}
              {!project.site && project.name !== "StyleMate" && (
                <span
                  style={{
                    color: "#aaa",
                    fontWeight: 600,
                    marginLeft: "auto",
                    textShadow: "0 2px 8px rgba(0,0,0,0.18)",
                  }}
                >
                  Site: Under Development
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;

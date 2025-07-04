import React from "react";

const particles = Array.from({ length: 8 });

const bulletStyle = {
  display: "inline-block",
  width: 10,
  height: 10,
  background: "#0070f3",
  borderRadius: "50%",
  marginRight: 14,
  flexShrink: 0,
};

const Experience = () => (
  <section id="experience" className="main-section">
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
        Experience
      </h2>
      <div
        style={{
          width: "100%",
          padding: "2.5rem 3vw",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          boxSizing: "border-box",
          maxWidth: 1100,
          margin: "0 auto",
          color: "#fff",
          textShadow: "0 2px 8px rgba(0,0,0,0.18)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <div style={{ textAlign: "left" }}>
            <h3
              style={{
                margin: 0,
                fontWeight: 700,
                fontSize: "1.5rem",
                color: "#fff",
                textShadow: "0 2px 8px rgba(0,0,0,0.18)",
              }}
            >
              TreatMePal
            </h3>
            <div
              style={{
                fontWeight: 600,
                color: "#a8edea",
                marginBottom: 4,
                fontSize: "1.1rem",
                textShadow: "0 2px 8px rgba(0,0,0,0.18)",
              }}
            >
              Frontend Developer Intern
            </div>
            <div
              style={{
                color: "#fed6e3",
                fontSize: "1rem",
                fontWeight: 500,
                textShadow: "0 2px 8px rgba(0,0,0,0.18)",
              }}
            >
              Nairobi, Kenya
            </div>
          </div>
          <div
            style={{
              color: "#fed6e3",
              fontSize: "1rem",
              minWidth: 120,
              textAlign: "right",
              fontWeight: 500,
              textShadow: "0 2px 8px rgba(0,0,0,0.18)",
            }}
          >
            July 2024 – Sep 2024
          </div>
        </div>
        <ul
          style={{
            margin: "1.5rem 0 0 0",
            color: "#fff",
            fontSize: "1.08rem",
            padding: 0,
            listStyle: "none",
            lineHeight: 1.7,
            textShadow: "0 2px 8px rgba(0,0,0,0.12)",
          }}
        >
          <li
            style={{ display: "flex", alignItems: "center", marginBottom: 12 }}
          >
            <span style={bulletStyle}></span>
            <span
              style={{
                display: "block",
                marginTop: 0,
                color: "#fff",
                textAlign: "left",
              }}
            >
              Enhanced user experience across devices by implementing intuitive
              UI components using React, Tailwind CSS, and Redux, resulting in a
              25% improvement in user retention
            </span>
          </li>
          <li
            style={{ display: "flex", alignItems: "center", marginBottom: 12 }}
          >
            <span style={bulletStyle}></span>
            <span
              style={{
                display: "block",
                marginTop: 0,
                color: "#fff",
                textAlign: "left",
              }}
            >
              Enabled seamless real-time scheduling and profile management by
              integrating dynamic frontend components with backend APIs
            </span>
          </li>
          <li
            style={{ display: "flex", alignItems: "center", marginBottom: 12 }}
          >
            <span style={bulletStyle}></span>
            <span
              style={{
                display: "block",
                marginTop: 0,
                color: "#fff",
                textAlign: "left",
              }}
            >
              Improved application stability and performance by resolving UI/UX
              bugs and implementing user-driven enhancements
            </span>
          </li>
          <li
            style={{ display: "flex", alignItems: "center", marginBottom: 0 }}
          >
            <span style={bulletStyle}></span>
            <span
              style={{
                display: "block",
                marginTop: 0,
                color: "#fff",
                textAlign: "left",
              }}
            >
              Accelerated feature delivery and team productivity by actively
              contributing to Agile processes, including sprint planning,
              standups, and peer code reviews
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Experience;

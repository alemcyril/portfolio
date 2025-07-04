import React from "react";
import { Link } from "react-scroll";

const particles = Array.from({ length: 8 });
const codeLines = [
  "function() {",
  "const code = 'amazing';",
  "return portfolio;",
  "}",
  "class Developer {",
  "build() { magic }",
  "console.log('Hello');",
  "import React from 'react';",
  "export default App;",
  "async/await",
];

const Hero = () => (
  <section
    id="hero"
    className="hero-section"
    style={{
      position: "relative",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      minHeight: 600,
    }}
  >
    {/* Animated Background */}
    <div
      className="animated-bg"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background:
          "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)," +
          "radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)",
        animation: "pulse 4s ease-in-out infinite alternate",
        zIndex: 1,
      }}
    />
    {/* Grid Overlay */}
    <div
      className="grid-overlay"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)," +
          "linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "50px 50px",
        animation: "gridMove 20s linear infinite",
        zIndex: 2,
      }}
    />
    {/* Floating Particles */}
    <div
      className="floating-particles"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: 3,
      }}
    >
      {particles.map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            position: "absolute",
            width: 2,
            height: 2,
            background: "rgba(255,255,255,0.6)",
            borderRadius: "50%",
            animation: `float 8s infinite ease-in-out`,
            left: ["10%", "20%", "60%", "80%", "40%", "70%", "30%", "90%"][i],
            top: ["20%", "80%", "30%", "70%", "60%", "10%", "90%", "40%"][i],
            animationDelay: `${i}s`,
          }}
        />
      ))}
    </div>
    {/* Tech Shapes */}
    <div
      className="tech-shapes"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 4,
      }}
    >
      <div
        className="shape shape-1"
        style={{
          position: "absolute",
          top: "10%",
          left: "10%",
          width: 60,
          height: 60,
          border: "2px solid #00d4ff",
          borderRadius: "50%",
          opacity: 0.1,
          animation: "rotate 20s linear infinite",
        }}
      />
      <div
        className="shape shape-2"
        style={{
          position: "absolute",
          top: "70%",
          right: "10%",
          width: 40,
          height: 40,
          border: "2px solid #ff6b6b",
          transform: "rotate(45deg)",
          opacity: 0.1,
          animation: "rotate 25s linear infinite reverse",
        }}
      />
      <div
        className="shape shape-3"
        style={{
          position: "absolute",
          bottom: "20%",
          left: "20%",
          width: 0,
          height: 0,
          borderLeft: "25px solid transparent",
          borderRight: "25px solid transparent",
          borderBottom: "43px solid #4ecdc4",
          opacity: 0.1,
          animation: "rotate 30s linear infinite",
        }}
      />
    </div>
    {/* Code Rain */}
    <div
      className="code-rain"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 5,
      }}
    >
      {codeLines.map((line, i) => (
        <div
          key={i}
          className="code-line"
          style={{
            position: "absolute",
            color: "#00ff88",
            fontFamily: "'Courier New', monospace",
            fontSize: 12,
            opacity: 0.3,
            animation: "codefall 10s linear infinite",
            left: `${5 + i * 10}%`,
            animationDelay: `${i * 1.2}s`,
          }}
        >
          {line}
        </div>
      ))}
    </div>
    {/* Hero Content */}
    <div
      className="hero-content"
      style={{
        position: "relative",
        zIndex: 10,
        textAlign: "center",
        color: "white",
        maxWidth: 800,
        padding: "0 20px",
      }}
    >
      <h1
        className="hero-title"
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
        }}
      >
        Alem Cyril
      </h1>
      <p
        className="hero-subtitle"
        style={{
          fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
          marginBottom: "2rem",
          opacity: 0.9,
          animation: "fadeInUp 1s ease-out 0.5s both",
          color: "#fff",
        }}
      >
        Software Engineer & Creative Problem Solver
      </p>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        offset={-80}
        className="cta-button"
        style={{
          display: "inline-block",
          padding: "15px 40px",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          textDecoration: "none",
          borderRadius: 50,
          fontWeight: 600,
          fontSize: "1.1rem",
          transition: "all 0.3s ease",
          boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)",
          animation: "fadeInUp 1s ease-out 1s both",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.boxShadow =
            "0 15px 40px rgba(102, 126, 234, 0.5)")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.boxShadow =
            "0 10px 30px rgba(102, 126, 234, 0.3)")
        }
      >
        Get in Touch
      </Link>
    </div>
    {/* Add keyframes in a <style> tag for this component */}
    <style>{`
      @keyframes pulse {
        0% { opacity: 0.3; }
        100% { opacity: 0.6; }
      }
      @keyframes gridMove {
        0% { transform: translate(0, 0); }
        100% { transform: translate(50px, 50px); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
      }
      @keyframes rotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes codefall {
        0% { transform: translateY(-100vh); opacity: 0; }
        10% { opacity: 0.3; }
        90% { opacity: 0.3; }
        100% { transform: translateY(100vh); opacity: 0; }
      }
      @keyframes titleGlow {
        0% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.3); }
        100% { text-shadow: 0 0 30px rgba(255, 255, 255, 0.6); }
      }
      @keyframes fadeInUp {
        0% { opacity: 0; transform: translateY(30px); }
        100% { opacity: 1; transform: translateY(0); }
      }
    `}</style>
  </section>
);

export default Hero;

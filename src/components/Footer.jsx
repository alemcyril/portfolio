import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const particles = Array.from({ length: 8 });

const footerLinks = [
  { icon: <FaGithub />, url: "https://github.com/alemcyril", label: "GitHub" },
  { icon: <FaTwitter />, url: "https://x.com/alem__cyril", label: "Twitter" },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/alemcyril",
    label: "LinkedIn",
  },
  { icon: <FaEnvelope />, url: "mailto:alemcyril8@gmail.com", label: "Email" },
  {
    icon: <FaWhatsapp />,
    url: "https://api.whatsapp.com/send/?phone=%2B254115077592&text&type=phone_number&app_absent=0",
    label: "WhatsApp",
  },
];

const Footer = () => (
  <footer className="main-section">
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
          position: "absolute",
          left: "-9999px",
          height: 0,
          width: 0,
          overflow: "hidden",
        }}
      >
        Footer
      </h2>
      <div
        style={{
          width: "100%",
          color: "#fff",
          padding: "1.5rem 0 1rem 0",
          textAlign: "center",
          textShadow: "0 2px 8px rgba(0,0,0,0.18)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              fontWeight: 600,
              fontSize: "1.1rem",
              marginBottom: 6,
              color: "#fff",
              textShadow: "0 2px 8px rgba(0,0,0,0.18)",
            }}
          >
            &copy; {new Date().getFullYear()} Alem Cyril. All rights reserved.
          </div>
          <div
            style={{
              display: "flex",
              gap: 22,
              justifyContent: "center",
              marginBottom: 4,
            }}
          >
            {footerLinks.map(({ icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  color: "#fff",
                  fontSize: 22,
                  transition: "color 0.2s",
                  textShadow: "0 2px 8px rgba(0,0,0,0.18)",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#a8edea")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
              >
                {icon}
              </a>
            ))}
          </div>
          <div
            style={{
              fontSize: "0.98rem",
              color: "#fed6e3",
              textShadow: "0 2px 8px rgba(0,0,0,0.18)",
            }}
          >
            Built with React & Vite
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

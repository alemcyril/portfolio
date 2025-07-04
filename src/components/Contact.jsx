import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const particles = Array.from({ length: 8 });

const contacts = [
  {
    icon: <FaGithub size={28} />,
    label: "GitHub",
    url: "https://github.com/alemcyril",
  },
  {
    icon: <FaTwitter size={28} />,
    label: "Twitter",
    url: "https://x.com/alem__cyril",
  },
  {
    icon: <FaLinkedin size={28} />,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/alemcyril",
  },
  {
    icon: <FaEnvelope size={28} />,
    label: "Email",
    url: "mailto:alemcyril8@gmail.com",
  },
  {
    icon: <FaWhatsapp size={28} />,
    label: "WhatsApp",
    url: "https://api.whatsapp.com/send/?phone=%2B254115077592&text&type=phone_number&app_absent=0",
  },
];

const Contact = () => (
  <section id="contact" className="main-section">
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
        <span style={{ fontWeight: 800 }}>Contact</span>
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          maxWidth: 1100,
          margin: "0 auto",
          padding: "2.5rem 3vw",
          boxSizing: "border-box",
          justifyContent: "space-between",
          color: "#fff",
          textShadow: "0 2px 8px rgba(0,0,0,0.18)",
        }}
      >
        {/* Left: Social Links */}
        <div
          style={{
            flex: "1 1 260px",
            minWidth: 220,
            maxWidth: 320,
            display: "flex",
            flexDirection: "column",
            gap: 24,
            justifyContent: "center",
          }}
        >
          {contacts.map(({ icon, label, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                textDecoration: "none",
                color: "#fff",
                fontWeight: 600,
                fontSize: "1.1rem",
                transition: "color 0.2s",
                textShadow: "0 2px 8px rgba(0,0,0,0.18)",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#a8edea")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
            >
              {icon}
              <span style={{ color: "#fff" }}>{label}</span>
            </a>
          ))}
        </div>
        {/* Right: Contact Form */}
        <form
          style={{
            flex: "2 1 340px",
            minWidth: 260,
            maxWidth: 500,
            display: "flex",
            flexDirection: "column",
            gap: 18,
            padding: "2rem 1.5rem",
            boxSizing: "border-box",
          }}
        >
          <label
            style={{
              fontWeight: 600,
              marginBottom: 4,
              color: "#fff",
              textShadow: "0 2px 8px rgba(0,0,0,0.18)",
            }}
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            style={{
              padding: "0.7rem",
              borderRadius: 6,
              border: "1px solid rgba(255,255,255,0.4)",
              fontSize: "1rem",
              color: "#fff",
              background: "transparent",
            }}
          />
          <label
            style={{
              fontWeight: 600,
              marginBottom: 4,
              color: "#fff",
              textShadow: "0 2px 8px rgba(0,0,0,0.18)",
            }}
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            style={{
              padding: "0.7rem",
              borderRadius: 6,
              border: "1px solid rgba(255,255,255,0.4)",
              fontSize: "1rem",
              color: "#fff",
              background: "transparent",
            }}
          />
          <label
            style={{
              fontWeight: 600,
              marginBottom: 4,
              color: "#fff",
              textShadow: "0 2px 8px rgba(0,0,0,0.18)",
            }}
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            style={{
              padding: "0.7rem",
              borderRadius: 6,
              border: "1px solid rgba(255,255,255,0.4)",
              fontSize: "1rem",
              resize: "vertical",
              color: "#fff",
              background: "transparent",
            }}
          />
          <button
            type="submit"
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
              textShadow: "0 2px 8px rgba(0,0,0,0.25)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              marginTop: 10,
              cursor: "pointer",
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
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;

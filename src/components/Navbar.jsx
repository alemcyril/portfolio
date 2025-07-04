import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on link click (mobile)
  const handleMenuLinkClick = () => setMenuOpen(false);

  return (
    <nav
      style={{
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        padding: "1.2rem 2.5vw",
        background: "transparent",
        color: "#fff",
        boxShadow: "none",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        textShadow: "0 2px 8px rgba(0,0,0,0.25)",
      }}
    >
      {/* Left: Name */}
      <div style={{ flex: 1, display: "flex", justifyContent: "flex-start" }}>
        <Link
          to="hero"
          smooth={true}
          duration={500}
          offset={-80}
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "#fff",
            textShadow: "0 2px 8px rgba(0,0,0,0.25)",
            textDecoration: "none",
            cursor: "pointer",
          }}
          activeClass="active"
          spy={true}
        >
          Alem Cyril
        </Link>
      </div>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((open) => !open)}
        style={{
          background: "none",
          border: "none",
          color: "#fff",
          fontSize: 28,
          cursor: "pointer",
          zIndex: 120,
        }}
      >
        {menuOpen ? (
          <span style={{ color: "#fff" }}>&#10005;</span>
        ) : (
          <span style={{ color: "#fff" }}>&#9776;</span>
        )}
      </button>
      {/* Center: Links */}
      <div
        className="hidden md:flex"
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <Link
          to="skills"
          smooth={true}
          duration={500}
          offset={-80}
          style={{
            textDecoration: "none",
            color: "#fff",
            fontWeight: "500",
            cursor: "pointer",
            textShadow: "0 2px 8px rgba(0,0,0,0.25)",
            letterSpacing: 1,
            fontSize: "1.08rem",
            transition: "color 0.2s",
          }}
          activeClass="active"
          spy={true}
        >
          Skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-80}
          style={{
            textDecoration: "none",
            color: "#fff",
            fontWeight: "500",
            cursor: "pointer",
            textShadow: "0 2px 8px rgba(0,0,0,0.25)",
            letterSpacing: 1,
            fontSize: "1.08rem",
            transition: "color 0.2s",
          }}
          activeClass="active"
          spy={true}
        >
          Projects
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          offset={-80}
          style={{
            textDecoration: "none",
            color: "#fff",
            fontWeight: "500",
            cursor: "pointer",
            textShadow: "0 2px 8px rgba(0,0,0,0.25)",
            letterSpacing: 1,
            fontSize: "1.08rem",
            transition: "color 0.2s",
          }}
          activeClass="active"
          spy={true}
        >
          Experience
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-80}
          style={{
            textDecoration: "none",
            color: "#fff",
            fontWeight: "500",
            cursor: "pointer",
            textShadow: "0 2px 8px rgba(0,0,0,0.25)",
            letterSpacing: 1,
            fontSize: "1.08rem",
            transition: "color 0.2s",
          }}
          activeClass="active"
          spy={true}
        >
          Contact
        </Link>
      </div>
      {/* Right: Resume */}
      <div
        className="hidden md:flex"
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <a
          href="https://drive.google.com/file/d/1GNSG5Ibo6v-yZvxIV4StSKOniDsoiezP/view"
          target="_blank"
          rel="noopener noreferrer"
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
          Resume
        </a>
      </div>
      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            position: "absolute",
            top: "70%",
            right: "5vw",
            width: "80vw",
            maxWidth: 320,
            background: "rgba(20, 20, 30, 0.97)",
            borderRadius: 16,
            boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
            zIndex: 200,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "2rem 1.5rem 1.5rem 1.5rem",
            gap: "1.2rem",
            transition: "background 0.3s",
          }}
        >
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-80}
            style={{
              color: "#fff",
              fontWeight: "600",
              fontSize: "1.2rem",
              textDecoration: "none",
              margin: "0.5rem 0",
              textShadow: "0 2px 8px rgba(0,0,0,0.25)",
              cursor: "pointer",
            }}
            activeClass="active"
            spy={true}
            onClick={handleMenuLinkClick}
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            style={{
              color: "#fff",
              fontWeight: "600",
              fontSize: "1.2rem",
              textDecoration: "none",
              margin: "0.5rem 0",
              textShadow: "0 2px 8px rgba(0,0,0,0.25)",
              cursor: "pointer",
            }}
            activeClass="active"
            spy={true}
            onClick={handleMenuLinkClick}
          >
            Projects
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            offset={-80}
            style={{
              color: "#fff",
              fontWeight: "600",
              fontSize: "1.2rem",
              textDecoration: "none",
              margin: "0.5rem 0",
              textShadow: "0 2px 8px rgba(0,0,0,0.25)",
              cursor: "pointer",
            }}
            activeClass="active"
            spy={true}
            onClick={handleMenuLinkClick}
          >
            Experience
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            style={{
              color: "#fff",
              fontWeight: "600",
              fontSize: "1.2rem",
              textDecoration: "none",
              margin: "0.5rem 0",
              textShadow: "0 2px 8px rgba(0,0,0,0.25)",
              cursor: "pointer",
            }}
            activeClass="active"
            spy={true}
            onClick={handleMenuLinkClick}
          >
            Contact
          </Link>
          <a
            href="https://drive.google.com/file/d/1GNSG5Ibo6v-yZvxIV4StSKOniDsoiezP/view"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "0.5rem 1.2rem",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              textDecoration: "none",
              borderRadius: 50,
              fontWeight: 600,
              fontSize: "1rem",
              marginTop: "0.5rem",
              boxShadow: "0 4px 16px rgba(102, 126, 234, 0.2)",
              textShadow: "0 2px 8px rgba(0,0,0,0.25)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
            onClick={handleMenuLinkClick}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

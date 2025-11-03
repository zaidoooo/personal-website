import React, { useState, useEffect } from "react";

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      title: "Project Alpha",
      description:
        "A modern web application built with cutting-edge technologies. Features responsive design and smooth animations.",
    },
    {
      title: "Project Beta",
      description:
        "An innovative solution that solves real-world problems. Clean interface with intuitive user experience.",
    },
    {
      title: "Project Gamma",
      description:
        "Creative design project showcasing attention to detail and modern aesthetic principles.",
    },
  ];

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "#fff",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>

      {/* Navigation */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: scrolled ? "1rem 5%" : "2rem 5%",
          position: "fixed",
          width: "100%",
          top: 0,
          zIndex: 1000,
          background: scrolled
            ? "rgba(255, 255, 255, 0.15)"
            : "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            letterSpacing: "2px",
          }}
        >
          PORTFOLIO
        </div>
        <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
          <li>
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "#home")}
              style={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: 500,
                transition: "opacity 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.opacity = "0.7")}
              onMouseOut={(e) => (e.target.style.opacity = "1")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "#projects")}
              style={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: 500,
                transition: "opacity 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.opacity = "0.7")}
              onMouseOut={(e) => (e.target.style.opacity = "1")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              style={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: 500,
                transition: "opacity 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.opacity = "0.7")}
              onMouseOut={(e) => (e.target.style.opacity = "1")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 5%",
        }}
      >
        <div className="animate-fadeInUp">
          <h1
            style={{ fontSize: "4rem", marginBottom: "1rem", fontWeight: 700 }}
          >
            Hi, I'm Zaid Hassan
          </h1>
          <p style={{ fontSize: "1.5rem", marginBottom: "2rem", opacity: 0.9 }}>
            Developer • Creator • Collaborator
          </p>
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, "#projects")}
            style={{
              display: "inline-block",
              padding: "1rem 2.5rem",
              background: "rgba(255, 255, 255, 0.2)",
              border: "2px solid #fff",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "50px",
              fontWeight: 600,
              transition: "all 0.3s ease",
              backdropFilter: "blur(10px)",
            }}
            onMouseOver={(e) => {
              e.target.style.background = "#fff";
              e.target.style.color = "#667eea";
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.2)";
            }}
            onMouseOut={(e) => {
              e.target.style.background = "rgba(255, 255, 255, 0.2)";
              e.target.style.color = "#fff";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            View My Work
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        style={{
          padding: "5rem 5%",
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "3rem",
            textAlign: "center",
          }}
        >
          Featured Projects
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginTop: "3rem",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "15px",
                padding: "2rem",
                transition: "all 0.3s ease",
                cursor: "pointer",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.boxShadow =
                  "0 15px 40px rgba(0, 0, 0, 0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                {project.title}
              </h3>
              <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

import { useState, useEffect, useRef } from "react";

const GOLD = "#c9a96e";
const CREAM = "#f5f0e8";
const BLACK = "#0a0a0a";

const skills = [
  { name: "C#", level: 85 },
  { name: "Java", level: 80 },
  { name: "React.js", level: 75 },
  { name: "AI / ML", level: 70 },
  { name: "Figma", level: 78 },
  { name: "JavaScript", level: 72 },
];

const projects = [
  {
    id: "01",
    title: "Banking Application",
    desc: "Secure account management & transaction processing system. Built with clean architecture patterns, authentication, and full data integrity.",
    stack: ["C#", "Java", "OOP", "SQL"],
    note: "Clean arch. patterns ✦",
  },
  {
    id: "02",
    title: "Student Record System",
    desc: "Academic records management platform covering course enrollment, grade tracking, and student data administration.",
    stack: ["C#", "Java", "Data Management"],
    note: "Academic focus ✦",
  },
];

function PaperTag({ children, rotate = -1.5, style = {} }) {
  return (
    <span
      style={{
        background: CREAM,
        color: "#1a1a1a",
        fontSize: "9px",
        fontFamily: "'Space Mono', monospace",
        fontWeight: 700,
        padding: "4px 10px",
        borderRadius: "2px",
        display: "inline-block",
        transform: `rotate(${rotate}deg)`,
        letterSpacing: "0.5px",
        lineHeight: 1.4,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

function IconBtn({ href, children, label }) {
  return (
    <a
      href={href || "#"}
      aria-label={label}
      style={{
        width: 36,
        height: 36,
        borderRadius: "50%",
        border: `0.5px solid #2a2a2a`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#111",
        transition: "border-color 0.2s, background 0.2s",
        cursor: "pointer",
        textDecoration: "none",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = GOLD;
        e.currentTarget.style.background = "#1a1a1a";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "#2a2a2a";
        e.currentTarget.style.background = "#111";
      }}
    >
      {children}
    </a>
  );
}

function SkillBar({ skill, index, visible }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <span style={{ fontSize: 11, color: "#666", minWidth: 56, fontFamily: "'Space Mono', monospace" }}>
        {skill.name}
      </span>
      <div style={{ flex: 1, height: 2, background: "#1e1e1e", borderRadius: 2, overflow: "hidden" }}>
        <div
          style={{
            height: "100%",
            background: GOLD,
            borderRadius: 2,
            width: visible ? `${skill.level}%` : "0%",
            transition: `width 1s ease ${index * 0.12}s`,
          }}
        />
      </div>
      <span style={{ fontSize: 9, color: "#444", minWidth: 28, textAlign: "right", fontFamily: "'Space Mono', monospace" }}>
        {skill.level}%
      </span>
    </div>
  );
}

function Ticker() {
  const items = ["Tech × Fashion", "·", "AI/ML Developer", "·", "Full-Stack", "·", "Aptech Nigeria", "·", "Open to Opportunities", "·", "React · C# · Java", "·", "2026 Graduate", "·"];
  const doubled = [...items, ...items];
  return (
    <div style={{ background: GOLD, padding: "8px 0", overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          gap: 28,
          whiteSpace: "nowrap",
          animation: "ticker 28s linear infinite",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: BLACK,
              fontFamily: "'Space Mono', monospace",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function HannukPortfolio() {
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSkillsVisible(true); },
      { threshold: 0.3 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&family=Space+Mono:wght@400;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: #0a0a0a; color: #f0ede6; font-family: 'Space Grotesk', sans-serif; }
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: #0a0a0a; }
    ::-webkit-scrollbar-thumb { background: #c9a96e; border-radius: 2px; }
    @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
    .fade-up { animation: fadeUp 0.7s ease forwards; }
    .fade-up-1 { animation: fadeUp 0.7s 0.1s ease both; }
    .fade-up-2 { animation: fadeUp 0.7s 0.2s ease both; }
    .fade-up-3 { animation: fadeUp 0.7s 0.35s ease both; }
    .fade-up-4 { animation: fadeUp 0.7s 0.5s ease both; }
    .nav-link:hover { color: #c9a96e !important; }
    .project-card:hover { border-color: #c9a96e44 !important; background: #0f0f0f !important; }
    .btn-gold:hover { background: #b8924a !important; }
    .btn-outline:hover { border-color: #c9a96e !important; color: #c9a96e !important; }
    .avail-dot { animation: pulse 2s infinite; }
    @media (max-width: 768px) {
      .hero-grid { grid-template-columns: 1fr !important; }
      .bento-grid { grid-template-columns: 1fr !important; }
      .bento-wide { grid-column: span 1 !important; }
      .hero-name { font-size: 40px !important; }
      .nav-links-desktop { display: none !important; }
    }
    @media (min-width: 769px) {
      .nav-menu-mobile { display: none !important; }
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div style={{ background: BLACK, minHeight: "100vh" }}>

        {/* NAV */}
        <nav style={{
          position: "sticky", top: 0, zIndex: 100,
          background: "rgba(10,10,10,0.95)",
          borderBottom: "0.5px solid #1a1a1a",
          backdropFilter: "blur(10px)",
          padding: "0 clamp(16px, 4vw, 48px)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: 56,
        }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: GOLD, letterSpacing: 3 }}>
            HANNUK
          </div>
          <div className="nav-links-desktop" style={{ display: "flex", gap: 28 }}>
            {["about", "skills", "projects", "education", "contact"].map(s => (
              <button key={s} className="nav-link"
                onClick={() => scrollTo(s)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontSize: 10, color: "#555", letterSpacing: "1.5px",
                  textTransform: "uppercase", transition: "color 0.2s",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}>
                {s}
              </button>
            ))}
          </div>
          <button
            className="nav-menu-mobile"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: `0.5px solid #333`, padding: "6px 12px", cursor: "pointer", color: GOLD, fontSize: 11, fontFamily: "'Space Mono', monospace", letterSpacing: 1 }}
          >
            {menuOpen ? "CLOSE" : "MENU"}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div style={{ background: "#0f0f0f", borderBottom: "0.5px solid #1a1a1a", padding: "16px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
            {["about", "skills", "projects", "education", "contact"].map(s => (
              <button key={s} onClick={() => scrollTo(s)}
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: 12, color: "#888", letterSpacing: "2px", textTransform: "uppercase", textAlign: "left", fontFamily: "'Space Grotesk', sans-serif" }}>
                {s}
              </button>
            ))}
          </div>
        )}

        {/* HERO */}
        <section id="about" style={{ borderBottom: "0.5px solid #1a1a1a" }}>
          <div className="hero-grid" style={{
            display: "grid",
            gridTemplateColumns: "240px 1fr",
            minHeight: 320,
          }}>
            {/* PHOTO COLUMN */}
            <div style={{
              borderRight: "0.5px solid #1a1a1a",
              padding: "32px 24px",
              display: "flex", flexDirection: "column",
              alignItems: "center", gap: 20,
            }}>
              {/* Photo Frame */}
              <div className="fade-up" style={{
                width: 160, height: 192,
                border: `1.5px solid ${GOLD}`,
                position: "relative",
                background: "#111",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                {/* Corner accents */}
                {[["top:0;left:0", "borderRight:1.5px solid #c9a96e33;borderBottom:1.5px solid #c9a96e33"],
                  ["top:0;right:0", "borderLeft:1.5px solid #c9a96e33;borderBottom:1.5px solid #c9a96e33"],
                  ["bottom:0;left:0", "borderRight:1.5px solid #c9a96e33;borderTop:1.5px solid #c9a96e33"],
                  ["bottom:0;right:0", "borderLeft:1.5px solid #c9a96e33;borderTop:1.5px solid #c9a96e33"],
                ].map(([pos, brd], i) => {
                  const p = Object.fromEntries(pos.split(";").map(s => s.split(":")));
                  const b = Object.fromEntries(brd.split(";").map(s => { const [k, ...v] = s.split(":"); return [k, v.join(":")]; }));
                  return (
                    <div key={i} style={{
                      position: "absolute", width: 12, height: 12,
                      background: BLACK, ...p, ...b,
                    }} />
                  );
                })}
                {/* Photo placeholder */}
                <div style={{
                  width: 152, height: 184,
                  background: "#141414",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center", gap: 8,
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                  </svg>
                  <span style={{ fontSize: 8, color: "#333", letterSpacing: 1, textTransform: "uppercase", fontFamily: "'Space Mono', monospace" }}>
                    add photo
                  </span>
                </div>
              </div>

              {/* Paper tag */}
              <PaperTag rotate={-1.5}>Hannuk · 2026</PaperTag>

              {/* Social Icons */}
              <div style={{ display: "flex", gap: 10 }}>
                <IconBtn href="https://github.com/Hannuk22" label="GitHub">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </IconBtn>
                <IconBtn href="https://linkedin.com" label="LinkedIn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </IconBtn>
                <IconBtn href="mailto:enochangbashim5@gmail.com" label="mail">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </IconBtn>
              </div>

              {/* Availability */}
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div className="avail-dot" style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80" }} />
                <span style={{ fontSize: 9, color: "#444", letterSpacing: 1, fontFamily: "'Space Mono', monospace" }}>
                  AVAILABLE · NIGERIA
                </span>
              </div>
            </div>

            {/* HERO CONTENT */}
            <div style={{ padding: "clamp(24px,4vw,40px) clamp(20px,4vw,40px)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div className="fade-up-1" style={{
                  fontSize: 9, color: GOLD, letterSpacing: "2px",
                  textTransform: "uppercase", border: `0.5px solid ${GOLD}44`,
                  padding: "4px 12px", borderRadius: 20, display: "inline-block", marginBottom: 16,
                }}>
                  Student · Aptech Nigeria · AI & ML
                </div>
                <h1 className="hero-name fade-up-2" style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(40px, 6vw, 64px)",
                  fontWeight: 300, lineHeight: 1.0,
                  color: "#f0ede6", letterSpacing: -1,
                }}>
                  Enoch<br />
                  <span style={{ color: GOLD, fontStyle: "italic" }}>Angbashim</span>
                </h1>
                <div className="fade-up-3" style={{
                  fontSize: 10, color: "#444", letterSpacing: "2px",
                  textTransform: "uppercase", marginTop: 10, fontFamily: "'Space Mono', monospace",
                }}>
                  AI / ML · Full-Stack Developer · Tech × Fashion
                </div>
                <p className="fade-up-4" style={{
                  fontSize: 13, color: "#666", lineHeight: 1.8,
                  marginTop: 18, maxWidth: 420,
                }}>
                  Building at the intersection of intelligent systems and human aesthetics. 
                  I believe technology and fashion are the same conversation — both shape how 
                  we present ourselves to the world. Graduating 2026, headed to the UK.
                </p>
              </div>

              <div className="fade-up-4">
                <div style={{ display: "flex", gap: 8, marginBottom: 18, flexWrap: "wrap" }}>
                  {["AI / ML", "React.js", "C# · Java", "Figma", "Full-Stack"].map((t, i) => (
                    <PaperTag key={i} rotate={i % 2 === 0 ? -1.2 : 1}>{t}</PaperTag>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <button className="btn-gold" style={{
                    background: GOLD, color: BLACK, fontSize: 10, fontWeight: 700,
                    letterSpacing: "1.5px", textTransform: "uppercase", padding: "10px 22px",
                    border: "none", borderRadius: 3, cursor: "pointer", transition: "background 0.2s",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}>
                    Download CV
                  </button>
                  <button className="btn-outline" onClick={() => scrollTo("contact")} style={{
                    background: "none", border: "0.5px solid #333", color: "#666",
                    fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase",
                    padding: "10px 22px", borderRadius: 3, cursor: "pointer",
                    transition: "all 0.2s", fontFamily: "'Space Grotesk', sans-serif",
                  }}>
                    Get in Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TICKER */}
        <Ticker />

        {/* SKILLS */}
        <section id="skills" ref={skillsRef} style={{ borderBottom: "0.5px solid #1a1a1a", padding: "clamp(32px,5vw,56px) clamp(20px,4vw,48px)" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 32 }}>
            <span style={{ fontSize: 9, color: GOLD, letterSpacing: 3, fontFamily: "'Space Mono', monospace" }}>02</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 300, color: "#f0ede6" }}>Skills</h2>
            <PaperTag rotate={1.5} style={{ marginLeft: "auto" }}>proficiency levels ✦</PaperTag>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 32 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {skills.slice(0, 3).map((s, i) => <SkillBar key={s.name} skill={s} index={i} visible={skillsVisible} />)}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {skills.slice(3).map((s, i) => <SkillBar key={s.name} skill={s} index={i + 3} visible={skillsVisible} />)}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" style={{ borderBottom: "0.5px solid #1a1a1a", padding: "clamp(32px,5vw,56px) clamp(20px,4vw,48px)" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 32 }}>
            <span style={{ fontSize: 9, color: GOLD, letterSpacing: 3, fontFamily: "'Space Mono', monospace" }}>03</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 300, color: "#f0ede6" }}>Projects</h2>
          </div>
          <div className="bento-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
            {projects.map((p, i) => (
              <div key={p.id} className="project-card" style={{
                borderRight: i % 2 === 0 ? "0.5px solid #1a1a1a" : "none",
                borderBottom: "0.5px solid #1a1a1a",
                padding: "28px 28px",
                background: BLACK,
                transition: "all 0.2s",
                cursor: "default",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <span style={{ fontSize: 9, color: GOLD, letterSpacing: 2, fontFamily: "'Space Mono', monospace" }}>
                    PROJECT {p.id}
                  </span>
                  <PaperTag rotate={1.2} style={{ fontSize: 8 }}>{p.note}</PaperTag>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 400, color: "#e0ddd6", marginBottom: 10 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 12, color: "#555", lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {p.stack.map(t => (
                    <span key={t} style={{
                      fontSize: 9, color: GOLD, border: `0.5px solid ${GOLD}33`,
                      padding: "2px 8px", borderRadius: 20, fontFamily: "'Space Mono', monospace",
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" style={{ borderBottom: "0.5px solid #1a1a1a", padding: "clamp(32px,5vw,56px) clamp(20px,4vw,48px)" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 32 }}>
            <span style={{ fontSize: 9, color: GOLD, letterSpacing: 3, fontFamily: "'Space Mono', monospace" }}>04</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 300, color: "#f0ede6" }}>Education</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 0 }}>
            {[
              { label: "Current", title: "Aptech Computer Education", sub: "AI & Machine Learning Specialization", detail: "Nigeria · Graduating 2026", tag: "in progress ✦" },
              { label: "Next Step", title: "Middlesex University", sub: "1-Year Top-Up Programme", detail: "London, United Kingdom", tag: "future plan ✦" },
              { label: "Alternative", title: "Lincoln University", sub: "1-Year Top-Up Programme", detail: "Lincoln, United Kingdom", tag: "future plan ✦" },
            ].map((e, i) => (
              <div key={i} style={{
                borderRight: i < 2 ? "0.5px solid #1a1a1a" : "none",
                padding: "24px 24px",
              }}>
                <div style={{ fontSize: 8, color: GOLD, letterSpacing: 2, marginBottom: 10, fontFamily: "'Space Mono', monospace" }}>{e.label}</div>
                <div style={{ fontSize: 14, fontWeight: 500, color: "#ddd", marginBottom: 4 }}>{e.title}</div>
                <div style={{ fontSize: 11, color: "#555", marginBottom: 4 }}>{e.sub}</div>
                <div style={{ fontSize: 10, color: "#3a3a3a", marginBottom: 14, fontFamily: "'Space Mono', monospace" }}>{e.detail}</div>
                <PaperTag rotate={i % 2 === 0 ? -1 : 1.5} style={{ fontSize: 8 }}>{e.tag}</PaperTag>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ padding: "clamp(32px,5vw,56px) clamp(20px,4vw,48px)", borderBottom: "0.5px solid #1a1a1a" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 32 }}>
            <span style={{ fontSize: 9, color: GOLD, letterSpacing: 3, fontFamily: "'Space Mono', monospace" }}>05</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 300, color: "#f0ede6" }}>Contact</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {[
              { label: "Email", value: "your@email.com", icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22,6 12,13 2,6" },
              { label: "GitHub", value: "github.com/hannuk", icon: null },
              { label: "LinkedIn", value: "linkedin.com/in/hannuk", icon: null },
              { label: "Location", value: "Nigeria · Open to UK", icon: null },
            ].map((c, i) => (
              <div key={i} style={{
                border: "0.5px solid #1a1a1a",
                padding: "20px 20px", borderRadius: 2,
                background: "#0d0d0d",
              }}>
                <div style={{ fontSize: 8, color: GOLD, letterSpacing: 2, marginBottom: 8, fontFamily: "'Space Mono', monospace" }}>{c.label}</div>
                <div style={{ fontSize: 12, color: "#666", fontFamily: "'Space Mono', monospace" }}>{c.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "16px clamp(20px,4vw,48px)",
          borderTop: "0.5px solid #1a1a1a",
          flexWrap: "wrap", gap: 10,
        }}>
          <span style={{ fontSize: 9, color: "#333", letterSpacing: 1 }}>© 2026 Enoch Angbashim</span>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#333" }} />
            <span style={{ fontSize: 9, color: "#333", letterSpacing: 1 }}>Lagos, Nigeria</span>
          </div>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: GOLD, letterSpacing: 3 }}>HANNUK</span>
        </footer>

      </div>
    </>
  );
}

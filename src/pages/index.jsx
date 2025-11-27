// pages/index.jsx
import React from "react";

export default function SofiaPortal() {
  return (
    <div style={root}>
      <header style={header}>
        <div style={containerHeader}>
          <h1 style={logo}>Sofia Noor Rafa</h1>
          <nav style={nav}>
            <a href="#about" style={navLink}>About</a>
            <a href="#works" style={navLink}>Works</a>
            <a href="#contact" style={navLink}>Contact</a>
          </nav>
        </div>
      </header>

      <main style={container}>
        <section style={hero}>
          <div>
            <h2 style={heroTitle}>Hi — I’m <span style={{color: '#0f62fe'}}>Sofia Noor Rafa</span>.</h2>
            <p style={lead}>
              Wannabe Techie · Columnist · Writer. Based in Dhaka, Bangladesh — computer technology is my thing and writing about society, education, and tech.
            </p>

            <div style={ctaRow}>
              <a href="#contact" style={primaryBtn}>Get in touch</a>
              <a href="https://github.com/sofiautilitarian" style={ghostBtn} target="_blank" rel="noreferrer">GitHub</a>
            </div>

            <p style={{marginTop: 14, color: '#556'}}>
              👩‍🎓 Academia and Industry are both my passions 👩‍💻• Columnist at <em>The Financial Express</em> • Contributor to <em>The Daily Star</em>
            </p>
          </div>

          <div style={heroCard}>
            <p style={{margin:0}}>
              Public writing includes opinion and social commentary on education and gender norms; technical and lifestyle
              pieces appear on The Daily Star and personal posts are on Medium.
            </p>
          </div>
        </section>

        <section id="about" style={section}>
          <h3 style={sectionTitle}>About</h3>
          <p>
            Sofia writes across social issues and technology. She works as a Research Assistant at East West University,
            writes columns for <em>The Financial Express</em>, and has published features for <em>The Daily Star</em>.
            She also shares essays and reflections on Medium ({" "}
            <a href="https://sofiautilitarian.medium.com" style={link} target="_blank" rel="noreferrer">sofiautilitarian</a>).
          </p>
        </section>

        <section id="works" style={section}>
          <h3 style={sectionTitle}>Selected Works & Links</h3>

          <ul>
            <li>
              <strong>Column: Why education must challenge gender norms</strong> — <em>The Financial Express</em>.
              <br />
              <a href="https://today.thefinancialexpress.com.bd/education-youth/why-education-must-challenge-gender-norms-1741449537" target="_blank" rel="noreferrer" style={link}>
                Read on The Financial Express →
              </a>
            </li>

            <li style={{marginTop: 12}}>
              <strong>Contributor at The Daily Star</strong> — articles and lifestyle pieces.
              <br />
              <a href="https://www.thedailystar.net/author/sofia-noor-rafa" target="_blank" rel="noreferrer" style={link}>
                Sofia’s Daily Star contributions →
              </a>
            </li>

            <li style={{marginTop: 12}}>
              <strong>Personal essays</strong> — Medium.
              <br />
              <a href="https://sofiautilitarian.medium.com" target="_blank" rel="noreferrer" style={link}>Medium blog →</a>
            </li>

            <li style={{marginTop: 12}}>
              <strong>Code & projects</strong> — GitHub:{" "}
              <a href="https://github.com/sofiautilitarian" target="_blank" rel="noreferrer" style={link}>github.com/sofiautilitarian</a>
            </li>
          </ul>
        </section>

        <section id="contact" style={section}>
          <h3 style={sectionTitle}>Contact</h3>
          <p>If you'd like to collaborate or mention something, email or connect:</p>

          <p>
            <a href="mailto:sofiautilitarian@gmail.com" style={primaryLink}>sofia@example.com</a>
          </p>

          <p style={{fontSize: 13, color: '#666'}}>
            Replace the email address with Sofia’s preferred contact address before publishing. Also update the case study links above.
          </p>

          <div style={{marginTop: 12}}>
            <a href="https://www.linkedin.com/in/sofia-noor-rafa-8292a21bb" target="_blank" rel="noreferrer" style={link}>LinkedIn</a>
            {" • "}
            <a href="https://github.com/sofiautilitarian" target="_blank" rel="noreferrer" style={link}>GitHub</a>
            {" • "}
            <a href="https://sofiautilitarian.medium.com" target="_blank" rel="noreferrer" style={link}>Medium</a>
          </div>
        </section>

        <footer style={footer}>
          <div style={container}>
            <p style={{margin:0}}>© {new Date().getFullYear()} Sofia Noor Rafa • Based in Dhaka</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

/* ---------- Styles ---------- */
const container = {
  maxWidth: 980,
  margin: '0 auto',
  padding: '0 20px'
};

const containerHeader = {
  maxWidth: 980,
  margin: '0 auto',
  padding: '0 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const root = {
  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
  color: '#0b1220',
  lineHeight: 1.6,
  background: '#fbfdff',
  minHeight: '100vh'
};

const header = {
  borderBottom: '1px solid rgba(15,18,32,0.06)',
  background: 'white',
  position: 'sticky',
  top: 0,
  zIndex: 40,
  padding: '0 0'
};

const logo = {
  fontSize: 20,
  fontWeight: 700,
  margin: '16px 0'
};

const nav = {
  display: 'flex',
  gap: 14,
  alignItems: 'center'
};

const navLink = {
  color: '#0b1220',
  textDecoration: 'none',
  fontSize: 14
};

const hero = {
  display: 'grid',
  gridTemplateColumns: '1fr 320px',
  gap: 24,
  alignItems: 'center',
  padding: '56px 0'
};

const heroTitle = {
  fontSize: 36,
  margin: '0 0 8px'
};

const lead = {
  color: '#374151',
  margin: '0 0 18px'
};

const ctaRow = {
  display: 'flex',
  gap: 12
};

const primaryBtn = {
  display: 'inline-block',
  padding: '10px 16px',
  background: '#0f62fe',
  color: 'white',
  borderRadius: 8,
  textDecoration: 'none'
};

const ghostBtn = {
  display: 'inline-block',
  padding: '10px 16px',
  background: 'transparent',
  color: '#0f62fe',
  borderRadius: 8,
  border: '1px solid rgba(15,98,254,0.12)',
  textDecoration: 'none'
};

const heroCard = {
  background: 'linear-gradient(180deg, #ffffff, #f6fbff)',
  padding: 18,
  borderRadius: 12,
  boxShadow: '0 6px 20px rgba(12,22,48,0.06)'
};

const section = {
  padding: '28px 0 48px',
  borderTop: '1px solid rgba(15,18,32,0.03)'
};

const sectionTitle = {
  fontSize: 18,
  margin: '0 0 12px'
};

const link = {
  color: '#0f62fe',
  textDecoration: 'none',
  fontWeight: 600
};

const primaryLink = {
  color: '#0f62fe',
  textDecoration: 'none',
  fontWeight: 600
};

const footer = {
  padding: '20px 0',
  borderTop: '1px solid rgba(15,18,32,0.04)',
  marginTop: 30
};

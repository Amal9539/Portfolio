// import React from 'react'
// import a from '../assets/a.jpeg'
// const Footer = () => {
//   return (
//     <div>
//       <div style={{backgroundColor:"lightblue",color:"white",padding:"10px",paddingtop:"50px"}}>
//         <img src={a} alt="Logo"  style={{height:"120px"}}/>
//         <h2>Amal P</h2>
//         <h4>Full Stack Developer</h4>
//         <p>2026 Amal P.All rights reserved.</p>
//       </div>
//     </div>
//   )
// }

// export default Footer


import React from 'react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .ft-root {
    position: relative;
    background: #07070d;
    font-family: 'Inter', sans-serif;
    color: #e0e0f0;
    overflow: hidden;
    border-top: 1px solid rgba(255,255,255,0.06);
  }

  /* ── Glow line at top ── */
  .ft-glow-line {
    position: absolute;
    top: 0; left: 10%; right: 10%;
    height: 1px;
    background: linear-gradient(90deg, transparent, #a855f7 40%, #06b6d4 60%, transparent);
    filter: blur(1px);
    z-index: 1;
  }

  /* ── Main body ── */
  .ft-body {
    position: relative;
    z-index: 1;
    max-width: 1080px;
    margin: 0 auto;
    padding: 64px 32px 40px;
  }

  /* ── Top grid ── */
  .ft-grid {
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr 1fr;
    gap: 48px;
    margin-bottom: 56px;
  }
  @media (max-width: 900px) {
    .ft-grid { grid-template-columns: 1fr 1fr; gap: 36px; }
  }
  @media (max-width: 520px) {
    .ft-grid { grid-template-columns: 1fr; gap: 32px; }
    .ft-body { padding: 48px 20px 32px; }
  }

  /* ── Brand column ── */
  .ft-brand {}
  .ft-avatar-wrap {
    position: relative;
    display: inline-block;
    margin-bottom: 18px;
  }
  .ft-avatar {
    width: 72px; height: 72px;
    border-radius: 18px;
    object-fit: cover;
    display: block;
    border: 2px solid rgba(168,85,247,0.4);
    position: relative;
    z-index: 1;
  }
  .ft-avatar-ring {
    position: absolute;
    inset: -5px;
    border-radius: 22px;
    border: 1px solid rgba(168,85,247,0.2);
    animation: ringPulse 3s ease-in-out infinite;
  }
  @keyframes ringPulse {
    0%, 100% { opacity: 0.2; transform: scale(1); }
    50%       { opacity: 0.6; transform: scale(1.04); }
  }
  .ft-name {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.35rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: -0.02em;
    margin-bottom: 4px;
  }
  .ft-role {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.78rem;
    color: #a855f7;
    margin-bottom: 14px;
  }
  .ft-role::before { content: '< '; }
  .ft-role::after  { content: ' />'; }
  .ft-bio {
    font-size: 0.85rem;
    color: #66667a;
    line-height: 1.7;
    margin-bottom: 20px;
    max-width: 240px;
  }

  /* status badge */
  .ft-status {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-size: 0.75rem;
    color: #06b6d4;
    background: rgba(6,182,212,0.08);
    border: 1px solid rgba(6,182,212,0.2);
    padding: 5px 12px;
    border-radius: 100px;
  }
  .ft-status-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: #06b6d4;
    animation: blink 2s ease-in-out infinite;
  }
  @keyframes blink {
    0%,100% { opacity: 1; } 50% { opacity: 0.3; }
  }

  /* ── Column headings ── */
  .ft-col-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #44445a;
    margin-bottom: 20px;
  }
  .ft-links {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .ft-link {
    font-size: 0.88rem;
    color: #7777a0;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: color 0.2s, gap 0.2s;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }
  .ft-link::before {
    content: '→';
    font-size: 0.8rem;
    color: #a855f7;
    opacity: 0;
    transition: opacity 0.2s;
  }
  .ft-link:hover { color: #e0e0f0; gap: 12px; }
  .ft-link:hover::before { opacity: 1; }

  /* ── Tech stack pills ── */
  .ft-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
  }
  .ft-stack-chip {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    padding: 4px 10px;
    border-radius: 6px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    color: #7777a0;
    transition: background 0.2s, color 0.2s, border-color 0.2s;
    cursor: default;
  }
  .ft-stack-chip:hover {
    background: rgba(168,85,247,0.1);
    border-color: rgba(168,85,247,0.3);
    color: #c084fc;
  }

  /* ── Divider ── */
  .ft-divider {
    height: 1px;
    background: rgba(255,255,255,0.06);
    margin-bottom: 28px;
  }

  /* ── Bottom bar ── */
  .ft-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
  }
  .ft-copy {
    font-size: 0.8rem;
    color: #44445a;
  }
  .ft-copy span { color: #a855f7; }

  /* ── Social icons ── */
  .ft-socials {
    display: flex;
    gap: 10px;
  }
  .ft-social-btn {
    width: 38px; height: 38px;
    border-radius: 10px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    transition: background 0.2s, border-color 0.2s, transform 0.2s;
    text-decoration: none;
    color: #7777a0;
  }
  .ft-social-btn:hover {
    background: rgba(168,85,247,0.12);
    border-color: rgba(168,85,247,0.35);
    color: #a855f7;
    transform: translateY(-3px);
  }
  .ft-social-btn svg { width: 16px; height: 16px; }

  .ft-made-with {
    font-size: 0.78rem;
    color: #33334a;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .ft-made-with span { color: #a855f7; }

  @media (prefers-reduced-motion: reduce) {
    .ft-avatar-ring, .ft-status-dot { animation: none !important; }
  }
`;


const techStack = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'REST API',,'Java', 'Git','GitHub','HTML5','Next.js','Bootstrap','Tailwind CSS','Python','MySQL',];
const services  = ['Web Development', 'API Integration', 'UI/UX Design', 'Code Review', 'Mentoring'];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <style>{styles}</style>
      <footer className="ft-root">
        <div className="ft-glow-line" />

        <div className="ft-body">
          <div className="ft-grid">

            {/* ── Brand ── */}
            <div className="ft-brand">
             
              <div className="ft-name">Amal P</div>
              <div className="ft-role">Full Stack Developer</div>
              <p className="ft-bio">
                Building fast, accessible, and scalable web products with the MERN stack.
              </p>
              <div className="ft-status">
                <div className="ft-status-dot" />
                Available for opportunities
              </div>
            </div>

            {/* ── Navigation ── */}
           

            {/* ── Services ── */}
            <div>
              <div className="ft-col-title">Services</div>
              <div className="ft-links">
                {services.map(s => (
                  <span key={s} className="ft-link">{s}</span>
                ))}
              </div>
            </div>

            {/* ── Tech stack ── */}
            <div>
              <div className="ft-col-title">Tech Stack</div>
              <div className="ft-stack">
                {techStack.map(t => (
                  <span key={t} className="ft-stack-chip">{t}</span>
                ))}
              </div>
            </div>

          </div>

          <div className="ft-divider" />

          <div className="ft-bottom">
            <div className="ft-copy">
              © {year} <span>Amal P</span>. All rights reserved.
            </div>

            <div className="ft-socials">
              {/* GitHub */}
              <a href="https://github.com/Amal9539" target="_blank" rel="noreferrer" className="ft-social-btn" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="linkedin.com/in/amal-p-984312253" target="_blank" rel="noreferrer" className="ft-social-btn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* Twitter / X */}
              
              {/* Email */}
              <a href="amalp2834@gmail.com" className="ft-social-btn" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>

            <div className="ft-made-with">
              Built with <span>♥</span> using MERN Stack
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
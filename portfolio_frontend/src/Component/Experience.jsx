// import React from 'react'
// import Card from 'react-bootstrap/Card';
// const Experience = () => {
//   return (
//     <div>
//       <div style={{textAlign:"center"}}>
//         <h1>My Experience</h1>
//         <p>Profectional Journey and key achievments</p>
//       </div>
//       <div>
//         <Card style={{ width: '18rem',justifyContent:"center",margin:"20px auto" }}>
//       <Card.Body>
//         <Card.Title style={{fontSize:"1.5rem", fontWeight:"bold"}} >Allpro Techlabs</Card.Title>
//         <Card.Text>
//           <h3>Malappuram,kerala</h3>
//           <h2>Intern</h2>
//           <h3>Date:Dec 2025 -Jun 2026</h3>
//           <p>Contributed to the development of full-stack web applications using the MERN stack, ensuring scalability, maintainability, and efficiency 
//             Assisted senior developers in designing modular and reusable codebases that improved development speed and reduced errors Actively participated in peer code reviews to identify bugs, suggest improvements, and uphold coding standards Debugged, optimized, and enhanced application performance, resulting in smoother user interactions and reduced load times Collaborated closely with team members in an agile environment, consistently meeting project timelines</p>
//             <div style={{display:"flex",justifyContent:"space-around"}}>
//               <h3 style={{margin:"10px",border:"1px solid #ccc",borderradius:"5px"}}>Express.js</h3>
//               <h3 style={{margin:"10px",border:"1px solid #ccc",padding:"5px",borderradius:"5px"}}>Javascript</h3>
//               <h3 style={{margin:"10px",border:"1px solid #ccc",padding:"5px",borderradius:"5px"}}>Node.js</h3>
//               <h3 style={{margin:"10px",border:"1px solid #ccc",padding:"5px",borderradius:"5px"}}>MongoDB</h3>
//               <h3 style={{margin:"10px",border:"1px solid #ccc",padding:"5px",borderradius:"5px"}}>React.js</h3>
//             </div>
//         </Card.Text>
//       </Card.Body>
//     </Card>
//       </div>
//     </div>
//   )
// }

// export default Experience




import React, { useEffect, useRef } from 'react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .exp-root {
    minHeight: '100vh',
    background: dark ? '#0a0a0f' : '#F4F7FF',
    color: dark ? '#e8e8f0' : '#101828',
    transition: 'background .35s,color .35s'
  }

  /* ── Particle Canvas ── */
  .exp-canvas {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
  }

  /* ── Gradient orbs ── */
  .orb {
    position: fixed;
    border-radius: 50%;
    filter: blur(90px);
    opacity: 0.15;
    pointer-events: none;
    z-index: 0;
    animation: drift 18s ease-in-out infinite alternate;
  }
  .orb-1 {
    width: 500px; height: 500px;
    background: radial-gradient(circle, #6c63ff, transparent);
    top: -150px; left: -150px;
    animation-delay: 0s;
  }
  .orb-2 {
    width: 400px; height: 400px;
    background: radial-gradient(circle, #00d4aa, transparent);
    bottom: -100px; right: -100px;
    animation-delay: -9s;
  }
  .orb-3 {
    width: 300px; height: 300px;
    background: radial-gradient(circle, #ff6b6b, transparent);
    top: 40%; left: 60%;
    animation-delay: -4s;
  }

  @keyframes drift {
    0%   { transform: translate(0, 0) scale(1); }
    50%  { transform: translate(40px, -30px) scale(1.05); }
    100% { transform: translate(-20px, 50px) scale(0.95); }
  }

  /* ── Layout ── */
  .exp-content {
    position: relative;
    z-index: 1;
    max-width: 860px;
    margin: 0 auto;
    padding: 80px 24px 100px;
  }

  /* ── Header ── */
  .exp-header {
    margin-bottom: 64px;
  }
  .exp-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #6c63ff;
    margin-bottom: 16px;
  }
  .exp-eyebrow::before {
    content: '';
    display: block;
    width: 24px;
    height: 2px;
    background: #6c63ff;
    border-radius: 2px;
  }
  .exp-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2.2rem, 5vw, 3.6rem);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.03em;
    color: #ffffff;
    margin-bottom: 16px;
  }
  .exp-title span {
    background: linear-gradient(135deg, #6c63ff 0%, #00d4aa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .exp-subtitle {
    font-size: 1rem;
    color: #8888a8;
    font-weight: 300;
    line-height: 1.6;
  }

  /* ── Timeline track ── */
  .timeline {
    position: relative;
    padding-left: 32px;
  }
  .timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 12px;
    bottom: 12px;
    width: 2px;
    background: linear-gradient(to bottom, #6c63ff, #00d4aa);
    border-radius: 2px;
  }

  /* ── Experience Card ── */
  .exp-card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.09);
    border-radius: 20px;
    padding: 36px;
    position: relative;
    backdrop-filter: blur(12px);
    transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
    margin-bottom: 32px;
    animation: fadeUp 0.7s ease both;
  }
  .exp-card:hover {
    border-color: rgba(108, 99, 255, 0.45);
    transform: translateY(-4px);
    box-shadow: 0 24px 64px rgba(108, 99, 255, 0.12);
  }

  /* dot on timeline */
  .exp-card::before {
    content: '';
    position: absolute;
    left: -39px;
    top: 32px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #6c63ff;
    box-shadow: 0 0 0 4px rgba(108,99,255,0.2);
    border: 2px solid #0a0a0f;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── Card internals ── */
  .card-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 8px;
  }
  .company-name {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: -0.02em;
  }
  .date-badge {
    font-size: 0.78rem;
    font-weight: 500;
    color: #6c63ff;
    background: rgba(108,99,255,0.12);
    border: 1px solid rgba(108,99,255,0.25);
    padding: 5px 14px;
    border-radius: 100px;
    white-space: nowrap;
  }
  .role-location {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }
  .role {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: #00d4aa;
  }
  .location {
    font-size: 0.85rem;
    color: #6666888;
    display: flex;
    align-items: center;
    gap: 5px;
    color: #888899;
  }
  .location svg { flex-shrink: 0; }

  .divider {
    height: 1px;
    background: rgba(255,255,255,0.07);
    margin: 20px 0;
  }

  .desc {
    font-size: 0.92rem;
    color: #a0a0c0;
    line-height: 1.8;
    margin-bottom: 24px;
  }

  /* ── Skills ── */
  .skills-label {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #55556a;
    margin-bottom: 12px;
  }
  .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .skill-chip {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.8rem;
    font-weight: 500;
    padding: 6px 14px;
    border-radius: 8px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    color: #ccccdd;
    transition: background 0.2s, color 0.2s, border-color 0.2s;
  }
  .skill-chip:hover {
    background: rgba(108, 99, 255, 0.15);
    border-color: rgba(108, 99, 255, 0.4);
    color: #a09fff;
  }

  /* ── Responsive ── */
  @media (max-width: 540px) {
    .exp-content { padding: 48px 16px 64px; }
    .exp-card { padding: 24px; }
    .timeline { padding-left: 24px; }
    .exp-card::before { left: -31px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .orb, .exp-card { animation: none !important; transition: none !important; }
  }
`;

const Experience = ({ dark }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let W, H, particles;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    const init = () => {
      resize();
      particles = Array.from({ length: 80 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.5 + 0.4,
        dx: (Math.random() - 0.5) * 0.35,
        dy: (Math.random() - 0.5) * 0.35,
        alpha: Math.random() * 0.5 + 0.1,
        hue: Math.random() > 0.5 ? 255 : 170, // purple vs teal
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${p.alpha})`;
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > W) p.dx *= -1;
        if (p.y < 0 || p.y > H) p.dy *= -1;
      }

      // draw faint connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(108,99,255,${0.06 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const skills = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript'];

  const bullets = [
    'Built full-stack features using the MERN stack with a focus on scalability and clean architecture.',
    'Worked with senior engineers to design modular, reusable components that sped up delivery.',
    'Participated in code reviews, caught bugs early, and helped raise overall code quality.',
    'Profiled and optimized rendering bottlenecks, cutting perceived load times noticeably.',
    'Collaborated in an agile team rhythm — standups, sprints, and consistent on-time shipping.',
  ];

  return (
    <>
      <style>{styles}</style>
      <div className="exp-root">
        <canvas ref={canvasRef} className="exp-canvas" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        <div className="exp-content">
          <div className="exp-header">
            <div className="exp-eyebrow">Experience</div>
            <h1 className="exp-title">
              My Professional <span>Journey</span>
            </h1>
            <p className="exp-subtitle">Where I've worked, what I built, and what I learned.</p>
          </div>

          <div className="timeline">
            <div className="exp-card">
              <div className="card-top">
                <div className="company-name">Allpro Techlabs</div>
                <div className="date-badge">Dec 2025 – Jun 2026</div>
              </div>

              <div className="role-location">
                <div className="role">Software Development Intern</div>
                <div className="location">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                  Malappuram, Kerala
                </div>
              </div>

              <div className="divider" />

              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px' }}>
                {bullets.map((b, i) => (
                  <li key={i} style={{
                    display: 'flex',
                    gap: '12px',
                    fontSize: '0.92rem',
                    color: '#a0a0c0',
                    lineHeight: '1.7',
                    marginBottom: '10px',
                  }}>
                    <span style={{ color: '#6c63ff', marginTop: '2px', flexShrink: 0 }}>▸</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="skills-label">Tech Stack</div>
              <div className="skills-list">
                {skills.map(s => (
                  <span key={s} className="skill-chip">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
// import React from 'react'
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';


// const Contact = () => {
//   return (
//     <div>
//       <div>Get In Touch
//       <p>Feel free to reach out to me!</p>
//       </div>
//       <div>
//         <h3>Let's Connect!</h3>
//         <p>i am always open to discussing new projects, creative ideas, or potential collaborations. </p>
//       </div>
//       <div>
//          <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Name</Form.Label>
//         <Form.Control type="email" placeholder="Your Name" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Email</Form.Label>
//         <Form.Control type="email" placeholder="Your Email" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Email</Form.Label>
//         <Form.Control type="email" placeholder="Your Email" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Message</Form.Label>
//         <Form.Control type="text" placeholder="Your Message" />
//       </Form.Group>

//       {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//         <Form.Label>Message</Form.Label>
//         <Form.Control as="textarea" rows={3} />
//       </Form.Group> */}
//       <Button variant="primary" type="submit">
//         Send Message
//       </Button>
//     </Form>
//       </div>
//     </div>
//   )
// }

// export default Contact



import React, { useEffect, useRef, useState } from 'react';

const getStyles = (dark) => `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .ct-root {
    min-height: 100vh;
    background: ${dark ? '#07070d' : '#f5f5ff'};
    font-family: 'Inter', sans-serif;
    color: ${dark ? '#e0e0f0' : '#111827'};
    transition: background 0.35s, color 0.35s;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
  }

  .ct-canvas {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    opacity: ${dark ? '1' : '0.35'};
  }

  .ct-orb {
    position: fixed;
    border-radius: 50%;
    filter: blur(110px);
    opacity: ${dark ? '0.13' : '0.18'};
    pointer-events: none;
    z-index: 0;
  }
  .ct-orb-1 {
    width: 560px; height: 560px;
    background: radial-gradient(circle, #a855f7, transparent);
    top: -180px; right: -140px;
    animation: orbFloat1 20s ease-in-out infinite alternate;
  }
  .ct-orb-2 {
    width: 420px; height: 420px;
    background: radial-gradient(circle, #06b6d4, transparent);
    bottom: -120px; left: -100px;
    animation: orbFloat2 25s ease-in-out infinite alternate;
  }
  @keyframes orbFloat1 {
    from { transform: translate(0,0) scale(1); }
    to   { transform: translate(-40px, 60px) scale(1.08); }
  }
  @keyframes orbFloat2 {
    from { transform: translate(0,0) scale(1); }
    to   { transform: translate(50px, -40px) scale(1.06); }
  }

  .ct-layout {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 56px;
    max-width: 1000px;
    width: 100%;
    align-items: start;
  }
  @media (max-width: 720px) {
    .ct-layout { grid-template-columns: 1fr; gap: 40px; }
  }

  .ct-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #a855f7;
    margin-bottom: 18px;
  }
  .ct-eyebrow::before {
    content: '';
    display: block;
    width: 22px; height: 2px;
    background: #a855f7;
    border-radius: 2px;
  }

  .ct-heading {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2rem, 4.5vw, 3.2rem);
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.1;
    color: ${dark ? '#ffffff' : '#0f0a1a'};
    margin-bottom: 18px;
    transition: color 0.35s;
  }
  .ct-heading span {
    background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .ct-subtext {
    font-size: 0.95rem;
    color: ${dark ? '#7777a0' : '#555570'};
    line-height: 1.75;
    margin-bottom: 40px;
    max-width: 320px;
    transition: color 0.35s;
  }

  /* ── Info items ── */
  .ct-info-list { display: flex; flex-direction: column; gap: 18px; }
  .ct-info-item { display: flex; align-items: center; gap: 14px; }

  .ct-info-icon {
    width: 42px; height: 42px;
    border-radius: 12px;
    background: ${dark ? 'rgba(168,85,247,0.1)' : 'rgba(168,85,247,0.12)'};
    border: 1px solid ${dark ? 'rgba(168,85,247,0.2)' : 'rgba(168,85,247,0.3)'};
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    transition: background 0.2s, border-color 0.2s;
  }
  .ct-info-item:hover .ct-info-icon {
    background: rgba(168,85,247,0.2);
    border-color: rgba(168,85,247,0.5);
  }
  .ct-info-icon svg { width: 18px; height: 18px; color: #a855f7; }

  .ct-info-label {
    font-size: 0.72rem;
    color: ${dark ? '#55556a' : '#888899'};
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 2px;
    transition: color 0.35s;
  }
  .ct-info-value {
    font-size: 0.9rem;
    color: ${dark ? '#c0c0e0' : '#2a2a4a'};
    font-weight: 400;
    transition: color 0.35s;
  }

  /* ── Form card ── */
  .ct-card {
    background: ${dark ? 'rgba(255,255,255,0.035)' : 'rgba(255,255,255,0.75)'};
    border: 1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(168,85,247,0.18)'};
    border-radius: 24px;
    padding: 40px 36px;
    backdrop-filter: blur(16px);
    box-shadow: ${dark ? 'none' : '0 8px 40px rgba(168,85,247,0.08)'};
    animation: fadeUp 0.7s ease both;
    transition: background 0.35s, border-color 0.35s;
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .ct-form { display: flex; flex-direction: column; gap: 20px; }
  .ct-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  @media (max-width: 480px) { .ct-row { grid-template-columns: 1fr; } }

  .ct-field { display: flex; flex-direction: column; gap: 7px; }

  .ct-label {
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${dark ? '#66668a' : '#7755aa'};
    transition: color 0.35s;
  }

  .ct-input, .ct-textarea {
    background: ${dark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.9)'};
    border: 1px solid ${dark ? 'rgba(255,255,255,0.1)' : 'rgba(168,85,247,0.25)'};
    border-radius: 12px;
    padding: 12px 16px;
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;
    color: ${dark ? '#e0e0f0' : '#1a1a2e'};
    outline: none;
    transition: border-color 0.25s, box-shadow 0.25s, background 0.25s;
    width: 100%;
  }
  .ct-input::placeholder, .ct-textarea::placeholder {
    color: ${dark ? '#444466' : '#aaaacc'};
  }
  .ct-input:focus, .ct-textarea:focus {
    border-color: rgba(168,85,247,0.6);
    box-shadow: 0 0 0 3px rgba(168,85,247,0.12);
    background: ${dark ? 'rgba(168,85,247,0.05)' : 'rgba(168,85,247,0.04)'};
  }
  .ct-textarea { resize: vertical; min-height: 110px; }

  /* ── Submit button ── */
  .ct-btn {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 14px 28px;
    border-radius: 14px;
    border: none;
    background: linear-gradient(135deg, #a855f7, #06b6d4);
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.95rem;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
    width: 100%;
    letter-spacing: 0.01em;
  }
  .ct-btn:hover {
    opacity: 0.92;
    transform: translateY(-2px);
    box-shadow: 0 12px 36px rgba(168,85,247,0.35);
  }
  .ct-btn:active { transform: translateY(0); }
  .ct-btn-ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255,255,255,0.25);
    width: 0; height: 0;
    transform: translate(-50%,-50%);
    animation: ripple 0.6s ease-out forwards;
    pointer-events: none;
  }
  @keyframes ripple {
    to { width: 300px; height: 300px; opacity: 0; }
  }

  /* ── Success state ── */
  .ct-success {
    text-align: center;
    padding: 24px 0 8px;
    animation: fadeUp 0.5s ease both;
  }
  .ct-success-icon {
    width: 56px; height: 56px;
    border-radius: 50%;
    background: rgba(6,182,212,0.12);
    border: 1px solid rgba(6,182,212,0.3);
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 16px;
  }
  .ct-success p { font-size: 0.95rem; color: ${dark ? '#7777a0' : '#555570'}; line-height: 1.6; }
  .ct-success h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
    color: ${dark ? '#fff' : '#0f0a1a'};
    margin-bottom: 8px;
  }

  @media (prefers-reduced-motion: reduce) {
    .ct-orb-1, .ct-orb-2, .ct-card { animation: none !important; }
  }
`;

function SignalCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    let raf, t = 0;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);
    const waves = [
      { amp: 38, freq: 0.008, speed: 0.018, y: 0.30, color: 'rgba(168,85,247,', thick: 1.2 },
      { amp: 28, freq: 0.010, speed: 0.024, y: 0.50, color: 'rgba(6,182,212,',  thick: 0.9 },
      { amp: 22, freq: 0.013, speed: 0.030, y: 0.70, color: 'rgba(168,85,247,', thick: 0.7 },
      { amp: 18, freq: 0.007, speed: 0.014, y: 0.20, color: 'rgba(6,182,212,',  thick: 0.5 },
      { amp: 14, freq: 0.015, speed: 0.038, y: 0.85, color: 'rgba(168,85,247,', thick: 0.4 },
    ];
    const draw = () => {
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      for (const w of waves) {
        const baseY = H * w.y;
        ctx.beginPath();
        for (let x = 0; x <= W; x++) {
          const y = baseY + Math.sin(x * w.freq + t * w.speed * 60) * w.amp;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        const grad = ctx.createLinearGradient(0, 0, W, 0);
        grad.addColorStop(0,   w.color + '0)');
        grad.addColorStop(0.2, w.color + '0.5)');
        grad.addColorStop(0.5, w.color + '0.8)');
        grad.addColorStop(0.8, w.color + '0.5)');
        grad.addColorStop(1,   w.color + '0)');
        ctx.strokeStyle = grad;
        ctx.lineWidth = w.thick;
        ctx.stroke();
      }
      t++;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={ref} className="ct-canvas" />;
}

const Contact = ({ dark = false }) => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const btnRef = useRef(null);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const btn = btnRef.current;
    const span = document.createElement('span');
    span.className = 'ct-btn-ripple';
    const rect = btn.getBoundingClientRect();
    span.style.left = `${e.clientX - rect.left}px`;
    span.style.top  = `${e.clientY - rect.top}px`;
    btn.appendChild(span);
    span.addEventListener('animationend', () => span.remove());
    setTimeout(() => {
      setSent(true);
      const message = `Name: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`;
      const whatsappNumber = '9562612834';
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    }, 500);
  };

  return (
    <>
      <style>{getStyles(dark)}</style>
      <div className="ct-root">
        <SignalCanvas />
        <div className="ct-orb ct-orb-1" />
        <div className="ct-orb ct-orb-2" />

        <div className="ct-layout">
          <div className="ct-left">
            <div className="ct-eyebrow">Contact</div>
            <h1 className="ct-heading">
              Let's Build<br /><span>Something</span> Together
            </h1>
            <p className="ct-subtext">
              I'm always open to new projects, creative ideas, and collaborations.
              Drop me a message — I usually reply within 24 hours.
            </p>

            <div className="ct-info-list">
              <div className="ct-info-item">
                <div className="ct-info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className="ct-info-label">Email</div>
                  <div className="ct-info-value">amalp2834@gmail.com</div>
                </div>
              </div>

              <div className="ct-info-item">
                <div className="ct-info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                </div>
                <div>
                  <div className="ct-info-label">Location</div>
                  <div className="ct-info-value">Kozhikode, Kerala</div>
                </div>
              </div>

              <div className="ct-info-item">
                <div className="ct-info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
                <div>
                  <div className="ct-info-label">LinkedIn</div>
                  <div className="ct-info-value">linkedin.com/in/amal-p-984312253</div>
                </div>
              </div>
            </div>
          </div>

          <div className="ct-card">
            {sent ? (
              <div className="ct-success">
                <div className="ct-success-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3>Message sent!</h3>
                <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="ct-form" onSubmit={handleSubmit}>
                <div className="ct-row">
                  <div className="ct-field">
                    <label className="ct-label">Name</label>
                    <input className="ct-input" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                  </div>
                  <div className="ct-field">
                    <label className="ct-label">Email</label>
                    <input className="ct-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@email.com" required />
                  </div>
                </div>
                <div className="ct-field">
                  <label className="ct-label">Subject</label>
                  <input className="ct-input" name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" required />
                </div>
                <div className="ct-field">
                  <label className="ct-label">Message</label>
                  <textarea className="ct-textarea" name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project or idea..." required />
                </div>
                <button className="ct-btn" type="submit" ref={btnRef}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
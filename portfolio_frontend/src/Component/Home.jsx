// import React from 'react'
// import Amal from '../assets/Amal.jpeg'
// import Skills from './Skills'
// import Project from './Project'
// import Experience from './Experience'
// import Contact from './Contact'
// import Footer from './Footer'
// const Home = () => {
//   return (
//     <div>
        
//       <img src={Amal} style={{marginLeft:"350px", width:"50%",marginTop:"100px",borderRadius:"10px"}} alt="" />
//       <div>
//         <Skills/>
//         <Project/>
//         <Experience/>
//         <Contact/>
//         <Footer/>
//       </div>
//     </div>
//   )
// }

// export default Home

import React, { useEffect, useRef, useState } from 'react'
import Amal from '../assets/Amal.jpeg'
import Skills from './Skills'
import Project from './Project'
import Experience from './Experience'
import Contact from './Contact'
import Footer from './Footer'
import { Link, Links } from 'react-router-dom'

const Home = () => {
  const canvasRef = useRef(null)
  const [dark, setDark] = useState(true)

  const colors = dark
    ? { bg: '#0A0F1E', text: '#E8F0FE', accent: '#00D4FF', accent2: '#39FF6E', muted: '#8899BB', surface: '#0D1525', border: '#1E2A45', pill: '#1E2A45', pillText: '#8BAED4', pillBorder: '#2A3E5E' }
    : { bg: '#F0F4FF', text: '#0D1225', accent: '#3A6BC8', accent2: '#7BAEF5', muted: '#4A5A7A', surface: '#EBF0FF', border: '#C0CFEE', pill: '#DDE8FF', pillText: '#2A4A8A', pillBorder: '#B8CEFF' }

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const pts = Array.from({ length: 45 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      c: dark
        ? ['#00D4FF', '#39FF6E', '#3FA35A'][Math.floor(Math.random() * 3)]
        : ['#3A6BC8', '#7BAEF5', '#A0C4FF'][Math.floor(Math.random() * 3)]
    }))

    const frame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      pts.forEach((p, i) => {
        p.x = (p.x + p.vx + canvas.width) % canvas.width
        p.y = (p.y + p.vy + canvas.height) % canvas.height
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.c + '66'; ctx.fill()
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j]
          const d = Math.hypot(p.x - q.x, p.y - q.y)
          if (d < 80) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = colors.accent + '18'
            ctx.lineWidth = 0.4; ctx.stroke()
          }
        }
      })
      animId = requestAnimationFrame(frame)
    }
    frame()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [dark])

  return (
    <div style={{ background: colors.bg, minHeight: '100vh', color: colors.text, fontFamily: "'Inter', sans-serif", transition: 'background 0.35s, color 0.35s', position: 'relative', overflow: 'hidden' }}>

      <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }} />

      {/* Theme toggle */}
      <button
        onClick={() => setDark(!dark)}
        style={{ position: 'fixed', top: 20, right: 24, zIndex: 100, background: dark ? '#1E2A45' : '#CBD5F0', border: 'none', borderRadius: 20, padding: '6px 12px', cursor: 'pointer', color: colors.accent, fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}
      >
        {dark ? '☀️ Light' : '🌙 Dark'}
      </button>

      {/* Hero — split layout */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: 48, padding: '100px 60px 60px', minHeight: '100vh', flexWrap: 'wrap' }}>

        {/* LEFT: text content */}
        <div style={{ flex: 1, minWidth: 280, display: 'flex', flexDirection: 'column', gap: 18 }}>
          <span style={{ fontSize: 12, letterSpacing: 2, fontWeight: 600, textTransform: 'uppercase', color: colors.accent }}>Welcome to my portfolio</span>

          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 42, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.5 }}>
            Amal P<br />
            <span style={{ color: colors.accent }}>Full Stack</span><br />
            <span style={{ color: colors.accent }}>Developer</span>
          </h1>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 20, fontSize: 13, fontWeight: 500, background: colors.pill, color: colors.pillText, border: `1px solid ${colors.pillBorder}`, width: 'fit-content' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: colors.accent2, display: 'inline-block', animation: 'blink 2s ease-in-out infinite' }} />
            Available for work
          </div>

          <p style={{ fontSize: 14, lineHeight: 1.75, color: colors.muted, maxWidth: 360 }}>
            I build end-to-end web applications using the MERN stack — from database design to pixel-perfect UIs.
          </p>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {[['MongoDB','#3FA35A','#0d1f13','#3FA35A44'],['Express.js','#D4A017','#1a1108','#D4A01744'],['React','#00D4FF','#101a26','#00D4FF44'],['Node.js','#39FF6E','#0d1f13','#39FF6E44']].map(([name, color, bg, border]) => (
              <span key={name} style={{ padding: '5px 12px', borderRadius: 16, fontSize: 12, fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif", background: dark ? bg : undefined, color: dark ? color : colors.accent, border: `1px solid ${dark ? border : colors.border}`, backgroundColor: dark ? bg : colors.surface }}>
                {name}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            <Link to="/project" style={{ textDecoration: 'none' }}>
            <button style={{ padding: '11px 24px', borderRadius: 8, background: colors.accent, color: dark ? '#0A0F1E' : '#fff', fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 700, border: 'none', cursor: 'pointer' }} >
              View Projects
            </button>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <button style={{ padding: '11px 24px', borderRadius: 8, background: 'transparent', color: colors.accent, fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 500, border: `1px solid ${colors.accent}44`, cursor: 'pointer' }}>
                Get in Touch
              </button>
            </Link>
          </div>

          <div style={{ display: 'flex', gap: 1, borderRadius: 10, overflow: 'hidden', background: colors.border, width: 'fit-content' }}>
            {[['4+', 'Projects'], ['10+', 'Skills'], ['6 Months', 'Experience']].map(([num, label], i) => (
              <div key={label} style={{ padding: '12px 20px', background: colors.surface, textAlign: 'center', borderRight: i < 2 ? `1px solid ${colors.border}` : 'none' }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700, color: colors.accent, display: 'block' }}>{num}</span>
                <span style={{ fontSize: 10, letterSpacing: 0.8, textTransform: 'uppercase', color: colors.muted, display: 'block' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: photo */}
        <div style={{ flex: '0 0 220px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: 210, height: 210, marginBottom: 16 }}>
            <div style={{ position: 'absolute', inset: -5, borderRadius: '50%', background: `conic-gradient(${colors.accent}, ${colors.accent2}, ${colors.accent})`, animation: 'spinr 5s linear infinite' }} />
            <div style={{ position: 'absolute', inset: -2, borderRadius: '50%', background: colors.bg }} />
            <img src={Amal} alt="Amal P" style={{ position: 'absolute', inset: 5, zIndex: 1, borderRadius: '50%', width: 'calc(100% - 10px)', height: 'calc(100% - 10px)', objectFit: 'cover' }} />
          </div>
          {/* <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 17, fontWeight: 700, color: colors.text }}>Amal P</div>
          <div style={{ fontSize: 12, color: colors.muted, marginTop: 3, letterSpacing: 0.5 }}>Full Stack Developer</div> */}
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 2 }}>
  <Skills dark={dark} />
  <Project dark={dark} />
  <Experience dark={dark} />
  <Contact dark={dark} />
  <Footer dark={dark} />
</div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@400;500&display=swap');
        @keyframes spinr { to { transform: rotate(360deg); } }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
      `}</style>
    </div>
  )
}

export default Home
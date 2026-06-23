// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import trfit from '../assets/trfit.png'
// import sjpng from '../assets/sjpng.png'
// import trinest from '../assets/trinest.jpeg'
// const Project = () => {    
//   return (
//     <div >
//         <div style={{textAlign:"center"}}>
//       <h1>Featured Projects</h1>
//       <p>Here are some of my featured projects</p>
//       </div>
//       <div style={{display:"flex",justifyContent:"space-around",margin:"100px"}}>
//       <div >
//       <Link to="/trendfit"
//       style={{ textDecoration: "none", color: "inherit" }}
//     >
//         <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={trfit} style={{ height: '120px', objectFit: 'cover' }} />
//       <Card.Body>
//         <Card.Title>Trend Fit</Card.Title>
//         <Card.Text>
//          Developed a fashion recommendation platform that delivers personalized outfit suggestions using machine learning techniques.
//         </Card.Text>
//         {/* <Button variant="primary">Go somewhere</Button> */}
//       </Card.Body>
//     </Card>
//     </Link>
//       </div>
       
//       <div>
//         <Link to="/sjproject"
//       style={{ textDecoration: "none", color: "inherit" }}
//     >
//         <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={sjpng} style={{ height: '120px', objectFit: 'cover' }} />
//       <Card.Body>
//         <Card.Title> Mobile Repair Shop Management</Card.Title>
//         <Card.Text>
//          SJMobiles is a web application designed to streamline mobile repair shop operations, providing efficient management of customer requests, repair tracking, and inventory control.
//         </Card.Text>
//         {/* <Button variant="primary">Go somewhere</Button> */}
//       </Card.Body>
//     </Card>
//     </Link>
//       </div>
//       <div>
//       <Link to="/tripnest"
//       style={{ textDecoration: "none", color: "inherit" }}
//     >
//         <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={trinest} style={{ height: '120px', objectFit: 'cover' }} />
//       <Card.Body>
//         <Card.Title>TripNest</Card.Title>
//         <Card.Text>
//           TripNest is a web application that provides users with personalized travel recommendations, allowing them to discover and plan trips based on their preferences and interests.
//         </Card.Text>
//         {/* <Button variant="primary">Go somewhere</Button> */}
//       </Card.Body>
//     </Card>
//     </Link>
//     </div>
//     </div>
//     </div>
//   )
// }

// export default Project


import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import trfit from '../assets/trfit.png';
import sjpng from '../assets/sjpng.png';
import trinest from '../assets/trinest.jpeg';
import h from '../assets/h.jpg';
const COLORS_LIGHT = ['#EEEDFE','#CECBF6','#AFA9EC','#E1F5EE','#9FE1CB','#FAEEDA','#FAC775','#5DCAA5','#7F77DD'];
const COLORS_DARK  = ['#3C3489','#534AB7','#7F77DD','#085041','#0F6E56','#633806','#854F0B','#1D9E75','#AFA9EC'];

const projects = [
  {
    to: '/trendfit',
    img: trfit,
    tag: 'ML',
    tagStyle: { background: '#EEEDFE', color: '#3C3489' },
    btnStyle: { background: '#EEEDFE', color: '#3C3489' },
    title: 'Trend Fit',
    desc: 'A fashion recommendation platform delivering personalized outfit suggestions using machine learning.',
    pills: ['Python', 'React'],
  },
  {
    to: '/sjproject',
    img: sjpng,
    tag: 'Web',
    tagStyle: { background: '#E1F5EE', color: '#085041' },
    btnStyle: { background: '#E1F5EE', color: '#085041' },
    title: 'SJ Mobiles',
    desc: 'Streamlines mobile repair shop operations — customer requests, repair tracking, and inventory control.',
    pills: ['Node.js', 'MongoDB'],
  },
  {
    to: '/tripnest',
    img: trinest,
    tag: 'Travel',
    tagStyle: { background: '#FAEEDA', color: '#633806' },
    btnStyle: { background: '#FAEEDA', color: '#633806' },
    title: 'TripNest',
    desc: 'Personalized travel recommendations — discover and plan trips based on your preferences.',
    pills: ['React', 'API'],
  },
  {
     to: '/hybridcloud',
    img: h,
    tag: 'Web',
    tagStyle: { background: '#FAEEDA', color: '#633806' },
    btnStyle: { background: '#FAEEDA', color: '#633806' },
    title: 'Hybrid Cloud',
    desc: 'At Hybrid Cloud, learning goes beyond theory. Based in Mahe, Hybrid Cloud provides personalized, hands-on training designed to prepare learners for real industry challenges and opportunities..',
    pills: ['React'],
  }
];

const rand = (a, b) => a + Math.random() * (b - a);

const Project = () => {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = wrap.offsetWidth;
      canvas.height = wrap.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const isDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

    const particles = Array.from({ length: 45 }, () => ({
      x: rand(0, 700), y: rand(0, 600),
      r: rand(4, 16),
      vx: rand(-0.35, 0.35), vy: rand(-0.35, 0.35),
      ci: Math.floor(rand(0, COLORS_LIGHT.length)),
      alpha: rand(0.12, 0.28),
    }));

    const lines = Array.from({ length: 22 }, () => ({
      x: rand(0, 700), y: rand(0, 600),
      len: rand(40, 100),
      angle: rand(0, Math.PI * 2),
      va: rand(-0.006, 0.006),
      vx: rand(-0.25, 0.25), vy: rand(-0.25, 0.25),
      ci: Math.floor(rand(0, COLORS_LIGHT.length)),
      alpha: rand(0.06, 0.13),
      w: rand(0.5, 1.5),
    }));

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      const pal = isDark() ? COLORS_DARK : COLORS_LIGHT;

      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -20) p.x = W + 20; else if (p.x > W + 20) p.x = -20;
        if (p.y < -20) p.y = H + 20; else if (p.y > H + 20) p.y = -20;
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = pal[p.ci];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const l of lines) {
        l.x += l.vx; l.y += l.vy; l.angle += l.va;
        if (l.x < -120) l.x = W + 120; else if (l.x > W + 120) l.x = -120;
        if (l.y < -120) l.y = H + 120; else if (l.y > H + 120) l.y = -120;
        ctx.globalAlpha = l.alpha;
        ctx.strokeStyle = pal[l.ci];
        ctx.lineWidth = l.w;
        ctx.beginPath();
        ctx.moveTo(l.x, l.y);
        ctx.lineTo(l.x + Math.cos(l.angle) * l.len, l.y + Math.sin(l.angle) * l.len);
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <div ref={wrapRef} style={styles.wrap}>
      <canvas ref={canvasRef} style={styles.canvas} />

      <div style={styles.content}>
        <div style={styles.header}>
          <h1 style={styles.h1}>Featured Projects</h1>
          <p style={styles.subtitle}>A selection of things I've built</p>
          <div style={styles.accentBar} />
        </div>

        <div style={styles.grid}>
          {projects.map((p, i) => (
            <Link key={i} to={p.to} style={styles.cardLink}>
              <div
                style={styles.card}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-7px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={styles.cardImg}>
                  <img src={p.img} alt={p.title} style={styles.img} />
                  <span style={{ ...styles.tag, ...p.tagStyle }}>{p.tag}</span>
                </div>
                <div style={styles.cardBody}>
                  <h3 style={styles.cardTitle}>{p.title}</h3>
                  <p style={styles.cardDesc}>{p.desc}</p>
                  <div style={styles.cardFooter}>
                    <div style={styles.pills}>
                      {p.pills.map((pill, j) => (
                        <span key={j} style={styles.pill}>{pill}</span>
                      ))}
                    </div>
                    <div style={{ ...styles.arrowBtn, ...p.btnStyle }}>&#8594;</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrap: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '16px',
    minHeight: '600px',
  },
  canvas: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  content: {
    position: 'relative',
    zIndex: 2,
    padding: '3rem 2rem 3rem',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2.5rem',
  },
  h1: {
    fontSize: '28px',
    fontWeight: 500,
    margin: '0 0 6px',
  },
  subtitle: {
    fontSize: '15px',
    color: '#888',
    margin: 0,
  },
  accentBar: {
    width: '40px',
    height: '3px',
    background: '#7F77DD',
    borderRadius: '2px',
    margin: '10px auto 0',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  },
  cardLink: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
  },
  card: {
    background: '#fff',
    border: '0.5px solid rgba(0,0,0,0.1)',
    borderRadius: '14px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.28s ease, border-color 0.28s ease',
    display: 'flex',
    flexDirection: 'column',
  },
  cardImg: {
    width: '100%',
    height: '180px',
    overflow: 'hidden',
    position: 'relative',
    background: '#f0f0f0',
    flexShrink: 0,
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
  },
  tag: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '11px',
    fontWeight: 500,
    borderRadius: '20px',
    padding: '3px 10px',
  },
  cardBody: {
    padding: '1.1rem 1.2rem 1.2rem',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  cardTitle: {
    fontSize: '16px',
    fontWeight: 500,
    margin: '0 0 8px',
    color: 'rgb(17, 136, 191)',
  },
  cardDesc: {
    fontSize: '13px',
    color: '#666',
    margin: '0 0 14px',
    lineHeight: 1.55,
    flex: 1,
  },
  cardFooter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pills: {
    display: 'flex',
    gap: '5px',
    flexWrap: 'wrap',
  },
  pill: {
    fontSize: '11px',
    padding: '2px 8px',
    border: '0.5px solid rgba(0,0,0,0.12)',
    borderRadius: '20px',
    color: '#666',
    background: '#f5f5f5',
  },
  arrowBtn: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    flexShrink: 0,
  },
};

export default Project;
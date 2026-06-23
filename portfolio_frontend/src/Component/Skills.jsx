// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// const Skills = () => {
//   return (
//     <div>
//       <h1 style={{textAlign:"center",marginTop:"80px"}}>Technical Skills</h1>
//       <div style={{display:"flex",margin:"130px"}}>
//       <div>
//       <Card style={{ width: '18rem', }}>
//       {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
//       <Card.Body>
//         <Card.Title style={{fontWeight:"bold",fontSize:"1.50rem"}}>Frontend Development</Card.Title>
//         <Card.Text>
//          <h1>React</h1>
//             <h1>Next.js</h1>
//         </Card.Text>
        
//       </Card.Body>
//     </Card>
//     </div>
//     <div>
//     <Card style={{ width: '18rem' }}>
//       {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
//       <Card.Body>
//         <Card.Title style={{fontWeight:"bold",fontSize:"1.50rem"}}>Backend Development</Card.Title>
//         <Card.Text>
//          <h1>Node.js</h1>
//          <h1>Express.js</h1>
//          <h1>REST Api</h1>
//         </Card.Text>
        
//       </Card.Body>
//     </Card>
//     </div>
//     <div>
//         <Card style={{ width: '18rem' }}>
//       {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
//       <Card.Body>
//         <Card.Title style={{fontWeight:"bold",fontSize:"1.50rem"}}>Database Management</Card.Title>
//         <Card.Text>
//          <h1>MySQL</h1>
//          <h1>MongoDB</h1>
//         </Card.Text>
        
//       </Card.Body>
//     </Card>
//     </div>
//      <div>
//         <Card style={{ width: '18rem' }}>
//       {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
//       <Card.Body>
//         <Card.Title style={{fontWeight:"bold",fontSize:"1.50rem"}}>Language Management</Card.Title>
//         <Card.Text>
//          <h1>JavaScript</h1>
//          <h1>Python</h1>
//          <h1>Java</h1>
//         </Card.Text>
        
//       </Card.Body>
//     </Card>
//     </div>
//     </div>
//     </div>
//   )
// }

// export default Skills

import { useEffect, useRef, useState } from "react";

const skillsData = [
  {
    id: "frontend",
    title: "Frontend",
    color: "purple",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 80 },
    ],
    tags: ["Tailwind", "TypeScript", "Redux"],
  },
  {
    id: "backend",
    title: "Backend",
    color: "teal",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "REST API", level: 88 },
    ],
    tags: ["JWT", "OAuth"],
  },
  {
    id: "database",
    title: "Database",
    color: "coral",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
      </svg>
    ),
    skills: [
      { name: "MySQL", level: 82 },
      { name: "MongoDB", level: 78 },
    ],
    tags: ["Mongoose", "Sequelize"],
  },
  {
    id: "languages",
    title: "Languages",
    color: "blue",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    skills: [
      { name: "JavaScript", level: 92 },
      { name: "Python", level: 75 },
      { name: "Java", level: 70 },
    ],
    tags: ["ES6+", "OOP"],
  },
];

const colorMap = {
  purple: {
    icon: { background: "#EEEDFE", color: "#534AB7" },
    bar: "#7F77DD",
  },
  teal: {
    icon: { background: "#E1F5EE", color: "#0F6E56" },
    bar: "#1D9E75",
  },
  coral: {
    icon: { background: "#FAECE7", color: "#993C1D" },
    bar: "#D85A30",
  },
  blue: {
    icon: { background: "#E6F1FB", color: "#185FA5" },
    bar: "#378ADD",
  },
};

function SkillBar({ name, level, barColor, animate }) {
  return (
    <div style={{ marginBottom: "12px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
        <span style={{ fontSize: "13px", fontWeight: 500, color: "#111" }}>{name}</span>
        <span style={{ fontSize: "11px", color: "#999" }}>{level}%</span>
      </div>
      <div style={{ height: "4px", borderRadius: "99px", background: "#eee", overflow: "hidden" }}>
        <div
          style={{
            height: "100%",
            borderRadius: "99px",
            background: barColor,
            width: animate ? `${level}%` : "0%",
            transition: "width 1s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </div>
    </div>
  );
}

function SkillCard({ card, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [tagsVisible, setTagsVisible] = useState(false);
  const colors = colorMap[card.color];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisible(true);
            setTimeout(() => setTagsVisible(true), 700);
          }, index * 120);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      style={{
        background: "#fff",
        border: "0.5px solid #e5e5e5",
        borderRadius: "12px",
        padding: "1.25rem",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.5s ease, transform 0.5s ease, border-color 0.2s",
        cursor: "default",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#bbb")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#e5e5e5")}
    >
      {/* Icon */}
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 14,
          ...colors.icon,
        }}
      >
        {card.icon}
      </div>

      {/* Category label */}
      <p
        style={{
          fontSize: "11px",
          fontWeight: 500,
          color: "#999",
          letterSpacing: "0.6px",
          textTransform: "uppercase",
          marginBottom: 14,
        }}
      >
        {card.title}
      </p>

      {/* Skill bars */}
      {card.skills.map((s) => (
        <SkillBar
          key={s.name}
          name={s.name}
          level={s.level}
          barColor={colors.bar}
          animate={visible}
        />
      ))}

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
        {card.tags.map((tag, ti) => (
          <span
            key={tag}
            style={{
              fontSize: "11px",
              padding: "3px 8px",
              borderRadius: "99px",
              border: "0.5px solid #e5e5e5",
              color: "#666",
              background: "#f7f7f7",
              opacity: tagsVisible ? 1 : 0,
              transform: tagsVisible ? "scale(1)" : "scale(0.9)",
              transition: `opacity 0.3s ease ${ti * 80}ms, transform 0.3s ease ${ti * 80}ms`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div style={{ padding: "80px 40px", fontFamily: "sans-serif", maxWidth: 900, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <h1 style={{ fontSize: "28px", fontWeight: 600, color: "#07bdb7", letterSpacing: "-0.3px" }}>
          Technical Skills
        </h1>
        <p style={{ fontSize: "14px", color: "#888", marginTop: 6 }}>Technologies I work with</p>
      </div>

      {/* Cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "16px",
        }}
      >
        {skillsData.map((card, i) => (
          <SkillCard key={card.id} card={card} index={i} />
        ))}
      </div>
    </div>
  );
}
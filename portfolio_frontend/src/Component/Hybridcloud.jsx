// import React from 'react'
// import h from '../assets/h.jpg'
// const Hybridcloud = () => {
//   return (
//     <div style={{backgroundImage:`url("${h}")`,backgroundRepeat:"no-repeat",backgroundPosition:"center",
//     backgroundSize:"cover",height:"100vh",width:"100vw",color:"white",paddingTop:"100px"}}>
//       <div>
//         <h2>Hybrid Cloud</h2>
//         <p>At Hybrid Cloud, learning goes beyond theory. Based in Mahe, Hybrid Cloud provides personalized, hands-on training designed to prepare learners for real industry challenges and opportunities.</p>
//       </div>
//       <div>
//         <h3>About The Project</h3>
//         <p>Hybrid Cloud is a leading provider of cloud computing solutions, offering a range of services that enable businesses to leverage the power of the cloud while maintaining control over their data and applications. The platform provides a seamless integration of public and private cloud environments, allowing organizations to optimize their IT infrastructure for performance, scalability, and cost-efficiency.</p>
//       </div>
//       <div>
//         <h2>Key Features</h2>

// <ul>
//     <li><strong>Comprehensive Cloud Training Programs</strong>
//         <ul>
//             <li>Offers specialized training in AWS, Azure, and Google Cloud platforms.</li>
//             <li>Helps learners build expertise in modern cloud technologies.</li>
//         </ul>
//     </li>

//     <li><strong>DevOps and Automation Learning</strong>
//         <ul>
//             <li>Covers industry-standard tools such as Terraform and Kubernetes.</li>
//             <li>Provides practical experience in infrastructure automation and container orchestration.</li>
//         </ul>
//     </li>

//     <li><strong>Programming Skill Development</strong>
//         <ul>
//             <li>Hands-on training in Java and Python for software development and automation.</li>
//             <li>Focuses on coding best practices and real-world applications.</li>
//         </ul>
//     </li>

//     <li><strong>Project-Based Learning Approach</strong>
//         <ul>
//             <li>Students work on real-world projects to gain practical experience.</li>
//             <li>Bridges the gap between theoretical knowledge and industry requirements.</li>
//         </ul>
//     </li>

//     <li><strong>Expert Mentorship</strong>
//         <ul>
//             <li>Learn directly from experienced industry professionals.</li>
//             <li>Receive guidance on technical concepts, projects, and career growth.</li>
//         </ul>
//     </li>

//     <li><strong>Industry-Ready Skill Development</strong>
//         <ul>
//             <li>Training is aligned with current market demands and technology trends.</li>
//             <li>Prepares learners for professional roles in cloud computing and software development.</li>
//         </ul>
//     </li>

//     <li><strong>Certification-Oriented Curriculum</strong>
//         <ul>
//             <li>Supports preparation for industry-recognized certification exams.</li>
//             <li>Enhances career opportunities and professional credibility.</li>
//         </ul>
//     </li>

//     <li><strong>Collaborative Learning Environment</strong>
//         <ul>
//             <li>Encourages teamwork, knowledge sharing, and peer learning.</li>
//             <li>Creates an engaging and supportive educational experience.</li>
//         </ul>
//     </li>

//     <li><strong>Career-Focused Training</strong>
//         <ul>
//             <li>Designed to improve employability through practical and relevant skills.</li>
//             <li>Helps learners build confidence for interviews and workplace challenges.</li>
//         </ul>
//     </li>
// </ul>
//       </div>
//     </div>
//   )
// }

// export default Hybridcloud


import React, { useEffect } from 'react'
import h from '../assets/h.jpg'

const Hybridcloud = () => {
  // Automatically snaps the layout viewport to the top coordinate upon component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={styles.pageContainer}>
      {/* Structural entry load-in keyframes and interactive mouse hover transitions */}
      <style>{`
        @keyframes cyberPulse {
          0% { opacity: 0.3; }
          50% { opacity: 0.5; }
          100% { opacity: 0.3; }
        }
        @keyframes contentReveal {
          from { opacity: 0; transform: translateY(20px); filter: blur(5px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .animate-cyber {
          animation: contentReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .cyber-grid-node {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cyber-grid-node:hover {
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1)) !important;
          border-color: #3b82f6 !important;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3), inset 0 0 12px rgba(147, 51, 234, 0.2);
          transform: translateY(-4px);
        }
      `}</style>

      {/* FIXED VISUAL BACKGROUND */}
      <div style={styles.fixedBgWrapper}>
        <div style={{...styles.heroBackgroundImage, backgroundImage: `url("${h}")`}} />
        <div style={styles.darkGradientOverlay} />
      </div>

      {/* MAIN INTERFACE CONTAINER */}
      <div className="animate-cyber" style={styles.interfaceWrapper}>
        
        {/* HUD META STATUS BAR */}
        <div style={styles.hudHeader}>
          <span style={styles.liveIndicator}>
            <span style={styles.pulseCore} />
          </span>
          <p style={styles.hudText}>SYSTEM CODE: HC-MAHE // DATALINK: ACTIVE</p>
        </div>

        {/* HERO TITLE HEADER */}
        <header style={styles.mainHeader}>
          <h1 style={styles.glowingTitle}>Hybrid Cloud</h1>
          <p style={styles.heroSubtitle}>
            Where learning goes beyond theory. Get matching personalized, hands-on industrial pipelines designed to anchor tech developers directly inside live cloud environments.
          </p>
        </header>

        {/* TERMINAL OVERVIEW BLOCK */}
        <section style={styles.terminalBox}>
          <div style={styles.terminalHeader}>
            <div style={styles.windowControls}>
              <span style={{...styles.dot, backgroundColor: '#ef4444'}} />
              <span style={{...styles.dot, backgroundColor: '#eab308'}} />
              <span style={{...styles.dot, backgroundColor: '#22c55e'}} />
            </div>
            <span style={styles.terminalTitleText}>ABOUT_CORE_SYSTEM.LOG</span>
          </div>
          <div style={styles.terminalBody}>
            <p style={styles.bodyParagraph}>
              Hybrid Cloud is a leading provider of cloud computing solutions, offering a range of services that enable businesses to leverage the power of the cloud while maintaining control over their data and applications. The platform provides a seamless integration of public and private cloud environments, allowing organizations to optimize their IT infrastructure for performance, scalability, and cost-efficiency.
            </p>
          </div>
        </section>

        {/* CORE SPECS FEATURES SECTION */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <h2 style={styles.gridSectionTitle}>[ ARCHITECTURE MODULES ]</h2>
          
          <div style={styles.cyberGrid}>
            
            <div className="cyber-grid-node" style={styles.moduleCard}>
              <h4 style={styles.moduleTitle}>Cloud Formations</h4>
              <p style={styles.moduleText}>Offers specialized training in AWS, Azure, and Google Cloud platform structures to secure architectural mastery.</p>
            </div>

            <div className="cyber-grid-node" style={styles.moduleCard}>
              <h4 style={styles.moduleTitle}>DevOps Engine</h4>
              <p style={styles.moduleText}>Covers industry-standard ecosystem tools such as Terraform and Kubernetes for configuration automated scaling.</p>
            </div>

            <div className="cyber-grid-node" style={styles.moduleCard}>
              <h4 style={styles.moduleTitle}>Programming Logic</h4>
              <p style={styles.moduleText}>Hands-on structural runtime training loops in Java and Python designed around performance scripts.</p>
            </div>

            <div className="cyber-grid-node" style={styles.moduleCard}>
              <h4 style={styles.moduleTitle}>Project Repositories</h4>
              <p style={styles.moduleText}>Students deploy code changes into actual operational projects to mimic enterprise microservices maps.</p>
            </div>

            <div className="cyber-grid-node" style={styles.moduleCard}>
              <h4 style={styles.moduleTitle}>Expert Verification</h4>
              <p style={styles.moduleText}>Get real-time workspace adjustments, code audits, and operational debugging tracks directly from sector experts.</p>
            </div>

            <div className="cyber-grid-node" style={styles.moduleCard}>
              <h4 style={styles.moduleTitle}>Market Infrastructure</h4>
              <p style={styles.moduleText}>Curriculum elements map cleanly to active employment trends and infrastructure pipeline specifications.</p>
            </div>

            <div className="cyber-grid-node" style={styles.moduleCard}>
              <h4 style={styles.moduleTitle}>Credential Matrices</h4>
              <p style={styles.moduleText}>Strategic learning support maps mapped to completely conquer industry-validated cloud certificates.</p>
            </div>

            <div className="cyber-grid-node" style={styles.moduleCard}>
              <h4 style={styles.moduleTitle}>Cluster Collaborations</h4>
              <p style={styles.moduleText}>Encourages shared peer environments, logic verification channels, and developer team sprints.</p>
            </div>

            <div className="cyber-grid-node" style={styles.moduleCard}>
              <h4 style={styles.moduleTitle}>Career Vectoring</h4>
              <p style={styles.moduleText}>Engineered paths built to refine portfolio architecture visibility and mock operational technical interviews.</p>
            </div>

          </div>
        </section>

      </div>
    </div>
  )
}

// System Inline Stylesheet Layout
const styles = {
  pageContainer: {
    position: 'relative',
    minHeight: '100vh',
    width: '100%',
    color: '#f8fafc',
    fontFamily: '"SF Pro Display", -apple-system, system-ui, sans-serif',
    backgroundColor: '#020204', // Dark void backing
    overflowX: 'hidden',
  },
  fixedBgWrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 0,
  },
  heroBackgroundImage: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'hue-rotate(240deg) brightness(30%) contrast(120%)', // Morphs any background image into a hyper-tech indigo hue
  },
  darkGradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle at 50% 30%, transparent 10%, #020204 80%)',
  },
  interfaceWrapper: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1150px',
    margin: '0 auto',
    padding: '60px 24px 120px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '48px',
    boxSizing: 'border-box',
  },
  hudHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    paddingBottom: '16px',
  },
  liveIndicator: {
    display: 'flex',
    width: '8px',
    height: '8px',
    position: 'relative',
  },
  pulseCore: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    backgroundColor: '#3b82f6',
    boxShadow: '0 0 12px #3b82f6',
    animation: 'cyberPulse 2s infinite ease-in-out',
  },
  hudText: {
    fontSize: '0.75rem',
    fontFamily: 'monospace',
    color: '#64748b',
    letterSpacing: '2.5px',
    margin: 0,
  },
  mainHeader: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  glowingTitle: {
    fontSize: 'clamp(3rem, 7vw, 5.2rem)',
    fontWeight: '900',
    margin: 0,
    letterSpacing: '-2px',
    background: 'linear-gradient(135deg, #ffffff 40%, #a855f7 70%, #3b82f6 100%)', // Sleek cyber gradient
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    color: '#94a3b8',
    lineHeight: '1.65',
    maxWidth: '750px',
    margin: 0,
    fontWeight: '300',
  },
  terminalBox: {
    backgroundColor: 'rgba(10, 10, 18, 0.7)',
    border: '1px solid rgba(168, 85, 247, 0.25)', // Soft purple neon edge
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 40px -15px rgba(168, 85, 247, 0.15)',
    backdropFilter: 'blur(12px)',
  },
  terminalHeader: {
    backgroundColor: 'rgba(20, 20, 35, 0.8)',
    borderBottom: '1px solid rgba(168, 85, 247, 0.15)',
    padding: '12px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  windowControls: {
    display: 'flex',
    gap: '8px',
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    display: 'inline-block',
  },
  terminalTitleText: {
    fontFamily: 'monospace',
    fontSize: '0.8rem',
    color: '#a855f7',
    letterSpacing: '1px',
    fontWeight: '600',
  },
  terminalBody: {
    padding: '32px',
  },
  bodyParagraph: {
    fontSize: '1.08rem',
    lineHeight: '1.75',
    color: '#cbd5e1',
    margin: 0,
    fontWeight: '300',
  },
  gridSectionTitle: {
    fontSize: '1.1rem',
    fontFamily: 'monospace',
    color: '#3b82f6',
    letterSpacing: '2px',
    margin: 0,
    fontWeight: '700',
  },
  cyberGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '20px',
  },
  moduleCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.01)',
    border: '1px solid rgba(255, 255, 255, 0.04)',
    borderRadius: '10px',
    padding: '28px',
    backdropFilter: 'blur(4px)',
  },
  moduleTitle: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#ffffff',
    margin: '0 0 8px 0',
    letterSpacing: '-0.3px',
  },
  moduleText: {
    fontSize: '0.94rem',
    color: '#64748b',
    lineHeight: '1.6',
    margin: 0,
    fontWeight: '300',
  }
}

export default Hybridcloud;
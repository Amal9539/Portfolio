// import React from 'react'
// import trinest from '../assets/trinest.jpeg'
// const Tripnest = () => {
//   return (
//     <div style={{backgroundImage:`url("${trinest}")`,backgroundRepeat:"no-repeat",backgroundPosition:"center",    backgroundSize:"cover",height:"100vh",width:"100vw",color:"white",paddingTop:"100px"}}>
//       <div>
//       <h1>TripNest</h1>
//       <p>Personalized travel recommendations — discover and plan trips based on your preferences</p>
//       <div>
//         <h3>About The Project</h3>
//         <p>The TripNest is a full-stack web application developed using the MongoDB, Express.js, React, and Node.js (MERN Stack). The platform helps users explore tourist destinations, book travel services, and manage their travel plans online. The application provides a user-friendly interface where travelers can browse popular destinations, view detailed information about places, and make bookings for trips or transportation.</p>
//       </div>
//       <h2>Key Features</h2>

// <ul>
//     <li><strong>District-wise Tourist Explorer</strong>
//         <ul>
//             <li>Browse and discover tourist destinations organized by district.</li>
//             <li>Provides a structured and user-friendly way to explore travel locations.</li>
//         </ul>
//     </li>

//     <li><strong>Curated Tour Packages</strong>
//         <ul>
//             <li>Explore customized travel packages created and managed by administrators.</li>
//             <li>Offers complete trip details, pricing, and destination information.</li>
//         </ul>
//     </li>

//     <li><strong>Real-Time Taxi Booking System</strong>
//         <ul>
//             <li>Users can book taxis directly through the platform.</li>
//             <li>Administrators can confirm or reject bookings with instant status updates.</li>
//         </ul>
//     </li>

//     <li><strong>Comprehensive Admin Dashboard</strong>
//         <ul>
//             <li>Manage tourist places, tour packages, taxi bookings, and user accounts.</li>
//             <li>Provides centralized control for efficient platform administration.</li>
//         </ul>
//     </li>

//     <li><strong>Personalized User Profile</strong>
//         <ul>
//             <li>View booking history and account details in one place.</li>
//             <li>Enhances user experience with easy access to past activities.</li>
//         </ul>
//     </li>

//     <li><strong>Secure Authentication System</strong>
//         <ul>
//             <li>Implements JWT-based authentication for secure user sessions.</li>
//             <li>Supports Google OAuth for quick and seamless Gmail login.</li>
//         </ul>
//     </li>

//     <li><strong>Role-Based Access Control</strong>
//         <ul>
//             <li>Separate permissions for users and administrators.</li>
//             <li>Ensures secure access to platform features and management tools.</li>
//         </ul>
//     </li>

//     <li><strong>RESTful API Integration</strong>
//         <ul>
//             <li>Facilitates smooth communication between frontend and backend systems.</li>
//             <li>Enables scalable and maintainable application architecture.</li>
//         </ul>
//     </li>

//     <li><strong>Responsive Full-Stack Experience</strong>
//         <ul>
//             <li>Built with the MERN stack for high performance and scalability.</li>
//             <li>Delivers a seamless experience across desktop and mobile devices.</li>
//         </ul>
//     </li>
// </ul>
//     </div>
//     </div>
//   )
// }

// export default Tripnest


import React, { useEffect } from 'react'
import trinest from '../assets/trinest.jpeg'

const Tripnest = () => {
  // Snaps the page layout window directly to the top upon entry
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={styles.pageContainer}>
      {/* Dynamic entry fade-in and hover keyframes */}
      <style>{`
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-reveal {
          animation: revealUp 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        .feature-box {
          transition: all 0.35s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .feature-box:hover {
          background: #1e293b !important;
          transform: scale(1.02);
          border-color: #ff6b6b !important;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
        }
      `}</style>

      <div className="animate-reveal" style={styles.contentWrapper}>
        
        {/* HERO HEADER SECTION */}
        <header style={styles.heroSection}>
          <div style={styles.titleBlock}>
            <span style={styles.overline}>Featured Full-Stack Project</span>
            <h1 style={styles.mainTitle}>TripNest</h1>
            <p style={styles.subtitle}>
              Personalized travel recommendations — discover and plan trips based on your preferences
            </p>
          </div>
          
          {/* Framed Hero Image Presentation */}
          <div style={styles.imageFrame}>
            <div style={{...styles.heroImage, backgroundImage: `url("${trinest}")`}} />
            <div style={styles.accentBorder} />
          </div>
        </header>

        {/* ABOUT SECTION */}
        <section style={styles.aboutLayout}>
          <div style={styles.sectionLabelBlock}>
            <h3 style={styles.editorialHeading}>01 / Overview</h3>
          </div>
          <div style={styles.aboutContent}>
            <p style={styles.bodyText}>
              TripNest is a full-stack web application developed using the <span style={{color: '#ff6b6b', fontWeight: '600'}}>MERN Stack</span> (MongoDB, Express.js, React, and Node.js). The platform helps users explore tourist destinations, book travel services, and manage their travel plans online. The application provides a user-friendly interface where travelers can browse popular destinations, view detailed information about places, and make bookings for trips or transportation seamlessly.
            </p>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section style={styles.featuresLayout}>
          <div style={styles.sectionLabelBlock}>
            <h2 style={styles.editorialHeading}>02 / Core Architecture</h2>
          </div>
          
          <div style={styles.masonryGrid}>
            
            <div className="feature-box" style={styles.featureCard}>
              <div style={styles.cardIndex}>// 01</div>
              <h4 style={styles.featureTitle}>District Tourist Explorer</h4>
              <p style={styles.featureText}>Browse and discover tourist destinations organized elegantly by district map categories.</p>
            </div>

            <div className="feature-box" style={styles.featureCard}>
              <div style={styles.cardIndex}>// 02</div>
              <h4 style={styles.featureTitle}>Curated Tour Packages</h4>
              <p style={styles.featureText}>Explore travel packages created and managed by administrators with instant pricing guidelines.</p>
            </div>

            <div className="feature-box" style={styles.featureCard}>
              <div style={styles.cardIndex}>// 03</div>
              <h4 style={styles.featureTitle}>Taxi Booking Core</h4>
              <p style={styles.featureText}>Users execute taxi booking reserves directly with immediate administrative confirmations.</p>
            </div>

            <div className="feature-box" style={styles.featureCard}>
              <div style={styles.cardIndex}>// 04</div>
              <h4 style={styles.featureTitle}>Central Admin Console</h4>
              <p style={styles.featureText}>Manage tourist places, customized packages, pending transit records, and user privileges effortlessly.</p>
            </div>

            <div className="feature-box" style={styles.featureCard}>
              <div style={styles.cardIndex}>// 05</div>
              <h4 style={styles.featureTitle}>Personalized Workspace</h4>
              <p style={styles.featureText}>View previous history files, active travel itineraries, and profile parameters securely.</p>
            </div>

            <div className="feature-box" style={styles.featureCard}>
              <div style={styles.cardIndex}>// 06</div>
              <h4 style={styles.featureTitle}>Secure JWT Auth</h4>
              <p style={styles.featureText}>Implements token verification encryption coupled alongside Google single-sign-on OAuth protocols.</p>
            </div>

            <div className="feature-box" style={styles.featureCard}>
              <div style={styles.cardIndex}>// 07</div>
              <h4 style={styles.featureTitle}>Access Control Layer</h4>
              <p style={styles.featureText}>Strict systemic separation dividing consumer application spaces from backend site control maps.</p>
            </div>

            <div className="feature-box" style={styles.featureCard}>
              <div style={styles.cardIndex}>// 08</div>
              <h4 style={styles.featureTitle}>RESTful API Architecture</h4>
              <p style={styles.featureText}>Enables clean, highly performant structured asynchronous data handling parameters from front-to-back layers.</p>
            </div>

            <div className="feature-box" style={styles.featureCard}>
              <div style={styles.cardIndex}>// 09</div>
              <h4 style={styles.featureTitle}>Adaptive Viewport Engine</h4>
              <p style={styles.featureText}>Optimized layout handling creating beautiful UI processing across multiple mobile screen frames smoothly.</p>
            </div>

          </div>
        </section>

      </div>
    </div>
  )
}

// Design layout configurations
const styles = {
  pageContainer: {
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#0f172a', // Rich obsidian slate
    color: '#f8fafc',
    fontFamily: '"Courier New", Courier, system-ui, sans-serif', // Magazine style blend
  },
  contentWrapper: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '100px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '120px',
    boxSizing: 'border-box',
  },
  heroSection: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '40px',
    alignItems: 'center',
  },
  titleBlock: {
    flex: '1 1 500px',
    zIndex: 2,
  },
  overline: {
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    color: '#ff6b6b', // Editorial Coral Pop Accent
    fontWeight: '700',
    display: 'block',
    marginBottom: '16px',
  },
  mainTitle: {
    fontFamily: 'system-ui, sans-serif',
    fontSize: 'clamp(3rem, 7vw, 5.5rem)',
    fontWeight: '900',
    margin: 0,
    lineHeight: '0.95',
    letterSpacing: '-3px',
  },
  subtitle: {
    fontFamily: 'system-ui, sans-serif',
    fontSize: '1.3rem',
    color: '#94a3b8',
    marginTop: '24px',
    lineHeight: '1.6',
    fontWeight: '300',
  },
  imageFrame: {
    flex: '1 1 400px',
    height: '450px',
    position: 'relative',
    paddingRight: '20px',
    paddingBottom: '20px',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '4px',
    position: 'relative',
    zIndex: 2,
    filter: 'grayscale(20%) contrast(110%)',
  },
  accentBorder: {
    position: 'absolute',
    top: '30px',
    left: '30px',
    right: '-10px',
    bottom: '-10px',
    border: '2px solid #ff6b6b',
    borderRadius: '4px',
    zIndex: 1,
  },
  aboutLayout: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '32px',
    borderTop: '1px solid #334155',
    paddingTop: '40px',
  },
  sectionLabelBlock: {
    flex: '1 1 250px',
  },
  editorialHeading: {
    fontSize: '1.1rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: '#cbd5e1',
    margin: 0,
    fontWeight: '600',
  },
  aboutContent: {
    flex: '2 1 600px',
  },
  bodyText: {
    fontFamily: 'system-ui, sans-serif',
    fontSize: '1.2rem',
    color: '#cbd5e1',
    lineHeight: '1.8',
    margin: 0,
    fontWeight: '300',
  },
  featuresLayout: {
    display: 'flex',
    flexDirection: 'column',
    gap: '48px',
    borderTop: '1px solid #334155',
    paddingTop: '40px',
  },
  masonryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '24px',
  },
  featureCard: {
    background: '#131c2e',
    border: '1px solid #223049',
    borderRadius: '8px',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  cardIndex: {
    color: '#475569',
    fontSize: '0.85rem',
    fontWeight: '700',
  },
  featureTitle: {
    fontFamily: 'system-ui, sans-serif',
    fontSize: '1.25rem',
    color: '#f8fafc',
    margin: 0,
    fontWeight: '700',
  },
  featureText: {
    fontFamily: 'system-ui, sans-serif',
    fontSize: '0.95rem',
    color: '#94a3b8',
    lineHeight: '1.6',
    margin: 0,
  }
}

export default Tripnest;
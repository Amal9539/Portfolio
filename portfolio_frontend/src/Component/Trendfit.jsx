// import React from 'react'
// import trfit from '../assets/trfit.png'
// const Trendfit = () => {
//   return (
//     <div  style={{backgroundImage:`url("${trfit}")` , height:"100%",width:"auto",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>
//       <div>
//         <h1>Trend Fit</h1>
//       <p>A fashion recommendation platform delivering personalized outfit suggestions using machine learning</p>
//       </div>
//       <div>
//         <h3>About The Project</h3>
//         <p>Trend Fit revolutionizes the fashion experience by harnessing advanced machine learning techniques to offer highly personalized outfit recommendations. Utilizing K-Means clustering, Trend Fit categorizes users based on their skin tones and body measurements, providing tailored fashion suggestions that complement their unique features. Through Convolutional Neural Networks (CNN), the platform analyses and visualizes clothing combinations, allowing users to see how different items work together before making a choice</p>
//       </div>
//       <div>
//         <h2>Key Features</h2>

// <ul>
//     <li><strong>Personalized Outfit Recommendations</strong>
//         <ul>
//             <li>Suggests outfits based on individual skin tone, body measurements, and style preferences.</li>
//             <li>Enhances user confidence with tailored fashion choices.</li>
//         </ul>
//     </li>

//     <li><strong>User Segmentation with K-Means Clustering</strong>
//         <ul>
//             <li>Groups users with similar physical attributes and fashion profiles.</li>
//             <li>Improves recommendation accuracy through data-driven clustering.</li>
//         </ul>
//     </li>

//     <li><strong>AI-Powered Clothing Analysis</strong>
//         <ul>
//             <li>Uses CNN models to analyze clothing styles, patterns, and compatibility.</li>
//             <li>Identifies visually appealing outfit combinations.</li>
//         </ul>
//     </li>

//     <li><strong>Outfit Visualization</strong>
//         <ul>
//             <li>Allows users to preview clothing combinations before making a decision.</li>
//             <li>Provides a better understanding of outfit compatibility.</li>
//         </ul>
//     </li>

//     <li><strong>Smart Fashion Matching</strong>
//         <ul>
//             <li>Recommends complementary clothing items, colors, and styles.</li>
//             <li>Helps users create cohesive and trendy outfits effortlessly.</li>
//         </ul>
//     </li>
// </ul>
//       </div>
//     </div>
//   )
// }

// export default Trendfit


import React, { useEffect } from 'react'
import trfit from '../assets/trfit.png'

const Trendfit = () => {
  // Automatically scrolls to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={styles.pageContainer}>
      {/* Background Image Container */}
      <div style={{...styles.bgImage, backgroundImage: `url("${trfit}")`}} />
      
      {/* Dark overlay to make text highly legible */}
      <div style={styles.overlay} />

      {/* Injecting CSS Keyframes directly into the page for smooth animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .feature-card:hover {
          transform: translateY(-5px);
          border-color: rgba(99, 102, 241, 0.4) !important;
          background: rgba(255, 255, 255, 0.08) !important;
        }
      `}</style>

      {/* Main Content */}
      <div className="animate-fade-in" style={styles.contentWrapper}>
        
        {/* Header Section */}
        <header style={styles.header}>
          <h1 style={styles.mainTitle}>Trend Fit</h1>
          <p style={styles.subtitle}>
            A fashion recommendation platform delivering personalized outfit suggestions using machine learning
          </p>
        </header>

        {/* About Section */}
        <section style={styles.card}>
          <h3 style={styles.sectionTag}>About The Project</h3>
          <p style={styles.bodyText}>
            Trend Fit revolutionizes the fashion experience by harnessing advanced machine learning techniques to offer highly personalized outfit recommendations. Utilizing <strong style={{color: '#fff'}}>K-Means clustering</strong>, Trend Fit categorizes users based on their skin tones and body measurements, providing tailored fashion suggestions that complement their unique features. Through <strong style={{color: '#fff'}}>Convolutional Neural Networks (CNN)</strong>, the platform analyzes and visualizes clothing combinations, allowing users to see how different items work together before making a choice.
          </p>
        </section>

        {/* Key Features Section */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <h2 style={styles.sectionTitle}>Key Features</h2>

          <div style={styles.grid}>
            
            <div className="feature-card" style={styles.featureCard}>
              <h4 style={styles.featureTitle}>Personalized Outfit Recommendations</h4>
              <p style={styles.featureText}>Suggests outfits based on individual skin tone, body measurements, and style preferences to boost confidence.</p>
            </div>

            <div className="feature-card" style={styles.featureCard}>
              <h4 style={styles.featureTitle}>K-Means User Segmentation</h4>
              <p style={styles.featureText}>Groups users with similar physical attributes and fashion profiles to step up accuracy through data-driven clustering.</p>
            </div>

            <div className="feature-card" style={styles.featureCard}>
              <h4 style={styles.featureTitle}>AI-Powered Clothing Analysis</h4>
              <p style={styles.featureText}>Uses CNN models to examine styles, patterns, and compatibility to isolate visually appealing combinations.</p>
            </div>

            <div className="feature-card" style={styles.featureCard}>
              <h4 style={styles.featureTitle}>Outfit Visualization</h4>
              <p style={styles.featureText}>Allows users to preview clothing combinations seamlessly before deciding, ensuring perfect compatibility.</p>
            </div>

            <div className="feature-card" style={styles.featureCard}>
              <h4 style={styles.featureTitle}>Smart Fashion Matching</h4>
              <p style={styles.featureText}>Recommends complementary clothing items, colors, and cuts to help users assemble trendy outfits effortlessly.</p>
            </div>

          </div>
        </section>
      </div>
    </div>
  )
}

// Clean, organized inline styles object
const styles = {
  pageContainer: {
    position: 'relative',
    minHeight: '100vh',
    width: '100%',
    color: '#ffffff',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    backgroundColor: '#0a0a0a',
  },
  bgImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    zIndex: 0,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.75)', // Dark overlay so text is readable over any photo
    backdropFilter: 'blur(3px)',
    zIndex: 1,
  },
  contentWrapper: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '60px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '48px',
    boxSizing: 'border-box',
  },
  header: {
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    paddingBottom: '24px',
  },
  mainTitle: {
    fontSize: '3.5rem',
    fontWeight: '800',
    margin: 0,
    letterSpacing: '-1px',
    background: 'linear-gradient(to right, #ffffff, #a3a3a3)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#d4d4d4',
    marginTop: '12px',
    maxWidth: '600px',
    lineHeight: '1.6',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.04)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    padding: '32px',
  },
  sectionTag: {
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    color: '#818cf8',
    letterSpacing: '1.5px',
    margin: '0 0 12px 0',
  },
  bodyText: {
    color: '#d4d4d4',
    fontSize: '1.05rem',
    lineHeight: '1.7',
    margin: 0,
  },
  sectionTitle: {
    fontSize: '1.8rem',
    fontWeight: '700',
    margin: 0,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
  },
  featureCard: {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '12px',
    padding: '24px',
    transition: 'all 0.3s ease',
  },
  featureTitle: {
    fontSize: '1.1rem',
    color: '#a5b4fc',
    margin: '0 0 8px 0',
    fontWeight: '600',
  },
  featureText: {
    fontSize: '0.9rem',
    color: '#a3a3a3',
    lineHeight: '1.5',
    margin: 0,
  }
}

export default Trendfit;
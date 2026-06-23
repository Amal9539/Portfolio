// import React from 'react'
// import { Link } from 'react-router-dom'
// import sjpng from '../assets/sjpng.png'

// const Sjproject = () => {
//   return (
//     <div  style={{backgroundImage:`url("${sjpng}")`,backgroundRepeat:"no-repeat",backgroundPosition:"center",
//     backgroundSize:"cover",height:"100vh",width:"100vw",color:"white",paddingTop:"100px"}}>
//       <div style={{textAlign:"center"}}>
//       <h1>Mobile Repair Shop Management</h1>
//       <p>Streamlines mobile repair shop operations — customer requests, repair tracking, and inventory control.</p>
//       </div>
//       <div>
//         <Link to="https://github.com/Amal9539/SJMobiles" target="_blank" rel="noreferrer">
//           <button>View On GitHub</button>
//         </Link>
//       </div>
//       <div>
//         <h2>About The Project</h2>
//         <p>SJMobiles is a full-stack web application developed to simplify and automate mobile repair shop operations. The system allows administrators to efficiently manage customer repair requests, track repair progress, and improve customer communication through automated notifications. The application enables admins to register repair requests by storing details such as phone model, IMEI number, device password, complaint description, repair cost, customer name, and contact information. All data is securely managed through a Django backend with database integration. A dedicated Repair Dashboard provides a clean and organized interface to monitor repair records and update statuses in real time. One of the key features of this project is the automated WhatsApp notification system integrated using pywhatkit. When a repair is completed, customers automatically receive a WhatsApp message with the completion status and repair amount. If a device cannot be repaired, the system sends an instant return notification—eliminating manual follow-up calls and improving customer experience. Through this project, I strengthened my skills in Django development, REST APIs, database management, frontend design, automation workflows, and full-stack web application development.</p>
//       </div>
//       <div>
//         <h2>Technologies Used</h2>
//         <div style={{display:"flex",marginleft:"10px",gap:"10px",flexWrap:"wrap"}}>
//         <h4>Python</h4>
//         <h4>Django</h4>
//         <h4>HTML</h4>
//         <h4>CSS</h4>
//         <h4>Bootstrap</h4>
//         <h4>pywhatkit</h4>
//         </div>
//       </div>
//       <div>
//         <h2>
//           Key Features – SJMobiles (Mobile Repair Shop Management System)
//         </h2>
//         <h3>Customer Repair Registration</h3>
//         <ul>
//           <li>Capture customer repair requests with complete device details</li>
//           <li>Store Phone Model, IMEI Number, Device Password, Complaint Description, and Repair Cost</li>
//         </ul>
//         <h3>Customer Information Management</h3>
//         <ul>
//           <li>Maintain customer records including Name and Contact Number</li>
//           <li>Centralized data storage for easy tracking and management</li>
//         </ul>
//         <h3>Secure Database Integration</h3>
//         <ul>
//           <li>Backend powered by Django with database support for reliable data storage and retrieval</li>
//         </ul>
//         <h3>Repair Dashboard & Status Tracking</h3>
//         <ul>
//           <li>View all repair requests in a structured dashboard</li>
//           <li>Track repair progress and update statuses in real time</li>
//         </ul>
//         <h3>Automated WhatsApp Notifications</h3>
//         <ul>
//           <li>Instant customer updates using WhatsApp automation (pywhatkit)</li>
//           <li>Repair Completed → Customer receives completion message with final amount</li>
//           <li>Repair Returned → Customer receives repair failure notification automatically</li>
//         </ul>
//         <h3>Admin-Friendly Workflow</h3>
//         <ul>
//           <li>Reduce manual follow-ups and calls</li>
//           <li>Faster repair management and improved customer communication</li>
//         </ul>
//         <h3>Responsive Web Interface</h3>
//         <ul>
//           <li>Clean and user-friendly UI for efficient repair shop operations</li>
//         </ul>
//         <h3>Built With</h3>
//         <ul>
//           <li>Django</li>
//           <li>REST API</li>
//           <li>SQLite3 / Database Management</li>
//           <li>HTML, CSS, JavaScript</li>
//           <li>pywhatkit for WhatsApp Automation</li>
//         </ul>

        
//       </div>
//     </div>
    
//   )
// }

// export default Sjproject



import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import sjpng from '../assets/sjpng.png'

const Sjproject = () => {
  // Scrolls smoothly to the top of the page on entry
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      {/* Injected Stylesheet for Animations and Layouts */}
      <style>{`
        .project-container {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          overflow-x: hidden;
          box-sizing: border-box;
          animation: fadeIn 1s ease-out forwards;
        }

        .project-wrapper {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .project-header {
          text-align: center;
          margin-bottom: 40px;
          animation: slideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .main-title {
          font-size: 2.8rem;
          font-weight: 800;
          margin-bottom: 15px;
          background: linear-gradient(to right, #ffffff, #cbd5e1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          font-size: 1.2rem;
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto 25px auto;
          line-height: 1.6;
        }

        .github-btn {
          background-color: #2563eb;
          color: white;
          border: none;
          padding: 12px 28px;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
        }

        .github-btn:hover {
          background-color: #1d4ed8;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.6);
        }

        .divider {
          border: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, #334155, transparent);
          margin: 40px 0;
        }

        .project-section {
          margin-bottom: 50px;
          opacity: 0;
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .project-section h2 {
          font-size: 1.8rem;
          color: #f8fafc;
          margin-bottom: 20px;
        }

        .description {
          color: #cbd5e1;
          line-height: 1.8;
          font-size: 1.05rem;
          margin-bottom: 15px;
        }

        .tech-code {
          background-color: #1e293b;
          padding: 2px 6px;
          border-radius: 4px;
          color: #38bdf8;
        }

        .tech-badges {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .tech-badges span {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .feature-card {
          background: rgba(30, 41, 59, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(8px);
          padding: 25px;
          border-radius: 12px;
          transition: transform 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          background: rgba(30, 41, 59, 0.6);
        }

        .feature-card h3 {
          font-size: 1.15rem;
          color: #38bdf8;
          margin-bottom: 10px;
        }

        .feature-card p {
          font-size: 0.95rem;
          color: #94a3b8;
          line-height: 1.6;
        }

        .highlight-card {
          border: 1px solid rgba(56, 189, 248, 0.3);
          background: rgba(14, 165, 233, 0.1);
        }

        /* Delays for staggered entries */
        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Main Page Content */}
      <div 
        className="project-container"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url("${sjpng}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          minHeight: "100vh",
          width: "100vw",
          color: "#f3f4f6",
          padding: "100px 0"
        }}
      >
        <div className="project-wrapper">
          
          {/* Header */}
          <header className="project-header">
            <h1 className="main-title">Mobile Repair Shop Management</h1>
            <p className="subtitle">Streamlines mobile repair shop operations — customer requests, repair tracking, and inventory control.</p>
            <div>
              <Link to="https://github.com/Amal9539/SJMobiles" target="_blank" rel="noreferrer">
                <button className="github-btn">View On GitHub</button>
              </Link>
            </div>
          </header>

          <hr className="divider" />

          {/* About Section */}
          <section className="project-section delay-1">
            <h2>About The Project</h2>
            <p className="description">
              SJMobiles is a full-stack web application developed to simplify and automate mobile repair shop operations. 
              The system allows administrators to efficiently manage customer repair requests, track repair progress, and 
              improve customer communication through automated notifications. The application enables admins to register 
              repair requests by storing details such as phone model, IMEI number, device password, complaint description, 
              repair cost, customer name, and contact information. 
            </p>
            <p className="description">
              All data is securely managed through a Django backend with database integration. A dedicated Repair Dashboard 
              provides a clean and organized interface to monitor repair records and update statuses in real time. One of the 
              key features of this project is the automated WhatsApp notification system integrated using <code className="tech-code">pywhatkit</code>. 
              When a repair is completed, customers automatically receive a WhatsApp message with the completion status and 
              repair amount. Through this project, I strengthened my skills in Django development, REST APIs, database management, 
              frontend design, and automation workflows.
            </p>
          </section>

          {/* Technologies Section */}
          <section className="project-section delay-2">
            <h2>Technologies Used</h2>
            <div className="tech-badges">
              <span>Python</span>
              <span>Django</span>
              <span>REST API</span>
              <span>SQLite3</span>
              <span>HTML & CSS</span>
              <span>Bootstrap</span>
              <span>pywhatkit</span>
            </div>
          </section>

          {/* Key Features Section */}
          <section className="project-section delay-3">
            <h2>Key Features</h2>
            <div className="features-grid">
              
              <div className="feature-card">
                <h3>Customer Repair Registration</h3>
                <p>Capture customer repair requests with complete device details like Phone Model, IMEI, Device Password, Complaint Description, and Repair Cost.</p>
              </div>

              <div className="feature-card">
                <h3>Customer Information</h3>
                <p>Maintain customer records including Name and Contact Number within centralized data storage for effortless lookup and tracking.</p>
              </div>

              <div className="feature-card">
                <h3>Secure Backend Integration</h3>
                <p>Backend powered by Django with reliable database configurations for consistent data lifecycle execution and instant query handling.</p>
              </div>

              <div className="feature-card">
                <h3>Repair Status Dashboard</h3>
                <p>Monitor repair pipelines inside a structured workspace layout to update device phases and statuses in real time.</p>
              </div>

              <div className="feature-card highlight-card">
                <h3>Automated WhatsApp Alerts</h3>
                <p>Instant client dispatches utilizing WhatsApp automation routines via pywhatkit. Sends real-time delivery notifications or system updates.</p>
              </div>

              <div className="feature-card">
                <h3>Responsive Web Operations</h3>
                <p>A sleek interface optimization providing swift administrative processing minimizing human call verification lags.</p>
              </div>

            </div>
          </section>

        </div>
      </div>
    </>
  )
}

export default Sjproject
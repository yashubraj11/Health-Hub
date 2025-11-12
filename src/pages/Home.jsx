import React from "react";
import Header from "../components/Header";
import banner from "../assets/Banner.jpg";
import patientsImg from "../assets/Patient-management.png";
import securityImg from "../assets/Data-Security.png";
import reportsImg from "../assets/Analytics-&-Reports.png";
import "../CSS/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Header />

      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span>Health Hub</span>
          </h1>
          <p className="hero-subtitle">
            Manage patient records efficiently and securely with our intuitive dashboard.
          </p>
         <a href="/patients"> <button className="cta-btn" >Get Started</button></a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why Choose Health Hub?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img src={patientsImg} alt="Patients" className="feature-img" />
            <h3>Easy Patient Management</h3>
            <p>Quickly access, search, and update patient information.</p>
          </div>

          <div className="feature-card">
            <img src={securityImg} alt="Security" className="feature-img" />
            <h3>Data Security</h3>
            <p>Your patient data is stored and handled with the highest security standards.</p>
          </div>

          <div className="feature-card">
            <img src={reportsImg} alt="Reports" className="feature-img" />
            <h3>Analytics & Reports</h3>
            <p>Generate insightful reports for better decision-making.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Health Hub | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Home;

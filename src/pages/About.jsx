import React from "react";
import "../CSS/About.css";
import Navbar from "../components/Header"; 
import banner from "../assets/Doc.jpg";
import aboutImg from "../assets/banner.jpg"; 
import visionBg from "../assets/about1.jpg";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="about-page">
        {/* --- Banner Section --- */}
        <section
          className="about-banner"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="banner-overlay">
            <h1>
              GET INVOLVED <span>TODAY</span>
            </h1>
          </div>
        </section>

        {/* --- About Section --- */}
        <section className="about-section">
          <div className="about-container">
            <div className="about-image">
              <img src={aboutImg} alt="About Jaurat Care" />
            </div>
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                At <strong>Health Hub Foundation</strong>, we understand that
                facing cancer can be overwhelming, and no one should have to go
                through it alone. Our mission is to provide strength, care, and
                hope to those affected — ensuring no one faces this journey
                alone.
              </p>
              <p>
                We’re a community-driven NGO working across India to empower
                patients, caregivers, and healthcare professionals through
                education, awareness, and compassionate support.
              </p>
              <p>
                Our focus is on creating a warm and inclusive space where
                everyone’s needs are heard and met — with volunteers, donors,
                and professionals joining hands to make a meaningful impact.
              </p>
            </div>
          </div>
        </section>

        {/* --- Vision Section --- */}
        <section
          className="vision-section"
          style={{ backgroundImage: `url(${visionBg})` }}
        >
          <div className="vision-overlay">
            <h2>Our Vision</h2>
            <p>
              To build an all-inclusive community of cancer warriors,
              caregivers, and doctors — fostering support, knowledge sharing,
              and solidarity in the fight against cancer.
            </p>

            <div className="vision-cards">
              <div className="vision-card">
                <h4>Education & Awareness</h4>
                <p>
                  We empower patients through awareness programs, workshops, and
                  resources to enhance understanding and early detection.
                </p>
              </div>
              <div className="vision-card">
                <h4>Emotional Support</h4>
                <p>
                  Our community provides a safe space for sharing, healing, and
                  emotional growth during every stage of the journey.
                </p>
              </div>
              <div className="vision-card">
                <h4>Holistic Care</h4>
                <p>
                  We collaborate with professionals to ensure mental, physical,
                  and nutritional support that brings hope and strength.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
       <footer className="footer">
        <p>© {new Date().getFullYear()} Health Hub | All Rights Reserved</p>
      </footer>
    </>
  );
};

export default About;

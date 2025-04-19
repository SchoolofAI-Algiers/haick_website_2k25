import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <h2 className="section-title">About Us</h2>

      <div className="about-editor-card">
        <div className="editor-toolbar">
        {/* to change it laterrr */}
          <button><b>𝘢</b></button>
          <button><b>B</b></button>
          <button><i>I</i></button>
          <button>🖋️</button>
          <button>🔗</button>
          <button>📷</button>
          <button>📄</button>
          <button>☰</button>
        </div>

        <div className="about-content">
          <div className="about-markdown">
            <pre>
{`###**Who are we?**

**School of AI Algiers** is a scientific club established in 2018 
at the Higher National School of Computer Science (ESI Algiers). 
The club unites young, motivated AI enthusiasts to help them unlock 
their potential and enhance their skills in the field of artificial 
intelligence. To achieve this, the club organizes **a range of 
events,** including Haick, a datathon where participants address AI
and data science challenges. Additionally, the club hosts
international conferences such as **AiSummit and Indaba**, alongside
internal events designed specifically for its members.
(Check our website: |https://soai.netlify.app|)`}
            </pre>
          </div>

          <div className="about-preview">
            <h3>Who are we?</h3>
            <p>
              <span className="blue-bold">School of AI Algiers</span> is a scientific club established in 2018 at the
              Higher National School of Computer Science (ESI Algiers). The club unites young, motivated AI enthusiasts
              to help them unlock their potential and enhance their skills in the field of artificial intelligence.
              To achieve this, the club organizes <span className="orange">a range of events</span>, including Haick, a datathon where
              participants address AI and data science challenges. Additionally, the club hosts international conferences
              such as <span className="highlight">AiSummit and Indaba</span>, alongside internal events designed specifically for its members.
            </p>
            <a href="https://soai.netlify.app" target="_blank" rel="noreferrer">
              Check Our Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

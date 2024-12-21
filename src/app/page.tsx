import React from 'react';
import BinaryBackground from './components/BinaryBackground';
import './Home.css'; // Ensure this path is correct

const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* Binary Background */}
      <BinaryBackground />

      {/* Main Content */}
      <main className="main-container">
        <h1 className="heading">Hi, I'm Tanathorn Piyachart</h1>
        <p className="paragraph">Welcome to my portfolio!</p>
        
        {/* Resume Button */}
        <a
          href="/Resume_Tanathorn_Piyachart.pdf" // Ensure your resume is placed in the public folder
          download
          className="resume-button"
          aria-label="Download my resume"
        >
          Download Resume
        </a>
        <br />
        <a href="/projects" className="projects-link">
          See more →
        </a>

        {/* GitHub and LinkedIn Buttons */}
        <div className="social-links">
          <a
            href="https://github.com/tangtnp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
            className="social-button github"
          >
            <img src="/images/icons/github.png" alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/tanathorn-piyachart/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
            className="social-button linkedin"
          >
            <img src="/images/icons/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import Chatbot from './chatbot';  // Import the chatbot component
import 'materialize-css/dist/css/materialize.min.css';

const PersonalPortfolio = () => {
  // Random quotes or facts array
  const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "Technology is best when it brings people together.",
    "The secret of getting ahead is getting started.",
    "Learning never exhausts the mind.",
    "The purpose of education is to replace an empty mind with an open one."
  ];

  // Function to get a random quote
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  const [randomQuote, setRandomQuote] = useState(getRandomQuote());

  // Function to refresh the quote
  const refreshQuote = () => {
    setRandomQuote(getRandomQuote());
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Timothy's Portfolio</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About Me</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-layout">
        {/* Left Section: Personal Details */}
        <div className="left-section">
          <h2>About Me</h2>
          <img src="profile.jpg" alt="Profile" className="profile-pic" />
          <p>Hi! I'm Timothy, a student at Kean University studying IT with Cybersecurity. I currently work at TD Bank and hope to work in Cybersecurity in banking when I graduate. When I'm not working or in class, I enjoy playing video games and traveling.</p>
        </div>

        {/* Center Content: Portfolio / Resume Section */}
        <div className="center-content">
          <h2>My Skills & Experience</h2>
          {/* Two-column grid for skills and experience */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '20px' }}>
            <div className="skill-card">
              <h4>Education</h4>
              <p>Graduated from Brookdale Community College with an associate's degree in Criminal Justice.</p>
            </div>
            <div className="skill-card">
              <h4>Teamwork</h4>
              <p>Adept at teamwork and cooperation, thriving in collaborative environments.</p>
            </div>
            <div className="skill-card">
              <h4>Quick Learner</h4>
              <p>Quick learner, especially with jobs involving technology and computers.</p>
            </div>
            <div className="skill-card">
              <h4>Computer Repair</h4>
              <p>Thorough understanding of computer repair, able to troubleshoot both software and hardware issues.</p>
            </div>
            <div className="skill-card">
              <h4>Operating Systems</h4>
              <p>Fluent in operating systems such as Windows and Linux.</p>
            </div>
            <div className="skill-card">
              <h4>Time Management</h4>
              <p>Highly efficient in time management and organization.</p>
            </div>
            <div className="skill-card">
              <h4>Current Work</h4>
              <p>Currently working as a Bank Teller at TD Bank. I have been with the company for 2 and a half years.</p>
            </div>
          </div>

          {/* Add two professional-related images */}
          <div className="portfolio-pictures" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
            <img src="https://media.istockphoto.com/id/1388759096/photo/at-hand-of-a-male-construction-management-engineer-who-organizes-materials-on-a-laptop.jpg?s=612x612&w=0&k=20&c=OGIz5GXhFtqTwognw81nvUb7IVQxCm3OurwBSKfrSHo=" alt="Professional skills" style={{ width: '300px', borderRadius: '10px' }} />
            <img src="https://media.istockphoto.com/id/680515060/photo/bringing-business-into-focus.jpg?s=612x612&w=0&k=20&c=bsecsHHtMkq9tzNYJgyHJacTkwrkJE7N9TS88b2Wgak=" alt="Tech Knowledge" style={{ width: '300px', borderRadius: '10px' }} />
          </div>
        </div>

        {/* Right Section: Contact */}
        <div className="right-section">
          <h2>Contact Me</h2>
          <p>Email: laketi@kean.edu</p>
          <p>Phone: 555-111-111</p>
        </div>
      </div>

      {/* Random Quote Section */}
      <div className="quote-container" style={{ textAlign: 'center', marginTop: '40px' }}>
        <h3>Random Motivational Quote</h3>
        <p id="quoteDisplay" style={{ fontSize: '1.2em', fontStyle: 'italic' }}>{randomQuote}</p>
        <button onClick={refreshQuote} style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#0288d1', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Get Another Quote
        </button>
      </div>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default PersonalPortfolio;

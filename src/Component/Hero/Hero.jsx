import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'; // Import AnchorLink
import Resume from '../Resume/Resume';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id='Hero' className='hero-container'>
      <style>
        {`
/* Existing CSS (no changes needed here for smooth scroll functionality) */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #0a0a0a;
  color: #ffffff;
}

/* Main Container */
.hero-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  position: relative;
  overflow: hidden;
}

.hero-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

/* Header/Navigation */
.hero-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
  position: relative;
  z-index: 10;
}

label {
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;
  transition: transform 0.3s ease;
}

label:hover {
  transform: translateY(-2px);
}

label span {
  color: #6366f1;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.link ul {
  display: flex;
  list-style: none;
  gap: 2.5rem;
}

/* IMPORTANT: Target AnchorLink directly or add a class for styling */
.link .anchor-link-item { /* Added a class for clarity */
  color: #e5e7eb;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  text-decoration: none; /* Remove underline from AnchorLink */
}

.link .anchor-link-item::before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.link .anchor-link-item:hover {
  color: #ffffff;
  background: rgba(99, 102, 241, 0.1);
}

.link .anchor-link-item:hover::before {
  width: 80%;
}

/* Hamburger Menu */
.hamburger-menu {
  display: none; /* Hidden by default, shown on smaller screens */
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  cursor: pointer;
  z-index: 20;
  position: relative;
}

.hamburger-bar {
  width: 100%;
  height: 3px;
  background-color: #ffffff;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
}

.hamburger-menu.open .hamburger-bar:nth-child(1) {
  transform: translateY(11px) rotate(45deg);
}

.hamburger-menu.open .hamburger-bar:nth-child(2) {
  opacity: 0;
}

.hamburger-menu.open .hamburger-bar:nth-child(3) {
  transform: translateY(-11px) rotate(-45deg);
}

.nav-links-mobile {
  display: none; /* Hidden by default */
}

.nav-links-mobile.open {
  display: flex;
  flex-direction: column;
  position: fixed; /* Use fixed to ensure it covers the whole viewport */
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 15;
  animation: slideIn 0.3s forwards;
}

.nav-links-mobile.open .anchor-link-item-mobile { /* New class for mobile AnchorLinks */
    font-size: 1.5rem;
    padding: 1rem 2rem;
    width: fit-content;
    color: #e5e7eb; /* Ensure color is correct */
    text-decoration: none; /* Remove underline */
    position: relative;
    border-radius: 8px; /* For hover background */
    transition: all 0.3s ease;
}

.nav-links-mobile.open .anchor-link-item-mobile:hover {
    color: #ffffff;
    background: rgba(99, 102, 241, 0.1);
}


@keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}


/* Main Hero Content */
.Contain_of_Hero {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  z-index: 5;
}

.Contain_Main {
  margin-bottom: 4rem;
}

.Contain_Main h1 {
  font-size: clamp(2.5rem, 5vw, 5rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #e5e7eb 50%, #6366f1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.Contain_Main h1 span {
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
}

.Contain_Main h1 span::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
  border-radius: 2px;
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}

.Contain_Main p {
  font-size: 1.25rem;
  color: #9ca3af;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Performance Cards */
.Contain_Performance {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.card_hero {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: #ffffff; /* Default color for card text */
}

.card_hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s ease;
}

.card_hero:hover::before {
  left: 100%;
}

.card_hero:hover {
  transform: translateY(-8px);
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
}

.card_hero:first-child {
  color: #10b981;
}

.card_hero:nth-child(2) {
  color: #f59e0b;
}

.card_hero:last-child {
  color: #ef4444;
}

.card_hero p {
  color: #9ca3af;
  font-size: 0.95rem;
  font-weight: 500;
  margin-top: 0.5rem;
  margin-bottom: 0;
}

/* Down Arrow Animation */
.DownArrow_Animation {
  position: relative;
  width: 40px;
  height: 40px;
  margin: 2rem auto;
}

.DownArrow_Animation::before {
  content: '↓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: #6366f1;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translate(-50%, -50%);
  }
  40% {
    transform: translate(-50%, -60%);
  }
  60% {
    transform: translate(-50%, -55%);
  }
}

/* Resume Component Specific Styles */
.resume-section {
    max-width: 500px;
    margin: 3rem auto 0 auto; 
    text-align: center;
}

.resume-card {
    padding: 1.4rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 60px;
}

.file-input { 
    font-size: 1rem; 
    color: #e5e7eb;
    margin-bottom: 1rem; 
}
.file-input::file-selector-button {
    margin-right: 1rem; 
    padding: 0.75rem 1.5rem; 
    border-radius: 9999px; 
    border: 0;
    font-size: 1rem; 
    font-weight: 600; 
    background-color: #6366f1; /* Consistent with hero's accent color */
    color: #ffffff; /* White text for button */
    cursor: pointer; 
    transition: background-color 0.3s ease-in-out, transform 0.3s ease;
}
.file-input::file-selector-button:hover { 
    background-color: #5a5ce0; /* Slightly darker purple on hover */
    transform: translateY(-2px);
}

.loading-message { 
    display: flex; 
    align-items: center; 
    color: #6366f1; /* Consistent with accent color */
    margin-top: 1rem;
    font-size: 1rem;
}
.loading-spinner {
    animation: spin 1s linear infinite; 
    margin-right: 0.75rem;
    height: 1.5rem; 
    width: 1.5rem; 
    color: #6366f1; /* Consistent with accent color */
}
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.action-button-container { 
    text-align: center; 
    margin-bottom: 4rem; /* Spacing below the button */
}

.action-button {
    padding: 1rem 3rem; /* Adjusted padding for better fit */
    background: linear-gradient(135deg, #6366f1, #8b5cf6); /* Gradient background */
    color: #ffffff;
    font-weight: 600;
    border-radius: 9999px;
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4); /* Enhanced shadow */
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1.125rem; /* Slightly larger font */
}
.action-button:hover {
    transform: translateY(-3px) scale(1.02); /* More pronounced hover effect */
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6);
}
.action-button:focus { 
    outline: none; 
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.5); /* Focus ring */
}
.action-button:disabled { 
    opacity: 0.5; 
    cursor: not-allowed; 
    transform: none;
    box-shadow: none;
}

.error-message {
    background-color: rgba(239, 68, 68, 0.2); /* Soft red background */
    border: 1px solid #ef4444; 
    color: #ef4444; /* Bright red text */
    padding: 1rem; 
    border-radius: 8px; 
    position: relative; 
    margin-top: 1rem; /* Space above error */
    font-size: 0.9rem;
}
.error-message strong { font-weight: 700; }

/* Modal Styles */
.modal-overlay {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background-color: rgba(0, 0, 0, 0.7); /* Darker overlay */
    display: flex; justify-content: center; align-items: center;
    z-index: 1000;
    backdrop-filter: blur(5px); /* Added blur to overlay */
}
.modal-content {
    background-color: #1a1a2e; /* Darker background for modal */
    color: #ffffff; /* White text inside modal */
    padding: 2rem; 
    border-radius: 12px;
    box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.3), 0 4px 10px -2px rgba(0, 0, 0, 0.15); /* Enhanced shadow */
    width: 90%; max-width: 700px; max-height: 90vh; overflow-y: auto;
    position: relative;
    border: 1px solid rgba(99, 102, 241, 0.2); /* Subtle border */
}
.modal-close-button {
    position: absolute; top: 1rem; right: 1rem; 
    background: none; border: none;
    font-size: 2rem; /* Larger close button */
    cursor: pointer; color: #9ca3af; /* Light gray close button */
    transition: color 0.2s, transform 0.2s;
}
.modal-close-button:hover { 
    color: #ffffff; 
    transform: rotate(90deg); /* Rotate on hover */
}

.result-title { 
    font-size: 2rem; /* Larger title */
    font-weight: 700; 
    color: #6366f1; /* Accent color for title */
    margin-bottom: 1.5rem; 
    text-align: center;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
.result-text-content { 
    color: #e5e7eb; /* Lighter text for content */
    font-size: 1.05rem;
    line-height: 1.6;
}
.score-label { 
    color: #8b5cf6; /* A slightly different accent for score label */
    font-size: 1.1rem;
}
.category-title, .strength-title, .improvement-title {
    font-size: 1.5rem; 
    font-weight: 600; 
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
    border-bottom: 1px solid rgba(255,255,255,0.1); /* Subtle separator */
    padding-bottom: 0.5rem;
}
.category-title { color: #6366f1; }
.strength-title { color: #10b981; } /* Green for strengths */
.improvement-title { color: #ef4444; } /* Red for improvements */
.result-list { 
    list-style-type: '👉 '; /* Custom bullet point */
    padding-left: 1.5rem; 
    margin-bottom: 1rem; 
}
.result-list li { 
    margin-bottom: 0.5rem; 
    color: #cbd5e1; /* Even lighter gray for list items */
}
.result-list li strong { font-weight: 600; color: #e5e7eb; }


/* Responsive Design */
@media (max-width: 768px) {
  .hero-header {
    padding: 1.5rem 1.5rem;
    flex-direction: row; /* Keep logo and hamburger on same line */
    justify-content: space-between;
  }
  
  .link ul {
    display: none; /* Hide desktop nav links */
  }

  .hamburger-menu {
    display: flex; /* Show hamburger on mobile */
  }
  
  .Contain_of_Hero {
    padding: 2rem 1rem;
  }
  
  .Contain_Performance {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .card_hero {
    padding: 1.5rem 1rem;
  }

  .resume-card {
    padding: 1.5rem;
  }

  .action-button {
    padding: 1rem 2rem;
    font-size: 1rem;
  }

  .modal-content {
    padding: 1.5rem;
  }

  .result-title {
    font-size: 1.75rem;
  }
  label{
    font-size: 2rem;
    font-weight: 700;
    color: #ffffff;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .category-title, .strength-title, .improvement-title {
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .hero-header {
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
  }

  label{
    font-size: 2rem;
    font-weight: 700;
    color: #ffffff;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .Contain_Main h1 {
    font-size: 4.3rem;
  }
  
  .Contain_Main p {
    font-size: 1rem;
  }

  .file-input::file-selector-button {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }

  .action-button {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }

  .modal-content {
    padding: 1rem;
  }

  .result-title {
    font-size: 1.5rem;
  }

  .category-title, .strength-title, .improvement-title {
    font-size: 1.1rem;
  }

  .result-text-content {
    font-size: 0.95rem;
  }
}
        `}
      </style>

      <div className='hero-header'>
        <label><span>ATS</span>Checker</label>

        {/* Hamburger Menu Icon */}
        <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="hamburger-bar"></div>
          <div className="hamburger-bar"></div>
          <div className="hamburger-bar"></div>
        </div>

        {/* Desktop Navigation Links */}
        <div className='link'>
          <ul>
            <li>
              <AnchorLink href='#Hero' className='anchor-link-item'>Home</AnchorLink>
            </li>
            <li>
              <AnchorLink href='#WhyUs' className='anchor-link-item'>Why Us?</AnchorLink>
            </li>
            <li>
              <AnchorLink href='#HowItWorks' className='anchor-link-item'>How It Works</AnchorLink>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation Links (conditionally rendered) */}
        {isMenuOpen && (
          <div className="nav-links-mobile open">
            <ul>
              <li>
                <AnchorLink href='#Hero' className='anchor-link-item-mobile' onClick={toggleMenu}>Home</AnchorLink>
              </li>
              <li>
                <AnchorLink href='#WhyUs' className='anchor-link-item-mobile' onClick={toggleMenu}>Why Us?</AnchorLink>
              </li>
              <li>
                <AnchorLink href='#HowItWorks' className='anchor-link-item-mobile' onClick={toggleMenu}>How It Works</AnchorLink>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className='Contain_of_Hero'>
        <div className='Contain_Main'>
          <h1>
            Get Your Resume <span>Analyzed By AI</span> In Seconds
          </h1>
          <p>
            Our AI-powered resume scanner provides instant feedback, suggests improvements, and helps you land more interviews.
          </p>
        </div>

        <div className='Contain_Performance'>
          <div className='card_hero'>
            5,000+
            <p>Resumes Scanned</p>
          </div>
          <div className='card_hero'>
            98%
            <p>Accuracy Rate</p>
          </div>
          <div className='card_hero'>
            24/7
            <p>Instant Analysis</p>
          </div>
        </div>

        <Resume/>

        <div className='DownArrow_Animation'></div>
      </div>
    </div>
  )
}

export default Hero;
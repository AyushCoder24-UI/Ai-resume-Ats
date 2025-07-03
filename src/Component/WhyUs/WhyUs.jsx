import React from 'react'

const WhyUs = () => {
  return (
    <div id='WhyUs' className='WhyUs'>
      <style>
        {`
/* WhyUs Component Styles */
.WhyUs {
    min-height: 80vh; /* Adjusted for this section */
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
    color: #ffffff;
    padding: 6rem 2rem; /* Increased padding for more vertical space */
    text-align: center;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.WhyUs::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 80% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 20% 10%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
    pointer-events: none;
}

.header_WhyUs {
    max-width: 800px;
    margin-bottom: 4rem; /* Spacing below header */
    z-index: 2; /* Ensure header is above pseudo-elements */
}

.header_WhyUs h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #ffffff 0%, #e5e7eb 50%, #6366f1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.header_WhyUs p {
    font-size: 1.25rem;
    color: #9ca3af;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

.Card_WhyUs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Larger min-width for cards */
    gap: 2rem; /* Consistent gap */
    max-width: 1200px; /* Max width for the card grid */
    width: 100%;
    z-index: 2; /* Ensure cards are above pseudo-elements */
}

.Card_WhyUs_List {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 2.5rem 2rem; /* Increased padding */
    text-align: center;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.Card_WhyUs_List::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.1), transparent); /* Subtle gradient swipe */
    transition: left 0.5s ease;
}

.Card_WhyUs_List:hover::before {
    left: 100%;
}

.Card_WhyUs_List:hover {
    transform: translateY(-8px);
    border-color: rgba(99, 102, 241, 0.3);
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
}

.Card_WhyUs_List h2 {
    font-size: 1.8rem; /* Larger heading for cards */
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #6366f1, #8b5cf6); /* Gradient for card titles */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.Card_WhyUs_List p {
    color: #cbd5e1; /* Lighter gray for card text */
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 0; /* Remove default paragraph margin */
}

/* Responsive adjustments for WhyUs */
@media (max-width: 1024px) {
    .Card_WhyUs {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
}

@media (max-width: 768px) {
    .WhyUs {
        padding: 4rem 1.5rem;
    }
    .header_WhyUs {
        margin-bottom: 3rem;
    }
    .header_WhyUs h1 {
        font-size: clamp(2rem, 6vw, 3.5rem);
    }
    .header_WhyUs p {
        font-size: 1.1rem;
    }
    .Card_WhyUs {
        grid-template-columns: 1fr; /* Stack cards on small screens */
        gap: 1.5rem;
    }
    .Card_WhyUs_List {
        padding: 2rem 1.5rem;
    }
    .Card_WhyUs_List h2 {
        font-size: 1.5rem;
    }
}

@media (max-width: 480px) {
    .WhyUs {
        padding: 3rem 1rem;
    }
    .header_WhyUs h1 {
        font-size: 1.8rem;
    }
    .header_WhyUs p {
        font-size: 0.95rem;
    }
    .Card_WhyUs_List {
        padding: 1.5rem 1rem;
    }
    .Card_WhyUs_List h2 {
        font-size: 1.3rem;
    }
}
        `}
      </style>

      <div className='header_WhyUs'>
        <h1>Make your resume stand out</h1>
        <p>Our AI-powered resume scanner helps you optimize your resume for Applicant Tracking Systems and recruiters.</p>
      </div>

      <div className='Card_WhyUs'>
        <div className='Card_WhyUs_List'>
          <h2>ATS Compatibility Check</h2>
          <p>Ensures your resume passes through Applicant Tracking Systems (ATS) by analyzing formatting and structure.</p>
        </div>
        <div className='Card_WhyUs_List'>
          <h2>Instant Feedback</h2>
          <p>Receive immediate, detailed insights on your resume's strengths and areas for improvement.</p>
        </div>
        <div className='Card_WhyUs_List'>
          <h2>Keyword Optimization</h2>
          <p>Identifies crucial keywords from job descriptions and suggests ways to integrate them into your resume.</p>
        </div>
        <div className='Card_WhyUs_List'>
          <h2>Quick Analysis</h2>
          <p>Get a comprehensive resume analysis in seconds, saving you time and effort in your job search.</p>
        </div>
        <div className='Card_WhyUs_List'>
          <h2>AI-Powered Insights</h2>
          <p>Leverage advanced artificial intelligence to get smart, data-driven recommendations tailored to your resume.</p>
        </div>
        <div className='Card_WhyUs_List'>
          <h2>Actionable Suggestions</h2>
          <p>Don't just get a score; receive clear, practical steps to enhance your resume's effectiveness.</p>
        </div>
      </div>
    </div>
  )
}

export default WhyUs
import React from 'react'

const Work = () => {
  return (
    <div id='HowItWorks' className='Work'>
      <style>
        {`
/* Work Component Styles */
.Work {
    min-height: 90vh;
   background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
    color: #ffffff;
    padding: 6rem 2rem;
    text-align: center;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.Work::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 10% 20%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 90% 70%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
    pointer-events: none;
}

.header_Work {
    max-width: 800px;
    margin-bottom: 4rem;
    z-index: 2;
}

.header_Work h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #ffffff 0%, #e5e7eb 50%, #6366f1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.header_Work p {
    font-size: 1.25rem;
    color: #9ca3af;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

.Work_Step {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    width: 100%;
    z-index: 2;
}

.Step {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 2.5rem 2rem;
    text-align: center;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* Align content to the top within steps */
    align-items: center;
    min-height: 220px; /* Ensure consistent height for steps */
}

.Step::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.1), transparent);
    transition: left 0.5s ease;
}

.Step:hover::before {
    left: 100%;
}

.Step:hover {
    transform: translateY(-8px);
    border-color: rgba(99, 102, 241, 0.3);
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
}

.Step h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative; /* For the step number */
    padding-top: 4rem; /* Space for the absolute number */
}

/* Step numbering using pseudo-elements */
.Step:nth-child(1) h2::before { content: '1'; }
.Step:nth-child(2) h2::before { content: '2'; }
.Step:nth-child(3) h2::before { content: '3'; }

.Step h2::before {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 3rem; /* Large number */
    font-weight: 900;
    color: rgba(99, 102, 241, 0.2); /* Faded accent color */
    z-index: -1; /* Behind the text */
    -webkit-text-stroke: 1px rgba(99, 102, 241, 0.4); /* Outline effect */
    -webkit-text-fill-color: transparent; /* Makes the fill transparent */
}


.Step p {
    color: #cbd5e1;
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 0;
}

/* Responsive adjustments for Work */
@media (max-width: 1024px) {
    .Work_Step {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
}

@media (max-width: 768px) {
    .Work {
        padding: 4rem 1.5rem;
    }
    .header_Work {
        margin-bottom: 3rem;
    }
    .header_Work h1 {
        font-size: clamp(2rem, 6vw, 3.5rem);
    }
    .header_Work p {
        font-size: 1.1rem;
    }
    .Work_Step {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    .Step {
        padding: 2rem 1.5rem;
        min-height: unset; /* Remove fixed height on mobile */
    }
    .Step h2 {
        font-size: 1.5rem;
        padding-top: 3.5rem; /* Adjust space for smaller number */
    }
    .Step h2::before {
        font-size: 2.5rem; /* Smaller number */
    }
}

@media (max-width: 480px) {
    .Work {
        padding: 3rem 1rem;
    }
    .header_Work h1 {
        font-size: 1.8rem;
    }
    .header_Work p {
        font-size: 0.95rem;
    }
    .Step {
        padding: 1.5rem 1rem;
    }
    .Step h2 {
        font-size: 1.3rem;
    }
}
        `}
      </style>

      <div className='header_Work'>
        <h1>How It Works</h1>
        <p>Our resume scanning process is quick, easy, and insightful. Just three simple steps to improve your resume.</p>
      </div>

      <div className='Work_Step'>
        <div className='Step'>
          <h2>Upload Resume</h2>
          <p>Drag and drop your resume file or browse to select it.</p>
        </div>
        <div className='Step'>
          <h2>Instant Analysis</h2>
          <p>Our AI scans and analyzes your resume for optimal content and format.</p>
        </div>
        <div className='Step'>
          <h2>Get Results</h2>
          <p>Receive detailed feedback and suggestions to improve your resume.</p>
        </div>
      </div>
    </div>
  )
}

export default Work;
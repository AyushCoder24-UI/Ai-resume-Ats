import React from 'react'

const Footer = () => {
  return (
    <div className='Footer'>
      <style>
        {`
/* Footer Component Styles */
.Footer {
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%); /* Dark gradient background */
    color: #9ca3af; /* Soft gray text color */
    padding: 2.5rem 2rem; /* Ample padding */
    text-align: center;
    font-size: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1); /* Subtle top border */
    position: relative;
    z-index: 1; /* Ensure it sits above any potential background elements */
}

/* Optional: Add a subtle inner shadow or gradient to make it pop slightly */
.Footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.02), transparent);
    pointer-events: none;
    z-index: -1;
}

/* Enhancing the copyright text */
.Footer span {
    font-weight: 500;
    color: #e5e7eb; /* Slightly brighter for emphasis */
    margin-left: 5px; /* Space after copyright symbol */
}

/* Responsive adjustments for Footer */
@media (max-width: 768px) {
    .Footer {
        padding: 2rem 1.5rem;
        font-size: 0.95rem;
    }
}

@media (max-width: 480px) {
    .Footer {
        padding: 1.5rem 1rem;
        font-size: 0.85rem;
    }
}
        `}
      </style>
      <p>
        &copy; {new Date().getFullYear()}<span>ATSChecker</span>. All rights reserved.
      </p>
    </div>
  )
}

export default Footer;
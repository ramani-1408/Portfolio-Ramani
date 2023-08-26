import React, { useState, useEffect } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/draggable';

const Work = () => {
  const [letterClass] = useState('text-animate');
  const nameArray = ['W', 'o', 'r', 'k', '', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e'];
  const [activeStep, setActiveStep] = useState(0); // Initialize the active step to 0 (1st step)

  useEffect(() => {
    $(".step").click(function () {
      const clickedStepIndex = $(this).index(); // Get the index of the clicked step
      setActiveStep(clickedStepIndex); // Update the active step state
    });
  }, []);

  return (
    <div>
      <h1>
        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
      </h1>
      <div className="process-wrapper">
        <div id="progress-bar-container">
          <ul>
            <li className={`step step01 ${activeStep === 0 ? 'active' : ''}`}><div className="step-inner">1</div></li>
            <li className={`step step02 ${activeStep === 1 ? 'active' : ''}`}><div className="step-inner">2</div></li>
            <li className={`step step03 ${activeStep === 2 ? 'active' : ''}`}><div className="step-inner">3</div></li>
            <li className={`step step04 ${activeStep === 3 ? 'active' : ''}`}><div className="step-inner">₹</div></li>
            <li className={`step step05 ${activeStep === 4 ? 'active' : ''}`}><div className="step-inner">5</div></li>
            <li className={`step step06 ${activeStep === 5 ? 'active' : ''}`}><div className="step-inner">1</div></li>
            <li className={`step step07 ${activeStep === 6 ? 'active' : ''}`}><div className="step-inner">2</div></li>
            <li className={`step step08 ${activeStep === 7 ? 'active' : ''}`}><div className="step-inner">3</div></li>
            <li className={`step step09 ${activeStep === 8 ? 'active' : ''}`}><div className="step-inner">₹</div></li>
            <li className={`step step10 ${activeStep === 9 ? 'active' : ''}`}><div className="step-inner">5</div></li>
          </ul>

          <div id="line">
            <div id="line-progress" style={{ width: `${(activeStep) * 12}%` }}></div>
          </div>
        </div>

        <div id="progress-content-section">
          {/* Render content based on activeStep */}
          <div className={`section-content discovery ${activeStep === 0 ? 'active' : ''}`}>
            <h2>Narayana E-Techno School...</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>

          <div className={`section-content strategy ${activeStep === 1 ? 'active' : ''}`}>
            <h2>Narayana IIT Acadamy...</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
          <div className={`section-content analysis ${activeStep === 2 ? 'active' : ''}`}>
            <h2>National Institute of Technology Delhi...</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>

          <div className={`section-content creative ${activeStep === 3 ? 'active' : ''}`}>
            <h2>Training and Placement Cell NITD</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>

          <div className={`section-content production ${activeStep === 4 ? 'active' : ''}`}>
            <h2>Bosscoder Acadamy - Web developer Intern</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>

          <div className={`section-content analysis ${activeStep === 5 ? 'active' : ''}`}>
            <h2>Student Hostel and Mess Commitee NITD</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
          <div className={`section-content discovery ${activeStep === 6 ? 'active' : ''}`}>
            <h2>Hackveda Pvt Ltd - Machine learning intern</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>

          <div className={`section-content strategy ${activeStep === 7 ? 'active' : ''}`}>
            <h2>Sigetech Embaded and Robotics-Software Engineering Intern</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>

          <div className={`section-content creative ${activeStep === 8 ? 'active' : ''}`}>
            <h2>Computational intelligence and robotics summer internship</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>

          <div className={`section-content production ${activeStep === 9 ? 'active' : ''}`}>
            <h2>1Stop - Machine learning intern</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;

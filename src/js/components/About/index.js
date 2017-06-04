import React from 'react';
import Button from '../../shared/Button';
import signature from '../../../assets/images/signature.png';


const About = () => (
  <div className="inner">
          <h2>About</h2>
          <div className="title-divider"></div>
          <div className="about-con">
            <ul>
              <li>Name: Sourabh Lodha</li>
              <li>Email: <a href="mailto:sourabhlodha1@gmail.com"><span className="color">sourabhlodha1@gmail.com</span></a></li>
              <li>Phone: (+91)-9460202742</li>
              <li>Date of birth: 02 December 1992</li>
              <li>Address: A 10 Kasipuri Opposite sheetal swadhya bhawan, Bhilwara,Rajasthan, India.</li>
              <li>Nationality: India</li>
            </ul>
            <h3>Professional Profile</h3>
            <p>Believe in create a Dent in World so that world remember you.<br></br> </p>
            <a href="#" className="Resumebutton">Download resume as PDF format</a> <img src={signature} className="signature" alt=""/> </div>
        </div>
      
);

export default About;
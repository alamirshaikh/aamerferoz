import React from 'react';
import './Intro.css'
import '../public/back.jpg';
import './All.css';
import SocailMedia from './component/SocialMedia';
import { useState,useEffect } from 'react';

const Intro = () => {


    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const phrases = [
      "React Developer",
      "SQL Developer",
      "Full Stack Developer",
      ".Net Developer",
      "Back End Developer"
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        const currentIndex = index % phrases.length;
        const currentPhrase = phrases[currentIndex];
        const slicedText = currentPhrase.slice(0, text.length + 1);
  
        if (text !== currentPhrase) {
          setText(slicedText);
        } else {
          setTimeout(() => {
            setIndex(index + 1);
          }, 500); // Delay before next phrase
        }
      }, 300); // Speed of typing animation (adjust as needed)
  
      return () => clearInterval(interval);
    }, [text, index, phrases]);
  


    return (
        <div className="intro">
            <div className="container">
                <div className="row mt-4 mt-md-10 align-items-center">
                    <div className="col-md-8 col-12 col-sm-8 order-2 order-md-1 text-center text-md-left d-flex flex-column justify-content-center">
                        <h2 className="myself">Hi 👋, my name is</h2>
                        <h1 className="title-name"><span className='title-span' >AAMER FEROZ</span></h1>
                        <div className="animation-container">
      <h2 className="prof">
        I'm a <span className="name">{text}</span>
      </h2>
    </div>
                        <p className="desc">I am a self-taught back-end developer specializing in C#. My passion lies in providing well-tested and maintainable code, ensuring robust server-side functionality, and delivering seamless user experiences through efficient and scalable solutions using the latest technologies.</p>
                   
                    </div>
                    <div className="col-md-4 col-12 col-sm-4 order-1 order-md-2 text-center">
                        <div className="profile">
                            <img src="public/profile.png" alt="profile" className="profile-i" />
                        </div>
                    </div>
                </div>
              
                <div className="row mt-2">
                    <div className="col-md-6 col-sm-12">
                        <div className="touch-resume d-flex flex-wrap gap-2">
                            <button className="btn btn-primary touch">Get in Touch</button>
                            <button className="btn btn-secondary resume">Resume</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;

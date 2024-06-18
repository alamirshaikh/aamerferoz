import React from 'react';
import './About.css';
import './All.css';

const About = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="about-head">
                            <h1 className="styled-text">&lt;h1&gt;ABOUT ME&lt;/h1&gt;</h1>
                            <h3 className="t-head styled-text">A closer look at my journey in tech</h3>    
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="about-content">
                            <p className="description">
                                <span className="tags">&lt;p&gt;</span>
                                Dedicated and results-oriented .NET developer with 3 years of experience in designing and implementing. Proven expertise in full-stack development, utilizing the Microsoft technology stack to deliver high-quality solutions. Adept at collaborating with cross-functional teams and clients to understand business requirements and translate them into innovative technical solutions. Strong problem-solving skills and a commitment to staying current with emerging trends and technologies in the software development industry.
                                <span className="tags">&lt;/p&gt;</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

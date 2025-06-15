// src/components/Hero.jsx
import React, { useEffect } from 'react';

const Hero = ({ t, currentLang }) => {
    useEffect(() => {
        // Mouse movement parallax effect
        const handleMouseMove = (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;

            const skillNodes = document.querySelectorAll('.skill-node');
            skillNodes.forEach((node, index) => {
                const speed = (index % 3 + 1) * 0.5;
                node.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`;
            });

            const profileFrame = document.querySelector('.profile-frame');
            if (profileFrame) {
                profileFrame.style.transform = `translate(${mouseX * 2}px, ${mouseY * 2}px)`;
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const getResumeLink = () => {
        return currentLang === "de" ? "./Resume Deu.pdf" : "./Resume Eng.pdf";
    };

    return (
        <section id="intro" className="section intro">
            <div className="intro-left">
                <div className="profile-visualization">
                    <div className="skill-nodes">
                        {/* Skill network nodes */}
                        <div className="skill-node" style={{ top: '50px', left: '50px' }}></div>
                        <div className="skill-node large" style={{ top: '100px', left: '150px' }}></div>
                        <div className="skill-node" style={{ top: '150px', left: '100px' }}></div>
                        <div className="skill-node" style={{ top: '200px', left: '200px' }}></div>
                        <div className="skill-node large" style={{ top: '250px', left: '80px' }}></div>
                        <div className="skill-node" style={{ top: '300px', left: '180px' }}></div>

                        {/* Connections */}
                        <div className="connection" style={{ top: '54px', left: '58px', width: '100px', transform: 'rotate(15deg)' }}></div>
                        <div className="connection" style={{ top: '104px', left: '158px', width: '80px', transform: 'rotate(-25deg)' }}></div>
                        <div className="connection" style={{ top: '154px', left: '108px', width: '120px', transform: 'rotate(20deg)' }}></div>
                        <div className="connection" style={{ top: '204px', left: '208px', width: '90px', transform: 'rotate(-35deg)' }}></div>
                        <div className="connection" style={{ top: '254px', left: '88px', width: '110px', transform: 'rotate(25deg)' }}></div>
                    </div>

                    <div className="profile-frame">
                        <div className="profile-image">MD</div>
                        <div style={{ width: '80%', height: '2px', background: '#ffd700', margin: '20px auto' }}></div>
                        <div style={{ width: '60%', height: '1px', background: '#555', margin: '10px auto' }}></div>
                        <div style={{ width: '70%', height: '1px', background: '#555', margin: '10px auto' }}></div>
                        <div style={{ width: '50%', height: '1px', background: '#555', margin: '10px auto' }}></div>
                        <div style={{ textAlign: 'center', color: '#ffd700', fontSize: '12px', marginTop: '20px' }}>AI ENABLED</div>
                    </div>
                </div>
            </div>

            <div className="intro-right">
                <div className="step-indicator">
                    <div className="step-number">01</div>
                    <div className="step-line"></div>
                    <div className="step-number" style={{ color: '#555' }}>04</div>
                </div>

                <h1 className="main-title">MICHAEL<br />DABROCK</h1>
                <h2 className="subtitle">{t('hero-subtitle')}</h2>

                <p className="description">
                    {t('hero-description')}
                </p>

                <div className="cta-buttons">
                    <a href="#skills" className="cta-button">{t('hero-view-skills')}</a>
                    <a 
                        href={getResumeLink()} 
                        className="cta-button secondary" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        {t('hero-download-resume')}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
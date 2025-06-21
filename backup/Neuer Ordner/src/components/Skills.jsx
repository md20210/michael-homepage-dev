// src/components/Skills.jsx
import React from 'react';

const Skills = ({ t }) => {
    const managementSkills = [
        'skills-pmo',
        'skills-portfolio', 
        'skills-project',
        'skills-leadership',
        'skills-architecture',
        'skills-transformation',
        'skills-cloud',
        'skills-agile',
        'skills-risk',
        'skills-program-leadership',
        'skills-it-consulting',
        'skills-enterprise-arch',
        'skills-cloud-tech',
        'skills-ai-dev',
        'skills-governance'
    ];

    const aiSkills = [
        'skills-chatgpt',
        'skills-gemini', 
        'skills-grok',
        'skills-claude',
        'skills-chatbots',
        'skills-voice'
    ];

    const certifications = [
        'IBM Certified Architect',
        'TOGAF',
        'Stanford Advanced Project Management',
        'IBM Consultant',
        'Opengroup Master Certified Architect',
        'Scrum Master',
        'ChatGPT Integration',
        'Grok AI Implementation',
        'Azure AI Services',
        'TIBCO Certified Consultant'
    ];

    return (
        <section id="skills" className="section">
            <div style={{ width: '100%' }}>
                <div className="step-indicator">
                    <div className="step-number">02</div>
                    <div className="step-line"></div>
                    <div className="step-number" style={{ color: '#555' }}>04</div>
                </div>

                <h2 className="main-title" style={{ fontSize: '48px', marginBottom: '30px', textAlign: 'center' }}>
                    {t('skills-title')}
                </h2>

                <div className="skills-section">
                    <div className="skills-grid">
                        <div className="skills-column">
                            <h3>{t('skills-management')}</h3>
                            <h3>{t('skills-core')}</h3>
                            <ul className="skills-list">
                                {managementSkills.map((skill, index) => (
                                    <li key={index}>{t(skill)}</li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="skills-column">
                            <h3>{t('skills-certifications')}</h3>
                            <h3>{t('skills-ai-platforms')}</h3>
                            <ul className="skills-list">
                                {aiSkills.map((skill, index) => (
                                    <li key={index}>{t(skill)}</li>
                                ))}
                            </ul>
                            
                            <h3 style={{ marginTop: '30px' }}>Certifications</h3>
                            <ul className="skills-list">
                                {certifications.map((cert, index) => (
                                    <li key={index}>{cert}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
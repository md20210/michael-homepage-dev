// src/components/Experience.jsx
import React from 'react';

const Experience = ({ t }) => {
    const experiences = [
        {
            titleKey: 'work-ai-specialist-title',
            subtitle: 'December 2023 – Present | Barcelona, Spain',
            descKey: 'work-ai-specialist-desc'
        },
        {
            titleKey: 'work-cognizant-title',
            subtitle: 'July 2011 – November 2023 | Frankfurt, Germany',
            descKey: 'work-cognizant-desc'
        },
        {
            titleKey: 'work-wipro-title',
            subtitle: 'January 2008 – June 2011 | Munich, Germany',
            descKey: 'work-wipro-desc'
        },
        {
            titleKey: 'work-ibm-title',
            subtitle: 'October 2002 – December 2007 | Frankfurt, Germany',
            descKey: 'work-ibm-desc'
        },
        {
            titleKey: 'work-pwc-title',
            subtitle: 'Various Projects | Germany',
            descKey: 'work-pwc-desc'
        },
        {
            titleKey: 'work-early-career-title',
            subtitle: '1998 – 2002 | Various Locations',
            descKey: 'work-early-career-desc'
        },
        {
            titleKey: 'work-education-title',
            subtitle: 'Karlsruhe Institute of Technology (KIT), Germany',
            descKey: 'work-education-desc'
        }
    ];

    return (
        <section id="experience" className="section">
            <div style={{ width: '100%' }}>
                <div className="step-indicator">
                    <div className="step-number">03</div>
                    <div className="step-line"></div>
                    <div className="step-number" style={{ color: '#555' }}>04</div>
                </div>

                <h2 className="main-title" style={{ fontSize: '48px', marginBottom: '30px', textAlign: 'center' }}>
                    {t('experience-title')}
                </h2>

                <div className="experience-grid">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-card">
                            <div className="card-title">{t(exp.titleKey)}</div>
                            <div className="card-subtitle">{exp.subtitle}</div>
                            <div 
                                className="card-description"
                                dangerouslySetInnerHTML={{ __html: t(exp.descKey) }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
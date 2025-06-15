// src/components/Background.jsx
import React, { useEffect, useState } from 'react';

const Background = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Create initial particles
        const initialParticles = Array.from({ length: 9 }, (_, i) => ({
            id: i,
            left: (i + 1) * 10,
            delay: i * 0.5,
            duration: Math.random() * 3 + 4
        }));
        setParticles(initialParticles);

        // Add new particles periodically
        const interval = setInterval(() => {
            const newParticle = {
                id: Date.now(),
                left: Math.random() * 100,
                delay: 0,
                duration: Math.random() * 3 + 4
            };
            
            setParticles(prev => [...prev, newParticle]);
            
            // Remove old particles
            setTimeout(() => {
                setParticles(prev => prev.filter(p => p.id !== newParticle.id));
            }, 7000);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Animated background gradients */}
            <div className="bg-animation" />
            
            {/* Wireframe grid overlay */}
            <div className="wireframe-overlay" />
            
            {/* Floating particles */}
            {particles.map(particle => (
                <div
                    key={particle.id}
                    className="particle"
                    style={{
                        left: `${particle.left}%`,
                        animationDelay: `${particle.delay}s`,
                        animationDuration: `${particle.duration}s`
                    }}
                />
            ))}
        </>
    );
};

export default Background;
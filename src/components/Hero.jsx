import React from 'react';

const Hero = () => {
    return (
        <section className="hero" style={styles.hero}>
            {/* Grid Background Pattern */}
            <div className="bg-grid"></div>

            {/* Creative Background Elements */}
            <div style={{ ...styles.blob, ...styles.blob1 }} className="floating-element"></div>
            <div style={{ ...styles.blob, ...styles.blob2, animationDelay: '2s' }} className="floating-element"></div>
            <div style={{ ...styles.blob, ...styles.blob3, animationDelay: '4s' }} className="floating-element"></div>

            <div className="container" style={styles.container}>
                <div style={styles.badge} className="animate-fade-up stagger-1">CREATIVE PORTFOLIO</div>

                <h1 style={styles.title} className="animate-fade-up stagger-2">
                    Nisanth <br />
                    <span className="text-gradient">Vadivelan Sangeetha</span>
                </h1>

                <div style={styles.subtitleWrapper} className="animate-fade-up stagger-3">
                    <h2 style={styles.subtitle} className="typewriter">
                        Videographer, Video Editor & Media Specialist
                    </h2>
                    <p style={styles.techText}>+ Computer Science Enthusiast</p>
                </div>

                <div className="btn-group animate-fade-up stagger-4">
                    <a href="#about" style={styles.cta}>Explore My Work</a>
                    <a href="#contact" style={{ ...styles.cta, ...styles.ctaOutline }}>Get in Touch</a>
                </div>
            </div>
        </section>
    );
};

const styles = {
    hero: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--bg-color)',
        position: 'relative',
        overflow: 'hidden',
    },
    blob: {
        position: 'absolute',
        borderRadius: '50%',
        filter: 'blur(90px)',
        opacity: 0.15,
        zIndex: 0,
    },
    blob1: {
        top: '-5%',
        left: '-5%',
        width: '600px',
        height: '600px',
        background: '#4f46e5', /* Indigo */
    },
    blob2: {
        bottom: '-5%',
        right: '-5%',
        width: '500px',
        height: '500px',
        background: '#06b6d4', /* Cyan */
    },
    blob3: {
        top: '30%',
        left: '40%',
        width: '400px',
        height: '400px',
        background: '#ec4899', /* Pink */
        opacity: 0.1,
    },
    container: {
        textAlign: 'center',
        zIndex: 1,
        width: '100%',
        position: 'relative',
        paddingTop: '5vh',
    },
    badge: {
        display: 'inline-block',
        padding: '8px 20px',
        backgroundColor: 'rgba(79, 70, 229, 0.08)',
        color: 'var(--accent-color)',
        borderRadius: '30px',
        fontWeight: '800',
        letterSpacing: '3px',
        fontSize: '0.8rem',
        marginBottom: '2rem',
        border: '1px solid rgba(79, 70, 229, 0.2)',
    },
    title: {
        fontSize: 'clamp(3rem, 8vw, 5.5rem)', /* Responsive font */
        fontWeight: '900',
        marginBottom: '1.5rem',
        lineHeight: '1.05',
        letterSpacing: '-2px',
        color: 'var(--text-primary)',
    },
    subtitleWrapper: {
        display: 'inline-block',
        marginBottom: '3rem',
        maxWidth: '100%',
    },
    subtitle: {
        fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
        color: 'var(--text-secondary)',
        fontWeight: '500',
        margin: '0 auto',
    },
    techText: {
        fontSize: '1rem',
        color: 'var(--accent-color)',
        fontWeight: '600',
        marginTop: '0.8rem',
        letterSpacing: '1px',
        opacity: 0.9,
    },
    btnGroup: {
        display: 'flex',
        gap: '1.2rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    cta: {
        display: 'inline-block',
        padding: '16px 45px',
        backgroundColor: 'var(--accent-color)',
        color: '#fff',
        fontSize: '1.1rem',
        fontWeight: '600',
        borderRadius: '40px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 10px 25px rgba(79, 70, 229, 0.25)',
    },
    ctaOutline: {
        backgroundColor: 'transparent',
        color: 'var(--text-primary)',
        border: '2px solid rgba(0,0,0,0.1)',
        boxShadow: 'none',
    }
};

export default Hero;

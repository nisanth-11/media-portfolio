import React from 'react';
import { reels, profileBase } from '../data/projects';

const Portfolio = () => {
    return (
        <section id="portfolio" className="section" style={styles.section}>
            <div className="container">
                <h2 className="section-title animate-fade-up">02. <span>Selected Works</span></h2>

                <div style={styles.highlightGrid} className="animate-fade-up">
                    <div style={styles.vlogSection}>
                        <h3 style={styles.subTitle}>My Vlogging Journey</h3>
                        <p style={styles.vlogText}>
                            Check out my experiences as an exchange student in Germany on my dedicated vlogging account: <br />
                            <a href={profileBase} target="_blank" rel="noopener noreferrer" style={styles.vlogLink}>
                                @decodedbynish
                            </a>
                        </p>
                    </div>

                    <div style={{ ...styles.vlogSection, borderLeft: '4px solid #e10600' }}>
                        <h3 style={styles.subTitle}>Where It All Started</h3>
                        <p style={styles.vlogText}>
                            I edit content for the F1 Community in my free time, and it's where my media journey began. Check out the page here: <br />
                            <a href="https://www.instagram.com/f1__community" target="_blank" rel="noopener noreferrer" style={styles.vlogLink}>
                                @f1__community
                            </a>
                        </p>
                    </div>
                </div>

                <div className="portfolio-grid">
                    {reels.map((url, index) => {
                        const cleanUrl = url.split('?')[0].replace(/\/$/, "");
                        return (
                            <div key={index} className="portfolio-card">
                                <div style={styles.iframeContainer}>
                                    <iframe
                                        src={`${cleanUrl}/embed`}
                                        style={styles.iframe}
                                        frameBorder="0"
                                        scrolling="no"
                                        allowTransparency="true"
                                        title={`Instagram Reel ${index + 1}`}
                                    ></iframe>
                                </div>
                                <a
                                    href={cleanUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="watch-btn"
                                >
                                    Watch on Instagram
                                </a>
                            </div>
                        );
                    })}
                </div>

                <div style={{ marginTop: '5rem' }} className="animate-fade-up">
                    <h2 className="section-title">03. <span>Software Projects</span></h2>
                    <div className="software-grid">
                        <div className="portfolio-card" style={styles.softwareCard}>
                            <h3 style={styles.softwareTitle}>AidMyRide</h3>
                            <p style={styles.softwareText}>A community-focused mobile application featuring real-time connectivity, dynamic user roles, and a robust SOS emergency request system for travelers and helpers.</p>
                            <a href="https://github.com/nisanth-11/Aid-My-Ride" target="_blank" rel="noopener noreferrer" className="watch-btn">
                                View on GitHub
                            </a>
                        </div>

                        <div className="portfolio-card" style={styles.softwareCard}>
                            <h3 style={styles.softwareTitle}>Recook</h3>
                            <p style={styles.softwareText}>An interactive and efficient food management platform designed for organizing recipes and streamlining the modern culinary experience.</p>
                            <a href="https://github.com/nisanth-11/recook" target="_blank" rel="noopener noreferrer" className="watch-btn">
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        backgroundColor: 'var(--bg-color)',
    },
    highlightGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginBottom: '3rem',
    },
    vlogSection: {
        padding: '2rem',
        backgroundColor: 'var(--card-bg)',
        borderRadius: '12px',
        boxShadow: 'var(--card-shadow)',
        borderLeft: '4px solid var(--accent-color)',
        height: '100%',
    },
    subTitle: {
        fontSize: '1.5rem',
        marginBottom: '0.5rem',
        color: 'var(--text-primary)',
    },
    vlogText: {
        color: 'var(--text-secondary)',
        fontSize: '1.1rem',
    },
    vlogLink: {
        color: 'var(--accent-color)',
        fontWeight: 'bold',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '2rem',
    },
    iframeContainer: {
        width: '100%',
        aspectRatio: '0.5625',
        backgroundColor: 'var(--bg-color)',
    },
    iframe: {
        width: '100%',
        height: '100%',
        border: 'none',
    },
    softwareCard: {
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'var(--card-bg)',
    },
    softwareTitle: {
        fontSize: '1.5rem',
        marginBottom: '1rem',
        color: 'var(--text-primary)',
    },
    softwareText: {
        color: 'var(--text-secondary)',
        marginBottom: '1.5rem',
        flexGrow: 1,
    }
};

export default Portfolio;

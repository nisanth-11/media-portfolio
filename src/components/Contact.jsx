import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section" style={styles.section}>
            <div className="container" style={styles.container}>
                <h2 className="section-title animate-fade-up">04. <span>Get In Touch</span></h2>
                <p style={styles.text} className="animate-fade-up">
                    Looking for a freelance video editor, need help with media marketing, or want to discuss a software project? Let's connect!
                </p>
                <div className="btn-group animate-fade-up">
                    <a href="mailto:nisanthvs88@gmail.com" style={styles.btn}>
                        Email Me
                    </a>
                    <a href="tel:+4915511510518" style={{ ...styles.btn, ...styles.btnOutline }}>
                        +49 15511510518
                    </a>
                    <a href="https://www.instagram.com/_nisanth11_/" target="_blank" rel="noopener noreferrer" style={{ ...styles.btn, ...styles.btnOutline }}>
                        Instagram
                    </a>
                </div>
            </div>

            <div style={styles.footer} className="animate-fade-up">
                <p style={styles.footerText}>
                    Contact: nisanthvs88@gmail.com | +49 15511510518 <br />
                    &copy; {new Date().getFullYear()} Nisanth Vadivelan Sangeetha. All rights reserved.
                </p>
            </div>
        </section>
    );
};

const styles = {
    section: {
        backgroundColor: '#fff',
        paddingBottom: '150px',
    },
    container: {
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto',
    },
    text: {
        fontSize: '1.2rem',
        color: 'var(--text-secondary)',
        marginBottom: '3rem',
    },
    links: {
        display: 'flex',
        justifyContent: 'center',
        gap: '1.5rem',
        flexWrap: 'wrap',
    },
    btn: {
        padding: '15px 40px',
        backgroundColor: 'var(--accent-color)',
        color: '#fff',
        fontSize: '1.1rem',
        fontWeight: '600',
        borderRadius: '30px',
        transition: 'all 0.3s ease',
        boxShadow: '0 5px 15px rgba(79, 70, 229, 0.2)',
    },
    btnOutline: {
        backgroundColor: 'transparent',
        border: '2px solid var(--accent-color)',
        color: 'var(--accent-color)',
        boxShadow: 'none',
    },
    footer: {
        marginTop: '6rem',
        borderTop: '1px solid var(--border-color)',
        paddingTop: '2rem',
        textAlign: 'center',
        width: '100%',
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    footerText: {
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        lineHeight: '1.8',
    }
};

export default Contact;

import React from 'react';

const About = () => {
    return (
        <section id="about" className="section" style={styles.section}>
            <div className="container">
                <h2 className="section-title animate-fade-up">01. <span>About Me</span></h2>
                <div className="about-content animate-fade-up">
                    <div style={styles.textContainer}>
                        <p style={styles.text}>
                            I started my journey by editing videos in my free time. After joining Christ University, India, my passion turned into a profession. I got the opportunity to work closely with the Faculty of Computer Science and the Office of Alumni Engagement as a student core member of media and marketing.
                        </p>
                        <p style={styles.text}>
                            I'm also actively working with OG Media and Marketing India and have collaborated with various brands. Eventually, my journey took me to Germany as an exchange student, where I started vlogging my experiences.
                        </p>
                        <p style={styles.text}>
                            With a background in Computer Science, I don't just edit videos—I have the analytical mindset to understand algorithms and the technical ability to develop solid websites and mobile applications. Whether I'm cutting footage in DaVinci Resolve or writing code, I love creating engaging digital experiences.
                        </p>
                    </div>
                    <div style={styles.imageContainer}>
                        <div style={styles.imagePlaceholder}>
                            {/* Once you save your image into public folder as headshot.jpg, it will show up here */}
                            <img src="/headshot.jpg" alt="Nisanth Vadivelan Sangeetha" style={styles.img} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        backgroundColor: '#fff',
    },
    content: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
    },
    textContainer: {},
    text: {
        fontSize: '1.1rem',
        color: 'var(--text-secondary)',
        marginBottom: '1.5rem',
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    imagePlaceholder: {
        width: '100%',
        maxWidth: '220px',
        aspectRatio: '3/4',
        backgroundColor: 'var(--bg-color)',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: 'var(--card-shadow)',
    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    }
};

export default About;

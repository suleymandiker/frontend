import React from 'react';

function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Me</h1>
      <p style={styles.paragraph}>
        Hello! I'm Süleyman, a computer engineer and educator currently working at Turkcell.
        I have a passion for web development, particularly with React and TypeScript. 
        I'm also learning piano and enjoy designing t-shirts using Canvas.
      </p>
      <p style={styles.paragraph}>
        In addition to my technical skills, I'm deeply interested in different cultures and languages.
        I'm currently learning Spanish and planning a trip to Phuket, Thailand.
      </p>
      <p style={styles.paragraph}>
        If you'd like to know more about my work or projects, feel free to reach out to me!
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    fontSize: '2em',
    color: '#333',
  },
  paragraph: {
    fontSize: '1.2em',
    color: '#666',
    lineHeight: '1.6',
  },
};

export default About;

import React from 'react';
import background from '../assets/background.jpg';

const Web1 = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, lineHeight: 1.6 }}>
      <header
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          padding: '2rem 1rem',
          textAlign: 'center',
          height: '300px' 
        }}
>        <h1>Dr. Jane Doe</h1>
        <p>Researcher | Educator | Scientist</p>
        <nav>
          <a href="#about" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>About</a>
          <a href="#research" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Research</a>
          <a href="#publications" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Publications</a>
          <a href="#skills" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Skills</a>
          <a href="#contact" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Contact</a>
        </nav>
      </header>

      <section id="about" style={{ padding: '2rem', borderBottom: '1px solid #ccc' }}>
        <h2>About Me</h2>
        <p>
          I am a university professor and researcher focused on artificial intelligence and data science. I have over 10 years of experience in teaching and publishing academic work.
        </p>
      </section>

      <section id="research" style={{ padding: '2rem', borderBottom: '1px solid #ccc' }}>
        <h2>Research</h2>
        <ul>
          <li>AI for Healthcare</li>
          <li>Natural Language Processing</li>
          <li>Machine Learning Optimization</li>
        </ul>
      </section>

      <section id="publications" style={{ padding: '2rem', borderBottom: '1px solid #ccc' }}>
        <h2>Publications</h2>
        <ul>
          <li>“Deep Learning in Medical Imaging” – Journal of AI Research, 2023</li>
          <li>“NLP Models for Education” – ACM Digital Library, 2022</li>
        </ul>
      </section>

      <section id="skills" style={{ padding: '2rem', borderBottom: '1px solid #ccc' }}>
        <h2>Skills</h2>
        <p>Python, JavaScript, MATLAB, Data Analysis, Academic Writing</p>
      </section>

      <section id="contact" style={{ padding: '2rem', borderBottom: '1px solid #ccc' }}>
        <h2>Contact</h2>
        <p>Email: jane.doe@example.com</p>
        <p>LinkedIn: linkedin.com/in/janedoe</p>
      </section>

      <footer style={{ backgroundColor: '#f4f4f4', textAlign: 'center', padding: '1rem' }}>
        <p>&copy; 2025 Dr. Jane Doe</p>
        <p><a href="#" style={{ color: "#0074d9" }}>Made in Quicksite</a></p>
      </footer>
    </div>
  );
};

export default Web1;

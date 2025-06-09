import React from "react";
import background from '../assets/background.jpg'
import image from '../assets/profile.png'

const Web3 = () => {
  return (
    <div style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', color: '#333' }}>
      <header style={{ width: '100%', height: '250px', backgroundColor: '#000', backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      </header>

      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={image} style={{ width: '150px', borderRadius: '5px', marginRight: '1rem' }} />
          <div>
            <h1 style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>Albert Einstein</h1>
            <p style={{ fontStyle: 'italic' }}>Physicist</p>
            <p>
              University of Zurich<br />
              Rämistrasse 71<br />
              CH-8006 Zürich, Switzerland
            </p>
          </div>
        </div>
        <div>
          <a href="#" style={{ color: '#0074d9', display: 'block', marginBottom: '0.5rem' }}>Google Scholar</a>
          <a href="#" style={{ color: '#0074d9', display: 'block', marginBottom: '0.5rem' }}>Twitter</a>
          <a href="#" style={{ color: '#0074d9', display: 'block', marginBottom: '0.5rem' }}>Wikipedia</a>
          <a href="#" style={{ color: '#0074d9', display: 'block', marginBottom: '0.5rem' }}>Facebook</a>
        </div>
      </div>

      <nav style={{ padding: '0 2rem', marginBottom: '2rem' }}>
        <button style={{ padding: '0.5rem 1rem', marginRight: '1rem', fontWeight: 'bold', backgroundColor: 'black', color: 'white', border: 'none' }}>Home</button>
        <button style={{ padding: '0.5rem 1rem', marginRight: '1rem' }}>Publications</button>
        <button style={{ padding: '0.5rem 1rem', marginRight: '1rem' }}>Projects</button>
        <button style={{ padding: '0.5rem 1rem' }}>Search</button>
      </nav>

      <main style={{ padding: '0 2rem' }}>
        <section>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Welcome!</h2>
          <p style={{ marginBottom: '2rem' }}>
            Albert Einstein was a German-born theoretical physicist. He developed the general theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics). Einstein's work is also known for its influence on the philosophy of science. Einstein is best known in popular culture for his mass–energy equivalence formula E = mc^2. He received the 1921 Nobel Prize in Physics for his "services to theoretical physics", in particular his discovery of the law of the photoelectric effect, a pivotal step in the evolution of quantum theory.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Publications</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '1.5rem' }}>
              <a href="#" style={{ color: '#0074d9', fontWeight: 'bold', fontSize: '1.1rem', textDecoration: 'none' }}>On the Relativity Principle and the Conclusions Drawn from It</a><br />
              <small>Jahrbuch der Radioaktivität, 1907</small>
            </li>
            <li style={{ marginBottom: '1.5rem' }}>
              <a href="#" style={{ color: '#0074d9', fontWeight: 'bold', fontSize: '1.1rem', textDecoration: 'none' }}>On the Electrodynamics of Moving Bodies</a><br />
              <small>Annalen der Physik, 1905</small>
            </li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Projects</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '1.5rem' }}>
              <a href="#" style={{ color: '#0074d9', fontWeight: 'bold', fontSize: '1.1rem', textDecoration: 'none' }}>Special relativity</a>
              <p>Special relativity is the physical theory regarding the relationship between space and time.</p>
            </li>
            <li style={{ marginBottom: '1.5rem' }}>
              <a href="#" style={{ color: '#0074d9', fontWeight: 'bold', fontSize: '1.1rem', textDecoration: 'none' }}>Mass-energy equivalence</a>
              <p>This is the concept that the mass of an object is a measure of its energy content.</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Pages</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#" style={{ color: '#0074d9', textDecoration: 'none', fontWeight: 'bold' }}>Achievements</a></li>
            <li><a href="#" style={{ color: '#0074d9', textDecoration: 'none', fontWeight: 'bold' }}>Press</a></li>
          </ul>
        </section>
      </main>

      <footer style={{ padding: '2rem', fontSize: '0.9rem', color: '#666', borderTop: '1px solid #ccc', textAlign: 'center' }}>
        <p>Share <a href="#">🐦</a> <a href="#">📘</a> <a href="#">💼</a> <a href="#">✉️</a></p>
        <p>© 2025 Albert Einstein • <a href="#" style={{ color: '#0074d9' }}>Privacy Policy</a></p>
        <p><a href="#" style={{ color: '#0074d9' }}>Made in Quicksite</a></p>
      </footer>
    </div>
  );
};

export default Web3;

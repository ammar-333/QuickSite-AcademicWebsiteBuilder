import React from "react";
import background from '../assets/background.jpg'
import image from '../assets/profile.png'

const Web4 = () => {
  return (
    <div style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', color: '#333' }}>
      <header style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', color: 'white', textAlign: 'center', position: 'relative', height: '350px' }}>
        <div style={{ position: 'absolute', top: '80px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
          <img
            src={image}
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              border: '4px solid white',
              objectFit: 'cover',
              boxShadow: '0 0 10px rgba(0,0,0,0.5)',
              margin: '0 0 0 3rem'
            }}
          />
          <h1 style={{ margin: '1rem 0 0 0', fontSize: '2rem', fontWeight: 'bold' }}>Albert Einstein</h1>
          <p style={{ fontStyle: 'italic', marginTop: '0.25rem', fontSize: '1.1rem', fontWeight: 'bold' }}>Physicist</p>
        </div>
        
      </header>

      <nav style={{ display: 'flex', justifyContent: 'center', gap: '2rem', padding: '1rem', borderBottom: '1px solid #ddd' }}>
        <a href="#" style={{ color: '#0074d9', textDecoration: 'none', fontWeight: 'bold', borderBottom: '2px solid #0074d9', paddingBottom: '0.25rem' }}>Home</a>
        <a href="#" style={{ color: '#0074d9', textDecoration: 'none' }}>Publications ▾</a>
        <a href="#" style={{ color: '#0074d9', textDecoration: 'none' }}>Projects</a>
        <a href="#" style={{ color: '#0074d9', textDecoration: 'none' }}>Search</a>
      </nav>

      <main style={{ padding: '2rem' }}>
        <section>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Welcome!</h2>
          <p style={{ marginBottom: '2rem' }}>
            Albert Einstein was a German-born theoretical physicist. He developed the general theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics). Einstein's work is also known for its influence on the philosophy of science. Einstein is best known in popular culture for his mass–energy equivalence formula E = mc^2. He received the 1921 Nobel Prize in Physics for his "services to theoretical physics", in particular his discovery of the law of the photoelectric effect, a pivotal step in the evolution of quantum theory. <a href="#" style={{ color: '#0074d9' }}>Wikipedia</a>
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Publications</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '1.5rem' }}>
              <a href="#" style={{ color: '#0074d9', fontWeight: 'bold', fontSize: '1.1rem', textDecoration: 'none' }}>On the Relativity Principle and the Conclusions Drawn from It</a><br />
              <small>Albert Einstein - Jahrbuch der Radioaktivität, 1907, pp. 411-462</small>
            </li>
            <li style={{ marginBottom: '1.5rem' }}>
              <a href="#" style={{ color: '#0074d9', fontWeight: 'bold', fontSize: '1.1rem', textDecoration: 'none' }}>On the Electrodynamics of Moving Bodies</a><br />
              <small>Albert Einstein - Annalen der Physik, 1905, pp. 891-921</small>
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
              <p>This concept states that the mass of an object is a measure of its energy content.</p>
            </li>
            <li style={{ marginBottom: '1.5rem' }}>
              <a href="#" style={{ color: '#0074d9', fontWeight: 'bold', fontSize: '1.1rem', textDecoration: 'none' }}>Brownian motion</a>
              <p>The random motion of particles suspended in a fluid due to collisions with fast-moving molecules.</p>
            </li>
            <li style={{ marginBottom: '1.5rem' }}>
              <a href="#" style={{ color: '#0074d9', fontWeight: 'bold', fontSize: '1.1rem', textDecoration: 'none' }}>Photoelectric effect</a>
              <p>Einstein described light as quanta and laid the foundation for quantum theory.</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Pages</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#" style={{ color: '#0074d9', fontWeight: 'bold', textDecoration: 'none' }}>Achievements</a></li>
            <li><a href="#" style={{ color: '#0074d9', fontWeight: 'bold', textDecoration: 'none' }}>Press</a></li>
          </ul>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '2rem', fontSize: '0.9rem', color: '#666' }}>
        <p>Share <a href="#" style={{ color: '#0074d9' }}>🐦</a> <a href="#" style={{ color: '#0074d9' }}>📘</a> <a href="#" style={{ color: '#0074d9' }}>💼</a> <a href="#" style={{ color: '#0074d9' }}>✉️</a></p>
        <p>© 2025 Albert Einstein • <a href="#" style={{ color: '#0074d9' }}>Privacy Policy</a></p>
        <p><a href="#" style={{ color: '#0074d9' }}>Made in Quicksite</a></p>
      </footer>
    </div>
  );
};

export default Web4;

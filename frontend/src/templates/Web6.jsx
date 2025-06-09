import React from "react";
import background from '../assets/background.jpg'
import image from '../assets/profile.png'

const Web6 = () => {
  return (
    <div style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', color: '#333' }}>
      <header style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', color: 'white', padding: '2rem 1rem', display: 'flex', alignItems: 'center' }}>
        <img
          src={image}
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            border: '3px solid white',
            objectFit: 'cover',
            marginRight: '1.5rem'
          }}
        />
        <div>
          <h1 style={{ margin: 0, fontSize: '2.5rem', fontWeight: 'bold' }}>Albert Einstein</h1>
          <p style={{ fontSize: '1.2rem', margin: '0.25rem 0' }}>Physicist</p>
        </div>
      </header>

      <nav style={{ display: 'flex', gap: '2rem', padding: '1rem 2rem', borderBottom: '1px solid #ccc' }}>
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
            <li style={{ marginBottom: '1.5rem' }}>
              <a href="#" style={{ color: '#0074d9', fontWeight: 'bold', fontSize: '1.1rem', textDecoration: 'none' }}>Does the Inertia of a Body Depend Upon Its Energy Content?</a><br />
              <small>Albert Einstein - Annalen der Physik, 1905, pp. 639-641</small>
            </li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Projects</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '1.5rem' }}>
              <a href="#" style={{ color: '#0074d9', fontWeight: 'bold', fontSize: '1.1rem', textDecoration: 'none' }}>Special relativity</a>
              <p>Special relativity describes the relationship between space and time in inertial frames.</p>
            </li>
            <li style={{ marginBottom: '1.5rem' }}>
              <a href="#" style={{ color: '#0074d9', fontWeight: 'bold', fontSize: '1.1rem', textDecoration: 'none' }}>Mass-energy equivalence</a>
              <p>E = mc^2 describes how mass can be converted into energy and vice versa.</p>
            </li>
            <li style={{ marginBottom: '1.5rem' }}>
              <a href="#" style={{ color: '#0074d9', fontWeight: 'bold', fontSize: '1.1rem', textDecoration: 'none' }}>Brownian motion</a>
              <p>The random motion of particles suspended in fluid due to molecular collisions.</p>
            </li>
            <li style={{ marginBottom: '1.5rem' }}>
              <a href="#" style={{ color: '#0074d9', fontWeight: 'bold', fontSize: '1.1rem', textDecoration: 'none' }}>Photoelectric effect</a>
              <p>Einstein demonstrated light's particle nature by explaining how electrons are ejected from metal surfaces.</p>
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

export default Web6;

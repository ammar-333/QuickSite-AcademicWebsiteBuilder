import React from "react";
import background from '../assets/background.jpg'
import image from '../assets/profile.png'

const Web1 = () => {
  return (
    <div style={{ display: "flex", backgroundColor: "#fff", color: "#333", fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif" }}>
      <aside style={{ backgroundColor: "#0074d9", color: "white", padding: "2rem 1rem", width: "250px", minHeight: "100vh" }}>
        <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Albert Einstein</h1>
        <p style={{ fontStyle: "italic", marginBottom: "1.5rem" }}>Physicist</p>

        <nav>
          <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem" }}>
            <li style={{ marginBottom: "0.5rem" }}><a href="#home" style={{ color: "white", fontWeight: "bold", textDecoration: "none" }}>Home</a></li>
            <li style={{ marginBottom: "0.5rem" }}><a href="#publications" style={{ color: "white", textDecoration: "none" }}>Publications</a></li>
            <li style={{ marginBottom: "0.5rem" }}><a href="#projects" style={{ color: "white", textDecoration: "none" }}>Projects</a></li>
            <li style={{ marginBottom: "0.5rem" }}><a href="#search" style={{ color: "white", textDecoration: "none" }}>Search</a></li>
          </ul>
        </nav>

        <img src={image} style={{ width: "100%", borderRadius: "5px", marginBottom: "1rem" }} />

        <p style={{ marginBottom: "1rem" }}>
          Albert Einstein<br />
          Physicist<br />
          University of Zurich<br />
          Rämistrasse 71<br />
          CH-8006 Zürich, Switzerland
        </p>

        <div>
          <a href="#" style={{ color: "white", display: "block", marginBottom: "0.5rem" }}>Google Scholar</a>
          <a href="#" style={{ color: "white", display: "block", marginBottom: "0.5rem" }}>Twitter</a>
          <a href="#" style={{ color: "white", display: "block", marginBottom: "0.5rem" }}>Wikipedia</a>
          <a href="#" style={{ color: "white", display: "block", marginBottom: "0.5rem" }}>Facebook</a>
        </div>
      </aside>

      <main style={{ flex: 1, padding: "2rem" }}>
        <section id="home">
          <div style={{ width: "100%", height: "250px", background: `url(${background}) center/cover no-repeat`, borderRadius: "8px", marginBottom: "2rem" }}></div>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Welcome!</h2>
          <p style={{ marginBottom: "2rem" }}>
            Albert Einstein was a German-born theoretical physicist. He developed the general theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics). Einstein's work is also known for its influence on the philosophy of science. Einstein is best known in popular culture for his mass–energy equivalence formula E = mc^2. He received the 1921 Nobel Prize in Physics for his services to theoretical physics.
          </p>
        </section>

        <section id="publications">
          <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Publications</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "1.5rem" }}>
              <a href="#" style={{ color: "#0074d9", fontWeight: "bold", fontSize: "1.1rem", textDecoration: "none" }}>On the Relativity Principle and the Conclusions Drawn from It</a><br />
              <small>Jahrbuch der Radioaktivität, 1907</small>
            </li>
            <li style={{ marginBottom: "1.5rem" }}>
              <a href="#" style={{ color: "#0074d9", fontWeight: "bold", fontSize: "1.1rem", textDecoration: "none" }}>On the Electrodynamics of Moving Bodies</a><br />
              <small>Annalen der Physik, 1905</small>
            </li>
            <li style={{ marginBottom: "1.5rem" }}>
              <a href="#" style={{ color: "#0074d9", fontWeight: "bold", fontSize: "1.1rem", textDecoration: "none" }}>Does the Inertia of a Body Depend Upon Its Energy Content?</a><br />
              <small>Annalen der Physik, 1905</small>
            </li>
          </ul>
        </section>

        <section id="projects">
          <h2 style={{ fontSize: "1.8rem", marginTop: "3rem", marginBottom: "1rem" }}>Projects</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "1.5rem" }}>
              <a href="#" style={{ color: "#0074d9", fontWeight: "bold", fontSize: "1.1rem", textDecoration: "none" }}>Special relativity</a>
              <p>In physics, special relativity is the generally accepted physical theory regarding the relationship between space and time.</p>
            </li>
            <li style={{ marginBottom: "1.5rem" }}>
              <a href="#" style={{ color: "#0074d9", fontWeight: "bold", fontSize: "1.1rem", textDecoration: "none" }}>Mass-energy equivalence</a>
              <p>Mass–energy equivalence is the concept that the mass of an object is a measure of its energy content.</p>
            </li>
            <li style={{ marginBottom: "1.5rem" }}>
              <a href="#" style={{ color: "#0074d9", fontWeight: "bold", fontSize: "1.1rem", textDecoration: "none" }}>Brownian motion</a>
              <p>Brownian motion is the random motion of particles suspended in a fluid resulting from their collision with molecules.</p>
            </li>
            <li style={{ marginBottom: "1.5rem" }}>
              <a href="#" style={{ color: "#0074d9", fontWeight: "bold", fontSize: "1.1rem", textDecoration: "none" }}>Photoelectric effect</a>
              <p>Einstein described light as composed of discrete quanta, rather than continuous waves.</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: "1.8rem", marginTop: "3rem", marginBottom: "1rem" }}>Pages</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><a href="#" style={{ color: "#0074d9", textDecoration: "none", fontWeight: "bold" }}>Achievements</a></li>
            <li><a href="#" style={{ color: "#0074d9", textDecoration: "none", fontWeight: "bold" }}>Press</a></li>
          </ul>
        </section>

        <footer style={{ marginTop: "3rem", paddingTop: "1rem", fontSize: "0.9rem", color: "#666", borderTop: "1px solid #ccc" }}>
          <p>Share <a href="#">🐦</a> <a href="#">📘</a> <a href="#">💼</a> <a href="#">✉️</a></p>
          <p>© 2025 Albert Einstein • <a href="#" style={{ color: "#0074d9" }}>Privacy Policy</a></p>
          <p><a href="#" style={{ color: "#0074d9" }}>Made in Quicksite</a></p>
        </footer>
      </main>
    </div>
  );
};

export default Web1;

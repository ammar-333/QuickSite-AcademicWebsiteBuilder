import React from "react";
import background from '../assets/background.jpg'
import image from '../assets/profile.png'

const Web2 = () => {
  return (
    <div style={{ backgroundColor: "#fff", color: "#333", fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif", lineHeight: 1.6, margin: 0, padding: 0 }}>
      <header style={{ backgroundColor: "#0b8bf2", color: "white" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 2rem" }}>
          <h1>Albert Einstein</h1>
          <nav>
            <ul style={{ listStyle: "none", display: "flex", gap: "1.5rem", margin: 0 }}>
              <li><a href="#home" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>Home</a></li>
              <li><a href="#publications" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>Publications</a></li>
              <li><a href="#projects" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>Projects</a></li>
              <li><a href="#search" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>Search</a></li>
            </ul>
          </nav>
        </div>
        <div style={{ background: `url(${background}) center/cover no-repeat`, height: "250px" }}></div>
      </header>

      <section id="home" style={{ display: "flex", gap: "2rem", padding: "2rem" }}>
        <div>
          <img src={image} style={{ width: "180px", borderRadius: "8px" }} />
          <p>
            <strong>Albert Einstein</strong><br />
            Physicist<br />
            University of Zurich<br />
            Rämistrasse 71<br />
            CH-8006 Zürich, Switzerland
          </p>
          <div style={{ marginTop: "1rem" }}>
            <a href="#">Google Scholar</a><br />
            <a href="#">Twitter</a><br />
            <a href="#">Wikipedia</a><br />
            <a href="#">Facebook</a>
          </div>
        </div>
        <div style={{ maxWidth: "600px" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Welcome!</h2>
          <p>
            Albert Einstein was a German-born theoretical physicist. He developed the general theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics). Einstein's work is also known for its influence on the philosophy of science. Einstein is best known in popular culture for his mass–energy equivalence formula E = mc^2. He received the 1921 Nobel Prize in Physics for his "services to theoretical physics", in particular his discovery of the law of the photoelectric effect, a pivotal step in the evolution of quantum theory.
          </p>
        </div>
      </section>

      <section id="publications" style={{ padding: "2rem" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Publications</h2>
        <ul style={{ listStyle: "none" }}>
          <li style={{ marginBottom: "1.5rem" }}>
            <a href="#" style={{ color: "#2196f3", fontWeight: "bold", textDecoration: "none", fontSize: "1.1rem" }}>On the Relativity Principle and the Conclusions Drawn from It</a><br />
            <small>Albert Einstein - Jahrbuch der Radioaktivität, 1907</small>
          </li>
          <li style={{ marginBottom: "1.5rem" }}>
            <a href="#" style={{ color: "#2196f3", fontWeight: "bold", textDecoration: "none", fontSize: "1.1rem" }}>On the Electrodynamics of Moving Bodies</a><br />
            <small>Albert Einstein - Annalen der Physik, 1905</small>
          </li>
          <li style={{ marginBottom: "1.5rem" }}>
            <a href="#" style={{ color: "#2196f3", fontWeight: "bold", textDecoration: "none", fontSize: "1.1rem" }}>Does the Inertia of a Body Depend Upon Its Energy Content?</a><br />
            <small>Albert Einstein - Annalen der Physik, 1905</small>
          </li>
          <li style={{ marginBottom: "1.5rem" }}>
            <a href="#" style={{ color: "#2196f3", fontWeight: "bold", textDecoration: "none", fontSize: "1.1rem" }}>On the Movement of Small Particles Suspended in Stationary Liquids</a><br />
            <small>Albert Einstein - Annalen der Physik, 1905</small>
          </li>
        </ul>
      </section>

      <section id="projects" style={{ padding: "2rem" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Projects</h2>
        <ul style={{ listStyle: "none" }}>
          <li style={{ marginBottom: "1.5rem" }}>
            <a href="#" style={{ color: "#2196f3", fontWeight: "bold", textDecoration: "none", fontSize: "1.1rem" }}>Special relativity</a>
            <p>Special relativity is the theory regarding the relationship between space and time. It is based on two postulates about inertial systems.</p>
          </li>
          <li style={{ marginBottom: "1.5rem" }}>
            <a href="#" style={{ color: "#2196f3", fontWeight: "bold", textDecoration: "none", fontSize: "1.1rem" }}>Mass-energy equivalence</a>
            <p>The concept that the mass of an object is a measure of its energy content. Adding energy increases mass.</p>
          </li>
          <li style={{ marginBottom: "1.5rem" }}>
            <a href="#" style={{ color: "#2196f3", fontWeight: "bold", textDecoration: "none", fontSize: "1.1rem" }}>Brownian motion</a>
            <p>The random motion of particles suspended in a fluid resulting from their collisions with molecules in the gas or liquid.</p>
          </li>
          <li style={{ marginBottom: "1.5rem" }}>
            <a href="#" style={{ color: "#2196f3", fontWeight: "bold", textDecoration: "none", fontSize: "1.1rem" }}>Photoelectric effect</a>
            <p>Einstein described light as composed of quanta. Based on Max Planck’s theory of black-body radiation.</p>
          </li>
        </ul>
      </section>

      <section style={{ padding: "2rem" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Pages</h2>
        <ul style={{ listStyle: "none" }}>
          <li style={{ marginBottom: "1.5rem" }}><a href="#" style={{ color: "#2196f3", fontWeight: "bold", textDecoration: "none", fontSize: "1.1rem" }}>Achievements</a></li>
          <li style={{ marginBottom: "1.5rem" }}><a href="#" style={{ color: "#2196f3", fontWeight: "bold", textDecoration: "none", fontSize: "1.1rem" }}>Press</a></li>
        </ul>
      </section>

      <footer style={{ padding: "1rem", background: "#0b8bf2", textAlign: "center", fontSize: "0.9rem", color: "#666" }}>
        <p>Share <a href="#">🐦</a> <a href="#">📘</a> <a href="#">💼</a> <a href="#">✉️</a></p>
        <p>© 2025 Academic Web Builder</p>
        <p><a href="#" style={{ color: "#0074d9" }}>Made in Quicksite</a></p>
      </footer>
    </div>
  );
};

export default Web2;
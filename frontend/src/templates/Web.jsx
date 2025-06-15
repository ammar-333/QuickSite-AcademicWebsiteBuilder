import React, { useState, useEffect } from "react";
import background from "../assets/background.jpg";

const Web = ({
  name,
  roll,
  img,
  bio,
  articles,
  interests,
  account,
  color,
  finish,
  setFinish,
}) => {
  const downloadHtmlFile = () => {
    const htmlContent = document.documentElement.outerHTML;
    const blob = new Blob([htmlContent], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "website.html";
    link.click();
    setFinish(true);
  };
  

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#fff",
        color: "#333",
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <aside
        style={{
          backgroundColor: `${color}`,
          color: "white",
          padding: "2rem 1rem",
          width: "250px",
          minHeight: "100vh",
        }}
      >
        <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{name}</h1>
        <p style={{ fontStyle: "italic", marginBottom: "1.5rem" }}>{roll}</p>

        <nav>
          <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <a
                href="#home"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Home
              </a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a
                href="#publications"
                style={{ color: "white", textDecoration: "none" }}
              >
                Publications
              </a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a
                href="#projects"
                style={{ color: "white", textDecoration: "none" }}
              >
                Projects
              </a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a
                href="#search"
                style={{ color: "white", textDecoration: "none" }}
              >
                Search
              </a>
            </li>
          </ul>
        </nav>

        <img
          src={img}
          style={{ width: "100%", borderRadius: "5px", marginBottom: "1rem" }}
        />

        <p style={{ marginBottom: "1rem" }}>
          {name}
          <br />
          {roll}
          <br />
        </p>

        <div>
          <a
            href={account}
            style={{ color: "white", display: "block", marginBottom: "0.5rem" }}
          >
            Google Scholar
          </a>
          <a
            href="#"
            style={{ color: "white", display: "block", marginBottom: "0.5rem" }}
          >
            Twitter
          </a>
          <a
            href="#"
            style={{ color: "white", display: "block", marginBottom: "0.5rem" }}
          >
            Wikipedia
          </a>
          <a
            href="#"
            style={{ color: "white", display: "block", marginBottom: "0.5rem" }}
          >
            Facebook
          </a>
        </div>
      </aside>

      <main style={{ flex: 1 }}>
        <section id="home">
          <div
            style={{
              width: "100%",
              height: "250px",
              background:
                "url(https://static.vecteezy.com/system/resources/thumbnails/039/843/742/small_2x/ai-generated-the-glasses-with-school-books-in-front-of-a-blackboard-created-by-artificial-intelligence-photo.jpeg) center/cover no-repeat",
              borderRadius: "8px",
              marginBottom: "2rem",
            }}
          ></div>
          <div style={{ padding: "2rem" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
              Welcome!
            </h2>
            <p style={{ marginBottom: "2rem" }}>{bio}</p>
          </div>
        </section>

        <div style={{ padding: "2rem" }}>
          <section id="Publications">
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
              Publications
            </h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {articles.map((article, index) => {
                return (
                  <li key={index} style={{ marginBottom: "1.5rem" }}>
                    <a
                      href="#"
                      style={{
                        color: `${color}`,
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                        textDecoration: "none",
                      }}
                    >
                      {article}
                    </a>
                    <br />
                    <small>
                      {name}, {roll}
                    </small>
                  </li>
                );
              })}
            </ul>
          </section>

          <section id="pubinterestslications">
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
              interests
            </h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {interests.map((interest, index) => {
                return (
                  <li key={index} style={{ marginBottom: "1.5rem" }}>
                    <a
                      href="#"
                      style={{
                        color: `${color}`,
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                        textDecoration: "none",
                      }}
                    >
                      {interest}
                    </a>
                    <br />
                  </li>
                );
              })}
            </ul>
          </section>

          <section>
            <h2
              style={{
                fontSize: "1.8rem",
                marginTop: "3rem",
                marginBottom: "1rem",
              }}
            >
              Pages
            </h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <a
                  href="#"
                  style={{
                    color: `${color}`,
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Achievements
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    color: `${color}`,
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Press
                </a>
              </li>
            </ul>
          </section>

          <footer
            style={{
              marginTop: "3rem",
              paddingTop: "1rem",
              fontSize: "0.9rem",
              color: "#666",
              borderTop: "1px solid #ccc",
            }}
          >
            <p>
              Share <a href="#">🐦</a> <a href="#">📘</a> <a href="#">💼</a>{" "}
              <a href="#">✉️</a>
            </p>
            <p>
              © 2025 Albert Einstein •{" "}
              <a href="#" style={{ color: `${color}` }}>
                Privacy Policy
              </a>
            </p>
            <p>
              <a href="#" style={{ color: `${color}` }}>
                Made in Quicksite
              </a>
            </p>
          </footer>
        </div>
      </main>
      {finish ? (
        <div> . </div>
      ) : (
        <button
          onClick={downloadHtmlFile}
          style={{
            position: "fixed",
            bottom: "15px",
            right: "25px",
            backgroundColor: "#333",
            color: "#fff",
            border: "none",
            padding: "7px 14px",
            borderRadius: "5px",
            cursor: "pointer",
            zIndex: 9999,
          }}
        >
          Download Website
        </button>
      )}
    </div>
  );
};

export default Web;

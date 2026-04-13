import { useState } from "react";
import LandingHeader from "../components/LandingHeader";
import Projects from "../components/Projects";
import "../components/Projects.css";
import "../components/ProjectCard.css";
import "./MyProfile.css";

export default function MyProfile() {
  const [profileImageSrc, setProfileImageSrc] = useState("/profile.png");

  return (
    <div className="my-profile">
      <LandingHeader />

      <main className="my-profile__main">
        <section id="home" className="my-profile__hero" aria-label="Home">
          <div className="my-profile__photo-wrap">
            <img
              src={profileImageSrc}
              alt="Profile"
              onError={() => {
                setProfileImageSrc("https://i.pravatar.cc/320?img=12");
              }}
              className="my-profile__photo"
            />
          </div>

          <h1>
            Hi, I&apos;m{" "}
            <span className="my-profile__accent">Shukri Mohamed</span>
          </h1>
          <p className="my-profile__tagline">
            Junior web developer building modern, responsive interfaces. Welcome
            to my profile — use the header links to jump to each section.
          </p>

          <div className="my-profile__actions">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="my-profile__btn my-profile__btn--primary"
            >
              View CV
            </a>
            <a
              href="#project"
              className="my-profile__btn my-profile__btn--ghost"
            >
              Projects
            </a>
          </div>
        </section>

        <section
          id="cv"
          className="my-profile__section my-profile__section--muted"
          aria-labelledby="cv-heading"
        >
          <h2 id="cv-heading">CV</h2>
          <p>Open your résumé as a PDF, or add a short summary below.</p>
          <p className="my-profile__cv-actions">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="my-profile__btn my-profile__btn--primary"
            >
              Open CV (PDF)
            </a>
            <a
              href="/cv.pdf"
              download
              className="my-profile__btn my-profile__btn--ghost"
            >
              Download CV
            </a>
          </p>
        </section>

        <section
          id="project"
          className="my-profile__section my-profile__section--light"
          aria-labelledby="project-heading"
        >
          <h2 id="project-heading">Project</h2>
          <p style={{ marginBottom: "1rem" }}>
            A selection of things I&apos;ve built.
          </p>
          <div className="my-profile__projects-wrap">
            <Projects />
          </div>
        </section>

        <section
          id="achievement"
          className="my-profile__section my-profile__section--muted"
          aria-labelledby="achievement-heading"
        >
          <h2 id="achievement-heading">Achievement</h2>
          <p>
            <section>
              <h2 id="achievement-heading"></h2>

              <ul>
                <li>
                  Completed a Bachelor’s Degree in Public Health with strong
                  academic performance and practical knowledge in community
                  health and healthcare systems.
                </li>

                <li>
                  Developed strong front-end development skills through
                  self-study, including React, TypeScript, and Tailwind CSS, and
                  built multiple personal projects.
                </li>

                <li>
                  Successfully transitioned into tech from a healthcare
                  background, demonstrating adaptability, discipline, and
                  continuous learning mindset.
                </li>

                <li>
                  Improved computer literacy through hands-on practice with
                  modern tools, including Git, GitHub, and LibreOffice.
                </li>

                <li>
                  Gained experience working in educational settings in London,
                  strengthening communication, teamwork, and organizational
                  skills.
                </li>
              </ul>
            </section>
          </p>
        </section>

        <section
          id="hobbies"
          className="my-profile__section my-profile__section--light"
          aria-labelledby="hobbies-heading"
        >
          <h2 id="hobbies-heading">Hobbies</h2>
          <p>
            <section
  id="hobbies"
  className="my-profile__section my-profile__section--light"
>
  <h2>Hobbies</h2>

  <p>
    Outside of my professional work, I enjoy continuously improving my skills
    through self-learning and personal projects. I have a strong interest in
    web design, exploring new technologies, and building creative digital
    solutions.
  </p>

  <p>
    I also enjoy reading, personal development, and creative activities such as
    design and beauty-related arts, which help me stay inspired and detail-oriented.
  </p>
</section>
          </p>
        </section>c

        <section
          className="my-profile__contact"
          aria-labelledby="contact-heading"
        >
          <h2 id="contact-heading">Contact</h2>
          <div className="my-profile__social">
            <a href="https://github.com/ShukriMohamed" target="_blank">
              🐙
            </a>
            <a href="https://linkedin.com/in/shukri-mohamed" target="_blank">
              💼
            </a>
            <a href="mailto:geenyo360@gmail.com">✉️</a>
          </div>
        </section>
      </main>
    </div>
  );
}

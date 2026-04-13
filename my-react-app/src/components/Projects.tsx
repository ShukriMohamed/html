import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="portfolio-section">
      <h2>Projects</h2>

      <div className="projects-grid">
        <ProjectCard
          title="BeautyHub"
          description="A beauty services booking web application with a clean and responsive user interface."
          tech={["React", "TypeScript", "CSS"]}
          github="https://github.com/YOUR_GITHUB_USERNAME/beautyhub"
        />

        <ProjectCard
          title="Visa Application App"
          description="A multi-step visa application form with validation and structured user input."
          tech={["React", "JavaScript", "CSS"]}
          github="https://github.com/YOUR_GITHUB_USERNAME/visa-application"
        />

        <ProjectCard
          title="Personal Portfolio"
          description="My personal portfolio website showcasing frontend projects and skills."
          tech={["React", "TypeScript", "CSS"]}
          github="https://github.com/YOUR_GITHUB_USERNAME/my-portfolio"
        />
      </div>
    </section>
  );
}

export default Projects;

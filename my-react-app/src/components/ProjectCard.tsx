import "./ProjectCard.css";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
};

function ProjectCard({
  title,
  description,
  tech,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <h3>{title}</h3>

      <p className="project-description">{description}</p>

      <div className="project-tech">
        {tech.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>

      <div className="project-links">
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>

        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;

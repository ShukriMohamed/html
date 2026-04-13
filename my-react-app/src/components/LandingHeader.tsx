import "./LandingHeader.css";

type NavLink = { label: string; href: string; newTab?: boolean };

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "CV", href: "/cv.pdf", newTab: true },
  { label: "Project", href: "#project" },
  { label: "Achievement", href: "#achievement" },
  { label: "Hobbies", href: "#hobbies" },
];

export default function LandingHeader() {
  return (
    <header className="landing-header" role="banner">
      <div className="landing-header__inner">
        <a href="#home" className="landing-header__brand">
          Shukri Mohamed
        </a>
        <nav className="landing-header__nav" aria-label="Main navigation">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="landing-header__link"
              style={{ animationDelay: `${0.06 * i}s` }}
              target={link.newTab ? "_blank" : undefined}
              rel={link.newTab ? "noopener noreferrer" : undefined}
            >
              <span className="landing-header__link-text">{link.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

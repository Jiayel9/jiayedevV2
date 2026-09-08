import '../css/Projects.css'
import kevinImg from '../assets/img/kevin-min.webp'
import nucleImg from '../assets/img/nucle.io.png'

const projects = [
  {
    title: 'Personal Website',
    icon: '🌐',
    image: kevinImg,
    description: 'The site you\'re on right now. Built from scratch with React and Vite, migrated from a plain HTML/CSS/JS version.',
    tags: ['React', 'Vite', 'CSS'],
    repoLabel: 'GitHub',
    github: 'https://github.com/Jiayel9/jiayedevV2',
    live: '#',
  },
  {
    title: 'nucle.io — iGEM 2024',
    icon: '🧬',
    image: nucleImg,
    description: 'McGill\'s 2024 iGEM project. Add your description here.',
    tags: ['iGEM', 'Synthetic Biology', 'React', 'TypeScript', 'JavaScript', 'CSS'],
    repoLabel: 'GitLab',
    github: 'https://gitlab.igem.org/2024/mcgill',
    live: 'https://2024.igem.wiki/mcgill/',
  },
  {
    title: 'iGEM 2025 McGill',
    icon: '🔬',
    image: null,
    description: 'Contributed to the engineering page for iGEM 2025, a synthetic biology competition. Helped with the design and implementation of the page.',
    tags: ['iGEM', 'Synthetic Biology', 'TypeScript', 'JavaScript', 'CSS'],
    repoLabel: 'GitLab',
    github: 'https://gitlab.igem.org/2025/mcgill',
    live: 'https://2025.igem.wiki/mcgill/',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Web & Frontend</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="flip-card" key={project.title}>
            <div className="flip-card-inner">
              <div
                className="flip-card-front"
                style={project.image ? { backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${project.image})` } : {}}
              >
                <span className="project-icon">{project.icon}</span>
                <h3>{project.title}</h3>
                <span className="flip-hint">hover to see more</span>
              </div>
              <div className="flip-card-back">
                <div>
                  <h3>{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link">{project.repoLabel || 'GitHub'}</a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="project-link">Live</a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

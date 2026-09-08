import '../css/BackendProjects.css'

const projects = [
  {
    title: 'Backend Project One',
    icon: '⚙️',
    image: null,
    description: 'Add your description here.',
    tags: ['Python'],
    repoLabel: 'GitHub',
    github: '#',
    live: null,
  },
  {
    title: 'Backend Project Two',
    icon: '🗄️',
    image: null,
    description: 'Add your description here.',
    tags: ['Java'],
    repoLabel: 'GitHub',
    github: '#',
    live: null,
  },
  {
    title: 'Backend Project Three',
    icon: '🔧',
    image: null,
    description: 'Add your description here.',
    tags: ['Go'],
    repoLabel: 'GitHub',
    github: '#',
    live: null,
  },
]

export default function BackendProjects() {
  return (
    <section id="backend" className="backend-projects-section">
      <h2>Backend & Systems</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="flip-card" key={project.title}>
            <div className="flip-card-inner">
              <div
                className="flip-card-front backend-front"
                style={project.image ? { backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${project.image})` } : {}}
              >
                <span className="project-icon">{project.icon}</span>
                <h3>{project.title}</h3>
                <span className="flip-hint">hover to see more</span>
              </div>
              <div className="flip-card-back backend-back">
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

import '../css/About.css'
import skiKev from '../assets/img/ski.jpg'

const hobbies = [
  { icon: '🥊', label: 'Boxing' },
  { icon: '🏐', label: 'Volleyball' },
  { icon: '🇫🇷', label: 'French' },
  { icon: '⛷️', label: 'Skiing' },
]

export default function About() {
  return (
    <section id="about-me">
      <h2>About Me</h2>
      <div className="about-layout">
        <img className="about-img" src={skiKev} alt="Kevin Liu" />
        <div className="about-text">

          <p className="about-bio">
            I'm a Computer Science & AI student at McGill University, mainly interested in artificial intelligence, software architecture, and systems-focused projects.
          </p>

          <div className="about-divider" />

          <p className="about-section-label">Hobbies</p>
          <div className="about-hobbies">
            {hobbies.map((h) => (
              <div className="hobby-item" key={h.label}>
                <span className="hobby-icon">{h.icon}</span>
                <span className="hobby-label">{h.label}</span>
              </div>
            ))}
          </div>

          <div className="about-divider" />

          <p className="about-funfact">
            This site was originally built in 2022 in plain HTML/CSS/JS — rebuilt with React since.
          </p>

        </div>
      </div>
    </section>
  )
}

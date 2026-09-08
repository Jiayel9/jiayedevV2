import '../css/About.css'
import kevinImg from '../assets/img/kevin-min.webp'

const tags = ['📍 Montreal', '🎓 McGill CS', '🤖 AI', '🥊 Boxing', '🏐 Volleyball', '🇫🇷 French']

export default function About() {
  return (
    <section id="about-me">
      <h2>About Me</h2>
      <div className="about-layout">
        <img className="about-img" src={kevinImg} alt="Kevin Liu" />
        <div className="about-text">
          <p className="about-bio">
            I'm a Computer Science & AI student at McGill University, mainly interested in artificial intelligence, software architecture, and systems-focused projects.
          </p>
          <p className="about-bio">
            Outside of school, you'll usually find me boxing, playing volleyball, or practicing French.
          </p>
          <p className="about-bio">
            Fun fact: I originally built this website in 2022 using only HTML, CSS, and JavaScript, and I've since rebuilt it with React.
          </p>
          <div className="about-tags">
            {tags.map((tag) => (
              <span className="about-tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

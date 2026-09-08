import '../css/Navbar.css'

export default function Navbar() {
  function scrollTo(id) {
    if (id === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="main-nav">
      <a href="#" className="main-nav-link" onClick={(e) => { e.preventDefault(); scrollTo('#') }}>
        NAVIGATION
      </a>
      <ul className="main-nav-list">
        <li><a href="#about-me" className="main-nav-link" onClick={(e) => { e.preventDefault(); scrollTo('#about-me') }}>ABOUT</a></li>
        <li><a href="#gallery" className="main-nav-link" onClick={(e) => { e.preventDefault(); scrollTo('#gallery') }}>GALLERY</a></li>
      </ul>
    </nav>
  )
}

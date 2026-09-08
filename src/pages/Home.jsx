import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import BackendProjects from '../components/BackendProjects'
import Gallery from '../components/Gallery'
import ReachMe from '../components/ReachMe'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <BackendProjects />
      <Gallery />
      <ReachMe />
    </>
  )
}

import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Experience from '../components/Experience'
import Project from '../components/Project'
import Socials from '../components/Socials'
import MouseGlow from '../components/MouseGlow'

export default function Page() {
  return (
    <>
      <MouseGlow />
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Project />
      <Socials />
    </>
  )
}

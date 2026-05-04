import "./App.css"
import Contact from "./sections/contact/Contact"
import Footer from "./component/layout/footer/Footer"
import Hero from "./sections/hero/HeroSection"
import Navbar from "./component/layout/navbar/Navbar"
import About from "./sections/about/About"
import Project from "./sections/project/Project"
import Tools from "./sections/tools/Tools"

const App = () => {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Tools />
      <Contact />
      <Footer />
    </main>
  )
}

export default App

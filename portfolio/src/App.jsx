import './App.css'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import Skills     from './components/Skills'
import Projects   from './components/Projects'
import Experience from './components/Experience'
import Contact    from './components/Contact'

export default function App() {
  return (
    <>
      {/* Blob aurora center */}
      <div className="bg-blob" />

      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  )
}

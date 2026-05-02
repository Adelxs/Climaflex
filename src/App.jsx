import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Gallery from './components/Gallery/Gallery'
import WhyUs from './components/WhyUs/WhyUs'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <WhyUs />
      <Contact />
      <Footer />
    </>
  )
}

export default App
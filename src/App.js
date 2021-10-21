import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Shop from './components/Shop'
import BestSellers from './components/BestSellers'
import Expertise from './components/Expertise'
import Testemonials from './components/Testemonials'
import Social from './components/Social'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="bd-container">
        <Hero />
        <p id="about">Our premium products got the finest quality cotton that create an exquisite light weight textile that’s both soft and crisp–guaranteed to give you a wonderful night’s sleep</p>
        <Shop />
        <BestSellers />
        <Expertise />
        <Testemonials />
        <Social />
        <Footer />
      </main>
    </div>
  )
}

export default App

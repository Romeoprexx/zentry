import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Story from './components/Story'
import Glance from './components/Glance'
import Contact from './components/Contact'
import Footer from './Footer'

const App = () => {
  return (
    <main className='relative min-h-scren overflow-x-hidden w-screen'>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Glance />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
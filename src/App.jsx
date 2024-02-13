import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navigation/Navbar'
import Header from './components/Navigation/Header/Header'
import ContactForm from './components/ContactForm/ContactForm'

function App() {
  

  return (
    <>
      <Navbar/>
      <main className='main_container'>
      <Header/>
      <ContactForm/>
      </main>
    </>
  )
}

export default App

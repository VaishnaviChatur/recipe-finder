import React from 'react'
import Main from './components/Main'
import About from './components/About/About'
import ContactInfo from './components/Contact/ContactInfo'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Nav from './components/nav'
export default function App() {
  return (
    <div>
   
      <BrowserRouter>
      <Nav/>
      <Routes>
   
        <Route path="/" element={ <Main/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <ContactInfo/> } />
      </Routes>
   </BrowserRouter>
    </div>
  )
}


import React, {useEffect} from 'react'
import {Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact'
import Home from './pages/Home'
import Navbar from './componentes/Navbar';

function App() {
  const backgroundImage = 'https://i.ibb.co/k2v98fc/da35a192-5cc9-48bb-87c5-d11275b6a663-1.png'
  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
  }, []);
  return (
    <div className="App" >
  

    <Navbar/>

     <Routes>
        <Route path='/' element={<Home />} />
      <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact/>} />
     </Routes>
    </div>
  )
}

export default App

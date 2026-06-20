import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './pages/Hero'

import Courses from './pages/Courses'
import Navbar from './component/Navbar'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
function App() {
  return (
    <div className="App">  
      <Router>
        {/* Nav is now inside the Router, allowing links to function correctly */}
        <Navbar/>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/courses" element={<Courses />} />
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/contact-us' element={<ContactUs/>} ></Route>
        </Routes> 
      </Router>
    </div>
  )
}

export default App
import './App.css'
import Home from './Component/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Trendfit from './Component/Trendfit'
import Project from './Component/Project'
import Sjproject from './Component/Sjproject'
import Tripnest from './Component/Tripnest'
import Contact from './Component/Contact'
import Hybridcloud from './Component/Hybridcloud'

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/trendfit" element={<Trendfit />} />
        <Route path="/sjproject" element={<Sjproject />} />
        <Route path="/tripnest" element={<Tripnest />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/hybridcloud" element={<Hybridcloud/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
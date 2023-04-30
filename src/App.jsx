import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './Components/index'
import {
  HomePage, About, Service
} from './Pages/index'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/service" element={<Service />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

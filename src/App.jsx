import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './Components/index'
import { HomePage, About, Service, AdminDashboard } from './Pages/index'
import PrivateRoute from './Utils/PrivateRoute'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />

          <Route path="/" element={<PrivateRoute />} >
            <Route path="service" element={<Service />} />
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<AdminDashboard />} />
          </Route>



        </Routes>
      </Router>
    </div>
  )
}

export default App

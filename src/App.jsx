import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DatingPhotography from './pages/DatingProfilePhotography_1'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<DatingPhotography />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

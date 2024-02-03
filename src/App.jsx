import './App.css'
import FavProvider from './context/FavContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Fav from './views/fav'
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <FavProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fav" element={<Fav />} />
        </Routes>
      </FavProvider>
    </Router>
  )
}

export default App

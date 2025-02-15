import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Notfound from './pages/Notfound'
import Search from './pages/Search'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='*' element={<Notfound/>}></Route>
      </Routes>
    </Router>
  )
}

export default App

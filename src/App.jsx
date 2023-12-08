import { Route,Routes } from 'react-router-dom'
import './App.css'
// import NavBar from './components/NavBar'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
function App() {
  

  return (
    <>
    <Routes>
      <Route path='/'  element={<Home/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/About' element={<About/>}></Route>
    </Routes>
      
    </>
  )
}

export default App

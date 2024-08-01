import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import Authentication from './pages/Authentication'
import Home from './pages/Home'
import Profile from './pages/Profile'
import WorkersDirectory from './pages/WorkersDirectory'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
 

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/login' element={<Authentication/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/directory' element={<WorkersDirectory/>} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App

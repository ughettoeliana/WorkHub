import { Route, Routes } from "react-router-dom";

import './App.css'
import './assets/css/variables.css'
import './assets/css/colors.css'
import './assets/css/general.css'
import './assets/css/button.css'

import Footer from './components/Footer'
import NavBar from './components/Navbar'
import Home from './pages/Home'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile/Profile";

function App() {

  return (
    <>
     <NavBar/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/profile' element={<Profile/>} />
     </Routes>
     
     <Footer/>
    </>
  )
}

export default App

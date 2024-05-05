import { Route, Routes } from "react-router-dom";

import './App.css'
import Footer from './components/Footer'
import NavBar from './components/Navbar'
import Home from './pages/Home'
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {

  return (
    <>
     <NavBar/>
     <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
     </Routes>
     
     <Footer/>
    </>
  )
}

export default App

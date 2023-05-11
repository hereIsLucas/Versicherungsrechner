import Navbar from "./components/Navbar"
import CarSlides from "./pages/CarSlides"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs.js"
import VRMainPage from "./pages/VRMainPage"
import { Route, Routes } from "react-router-dom"
import './App.css';

function App() {
  
  return (
    <div className="App">
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={< VRMainPage/>} />
              <Route path="/CarSlides" element={< CarSlides/>} />
              <Route path="/VRMainPage" element={< VRMainPage/>} />
              <Route path="/AboutUs" element={< AboutUs/>} />
              <Route path="/ContactUs" element={< ContactUs/>} />
            </Routes>
          </div>

      
    </div>
  )
}

export default App;

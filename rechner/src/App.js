import Navbar from "./components/Navbar"
import AboutUs from "./pages/AboutUs"
import VRMainPage from "./pages/VRMainPage"
import { Route, Routes } from "react-router-dom"
import './App.css';
import { MultiFormsProgressBar } from "./components/MultiFormsProgressBar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState } from "react";
import { MultiForms } from "./components/Multiforms";
import { questions } from "./Questions";

function App() {
  return (
    <div className="App">
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={< VRMainPage/>} />
              <Route path="/AboutUs" element={< AboutUs/>} />
            </Routes>
          </div>

      
    </div>
  )
}

export default App;

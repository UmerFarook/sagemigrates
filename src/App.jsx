import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Australia from "./pages/Australia";
import Canada from "./pages/Canada";
import Europe from "./pages/Europe";
import Ireland from "./pages/Ireland";
import NewZealand from "./pages/Newzealand";
import Home from "./pages/Home";
import '../public/assets/css/bootstrap.min.css';
import '../public/assets/css/lineicons.css';
import '../public/assets/css/glightbox.min.css';
import '../public/assets/css/tiny-slider.css';
import '../public/assets/css/style.css';
import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>

              <BrowserRouter>
                  <Header></Header>
                  <Routes>
                      <Route path="/" element={<Home/>} />
                      <Route path="/australia" element={<Australia />} />
                      <Route path="/canada" element={<Canada />} />
                      <Route path="/europe" element={<Europe />} />
                      <Route path="/ireland" element={<Ireland />} />
                      <Route path="/newzealand" element={<NewZealand />} />
                  </Routes>
                  <Footer></Footer>
              </BrowserRouter>

      </>
  )
}

export default App

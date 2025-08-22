
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Australia from "./pages/Australia";
import Canada from "./pages/Canada";
import Europe from "./pages/Europe";
import Ireland from "./pages/Ireland";
import NewZealand from "./pages/NewZealand";
import Home from "./pages/Home";
import './assets/css/bootstrap.min.css';
import './assets/css/lineicons.css';
import './assets/css/glightbox.min.css';
import './assets/css/tiny-slider.css';
import './assets/css/style.css';
import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {


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

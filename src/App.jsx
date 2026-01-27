
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
import './assets/scss/style.css';
import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./components/components/ScrollTop";

function App() {


    return (
        <>

            <BrowserRouter>
                <Header></Header>
                <ScrollToTop></ScrollToTop>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/australia" element={<Australia />} />
                    <Route path="/canada" element={<Canada />} />
                    <Route path="/europe" element={<Europe />} />
                    <Route path="/ireland" element={<Ireland />} />
                    <Route path="/newzealand" element={<NewZealand />} />
                    <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                    <Route element={<Home/>} />
                </Routes>
                <Footer></Footer>
            </BrowserRouter>

        </>
    )
}

export default App

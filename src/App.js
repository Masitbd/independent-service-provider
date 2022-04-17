import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Blogs from "./components/Blogs/Blogs";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ServiceDetail from "./components/ServiceDetail.js/ServiceDetail";
import Register from "./components/Register/Register";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/About" element={<About />} />
        <Route path="/servicedetail/:serviceid" element={<ServiceDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/*  <Footer /> */}
    </div>
  );
}

export default App;

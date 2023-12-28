import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./Components/Sign_in";
import SignUp from "./Components/Sign_up";
import Contact_Us from "./Components/Contact_us";
import How_We_Work from "./Components/How_we_work/How_we_work";
const App = () => {
  return (
    <section>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/contact_us" element={<Contact_Us />} />
          <Route path="/how_we_work" element={<How_We_Work />} />
        </Routes>
        <Footer /> 
      </BrowserRouter>
    </section>
  );
};

export default App;

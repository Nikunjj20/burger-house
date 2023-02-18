import React from "react";
import "./App.css";
import Header from "./components/Header";
import Shop from "./components/Shop";
import Menu from "./components/Menu";
import Clients from "./components/Clients";
import Prices from "./components/Prices";
import About from "./components/About";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Header/>} />
          <Route exact path="/menu" element={<Prices />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/deals" element={<Menu />} />
          <Route exact path="/contacts" element={<Clients />} />
        </Routes>
      <About/>
      <Shop/>
      <Menu/>
      <Clients/>
      <Prices/>
      

      </Router>

     

      
    </div>
  );

}

export default App;

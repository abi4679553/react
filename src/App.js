import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from "./components/Home";
import { Menu } from "./components/Menu";
import India from "./components/India";
import Ourpromise from "./components/Ourpromise";
import Magigal from "./components/Magigal";
import Recently from "./components/Recently";
import Footer from "./components/Footer";
import { Cake } from "./components/Cake";

function App() {
  return (

    <div className="App">
      <Header />

      <Routes>

        <Route path="/cake" element={<Cake />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/India" element={<India />} />
        <Route path="/Ourpromise" element={<Ourpromise />} />
        <Route path="/Magigal" element={<Magigal />} />
        <Route path="/Recently " element={<Recently  />} />




      </Routes>
      
      <Footer />
    </div>

  );
}

export default App;

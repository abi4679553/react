import { Header } from "./components/Header";
import Home from "./components/Home";
import { Menu } from "./components/Menu";
import India from "./components/India";
import Ourpromise from "./components/Ourpromise"
import Magigal from "./components/Magigal";
import Recently from "./components/Recently"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header/>
      
      <Home/>
      <Menu/>
      <India/>
      <Ourpromise/>
      <Magigal/>
      <Recently/>
      
      <Footer/>
      
    </div>
  );
}

export default App;

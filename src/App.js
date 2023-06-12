import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Navbar/>
      <Routes>
        {/* home */}
        <Route path="/" element={<Home />}/>
      </Routes>
      {/* footer */}
      <Footer/>
    </div>
  );
}

export default App;

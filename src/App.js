import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Reviews from "./components/Reviews/Reviews";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/reviews" element={<Reviews></Reviews>} />
        <Route path="/dashboard" element={<Home></Home>} />
        <Route path="/blogs" element={<Home></Home>} />
        <Route path="/about" element={<Home></Home>} />
      </Routes>
    </div>
  );
}

export default App;

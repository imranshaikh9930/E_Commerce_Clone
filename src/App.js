import CheckOut from "./Components/CheckOut";
import Header from "./Components/Header";
import Home from "./Components/Home";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/"
function App() {
  return (
    <>
      <Router>
      

        <Routes>
          <Route path="/login" element={<Login />} />
         
          <Route path="/" element={<div> <Header /> <Home /></div>} />
          <Route path="/checkout" element={<div>  <Header /> <CheckOut /></div>} />
        </Routes>




      </Router>

    </>

  );
}

export default App;

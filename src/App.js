import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import OurCoffee from "./pages/OurCoffee";
import OurPleasure from "./pages/OurPleasure";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourCoffee" element={<OurCoffee />} />
        <Route path="/ourPleasure" element={<OurPleasure />} />
      </Routes>
    </Router>
  );
}

export default App;

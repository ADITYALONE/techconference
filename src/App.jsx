import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Speakers from "./pages/Speakers";
import Schedule from "./pages/Schedule";
import Register from "./pages/Register";
import MyRegistration from "./pages/MyRegistration";
import FAQ from "./pages/FAQ";
import Venue from "./pages/Venue";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-registration" element={<MyRegistration />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/venue" element={<Venue />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

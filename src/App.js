import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Details from "./pages/Details";
import AddPage from "./pages/Add";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="add" element={<AddPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

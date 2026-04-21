import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import HomePage from "./pages/home/HomePage";
import WebMobilePage from "./pages/services/web-mobile/WebMobilePage";
import BlockchainPage from "./pages/services/blockchain/BlockchainPage";
import AIPage from "./pages/services/ai/AIPage";

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/web-mobil" element={<WebMobilePage />} />
        <Route path="/blockchain" element={<BlockchainPage />} />
        <Route path="/inteligencia-artificial" element={<AIPage />} />
      </Routes>
    </div>
  );
}

export default App;

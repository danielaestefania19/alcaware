import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import ScrollToTop from "./components/layout/ScrollToTop";
import HomePage from "./pages/home/HomePage";
import WebMobilePage from "./pages/services/web-mobile/WebMobilePage";
import BlockchainPage from "./pages/services/blockchain/BlockchainPage";
import AIPage from "./pages/services/ai/AIPage";
import NosotrosPage from "./pages/nosotros/NosotrosPage";

function App() {
  return (
    <div className="bg-black">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/web-mobil" element={<WebMobilePage />} />
        <Route path="/blockchain" element={<BlockchainPage />} />
        <Route path="/inteligencia-artificial" element={<AIPage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
      </Routes>
    </div>
  );
}

export default App;

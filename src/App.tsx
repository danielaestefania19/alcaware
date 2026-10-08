import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import ScrollToTop from "./components/layout/ScrollToTop";
import RouteSeo from "./components/layout/RouteSeo";

const HomePage = lazy(() => import("./pages/home/HomePage"));
const WebMobilePage = lazy(() => import("./pages/services/web-mobile/WebMobilePage"));
const BlockchainPage = lazy(() => import("./pages/services/blockchain/BlockchainPage"));
const AIPage = lazy(() => import("./pages/services/ai/AIPage"));
const NosotrosPage = lazy(() => import("./pages/nosotros/NosotrosPage"));
const NotFoundPage = lazy(() => import("./pages/not-found/NotFoundPage"));

function App() {
  return (
    <div className="bg-black">
      <ScrollToTop />
      <RouteSeo />
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/web-mobil" element={<WebMobilePage />} />
          <Route path="/blockchain" element={<BlockchainPage />} />
          <Route path="/inteligencia-artificial" element={<AIPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

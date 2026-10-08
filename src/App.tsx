import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import ScrollToTop from "./components/layout/ScrollToTop";
import RouteSeo from "./components/layout/RouteSeo";
import { LANGS, PAGE_PATHS } from "./i18n/routes";

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
          {LANGS.map((lang) => [
            <Route key={`home-${lang}`} path={PAGE_PATHS.home[lang]} element={<HomePage />} />,
            <Route key={`webmobil-${lang}`} path={PAGE_PATHS.webmobil[lang]} element={<WebMobilePage />} />,
            <Route key={`blockchain-${lang}`} path={PAGE_PATHS.blockchain[lang]} element={<BlockchainPage />} />,
            <Route key={`ai-${lang}`} path={PAGE_PATHS.ai[lang]} element={<AIPage />} />,
            <Route key={`nosotros-${lang}`} path={PAGE_PATHS.nosotros[lang]} element={<NosotrosPage />} />,
          ])}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import ScrollToTop from "./components/other/scrollTop";
import Private from "./components/other/privateComp";

import NavBar from "./components/navBar-Footer/navBar";
import FooterBar from "./components/navBar-Footer/footerBar";

import Home from "./components/home/homeMain";
import Services from "./components/services/services";
import Haveny from "./components/haveny/haveny";
import Virox from "./components/virox/chatMain";
import About from "./components/about/aboutMain";
import Login from "./components/signIn/login";
import Signup from "./components/signIn/signIn";
import Spirituality from "./components/haveny/sprituality/sprituality";
import Exercise from "./components/haveny/exercise/exeMain";
import ExercisePose from "./components/haveny/exercise/exercisePosition";
import Meditation from "./components/haveny/meditation/meditation";
import MedFreq from "./components/haveny/meditation/medFreq";

import SecurityBot from "./components/victimCheck/victimCheckMain";

import Scanner from "./components/services/scanner/scanner"; // Import Scanner
import ScanResult from "./components/services/scanner/scanResult/scanResultMain"; // Import ScanResult

function AppContent() {
  const location = useLocation();
  const isViroxPath = location.pathname === "/virox";
  const isSpiritualityPath = location.pathname.startsWith(
    "/haveny/spirituality"
  );
  const isExercisePath = location.pathname.startsWith("/haveny/exercise");
  const isMeditationPath = location.pathname.startsWith("/haveny/meditation");
  const isvictimCheck = location.pathname.startsWith("/victimCheck");

  return (
    <>
      {/* Persistent NavBar */}
      {!isvictimCheck &&
        !isMeditationPath &&
        !isExercisePath &&
        !isSpiritualityPath &&
        !isViroxPath && <NavBar />}
      {/* Define routes */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Services />} />
        <Route path="/scan" element={<Scanner />} />
        <Route path="/about" element={<About />} />

        <Route element={<Private />}>
          <Route path="/virox" element={<Virox />} />
          <Route path="/haveny" element={<Haveny />} />
          <Route path="/haveny/spirituality" element={<Spirituality />} />
          <Route path="/haveny/exercise" element={<Exercise />} />
          <Route
            path="/haveny/exercise/ExercisePose"
            element={<ExercisePose />}
          />
          <Route path="/haveny/meditation" element={<Meditation />} />
          <Route path="/haveny/meditation/Freqequency" element={<MedFreq />} />
          <Route path="/scan/scanResult" element={<ScanResult />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/victimCheck" element={<SecurityBot />} />

        {/* Scanner Routes */}
      </Routes>
      {!isvictimCheck &&
        !isMeditationPath &&
        !isExercisePath &&
        !isSpiritualityPath &&
        !isViroxPath && <FooterBar />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;

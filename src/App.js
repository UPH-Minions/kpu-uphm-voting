import { ThemeProvider } from "@mui/system";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import PageBEM from "./pages/BEM";
import Landing from "./components/Landing";
import theme from "./styles/theme";
import { CssBaseline } from "@mui/material";
import PageHMPSA from "./pages/HMPSA";
import PageHMPSM from "./pages/HMPSM";
import PageHMPSH from "./pages/HMPSH";
import PageHMPSSI from "./pages/HMPSSI";
import PageHMPTIF from "./pages/HMPTIF";

function App() {
  return (
    <Router>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/BEM" element={<PageBEM />} />
          <Route path="/HMPSA" element={<PageHMPSA />} />
          <Route path="/HMPSM" element={<PageHMPSM />} />
          <Route path="/HMPSH" element={<PageHMPSH />} />
          <Route path="/HMPSSI" element={<PageHMPSSI />} />
          <Route path="/HMPTIF" element={<PageHMPTIF />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;

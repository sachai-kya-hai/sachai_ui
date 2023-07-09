import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@mui/material";
import { Theme } from "./theme";
import { WagmiConfig } from "wagmi";
import { wagmiCreateConfig } from "./utils/wagmi/wallet";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <WagmiConfig config={wagmiCreateConfig}>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </WagmiConfig>
    </ThemeProvider>
  );
};

export default App;

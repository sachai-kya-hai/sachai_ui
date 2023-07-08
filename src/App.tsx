import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar";
import {  ThemeProvider } from "@mui/material";
import { Theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;

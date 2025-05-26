import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import LoginPage from './pages/Login/LoginPage.js';
import Settings from './pages/Settings/Settings.js';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword.js'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

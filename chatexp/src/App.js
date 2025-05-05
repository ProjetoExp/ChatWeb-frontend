import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from'./pages/Home.js';
import Sobre from'./pages/Sobre.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Sobre" element={<Sobre />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

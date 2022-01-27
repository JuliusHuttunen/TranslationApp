import './App.css';
import Header from './components/Header';
import Start from './views/Start';
import Profile from './views/Profile';
import Translator from './views/Translator';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<Start />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Translator />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

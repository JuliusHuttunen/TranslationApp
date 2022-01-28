import './App.css';
import Header from './components/Header';
import Start from './views/Start';
import Profile from './views/Profile';
import Translator from './views/Translator';
import store from './store/store'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/sass.css';
import Main from './Main.js';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

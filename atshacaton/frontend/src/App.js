
import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom';
import './style/sass.css';
//import Main from './containers/Main';

import Favorites from './containers/Favorites';
import Rating from './containers/Rating';
import Menulayout from './containers/Menulayout'
import Profile from './containers/Profile'
import Login from './containers/Login'
import Reg from './containers/Registration'
import Search from './containers/Search'
import { useState } from 'react';
function App() {
  const [favors, setFavors]=useState([])
  const [drops,setDrops]=useState({});
  if(localStorage.getItem('theme')==null)
    {localStorage.setItem('theme','n')}
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" >
        <Route path="reg" element={<Reg />}/>
        <Route path="log" element={<Login />}/>
        <Route path="app/" element={<Menulayout />}>
          <Route path="profile" element={<Profile />}/>
          <Route path="search" element={<Search drops={drops} setDrops={setDrops}/>}/>
          <Route path="favorites" element={<Favorites />}/>
          <Route path="rating" element={<Rating />}/>
            
        
        </Route>
      </Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;

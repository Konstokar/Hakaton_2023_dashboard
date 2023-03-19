
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
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" >
        <Route path="reg" element={<Reg />}/>
        <Route path="app/" element={<Menulayout />}>
          <Route path="profile" element={<Profile />}/>
          <Route path="search" element={<Search />}/>
          <Route path="favorites" element={<Favorites />}/>
          <Route path="rating" element={<Rating />}/>
            
        
        </Route>
      </Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;

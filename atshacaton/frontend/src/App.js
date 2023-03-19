
import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom';
import './style/sass.css';
//import Main from './containers/Main';

import Favorites from './containers/Favorites';
import Rating from './containers/Rating';
import Menulayout from './containers/Menulayout'
import Registration from './containers/Registration'
import Login from './containers/Login'
import Debug from './containers/Debug'
import Profile from './containers/Profile'

import Search from './containers/Search'
import { useState } from 'react';
function App() {
  const [favors, setFavors]=useState([])
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" >
        <Route path="registration" element={<Registration />}/>
        <Route path="login" element={<Login />}/>
        <Route path="app/" element={<Menulayout />}>
          <Route path="search" element={<Search />}/>
          <Route path="favorites" element={<Favorites />}/>
          <Route path="rating" element={<Rating />}/>
                      
        </Route>
        <Route path="debug" element={<Debug />}/>
        <Route path="profile" element={<Profile />}/>
      </Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;

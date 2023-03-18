
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/sass.css';
//import Main from './containers/Main';

import Favorites from './containers/Favorites';
import Rating from './containers/Rating';
import Registration from './containers/Registration'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" >
        <Route path="registration" element={<Registration />}/>
        <Route path="main" >
          <Route path="favorites" element={<Favorites />}>
            <Route path="rating" elements={<Rating />}/>
            </Route>
        </Route>
      </Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;

import { Route } from 'react-router-dom';
import { BrowserRouter, Routes } from 'react-router-dom';
import Search from './Search'
import Rating from './Rating'
import Favourites from './Favourites'
function Main(){
    return(<BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />}/>
            <Route path="rating" element={<Rating />}/>
            <Route path="favourites" element={<Favourites />}>
          </Route>
        </Routes>
    </BrowserRouter>);
}
export default Main;
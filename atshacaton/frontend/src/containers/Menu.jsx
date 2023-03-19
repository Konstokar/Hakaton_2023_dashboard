import { Link } from "react-router-dom";

export default function Menu(){
    return( <div className="menu">
        <nav  className="submenu">
            <Link to="/app/search" >Претенденты</Link>
            <Link to="/app/favorites"  >Избранные</Link>
            <Link to="/app/rating"  >Рейтинг</Link>
        </nav>
        <div className="pc">
            <Link to="/app/profile"  relative="path">Личный кабинет</Link>
        </div>
    </div>)
}
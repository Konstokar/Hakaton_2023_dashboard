import { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu(){
    const [theme,sTheme]=useState(localStorage.getItem('theme'))  

      return( <div className={theme=='n'?"menu": "lmenu"}>
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
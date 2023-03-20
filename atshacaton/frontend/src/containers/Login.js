import ava from '../resourses/Avatar_Applicant (1).svg'
import { Link } from "react-router-dom";
export default function Login(){

    return(<div className="bg">
    <img src={ava} className="regtitle"/>
    <form method="POST" action="#" className="reg">
    <label>
        <p>Логин:</p>
        <input type="text" required name="username"/>
    </label>
    <label>
        <p>Пароль:</p>
        <input type="password"required  name="password"/>
    </label>
    <input type="submit"  className="submit" value="Войти"/>
    <Link  className="underreg" to="/reg">Регистрация</Link>
   
    </form>
    </div>)
}
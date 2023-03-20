import ava from '../resourses/Avatar_Applicant (1).svg'
export default function Registration(){

    return(<div className="bg">
    <img src={ava} className="regtitle"/>
    <form method="POST" action="#" className="reg">
    <label>
        <p>Логин:</p>
        <input type="text" required name="username"/>
    </label>
    <label>
        <p>Телефон:</p>
        <input type="phone"required  name="phone"/>
    </label>
    <label>
        <p>Почта:</p>
        <input type="email"required  name="email"/>
    </label>
    <label>
        <p>Пароль:</p>
        <input type="password"required  name="password"/>
    </label>
    <input type="submit"  className="submit" value="Регистрация"/>
   
    </form>
    </div>)
}
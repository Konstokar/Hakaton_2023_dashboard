export default function Registration(){
    return(<div className="bg">
    <p className="regtitle">Регистрация</p>
    <form method="POST" action="#" className="reg">
    <label>
        <p>Имя пользователя:</p>
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
    <input type="submit"  className="submit" value="Зарегистрироваться"/>
   
    </form>
    </div>)
}
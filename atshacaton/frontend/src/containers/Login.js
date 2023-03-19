export default function login(){
    return(<>
    <form method="POST" action="#" className="reg">
    <label>
        Имя пользователя
        <input type="text" name="username"/>
    </label>
    <label>
        Пароль
        <input type="password" name="password"/>
    </label>
    <input type="submit" value="Войти"/>
   
    </form>
    </>)
}
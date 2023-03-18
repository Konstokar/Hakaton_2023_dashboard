export default function registration(){
    return(<>
    <form method="POST" action="#" className="reg">
    <label>
        Имя пользователя
        <input type="text" name="login"/>
    </label>
    <label>
        Пароль
        <input type="password" name="password"/>
    </label>
    <input type="submit"/>
    </form>
    </>)
}
export default function registration(){
    return(<>
    <form method="POST" action="http://localhost:8080/auth/registration" className="reg" id = 'rform'>
    <label>
        Имя пользователя <br/>
        <input type="text" name="username" required/>
    </label>
    <label>
        Пароль <br/>
        <input type="password" name="password" required/>
    </label>
    <label>
        Email <br/>
        <input type="email" name="email" required/>
    </label>
    <label>
        Телефон <br/>
        <input type="text" name="phoneNumber" required/>
    </label>
    <input type="button" value="Зарегистрироваться" onClick={(e)=>{
        fetch(e.target.parentElement.action,
        {method: 'POST', 
        headers: {'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
        body: new FormData(e.target.parentElement)
        }
        
    )
    }}/>
   
    </form>
    </>)
}
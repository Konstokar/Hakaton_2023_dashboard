import ava from '../resourses/Avatar_Applicant (1).svg'
export default function Registration(){

    return(<div className="bg">
<<<<<<< HEAD
    <p className="regtitle">Регистрация</p>
    <form method="POST" action="http://localhost:8080/auth/registration" className="reg" onSubmit={async e=>{
        e.preventDefault();

        let body = {};

        for(let input of e.target.getElementsByTagName('input'))
        {
            //if(input.type == 'submit') continue;
            body[input.name] = input.value;
        }

        console.log(await (await fetch(e.target.action, {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(body)}) ).json())
    }}>
=======
    <img src={ava} className="regtitle"/>
    <form method="POST" action="#" className="reg">
>>>>>>> origin/Iliyaf
    <label>
        <p>Логин:</p>
        <input type="text" required name="username"/>
    </label>
    <label>
        <p>Телефон:</p>
        <input type="phone"required  name="phoneNumber"/>
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
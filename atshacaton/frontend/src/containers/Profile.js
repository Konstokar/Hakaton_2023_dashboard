export default function Profile()
{
    return (<div className="profile">
    <p className="title">Мой профиль</p>
        <form method="PUT" action="#" className="profileForm">
            <p>Имя</p><input type = 'text' name=""/>
            <p>Фамилия</p><input type = 'text' name=""/>
            <p>Отчество</p><input type = 'text' name=""/>
            <p>Профессия</p> <datalist id = 'prof' name="">

</datalist>
          
            <p>ВУЗ</p><input list="vuz" name=""/>
            <p>Образование</p><datalist id = 'vuz' name="">

            </datalist>
           
           
            <p>Стаж</p><input type = 'number' min = '0' max = '100' name=""/>
        </form>
    </div>)
}
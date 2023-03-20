export default function Profile()
{
    return (<div className="profile">
    <p className="title">Мой профиль</p>
        <form method="PUT" action="#" className="profileForm">
            <p>Имя</p><input type = 'text' name=""/>
            <p>Фамилия</p><input type = 'text' name=""/>
            <p>Отчество</p><input type = 'text' name=""/>
            <p>Возраст</p><input type = 'number' min = '18' max = '100' name=""/>
            <p>ВУЗ</p><input list="vuz" name=""/>
            <datalist id = 'vuz' name="">

            </datalist>
            <p>Профессия</p><input list="prof" name=""/>
            <datalist id = 'prof' name="">

            </datalist>
            <p>Стаж</p><input type = 'number' min = '0' max = '100' name=""/>
        </form>
    </div>)
}
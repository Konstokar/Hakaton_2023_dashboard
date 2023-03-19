export default function Profile()
{
    return <>
        <form method="PUT" action="#">
            <p>Имя</p><input type = 'text' />
            <p>Фамилия</p><input type = 'text' />
            <p>Отчество</p><input type = 'text' />
            <p>Возраст</p><input type = 'number' min = '18' max = '100'/>
            <p>ВУЗ</p><input list="vuz" />
            <datalist id = 'vuz'>

            </datalist>
            <p>Профессия</p><input list="prof" />
            <datalist id = 'prof'>

            </datalist>
            <p>Стаж</p><input type = 'number' min = '0' max = '100'/>
        </form>
    </>
}
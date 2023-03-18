import {useState} from 'react';

export default function Main()
{
    let [all, selectAll] = useState(false);
    let [selected, setSelected] = useState([...new Array(5)].map(()=>false));

    let tb = selected.map((selection, i) => <tr>
        <td><input type = "checkbox" checked = {selection} onChange = {()=>setSelected(
            selected.map((item, index)=>(i === index) ? !item: item)
        )}/></td>
        <td>Иванова Мария Ивановна {selected[i] && <button>В избранное</button>}</td>
        <td>СГТУ имени Гагарина Ю.А.</td>
        <td>5</td>
        <td>24</td>
        <td>нет</td>
        </tr>
        )

    return (
        <div>
            <header></header>
            <table>
                <thead>
                    <td><input type = "checkbox" onChange = {()=>{
                        setSelected([...new Array(5)].map(()=>!all));
                        selectAll(!all);
                    }}/></td>
                    <td>ФИО</td>
                    <td>ВУЗ</td>
                    <td>Средний балл</td>
                    <td>Возраст</td>
                    <td>Опыт работы</td>
                </thead>

                <tbody>
                    {tb}
                </tbody>
            </table>
            <footer>
                <p>Система выбора кандидатов</p>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>...</button>
                <button>10</button>
            </footer>
        </div>
    )
}
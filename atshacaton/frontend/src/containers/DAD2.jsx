import star from '../resourses/Star 1.svg'
import plus from '../resourses/Add.svg'
import { useState } from 'react';
export default function DAD2({drag}){
    console.log(drag)
    const [cls, setCls]=useState({})
    return (<div className='drop' style={{cls}}> 
        <img className="star" draggable="false" src={star }alt="" />
        <p className="mean" >Подробнее</p>
        <img className="plus" draggable="false" src={plus }alt="" />
        <p className="drag">Перетяните сюда, чтобы узнать подробнее</p>
    </div>)
}
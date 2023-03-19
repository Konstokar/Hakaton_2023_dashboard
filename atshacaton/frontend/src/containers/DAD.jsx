import star from '../resourses/Star 1.svg'
import plus from '../resourses/Add.svg'
import { useState } from 'react';
export default function DAD({element, drag,setElement }){
    return (<div className="drop"  onDragEnter={()=>{
        
        const y=element
        delete y[drag.target.getAttribute('data-key')]
        const l=drag.target.getAttribute('data-key');
        sessionStorage.setItem([l],JSON.stringify({[l]:drag.target.outerHTML}))
        setElement(y)
    }}> 
        <img className="star" draggable="false" src={star }alt="" />
        <p className="mean">Избранное</p>
        <img className="plus" draggable="false" src={plus }alt="" />
        <p className="drag">Перетяните сюда, чтобы добавить в избранное</p>
    </div>)
}
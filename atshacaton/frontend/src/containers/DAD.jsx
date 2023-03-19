import star from '../resourses/Star 1.svg'
import plus from '../resourses/Add.svg'
import { useState } from 'react';
export default function DAD({ drag,text,f=null}){
    const [cls, setCls]=useState({})
    return (<div className='drop' style={{cls}} onDragEnter={()=>{
        setCls({
            opacity: 0.7}
            )
        
        const l=f==null?drag.target.getAttribute('data-key'):'s'+drag.target.getAttribute('data-key');
        console.log(l)
        sessionStorage.setItem([l],JSON.stringify({[l]:drag.target.outerHTML}))
       
    }} onDragLeave={()=>{setCls('')}
        }> 
        <img className="star" draggable="false" src={star }alt="" />
        <p className="mean" >{text}</p>
        <img className="plus" draggable="false" src={plus }alt="" />
        <p className="drag">Перетяните сюда, чтобы добавить в {text}</p>
    </div>)
}
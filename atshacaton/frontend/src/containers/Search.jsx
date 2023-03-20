import Menu from './Menulayout'
import  $ from 'jquery'
import ava from '../resourses/Avatar_Applicant.svg'
import DAD from './DAD.jsx'
import React from 'react';
import Table from './Table.jsx'


import { useState } from 'react';

function Search({drops,setDrops}) {
    const [cc,sC]=useState(0)
    const test=[1,2,3,4,5,6,7,8,9]
    const [drag,setDrag]=useState(null)
    const [element,setElement]=useState(test.map((el,i)=>{ 
        const key=i
        return(
        <div className="string" data-key={key} key={key} draggable="true" onDragStart={(e)=>{
            const b=drops;
            setDrag(e.target)
            b[key]=(e.target)
            setDrops(b)}}
           >
            <p>ИМЯ ФАМИЛИЯ ОТЧЕСТВО</p>
                <p className="R">{i}</p>
                <p className="Y">Есть</p>
            </div>)
    }
    ))
    
   

  
    return (<>
    <div className='searchBody'>
        <Table element={element}/>
        <div className='cont'>
            <DAD  drag={drag}  text="Избранное"/>
        </div>
    </div></>)

}
export default Search;




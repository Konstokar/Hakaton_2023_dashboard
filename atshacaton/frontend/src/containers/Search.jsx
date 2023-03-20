import Menu from './Menulayout'
import  $ from 'jquery'
import ava from '../resourses/Avatar_Applicant.svg'
import DAD from './DAD.jsx'
import Sort from './Sort'

import { useState } from 'react';

function Search() {

    
    const [drag,setDrag]=useState(null)
    const [element,setElement]=useState(elems(20));
    function elems(c){
        let arr=[];
        
        for(let i=0;i<c;i++){
            arr.push(<div className="string" key={i+1} draggable="true" onDragStart={(e)=>{    
                setDrag(e);
                console.log(e,element)
            }} 
                onDragEnd={(e)=>{
            }
            }
                >
                    <img  draggable="false" src={ava} alt="" />
                    <p>ИМЯ ФАМИЛИЯ ОТЧЕСТВО</p>
                    <p className="R">{i}</p>
                    <p className="Y">Есть</p>
                </div>)
        }
        return arr
    }
    return (<>
        <Sort />
    <div className='searchBody'>
        <div className="table">
            {element}
        </div>
        <div className='cont'>
            <DAD  drag={drag}  text="Избранное"/>
        </div>
    </div></>)

}
export default Search;




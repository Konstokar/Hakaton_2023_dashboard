import Dad2 from './DAD2'
import Wind from './WIND'
import Top from './Top'
import Table from './Table'
import ava from "../resourses/Avatar_Applicant (1).svg"
import { useState } from 'react';
function Rating(){
    let elems=[];
    const [r,sR]=useState()
    let newelems=[];
    const [b,sB]=useState(true)
    const [el,sEl]=useState(null)
    for(let session in sessionStorage){
        elems.push(sessionStorage.getItem([session])) 
    }
    for(let i of elems){
        if (i!=null){
            for(const t in JSON.parse(i)){
                if(t[0]=='s'){
                    const buf=JSON.parse(i)[t]
                    console.log(buf)
                    
       
                newelems.push(<div onDragStart={(e)=>{sR(e)}} onDragEnd={(e)=>{sB(!b);sEl(e)}} key={t} dangerouslySetInnerHTML={{__html:buf}}></div>)
                }
           }  
    }}

    return (
        <div className='ratingBody'>
            <div className="RBB">
            <div className="rB">
            <div >{<Top ava={ava} top="1"/>}</div>
            <div >{<Top ava={ava} top="2"/>}</div>
            <div >{<Top ava={ava} top="3"/>}</div>
            </div>
            <Table element={newelems}/>
            </div>
            
            <div className='cont'>
                {b&&<Dad2 sB={sB} drag={r}/>}
                {!b&&<Wind drag={r}/>}
            </div>
        </div>

    )
}
export default Rating;
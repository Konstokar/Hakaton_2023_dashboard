import Dad2 from './DAD2'
import Wind from './WIND'
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
       
                newelems.push(<div onDragStart={(e)=>{sR(e)}} onDragEnd={(e)=>{sB(!b);sEl(e);console.log(el)}} key={t} dangerouslySetInnerHTML={{__html:buf}}></div>)
                }
                
                
           }  
    }}

    return (
        <div className='ratingBody'>
            <div>{newelems}</div>
            <div className='cont'>
                {b&&<Dad2 drag={r}/>}
                {!b&&<Wind drag={r}/>}
            </div>
        </div>

    )
}
export default Rating;
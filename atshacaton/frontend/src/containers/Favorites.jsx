
import DAD from './DAD.jsx'
import Table from './Table'
import { useState } from 'react';
function Favourites(){
    const [d,sD]=useState('');
    let elems=[]
 
    let newelems=[];
    const [ne,sNe]=useState([])
    for(let session in sessionStorage){
        elems.push(sessionStorage.getItem([session])) 
    }
    for(let i of elems){
        
        if (i!=null){
            for(const t in JSON.parse(i)){
                if(t[0]!='s'){
                    const buf=JSON.parse(i)[t]
            
                newelems.push(<div key={t}  onDragStart={(e)=>{sD(e)}} dangerouslySetInnerHTML={{__html:buf}}></div>)
                }   
           }  
    }}
    return <>
    <div className='searchBody'>
        <Table element={newelems}/>
            <div className="cont">
                <DAD  drag={d.target} text="Рейтинг" f="true"/>
            </div>
    </div></>
    }
    export default Favourites;

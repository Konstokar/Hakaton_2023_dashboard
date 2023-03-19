
import { useStore } from 'react-redux';
import DAD from './DAD.jsx'
import { useState } from 'react';
function Favourites(){
    const [d,sD]=useState('');
    let elems=[]
    let newelems=[];
    for(let session in sessionStorage){
        elems.push(sessionStorage.getItem([session])) 
    }
    for(let i of elems){
        if (i!=null){
            
            for(const t in JSON.parse(i)){
                if(i[0]!='f'){
                    const btn="<div class='del' >X</div>"
                const buf=JSON.parse(i)[t].slice(0,-6)+btn+JSON.parse(i)[t].slice(-6)
                newelems.push(<div onDragStart={(e)=>{sD(e)}} dangerouslySetInnerHTML={{__html:buf}}></div>)
                }
                
                
           }  
    }}
  
    return  <div className='searchBody'>
    <div className="table">
        {newelems}
    </div>
    <div className="cont">
    <DAD  drag={d} text="Рейтинг" f="true"/>
    </div>
    
    </div>
    }
    export default Favourites;

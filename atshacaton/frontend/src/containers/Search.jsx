import Menu from './Menulayout'
import  $ from 'jquery'
import { useState } from 'react';

function Search() {

    const [count,sCount]=useState(0)
    const [flag,setFlag]=useState(false)
    const [visible,setVisible]=useState({display: 'none'})
    const [drag,setDrag]=useState(null)
    const [element,setElement]=useState(elems(5));
    function elems(c){
        let arr=[];
        
        for(let i=0;i<c;i++){
            arr.push(<div draggable="true" data-key={i+1} onDragStart={(e)=>{
                setDrag(e);
                
                setVisible({display: 'block'})}} 
                onDragEnd={()=>{setVisible({display: 'none'})}
            }
                key={i+1}>{i}
                </div>)
        }
        return arr
    }
    return (
    <div className='searchBody'>
        <div className="mmm">
            {element}
        </div>
        <div className="kk" style={visible} onDragEnter={()=>{
                sCount(count+1);
                const y=element
                delete y[drag.target.getAttribute('data-key')]
                const l=drag.target.getAttribute('data-key');
           
                sessionStorage.setItem([l],JSON.stringify({[l]:drag.target.outerHTML}))
                setElement(y)
              
            

        }}>{count}</div>
    </div>)

}
export default Search;



/*import { useDrag } from 'react-dnd'
 
export default function Search()  {
    const [{ isDragging }, dragRef] = useDrag({
        type: 'pet',
        item: { id, name },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })
    return (
        <div className='pet-card' ref={dragRef}>
            {name}
            {isDragging && 'Oops'}
        </div>
    )
}*/
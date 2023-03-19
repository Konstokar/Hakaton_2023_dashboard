

function Favourites(){
    let elems=[]
    let newelems=[];
    for(let session in sessionStorage){
        elems.push(sessionStorage.getItem([session])) 
    }
    for(let i of elems){
        if (i!=null){
           for(let t in JSON.parse(i))
            newelems.push(<div dangerouslySetInnerHTML={{__html:JSON.parse(i)[t]}}></div>)
           }  
    }
    return <div>{newelems}</div>
    }
    export default Favourites;

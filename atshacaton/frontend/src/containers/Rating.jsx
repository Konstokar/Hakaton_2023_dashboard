import Dad2 from './DAD2'
function Rating(){
    let elems=[];
    let newelems=[];
    for(let session in sessionStorage){
        elems.push(sessionStorage.getItem([session])) 
    }
    for(let i of elems){
        if (i!=null){
           
            for(const t in JSON.parse(i)){
                if(t[0]=='s'){
                    const buf=JSON.parse(i)[t]
       
                newelems.push(<div  key={t} dangerouslySetInnerHTML={{__html:buf}}></div>)
                }
                
                
           }  
    }}
    return (<div>{newelems}</div>

    )
}
export default Rating;
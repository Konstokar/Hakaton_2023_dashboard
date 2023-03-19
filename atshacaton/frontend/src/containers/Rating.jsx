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
                    console.log(i)
                    const buf=JSON.parse(i)[t]
       
                newelems.push(<div dangerouslySetInnerHTML={{__html:buf}}></div>)
                }
                
                
           }  
    }}
    return (<>{newelems}</>)
}
export default Rating;
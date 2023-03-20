import Sort from './Sort'
export default function Table({element}){
    return(
    <div className="table">
    <Sort />
       {element}
    </div>
    )
}
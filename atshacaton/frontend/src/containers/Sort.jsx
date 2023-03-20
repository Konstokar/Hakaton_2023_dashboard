import i1 from '../resourses/Polygon 1.svg'

export default function sort(){
    return(
        <div className="sort">
            <div className="sortbody">
            <div className="s1">
                <img src={i1} alt="" />
                <p>Имя</p>
                
            </div>
            <div className="s2">
            <img src={i1} alt="" />
                <p>Рейт</p>
            </div>
            <div className="s3">
            <img src={i1} alt="" />
                <p>Опыт работы</p>
            </div></div>
        </div>
    )
}
import i1 from '../resourses/Mask group.svg'
import i2 from '../resourses/Group.svg'
import i3 from '../resourses/Vector (3).svg'
export default function sort(){
    return(
        <div className="sort">
            <div className="sortbody">
            <div className="s1">
                <img src={i1} alt="" />
                <p>Имя</p>
            </div>
            <div className="s2">
                <img src={i2} alt="" />
                <p>Рейт</p>
            </div>
            <div className="s3">
                <img src={i3} alt="" />
                <p>Опыт работы</p>
            </div></div>
        </div>
    )
}
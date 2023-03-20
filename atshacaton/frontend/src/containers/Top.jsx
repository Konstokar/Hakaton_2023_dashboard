import f from "../resourses/1.png"
export default function Top({ava,top}){
    if(top=="1"){
        return(
            <div className="top" draggable="true" style={{marginTop: '100px'}}>
                <div className="ava">
                    <img src={ava} alt="" />
                </div>
                <div>
                    <p className="topFio">ИМЯ ФАМИЛИЯ ОТЧЕСТВО</p>
                </div>
                <div>
                    <p>Вуз: 2</p>
                    <p>Возраст:</p>
                    <p>Средний балл:</p>
                    <p>Опыт работы:</p>
                    <p>Количество статей:</p>
                    <p>Участие в олимпиадах:</p>
                </div>


            </div>
        )
    }else {if(top=="2"){
        return(
            <div draggable="true"  className="top" >
                <div className="ava">
                    <img src={ava} alt="" />
                </div>
                <div>
                    <p className="topFio">ИМЯ ФАМИЛИЯ ОТЧЕСТВО</p>
                </div>
                <div>
                    <p>Вуз: 1</p>
                    <p>Возраст:</p>
                    <p>Средний балл:</p>
                    <p>Опыт работы:</p>
                    <p>Количество статей:</p>
                    <p>Участие в олимпиадах:</p>
                </div>


            </div>
        )
    }else{ if(top=="3"){
        return(
            <div draggable="true"  className="top"style={{marginTop: '100px'}} >
                <div className="ava">
                    <img src={ava} alt="" />
                </div>
                <div>
                    <p className="topFio">ИМЯ ФАМИЛИЯ ОТЧЕСТВО</p>
                </div>
                <div>
                    <p>Вуз: 3</p>
                    <p>Возраст:</p>
                    <p>Средний балл:</p>
                    <p>Опыт работы:</p>
                    <p>Количество статей:</p>
                    <p>Участие в олимпиадах:</p>
                </div>


            </div>
        )
    }}
}
    
}
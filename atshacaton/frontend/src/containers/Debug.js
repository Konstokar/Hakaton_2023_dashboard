export default function Debug()
{
    return <div>
        <input type = 'text' id = 'req'/>
        <button onClick={async ()=>{document.getElementById('result').textContent = await (await fetch('http://localhost:3000/'+ document.getElementById('req').value)).text()}}>отправить</button>
        <p id="result"></p>
    </div>
}
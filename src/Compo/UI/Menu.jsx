import Request from '../../Request/request';
import Header from '../../Request/header';

export default function Menu(){

    const startGame = () => {
        
        console.log('Start')
        fetch("http://localhost:3003/api/test/",{
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({test: "JE test un truc"})
        })
        .then(res => {return res.json()})
        .then(res => {})
        .catch(err => console.error(err))
    }

    return (
        <div>
            <ul>
                <li onClick={startGame}>Debuter la partie</li>
                <li>*</li>
                <li>*</li>
            </ul>
        </div>
    )
}
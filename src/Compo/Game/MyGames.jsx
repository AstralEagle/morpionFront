import React, { useState, useEffect } from 'react';

import Game from './GameIndex'

import Request from '../../Request/request';
import Header from '../../Request/header';

export default function MyGames(){
    
    const [games,setGames] = useState([])

    useEffect(() => {
        Request('game/mygame',Header.loged('GET'), (res) => {setGames(res);console.log(res);})

    },[])

    return(
        <div id="myGamesIndex" className="gameContenat">
            {games.map((game, key) => (
                <Game game={game} key={key}/>
            ))}
        </div>
    )
}
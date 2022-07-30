import React, { useState, useEffect } from "react";

import Game from "./GameIndex";
import MyGames from "./MyGames";

import Request from "../../Request/request.js";
import Header from "../../Request/header";

import '../../Style/game/style.css';

export default function Index() {
  const [games, setGames] = useState([]);

  const [menu,setMenu] = useState(false)

  useEffect(() => {
    Request("game", Header.loged("GET"), (res) => {
      setGames(res);
    });
    
  }, []);

  const newGame = () => {
    window.location = "/new_game"
  }

  return (
    <div>
      <ul>
        <li onClick={() => setMenu(false)}>Recherche</li>
        <li onClick={() => setMenu(true)}>My games</li>
      </ul>
      {menu ?
      (
        <MyGames  className="gameContenat"/>
      ):
      (
        <div className="gameContenat" >
        {games.map((game, key) => (
          <Game key={key} game={game} primary />
        ))}
      </div>
      )}
      <div onClick={newGame} className="newGame">
        New Game
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";

import "../../Style/game/menu.css";

export default function Info({ users, turn, gameName }) {
  const [infoUsers, setInfo] = useState(users);
  const [infoTurn, setTurn] = useState(turn);
  const [infoName, setName] = useState("");

  console.log(infoTurn);

  useEffect(() => {setInfo(users);
  console.log(infoUsers)}, [users]);
  useEffect(() => {setTurn(turn);}, [turn])
  useEffect(() => {setName(gameName);}, [gameName])


  const setClick = () => {
    setInfo([...infoUsers,{test:"Test"}]);
    console.log(infoUsers)
  }
  return (
    <div className="mainInfoParti">
      <h2 className="nameParti">{gameName} </h2>
      <div className="viewRow">
        <div className="player1">
          <h3>{infoUsers[0].name}</h3>
        </div>
        <div className="viewTurn">
          {infoTurn === 0 ? (
            <div className="blueCross">X</div>
          ) : (
            <div className="redCircle">O</div>
          )}
        </div>
        <div className="player2" onClick={setClick}>
          <h3>{infoUsers[1].name}</h3>
        </div>
      </div>
    </div>
  );
}
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";

import Case from "./Case";
import Menu from "./InfoParti";

import Request from "../../Request/request.js";
import Header from "../../Request/header";

import "../../Style/game/game.css"

export default function Game() {
  const urlId = useParams().id;

  const [plato, setPlato] = useState(getNewPlato());
  const [users, setUser] = useState([{ name: "" }, { name: "" }]);
  const [turn, setTurn] = useState(0);
  const [end, setEnd] = useState(0);
  const [gameName,setName] = useState('')

  const requestBack = (res) => {
    console.log(res);
    setPlato(res.plato);
    setUser(res.users);
    setTurn(res.turn);
    setEnd(res.end);
    setName(res.name);
    console.log(users);
  };

  useEffect(() => {
    Request(`game/${urlId}`, Header.loged("GET"), requestBack, (err) => {
      window.location = "/";
    });
    const socket = io(process.env.REACT_APP_API_URL);
    const values = {
      userID: localStorage.getItem("userID"),
      room: "morpion" + urlId,
    };
    socket.emit("joinGame", values, (error) => {
      if (error) alert(error);
    });
    socket.on("played", ({ plato, turn }) => {
      setPlato(plato);
      setTurn(turn);
    });
    socket.on("gamefinish", ({ plato, end }) => {
      setPlato(plato);
      setEnd(end);
    });
  }, []);

  const playInput = (pos) => {
    console.log(pos);

    const callBack = (res) => {};
    const value = {
      position: pos,
    };

    Request(`play/${urlId}`, Header.loged("POST", value), callBack);
  };

  return (
    <div className="gameMainDiv">
      <div>
        <Menu users={users} turn={turn} gameName={gameName} />
      </div>
      <div className="mainGame">
        {end === 1 && (
          <div className="infoWinner">
            <p><span className={turn === 0 ? "blue":"red"}>{users[turn].name}</span> a gagné cette partie!</p>
          </div>
        )}
        <table>
          <tbody>
            {plato.map((values, key0) => (
              <tr key={key0}>
                {values.map((value, key) => (
                  <Case
                    key={key}
                    platoPosition={key0 + "" + key}
                    expression={value}
                    callBack={playInput}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function getNewPlato() {
  let r = [];
  for (var i = 0; i < 3; i++) {
    r[i] = [];
    for (var o = 0; o < 3; o++) {
      r[i][o] = ".";
    }
  }

  return r;
}

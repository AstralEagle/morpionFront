import Request from "../../Request/request.js";
import Header from "../../Request/header";

import "../../Style/game/gameIndex.css";

export default function Game({ primary, game }) {
  const onClick = (e) => {
    window.location = `/${game.id}`;
  };
  const joinGame = (e) => {
    e.preventDefault();
    console.log("join game");
    Request(`game/access/${game.id}`, Header.loged("POST"), (res) => {
      console.log(res);
    });
  };

  return (
    /*<div onClick={onClick} className="widgetGame">
      <table>
        <thead>
          <tr>
            <th colSpan="3">{game.name}</th>
          </tr>
        </thead>
        <tbody>
          {game.plato.map((values, key0) => (
            <tr key={key0 + "colum"}>
              {values.map((value, key) => (
                <th key={key0 + "" + key + "case"}>{value}</th>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="3">{game.nbrPlayer}/2</th>
          </tr>
          {primary && (
            <tr>
              <th colSpan="3" onClick={joinGame}>
                Join
              </th>
            </tr>
          )}
        </tfoot>
      </table>
    </div>*/
    <div className="widgetGame" onClick={onClick}>
      <h3>{game.name}</h3>
      <table>
        <tbody>
          {game.plato.map((values, key0) => (
            <tr key={key0 + "colum"}>
              {values.map((value, key) => (
                <th key={key0 + "" + key + "case"}>
                  {value === "." ? <></> : <>{value}</>}
                </th>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h4 className="nbrPlayer">{game.nbrPlayer}/2</h4>
        {primary && (
          <div onClick={joinGame} className="joiningGame">
            Rejoindre
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

import Ligne from "./Ligne"
import Case from "./Case"
import Request from "../../Request/request.js";
import Header from '../../Request/header';

const socket = io.connect("http://localhost:3003");

export default function Plato(){

    const [plato, setPlato] = useState(getNewPlato());

    const fetchPlato = () => {
        Request('plato',Header.loged('GET'),(res) => {
            setPlato(res)
        })
    }

    useEffect(() => {
        fetchPlato();
        socket.on('modifyPlato',(newPlato) => {
            setPlato(newPlato);
        })
    },[]);

    const callBack = (position) => {
        socket.emit("playGame",{position : position, value : "X"})
    };

    return (
        <table>
            <tbody>

            {plato.map((values,key)=>(
                <tr key={key}>
                    {values.map((value,key) => (
                        <Case key={key} platoPosition={value.position} expression={value.value} callBack={callBack} />
                        
                        ))}
                </tr>
            ))}
            </tbody>
        </table>
    )

}

function getNewPlato(){
    let r = [];
    for(var i=0;i<3;i++){
        r[i] = [];
        for(var o =0;o<3;o++){
            r[i][o] = {position: i+""+o,value:""};
        }
    }

    return r;
}
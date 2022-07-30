import React,{useState,useEffect} from 'react';

import Case from "./Case"

export default function Ligne({values,callBack}){

    const [ligne,setLigne] = useState([]);

    useEffect(() =>{
        console.log(values)
        setLigne(values);
    },[values])
    const handle = (position) => {
        callBack(position)
    }

    return (
        <div>
            {ligne.map((value,key) => (
                    <Case key={key} platoPosition={value.position} expression={value.value} callBack={handle} />
            ))}
        </div>
    );
}
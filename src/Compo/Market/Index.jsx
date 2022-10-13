import React,{useState, useEffect} from 'react';
import Request from '../../Request/request';
import Header from '../../Request/header';

import Item from './Item';

import '../../Style/market/style.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default function() {

    const [items,setItems] = useState([{name:"default",id:1}]);
    const [actualID , setActual] = useState(1);

    const getIdSign = () => {
      Request('user/sign',Header.loged("GET"),(data) => {
        setActual(data.sign);
      })
    }
    
    useEffect(() => {
      Request('market/',Header.loged("GET"),(data) => {
        setItems(data);
      })
      getIdSign()
      
    },[])

    const selectNewSign = (idSign) => {
      Request(`market/${idSign}`,Header.loged("POST"),(data) => {
        getIdSign()
      })
    }

  return(
    <div className="itemsMaket">
    {
      items.map((item,ref) => (
        <Item 
        item={item} 
        key={ref} 
        callBack={selectNewSign}
        actived={actualID === item.id}
        />
      ))
    }
    </div>
  )  
}
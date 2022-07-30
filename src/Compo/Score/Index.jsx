import React, {useState, useEffect} from 'react';

import User from './User'

import Request from '../../Request/request'
import Header from '../../Request/header'

import '../../Style/score/style.css'

export default function Index(){

    const [users,setUsers] = useState([]);

    useEffect(() => {
        Request("user",Header.loged("GET"),(res) => {
            setUsers(res)
        })
    },[])

    return(
        <div>
            <div>
                {
                    users.map((user,key)=>(
                        <User key={key+"userScore"} user={user} />
                    ))
                }
            </div>
        </div>
    )
}
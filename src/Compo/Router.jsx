import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./Login/Index";
import Index from "./Game/Index";
import CreateRoom from "./Game/Create";
import Game from "./Game/Game";
import Score from "./Score/Index";
import Menu from "./Header/Index";
import Market from "./Market/Index"

import Request from "../Request/request";
import Header from "../Request/header";

export default function Router() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    if (localStorage.getItem("userID")) {
      Request("auth", Header.loged("GET"), (res) => {
        setUser(res);
      });
    }
  }, []);

  if (user === undefined) {
    return <Login />;
  } else {
    return (
      <div>
        <Menu user={user} />
        <Routes>
          <Route exact path="/new_game" element={<CreateRoom />} />
          <Route exact path="/login" element={<Login />} />

          <Route exact path="/:id" element={<Game />} />
          <Route exact path="/score" element={<Score />} />
          <Route default path="*" element={<Index />} />
          <Route exact path="/market" element={<Market />} />
        </Routes>
      </div>
    );
  }
}

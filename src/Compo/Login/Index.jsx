import Login from "./Login";
import Signup from "./Signup";

import "../../Style/login/style.css";

export default function Index() {
  return (
    <div className="mainForm">
      <div className="load_screen">
        <h1>Morpion</h1>
        <div>
          <div className="load_chargement"></div>
          <div className="load_chargement"></div>
          <div className="load_chargement"></div>
        </div>
      </div>
      <Login />
      <Signup />
    </div>
  );
}

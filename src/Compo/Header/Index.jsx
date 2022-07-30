import { RiLogoutBoxRLine, RiVipCrownLine, RiUser3Line, RiShoppingBagLine} from "react-icons/ri";

import '../../Style/header/style.css'

export default function Index({user}) {

  const logOut = () => {
    localStorage.removeItem('userID');
    localStorage.removeItem('token');
    window.location = '/';
  }

  return (
    <header>
      <h1>
        <a href="/">Morpion</a>
      </h1>
      <div>
        <a href="/shop"><RiShoppingBagLine className="headerIcon" /></a>
        <a href="/score"><RiVipCrownLine className="headerIcon" /></a>
        <a href={`/user/${user.id}`}><RiUser3Line className="headerIcon" /></a>
        <RiLogoutBoxRLine className="headerIcon" onClick={logOut}/>
      </div>
    </header>
  );
}

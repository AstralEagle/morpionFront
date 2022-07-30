export default function User({ user }) {
    const onClick = (event) => {
        window.location = `/user/${user.id}`
    }
  return (
    <div className="userScore" onClick={onClick}>
      <p className="nameScore">{user.name}</p>
      <div className="pointScore">
        <p>{user.point}</p>
        <p>{user.point > 1 ? 
        (<>Victoires</>):(<>Victoire</>)}</p>
      </div>
    </div>
  );
}

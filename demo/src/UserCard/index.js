import "./UserCard.css";

function UserCard({ username, city, profilePicture }) {
  return (
    <div className="Card">
      <div className="Thumbnail">
        <img src={profilePicture} alt="" width="48" height="48" />
      </div>
      <div className="Details">
        <div className="Text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
          possimus, ipsa dolores repellendus, aspernatur consequatur non totam
          fugit officiis earum placeat mollitia illum! Dolores at, quasi
          reprehenderit quis iure eveniet!
        </div>
        <div className="Username">{username}</div>
        <div className="Location">{city}</div>
      </div>
    </div>
  );
}

export default UserCard;

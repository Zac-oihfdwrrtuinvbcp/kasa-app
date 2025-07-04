import "./User.scss";

function User ({ user }) {
  return (
    <div className="user">
      <h2 className="user__name">{user.name}</h2>
      <img src={user.picture} alt={`${user.name}'s profile`} className="user__profile-picture" />
    </div>
  );
}

export default User;
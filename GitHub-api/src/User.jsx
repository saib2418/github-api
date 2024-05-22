import create from "prompt-sync";
import React from "react";

const User = ({ user }) => {
  const { avatar_url, followers, following, public_repos, name, login } = user;
  return (
    <div className="user">
      <div>
        <img src={avatar_url} alt="Avatar" className="avatar" />
      </div>
      <div>
        <a href={`https://github.com/${login}`}>{name || login}</a>
      </div>
      <div>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>Public Repositories: {public_repos}</p>
      </div>
    </div>
  );
};

export default User;

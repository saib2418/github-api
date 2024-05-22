import { useState, useEffect } from "react";
import User from "./User.jsx";

const GithubProfileFinder = () => {
  const [searchUser, setSearchUser] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGithubUser() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.github.com/users/${searchUser}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Fetch error: ", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGithubUser();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchGithubUser();
  };

  if (loading) {
    return <h1>Loading data, please wait...</h1>;
  }

  return (
    <>
      <div className="github-profile-container">
        <div className="input-wrapper">
          <input
            type="text"
            value={searchUser}
            onChange={(e) => setSearchUser(e.target.value)}
          />
          <button onClick={handleSubmit}>Search</button>
        </div>
      </div>
      {userData && <User user={userData} />}
    </>
  );
};

export default GithubProfileFinder;

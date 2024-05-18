import { useEffect, useState } from "react";
import "./Dashboard.css";
import { getUsers } from "../../services/user";
import Card from "../../components/Card";

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const usersRef = await getUsers();
      setUsers(usersRef);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="wh-text-center">Search through profiles</h1>
      <form className="login__form">
        <label className="wh-display-none">Search</label>
        <div className="search__input-container">
          <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              fill="#0d084d"
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            />
          </svg>
          <input
            className="login__form-input input-with-icon"
            type="search"
            name="search"
            id="search"
            placeholder="Search a job"
          />
        </div>
      </form>
      <div className="cards">
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

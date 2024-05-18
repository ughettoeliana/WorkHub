import { useEffect, useState } from "react";
import "./Profiles.css";
import { getUsers } from "../../services/user";
import Card from "../../components/Card";

export default function Profiles() {
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
      <h1>Search through profiles</h1>
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
}

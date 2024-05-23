import { useEffect, useState } from "react";
import { getUser } from "../../services/user";
import EditUserForm from "./EditUserForm";

export default function Profile() {
  const [user, setUser] = useState({});
  const [editMode, setEditMode] = useState(false);

  function toggleEditMode() {
    setEditMode(true);
  }

  function handleUpdateUser() {
  }
  

  useEffect(() => {
    async function fetchUserData() {
      const userData = await getUser();
      setUser(userData);
    }

    fetchUserData();
  }, []);


  return (
    <div>
      {user.email} :) User Profile
      <div>
        {!editMode && (
          <button className="" onClick={toggleEditMode}>
            Edit my profile
          </button>
        )}
        {editMode && (
          <EditUserForm
            user={user}
            handleUpdateUser={handleUpdateUser}
            toggleEditMode={toggleEditMode}
          />
        )}
      </div>
    </div>
  );
}
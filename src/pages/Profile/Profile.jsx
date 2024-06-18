import { useEffect, useState } from "react";
import { getUser, updateUserData } from "../../services/user";
import EditUserForm from "./EditUserForm";
import "./Profile.css";


export default function Profile() {
  const [user, setUser] = useState({});
  const [editMode, setEditMode] = useState(false);

  function toggleEditMode() {
    setEditMode((prev) => !prev);
  }

  async function handleUpdateUser(updatedUser) {
    try {
      await updateUserData(user.id ,updatedUser);
      setUser(updatedUser);
      toggleEditMode();
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  }

  useEffect(() => {
    async function fetchUserData() {
      const userData = await getUser();
      setUser(userData);
    }

    fetchUserData();
  }, []);

  return (
    <div className="user-profile__body">
      <h1>Welcome  <span className="wh-color-primary">{user.firstName} {user.lastName}</span></h1>
      <div>
        {!editMode && (
          <button className="wh-button wh-button--secondary" onClick={toggleEditMode}>
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

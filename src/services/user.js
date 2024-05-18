import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function getUsers() {
  const usersRef = collection(db, "users");

  try {
    const querySnapshot = await getDocs(usersRef);
    const users = [];

    querySnapshot.forEach((doc) => {
      users.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return users;
  } catch (error) {
    console.error("An error occurred while getting the users:", error);
    return [];
  }
}


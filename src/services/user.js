import { collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import { jwtDecode } from "jwt-decode";

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

export async function getUser() {
  const idToken = localStorage.getItem("firebaseIdToken");
  const idTokenDecoded = decodeIdToken(idToken);
  const userId = idTokenDecoded.user_id;
  const userData = await getUserById(userId);

  return userData;
}

export async function getUserById(id) {
  const refUser = doc(db, `users/${id}`);
  const docSnapshot = await getDoc(refUser);

  if (docSnapshot.exists()) {
    return {
      id: docSnapshot.id,
      email: docSnapshot.data().email,
      firstName: docSnapshot.data().firstName,
      lastName: docSnapshot.data().lastName,
      jobTitle: docSnapshot.data().jobTitle,
      address: docSnapshot.data().address,
      hourlyRate: docSnapshot.data().hourlyRate,
      aboutMe: docSnapshot.data().aboutMe,
    };
  } else {
    console.log("No such document!");
  }
}

export async function updateUserData(userId, editedUser) {
  try {
    const userRef = doc(db, "users", userId);

    await updateDoc(userRef, {
      firstName: editedUser.firstName,
      lastName: editedUser.lastName,
      jobTitle: editedUser.jobTitle,
      address: editedUser.address,
      hourlyRate: editedUser.hourlyRate,
      aboutMe: editedUser.aboutMe,
    });
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
  }
}


export function decodeIdToken() {
  const idToken = localStorage.getItem("firebaseIdToken");

  if (!idToken) {
    console.error("No ID token found in local storage");
    return null;
  }

  try {
    const decodedToken = jwtDecode(idToken);
    return decodedToken;
  } catch (error) {
    console.error("Error decoding ID token:", error);
    return null;
  }
}

import {
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "./firebase";
import { jwtDecode } from "jwt-decode";
// import { onAuthStateChanged } from "firebase/auth";

let userData = {
  id: null,
  email: null,
};

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
  const idToken = localStorage.getItem('firebaseIdToken');
  const idTokenDecoded = decodeIdToken(idToken);
  const userId =  idTokenDecoded.user_id;
  const userData = getUserById(userId)
  console.log('userData', userData);
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
    };
  } else {
    console.log("No such document!");
  }
}


export function decodeIdToken() {
  const idToken = localStorage.getItem('firebaseIdToken');

  if (!idToken) {
    console.error('No ID token found in local storage');
    return null;
  }

  try {
    const decodedToken = jwtDecode(idToken);
    console.log('Decoded token:', decodedToken);
    return decodedToken;
  } catch (error) {
    console.error('Error decoding ID token:', error);
    return null;
  }
}


// function setUserData(newData) {
//   userData = {
//     ...userData,
//     ...newData,
//   };
// }

// function clearUserData() {
//   setUserData({
//     id: null,
//     email: null,
//   });
// }

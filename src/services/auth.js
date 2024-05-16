import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

export async function login({ email, password }) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      return {
        id: userCredentials.user.uid,
        email: userCredentials.user.email,
      };
    })
    .catch((error) => {
      return {
        code: error.code,
        message: error.message,
      };
    });
}

export async function register({ fullName, email, password }) {
  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredentials.user;
    
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      fullName: fullName,
    });
    
    return {
      id: user.uid,
      email: user.email,
      fullName: fullName,
    };
  } catch (error) {
    return {
      code: error.code,
      message: error.message,
    };
  }

}

export const listenToAuthChanges = (auth, setAuthUser) => {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      setAuthUser(user);
      console.log("authUser:", user);
    } else {
      setAuthUser(null);
    }
  });
};

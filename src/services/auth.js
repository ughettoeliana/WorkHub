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

export async function register({ firstName, lastName, email, validPassword }) {
  try {
    console.log("[auth.js] password:", validPassword);

    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      validPassword
    );

    const user = userCredentials.user;
    const data = {
      email: user.email,
      firstName: firstName,
      lastName: lastName,
    };
    await setDoc(doc(db, "users", user.uid), data);

    return {
      id: user.uid,
      ...data,
    };
  } catch (error) {
    console.error("Error during registration:", error);
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
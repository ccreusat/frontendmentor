import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// Types
import { CardProps, IObjectKeys } from "../types/types";

// Firebase Config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get All Collection ref
export const collectionRef = collection(db, "entertainment-data");

// Fetch Collection
export const getCollection = (
  onSuccess: (collection: CardProps[]) => void,
  onError: (error: any) => void
) => {
  return onSnapshot(
    collectionRef,
    (snapshot: any) => {
      const collection: CardProps[] = [];
      snapshot.docs.forEach((doc: any) => {
        collection.push({ ...doc.data(), id: doc.id });
      });
      onSuccess(collection);
    },
    error => {
      onError(error);
    }
  );
};

// Get Doc ref by ID
export const docRef = (id: string) => doc(db, "entertainment-data", id);

// PUT Doc by ID
export const updateBookmarked = (id: string, isBookmarked: boolean) => {
  return updateDoc(docRef(id), { isBookmarked: !isBookmarked });
};

// Authentication Methods
export const login = (
  email: string,
  password: string,
  onSuccess: (userCredential: any) => void,
  onError: (error: any) => void
) => {
  return signInWithEmailAndPassword(firebaseAuth, email, password)
    .then(userCredential => {
      onSuccess(userCredential);
    })
    .catch(error => {
      onError(error);
    });
};

export function getSignInError(type: string | number) {
  const errors: IObjectKeys = {
    "auth/user-not-found": "User not found...",
    "auth/wrong-password": "Wrong password!",
    "auth/too-many-requests": "Too many attempts. Try later again...",
    default: "",
  };
  return errors[type] || errors["default"];
}

export const register = (
  email: string,
  password: string,
  onSuccess: (userCredential: any) => void,
  onError: (error: any) => void
) => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then(userCredential => {
      onSuccess(userCredential);
    })
    .catch(error => {
      onError(error);
    });
};

export function getSignUpError(type: string | number) {
  const errors: IObjectKeys = {
    "auth/weak-password": "Password should be at least 6 characters.",
    "auth/email-already-in-use": "User already exists!",
    default: "",
  };
  return errors[type] || errors["default"];
}

export const signout = () => {
  return signOut(firebaseAuth);
};

// Authentication
export const firebaseAuth = getAuth(app);

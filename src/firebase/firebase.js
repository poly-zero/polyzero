// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import { getAnalytics, logEvent } from "firebase/analytics";
import { useLoginTracking } from "../analytics/tracking";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChf-PyMiVObm6krhwzetP4lUKee4vzvrQ",
  authDomain: "polyzero-37efc.firebaseapp.com",
  projectId: "polyzero-37efc",
  storageBucket: "polyzero-37efc.appspot.com",
  messagingSenderId: "63330640151",
  appId: "1:63330640151:web:0677a82628cba788d91752",
  measurementId: "G-5M2J27JMXQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider();
const registerWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        badge: [0],
        footprint: 0,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await updateProfile(auth.currentUser, { displayName: name });
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      badge: [0],
      footprint: 0,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    createLog("login", { method: "local" });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const getUserInfo = async (userId) => {
  try {
    const q = query(collection(db, "users"), where("uid", "==", userId));
    const docs = await getDocs(q);
    return docs;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

const createLog = (type, parameters) => {
  logEvent(analytics, type, parameters);
};

export {
  auth,
  db,
  registerWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  getUserInfo,
  sendPasswordReset,
  logout,
};

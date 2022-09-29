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
  orderBy,
} from "firebase/firestore";
import { loginTracking } from "../analytics/tracking";
import { loadStripe } from "@stripe/stripe-js";
import { getFunctions, httpsCallable } from "firebase/functions";
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

const googleProvider = new GoogleAuthProvider();
const registerWithGoogle = async () => {
  try {
    loginTracking("google");
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
        created_at: new Date(),
      });
    }
  } catch (err) {
    // console.error(err);
    alert("An error has occurred.");
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
      created_at: new Date(),
    });
  } catch (err) {
    // console.error(err);
    if (err.message === "Firebase: Error (auth/email-already-in-use).")
      alert("This email is already in use.");
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    loginTracking("local");
  } catch (err) {
    // console.error(err);
    if (
      err.message === "Firebase: Error (auth/wrong-password)." ||
      err.message === "Firebase: Error (auth/user-not-found)"
    )
      alert("Incorrect username or password.");
    else if (
      err.message ===
      "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
    )
      alert(
        "Access to this account has been temporarily disabled due to many failed login attempts."
      );
  }
};

const getUserHistory = async (userId) => {
  try {
    const q = query(
      collection(db, "payment"),
      where("uid", "==", userId),
      orderBy("created_at", "desc")
    );
    const docs = await getDocs(q);
    return docs;
  } catch (err) {
    // console.error(err);
    alert("An error has occurred.");
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    // console.error(err);
    alert("An error has occurred.");
  }
};

const logout = () => {
  signOut(auth);
};

const saveFootprintData = async (data) => {
  try {
    await addDoc(collection(db, "footprint_data"), data);
  } catch (err) {
    // console.error(err.message);
    alert("An error has occurred.");
  }
};

const saveTierData = async (data) => {
  try {
    await addDoc(collection(db, "tier_data"), data);
  } catch (err) {
    // console.error(err.message);
    alert("An error has occurred.");
  }
};

const savePaymentData = async (data) => {
  try {
    await addDoc(collection(db, "payment"), data);
  } catch (err) {
    // console.error(err.message);
    alert("An error has occurred.");
  }
};

const getStripeApi = async (data) => {
  try {
    // const stripeCheckout =
    //   window.location.hostname === "localhost"
    //     ? httpsCallable(getFunctions(app), "stripeCheckoutDev")
    //     : httpsCallable(getFunctions(app), "stripeCheckoutProd");

    // const STRIPE_PUBLIC_KEY =
    //   window.location.hostname === "localhost"
    //     ? "pk_test_51LhqIFAAHnMRTgmRLjs2aLphobC5OiVB6OhS2bXVAcoFuZJggH3uocLpU7cbwHOWs89wx33paIvgHeDEjcqiQaAs00dZO5xDtE"
    //     : "pk_live_51LhqIFAAHnMRTgmRuENJXYhrcJKNprQWWzUbCqtGJ1Zwg6AGfzmoE5w0wCJV8GZ8k8rTF4HVzKHuBQw9yEzxOH4E00eCeL7tXl";

    const stripeCheckout = httpsCallable(
      getFunctions(app),
      "stripeCheckoutDev"
    );
    const STRIPE_PUBLIC_KEY =
      "pk_test_51LhqIFAAHnMRTgmRLjs2aLphobC5OiVB6OhS2bXVAcoFuZJggH3uocLpU7cbwHOWs89wx33paIvgHeDEjcqiQaAs00dZO5xDtE";

    const stripe = await loadStripe(STRIPE_PUBLIC_KEY);
    stripeCheckout(data).then((result) => {
      stripe
        .redirectToCheckout({ sessionId: result.data.id })
        .then((result) => {
          console.log(result);
        });
    });
  } catch (error) {
    // console.log(error);
    alert("An error has occurred initializing the checkout session.");
  }
};

export {
  auth,
  db,
  registerWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  getUserHistory,
  sendPasswordReset,
  logout,
  saveFootprintData,
  saveTierData,
  savePaymentData,
  getStripeApi,
};

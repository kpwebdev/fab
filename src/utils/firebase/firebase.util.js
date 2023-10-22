import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDocs,
  getDoc,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// configuration
const firebaseConfig = {
  apiKey: "AIzaSyC58rh7OA0H_mlzyGNWGb4s__73fdeEc_I",
  authDomain: "fab-1-77b29.firebaseapp.com",
  projectId: "fab-1-77b29",
  storageBucket: "fab-1-77b29.appspot.com",
  messagingSenderId: "608931774152",
  appId: "1:608931774152:web:c554be559c3e0ffd982ffd",
};

// initialize the app
const app = initializeApp(firebaseConfig);

// initialize database
const db = getFirestore(app);

// initialize authentication
const auth = getAuth(app);

const signUp = async (email, password) => {
  console.log("running the signUp func");
  console.log("email-inside-signUp-func", email);
  console.log("password-inside-signUp-func", password);
  const response = await createUserWithEmailAndPassword(auth, email, password);
  console.log("created a user", response);
};

const signInWithEmail = async (email, password) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
  console.log("Successfully loggedIn", response);
};

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  const response = await signInWithPopup(auth, googleProvider);
  return response;
};

const getAllDocs = async (collectionName, _q) => {
  let ref = collection(db, collectionName);

  if (_q) {
    ref = query(ref, where(..._q));
  }

  const response = await getDocs(ref);
  const data = response.docs.map((doc) => ({ id: doc.id, data: doc.data() }));

  console.log(data);
};

const getDocument = async (collectionName, id) => {
  const ref = collection(db, collectionName);
  const docRef = doc(ref, id);

  const response = await getDoc(docRef);
  console.log("response", response);
};

const addDocument = async (collectionName, data) => {
  console.log("collectionName", collectionName);
  console.log("data", data);
  const ref = collection(db, collectionName);
  const response = await addDoc(ref, data);
  console.log("response", response);
};

const deleteDocument = async (collectionName, id) => {
  const ref = doc(db, collectionName, id);
  const response = await deleteDoc(ref);
  console.log("response", response);
};

export {
  signUp,
  signInWithEmail,
  signInWithGoogle,
  getAllDocs,
  getDocument,
  addDocument,
  deleteDocument,
};

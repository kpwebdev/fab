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
  setDoc,
  updateDoc,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

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
export const app = initializeApp(firebaseConfig);

// initialize database
const db = getFirestore(app);

// initialize storage
const storage = getStorage(app);

// initialize authentication
export const auth = getAuth(app);

const signUp = async ({ email, password }) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  console.log("created a user", response);
};

const signInWithEmail = async ({ email, password }) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
  console.log("Successfully loggedIn", response);
};

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  const response = await signInWithPopup(auth, googleProvider);
  return response;
};

const logout = async () => {
  const response = await signOut(auth);
  console.log("response - logout", response);
};

const getAllDocs = async (collectionName, _q) => {
  let ref = collection(db, collectionName);

  if (_q) {
    ref = query(ref, where(..._q));
  }

  const response = await getDocs(ref);
  const data = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return data;
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

  return response;
};

const deleteDocument = async (collectionName, id) => {
  const ref = doc(db, collectionName, id);
  const response = await deleteDoc(ref);
  console.log("response", response);
};

const addUser = async (data) => {
  const response = await addDocument("users", {
    ...data,
    uid: auth.currentUser.uid,
  });
  console.log("response - created user", response);
};

const getUser = async () => {
  if (auth.currentUser.uid) {
    try {
      const dataArr = await getAllDocs("users", [
        "uid",
        "==",
        auth.currentUser.uid,
      ]);
      const data = dataArr[0];
      return data;
    } catch (error) {
      console.log("here is the error", error);
    }
  }
};

const updateUserDetails = async (dataToUpdate) => {
  const currentUserData = await getUser();
  const { id } = currentUserData;
  const newUserData = { ...currentUserData, ...dataToUpdate };
  const docRef = doc(db, "users", id);
  const response = await setDoc(docRef, newUserData);
  console.log("response from - updateUserDetails", response);
};

const updateContacts = async (contacts) => {
  try {
    const currentUserData = await getUser();
    const { id } = currentUserData;
    const docRef = doc(db, "users", id);
    const response = await updateDoc(docRef, { contacts });
    console.log("response - updateContacts", response);
  } catch (error) {
    console.log("something is not right", error);
  }
};

const updateSocialMedia = async (socialMedia) => {
  const currentUserData = await getUser();
  const { id } = currentUserData;
  const docRef = doc(db, "users", id);
  const response = await updateDoc(docRef, { socialMedia });
  console.log("response - updateSocialMedia", response);
};

const uploadFile = async (path, file, fileNameWithoutExtension) => {
  if (!file) return;
  const actualFileName = file.name;
  const actualFileNameFragments = actualFileName.split(".");
  const fileName =
    fileNameWithoutExtension + "." + actualFileNameFragments.at(-1);
  const fileRef = ref(storage, `${path}/${fileName}`);
  const response = await uploadBytes(fileRef, file);
  const downloadLink = await getDownloadURL(response.ref);
  console.log("response - uploadFile", response);
  return downloadLink;
};

export {
  signUp,
  signInWithEmail,
  signInWithGoogle,
  getAllDocs,
  getDocument,
  addDocument,
  deleteDocument,
  addUser,
  getUser,
  updateUserDetails,
  logout,
  updateContacts,
  updateSocialMedia,
  uploadFile,
};

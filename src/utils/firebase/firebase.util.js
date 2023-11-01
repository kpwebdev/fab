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
  Timestamp,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadString,
} from "firebase/storage";

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
};

const signInWithEmail = async ({ email, password }) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
};

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  const response = await signInWithPopup(auth, googleProvider);
  return response;
};

const logout = async () => {
  const response = await signOut(auth);
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
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

const addDocument = async (collectionName, data) => {
  const ref = collection(db, collectionName);
  const response = await addDoc(ref, {
    ...data,
    modifiedAt: Timestamp.fromDate(new Date()),
  });

  return response;
};

const deleteDocument = async (collectionName, id) => {
  const ref = doc(db, collectionName, id);
  const response = await deleteDoc(ref);
};

const addUser = async (data) => {
  const response = await addDocument("users", {
    ...data,
    uid: auth.currentUser.uid,
    createdAt: Timestamp.fromDate(new Date()),
    modifiedAt: Timestamp.fromDate(new Date()),
    email: auth.currentUser.email,
  });
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
      console.log("something went wrong", error);
    }
  }
};

const getProfileUser = async (userName) => {
  let users;
  try {
    users = await getAllDocs("users", ["userName", "==", userName]);
  } catch (error) {
    console.log("something went wrong in getProfileUser > getAllDocs", error);
  }
  const user = users[0];
  return user;
};

const getAllUsers = async () => {
  const users = await getAllDocs("users");
  return users;
};

const updateUserDetails = async (dataToUpdate) => {
  const { userName } = dataToUpdate;
  const users = await getAllUsers();
  const foundUser = users.find((user) => user.userName === userName);
  if (foundUser && foundUser.email !== auth.currentUser.email) {
    throw new Error(
      "The user name is already taken. Please choose something else"
    );
  }
  // if (userNames.includes(userName) && auth.currentUser.) {
  //   throw new Error(
  //     "The user name is already taken. Please choose something else"
  //   );
  // }
  const currentUserData = await getUser();
  const { id } = currentUserData;
  const newUserData = { ...currentUserData, ...dataToUpdate };
  const docRef = doc(db, "users", id);
  const response = await setDoc(docRef, newUserData);
};

const updateContacts = async (contacts) => {
  try {
    const currentUserData = await getUser();
    const { id } = currentUserData;
    const docRef = doc(db, "users", id);
    const response = await updateDoc(docRef, { contacts });
  } catch (error) {
    console.log("something is not right", error);
  }
};

const updateSocialMedia = async (socialMedia) => {
  const currentUserData = await getUser();
  const { id } = currentUserData;
  const docRef = doc(db, "users", id);
  const response = await updateDoc(docRef, { socialMedia });
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
  return downloadLink;
};

const uploadDataUrlImage = async (path, file, fileNameWithoutExtension) => {
  if (!file) return;
  const fileName = fileNameWithoutExtension + ".png";
  const fileRef = ref(storage, `${path}/${fileName}`);
  const response = await uploadString(fileRef, file, "data_url");
  const downloadLink = await getDownloadURL(response.ref);
  return downloadLink;
};

const updateCardDetails = async (card) => {
  const currentUserData = await getUser();
  const { id } = currentUserData;
  const docRef = doc(db, "users", id);
  try {
    const response = await updateDoc(docRef, { card });
  } catch (error) {
    console.log("error from updateCardDetails", error);
  }
};

const updateProfileDetails = async (profile) => {
  const currentUserData = await getUser();
  const { id } = currentUserData;
  const docRef = doc(db, "users", id);
  try {
    const response = await updateDoc(docRef, { profile });
  } catch (error) {
    console.log("error from updateProfileDetails", error);
  }
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
  updateCardDetails,
  uploadDataUrlImage,
  updateProfileDetails,
  getProfileUser,
};

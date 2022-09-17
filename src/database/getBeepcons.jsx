import { db } from "./db";
import {
    collection,
    addDoc,
    doc,
    onSnapshot,
    getDocs,
    setDoc,
    query,
    getDoc,
    where,
    documentId,
  } from "firebase/firestore";

export const getBeepcons = async () =>{
        const beepconsCollection = collection(db, "beepcons");
        const beepconsSnapshot = await getDocs(beepconsCollection);
        const beepconsList = beepconsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          }));
          return beepconsList;
}
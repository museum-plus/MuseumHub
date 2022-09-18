import { db } from "./db";
import {
    collection,
    addDoc,
    doc,
    onSnapshot,
    getDocs,
    deleteDoc,
    setDoc,
    query,
    getDoc,
    where,
    documentId
  } from "firebase/firestore";

const getBeepcons = async () =>{
        const beepconsCollection = collection(db, "beepcons");
        const beepconsSnapshot = await getDocs(beepconsCollection);
        const beepconsList = beepconsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          }));
          return beepconsList;
}

const getRecorridos = async () =>{
    const recorridosCollection = collection(db, "recorridos");
    const recorridosSnapshot = await getDocs(recorridosCollection);
    const recorridosList = recorridosSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      }));
      return recorridosList;
}

const getTurnos = async () =>{
    const turnosCollection = collection(db, "turnos");
    const turnosSnapshot = await getDocs(turnosCollection);
    const turnosList = turnosSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      }));
      return turnosList;
}
const deleteTurnos = async (id) =>{
    await deleteDoc(doc(db, "turnos", id));
    console.log(id)
    return id;
    
}
export { deleteTurnos, getTurnos, getRecorridos, getBeepcons};
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
import refresh from '../assets/refresh.svg'

const getMuseum = async () =>{
  const museumCollection = collection(db, "museum");
  const museumSnapshot = await getDocs(museumCollection);
  const museumList = museumSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    }));
    return museumList;
}

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

const getTurnoId = async (id) =>{
  const turnoDoc = doc(db, "turno", id);
  const turnoSnapshot = await getDoc(turnoDoc);
  if (turnoSnapshot.exists()) {
    return turnoSnapshot.data();
  } else {
    console.log("No such document!");
  }
}
const getSingleRecorrido = async (id) =>{
  const recorridoDoc = doc(db, "recorridos", id);
  const recorridoSnapshot = await getDoc(recorridoDoc);
  if (recorridoSnapshot.exists()) {
    return recorridoSnapshot.data();
  } else {
    console.log("No such document!");
  }
}

const getSingleBeepcon = async (id) =>{
  const bpc_ref = doc(db, "turnos", id);
  const bpc_snap = await getDoc(bpc_ref);
  if (bpc_snap.exists()) {
    return bpc_snap.data();
  } else {
    console.log("No such document!");
  }
}

// DELETEs
const deleteBeepcons = async (id) =>{
  await deleteDoc(doc(db, "beepcons", id));
  console.log(id)
  return id;
}

const deleteTurnos = async (id) =>{
  await deleteDoc(doc(db, "turnos", id));
  console.log(id)
  return id;
}

//REFRESH
const RefreshButton = (props) => {
  return(
    <button className="refresh" onClick={props.refresh}>
      <img src={refresh} alt="refresh" />
    </button>
  )
}

export { 
  deleteTurnos, deleteBeepcons, 
  getTurnos, getRecorridos, getBeepcons, getMuseum,
  getSingleRecorrido, getTurnoId, getSingleBeepcon, RefreshButton
  };

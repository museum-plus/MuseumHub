import React from "react";
import homeIcon from "../../assets/homeIcon.svg";
import museumicon from "../../assets/museumicon.svg";
import beepconsicon from "../../assets/beepconIcon.svg";
import recorridosicon from "../../assets/recorridosicon.svg";
import turnosIcon from "../../assets/turnos.svg";
import { db } from "../../database/db";
import {
  collection,
  addDoc,
  Timestamp,
  doc,
  getDoc,
  query,
  where,
  getDocs,
  setDoc,
} from "firebase/firestore";

import "./NavigationGlass.css";
import { Link } from "react-router-dom";

function NavigationGlassItem(props) {
  return (
    <Link to={props.route}>
      <div className="navigation-glass__item">
        <div className="navigation-glass__item__icon">
          <img src={props.icon} alt="icon" />
        </div>
        <div className="navigation-glass__item__text">{props.text}</div>
      </div>
    </Link>
  );
}

export default function NavigationGlass() {
  const registerMuseum = async () => {
    try {
      await setDoc(doc(db, "museums", "museum1"), {
        name: "Bellas Artes",
        city: "Neuquen",
        country: "Argentina",
      });
    } catch (e) {
      console.log("ERROR ! =", e);
    }
  };

  const docas = async () => {
    // const q = query(collection(db, "museums"), where("city", "==", 'Neuquen'));
    // const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.id, " => ", doc.data());
    // } );
    const docRef = doc(db, "museums", "museum1");
    await setDoc(docRef, {
      name: "Bellas Artes cambiado23",
      city: "Neuquen",
      country: "Argentina",
    });
  };

  return (
    <div className="navigation-glass-container">
      <div className="navigation-glass">
        <div className="navigation-glass__title">MuseumHub</div>
        <NavigationGlassItem icon={homeIcon} text="Inicio" route="/" />
        <NavigationGlassItem icon={museumicon} text="Tu museo" route="/museo" />
        <NavigationGlassItem
          icon={beepconsicon}
          text="Beepcons"
          route="/beepcons"
        />
        <NavigationGlassItem
          icon={recorridosicon}
          text="Tus recorridos"
          route="/recorridos"
        />
        <NavigationGlassItem icon={turnosIcon} text="Turnos" route="/turnos" />
      </div>
    </div>
  );
}

import React from "react";
import homeIcon from "../../assets/homeIcon.svg";
import museumicon from "../../assets/museumicon.svg";
import beepconsicon from "../../assets/beepconIcon.svg";
import recorridosicon from "../../assets/recorridosicon.svg";
import turnosIcon from "../../assets/turnos.svg";
import { db } from "../../database/db";
import './Cube.css'
import { useAnimationFrame } from "framer-motion";
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
        <section>
        <Cube />
        <div className="navigation-glass__title">MuseumHub</div>
        </section>
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


export function Cube() {
  const ref = React.useRef(null);

  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 1500) * 200;
    const y = (1 + Math.sin(t / 1000)) * -5;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <div className="container">
      <div className="cube" ref={ref}>
        <div className="side front" />
        <div className="side left" />
        <div className="side right" />
        <div className="side top" />
        <div className="side bottom" />
        <div className="side back" />
      </div>
    </div>
  );
}


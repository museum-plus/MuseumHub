import React, { useContext } from "react";
import homeIcon from "../../assets/homeIcon.svg";
import HomeIcon from "../../assets/HomeIcon.jsx";
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
import ThemeContext from "../../context/theme-context";
import MuseumIcon from "../../assets/MuseumIcon";
import BeepconsIcon from "../../assets/BeepconsIcon";
import RecorridosIcon from "../../assets/RecorridosIcon";
import TurnosIcon from "../../assets/TurnosIcon";

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
  const { theme, handleTheme } = useContext(ThemeContext);
  console.log(theme);
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
    <div className="navigation-glass-container" >
      <div className="navigation-glass" style={theme.glass}>
        <section>
          <Cube />
          <div className="navigation-glass__title">MuseumHub</div>
        </section>

        <Link to="/">
          <div className="navigation-glass__item">
            <div className="navigation-glass__item__icon">
              <HomeIcon />
            </div>
            <div className="navigation-glass__item__text">Inicio</div>
          </div>
        </Link>
        <Link to="/museo">
          <div className="navigation-glass__item">
            <div className="navigation-glass__item__icon">
              <MuseumIcon/>
            </div>
            <div className="navigation-glass__item__text">Tu museo</div>
          </div>
        </Link>
        <Link to="/beepcons">
          <div className="navigation-glass__item">
            <div className="navigation-glass__item__icon">
              <BeepconsIcon/>
            </div>
            <div className="navigation-glass__item__text">Beepcons</div>
          </div>
        </Link>
        <Link to="/recorridos">
          <div className="navigation-glass__item">
            <div className="navigation-glass__item__icon">
              <RecorridosIcon/>
            </div>
            <div className="navigation-glass__item__text">Tus Recorridos</div>
          </div>
        </Link>
        <Link to="/turnos">
          <div className="navigation-glass__item">
            <div className="navigation-glass__item__icon">
              <TurnosIcon/>
            </div>
            <div className="navigation-glass__item__text">Turnos</div>
          </div>
        </Link>
        <button onClick={handleTheme}>holaaaaaaa</button>
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


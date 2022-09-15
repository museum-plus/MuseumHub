import { useState } from "react";
import { db } from "./database/db";
import NavigationGlass from "./components/NavigationGlass/NavigationGlass";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import TurnoGlass from "./components/TurnoGlass/TurnoGlass";

function App() {
  const [count, setCount] = useState(0);
  console.log(db);
  const registerMuseum = async () => {
    try{
      await addDoc(collection(db, "museums"), {
      name: "Museo de bellas artes",
      address: "Leguizamos 123",
      city: "Neuquen",
      country: "Argentina",
      createdAt: Timestamp.fromDate(new Date()),
    });
  }catch(e){
    console.log("ERROR ! =", e);
  }
  };
  return (
    <div className="App">
      <NavigationGlass/>
      {/* <TurnoGlass/> */}
      {/* <form>
        <input type="text" />
      </form>
      <button onClick={registerMuseum}>Registrar Museo</button> */}
    </div>
  );
}

export default App;

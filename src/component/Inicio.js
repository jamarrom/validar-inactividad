import React,{useState} from "react";
import Login from "./Login";
import Admin from "./Admin";
import '../Style.css';


export default function Inicio() {
  const [sesion, setSesion] = useState(false);

  return(
    <div>
      {sesion?<Admin />:<Login /> }
      <button className={sesion?"displayNone":"m-t" } onClick={() => {setSesion(true);}}>Login</button>
    </div>
  );
}

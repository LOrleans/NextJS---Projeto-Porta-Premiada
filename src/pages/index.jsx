import { useState } from "react";
import PortaModel from "../model/PortaModel";
import Presente from "../components/Presente";
import Porta from "../components/Porta";

export default function Home() {
  const [p1, setP1] = useState(new PortaModel(1))
  const [p2, setP2] = useState(new PortaModel(2))

  return (
    <div style={{display: "flex"}}>
      <Porta porta={p1}/>
      <Porta porta={p2}/>
    </div>
  );
}

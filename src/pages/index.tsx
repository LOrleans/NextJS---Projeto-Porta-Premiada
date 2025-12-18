import { useState } from "react";
import PortaModel from "../model/PortaModel";
import Presente from "../components/Presente";
import Porta from "../components/Porta";

export default function Home() {
  const [p1, setP1] = useState(new PortaModel(1))

  return (
    <div style={{display: "flex"}}>
      <Porta value={p1} onChange={novaPorta => setP1(novaPorta)}/>
    </div>
  );
}

import { useEffect, useState } from "react";
import styles from "../../../../styles/Jogo.module.css";
import { atualizarPortas, criarPortas } from "../../../../../functions/portas";
import Porta from "../../../../components/Porta";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Jogo() {
  const router = useRouter();

  const [valido, setValido] = useState(false);
  const [portas, setPortas] = useState([]);

  useEffect(() => {
    const portas = +router.query.portas;
    const temPresente = +router.query.temPresente;

    const qtdePortasValida = portas >= 3 && portas <= 100;
    const temPresenteValido =
      (temPresente >= 1 && temPresente <= portas) ||
      router.query.temPresente === "aleatorio";
    setValido(qtdePortasValida && temPresenteValido);
  }, [portas, router.query]);

  useEffect(() => {
    const portas = +router.query.portas;
    let temPresente = +router.query.temPresente;

    if (router.query.temPresente === "aleatorio") {
      temPresente = Math.floor(Math.random() * portas) + 1;
    }

    setPortas(criarPortas(portas, temPresente));
  }, [router?.query]);

  function renderizarPortas() {
    return portas.map((porta) => {
      return (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={(novaPorta) =>
            setPortas(atualizarPortas(portas, novaPorta))
          }
        />
      );
    });
  }

  return (
    <div className={styles.jogo}>
      <div className={styles.portas}>
        {valido ? renderizarPortas() : <h1>Valores Inválidos</h1>}
      </div>
      <div className={styles.botoes}>
        <Link href={`/`}>
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  );
}

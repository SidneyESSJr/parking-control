import { useState, useSyncExternalStore } from "react";
import { Link } from "react-router-dom";
import {
  getCadastroState,
  setCadastroState,
  subscribe,
} from "../../store/cadastroStore.ts";
import CadastroModal from "../modal/CadastroModal";
import styles from "./listaDeVagas.module.css";

export default function ListaDeVagas() {
  const cadastros = useSyncExternalStore(subscribe, getCadastroState);
  const [open, setOpen] = useState(false);

  function removerCadastro(id: string) {
    setCadastroState(cadastros.filter((cadastro) => cadastro.vaga !== id));
  }

  return (
    <section className={styles.lista}>
      {cadastros.length < 1 ? (
        <Link to="/cadastro" className="button">
          Nenhuma vaga cadastrada!
        </Link>
      ) : (
        <ul>
          {cadastros.map((cadastro, key) => (
            <li key={key}>
              <div className={styles.dados} onClick={() => setOpen(true)}>
                <p>
                  <b>Vaga:</b> {cadastro.vaga}
                </p>
                <p>
                  <b>Bloco:</b> {cadastro.bloco}
                </p>
                <p>
                  <b>Apartamento:</b> {cadastro.apto}
                </p>
              </div>
              <button
                className="button"
                onClick={() => removerCadastro(cadastro.vaga)}
              >
                Remover
              </button>

              <CadastroModal openModal={open} data={cadastro} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

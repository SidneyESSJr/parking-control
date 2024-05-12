import { useSyncExternalStore } from "react";
import {
  getCadastroState,
  setCadastroState,
  subscribe,
} from "../../store/cadastroStore";
import styles from "./listaDeVagas.module.css";
import { Link } from "react-router-dom";

export default function ListaDeVagas() {
  const cadastros = useSyncExternalStore(subscribe, getCadastroState);

  function removerCadastro(id: string) {
    setCadastroState(cadastros.filter((cadastro) => cadastro.vaga !== id));
  }

  return (
    <section className={styles.lista}>
      {cadastros.length < 1 ? (
        <Link to='/cadastro' className="button">Nenhuma vaga cadastrada!</Link>
      ) : (
        <ul>
          {cadastros.map((cadastro) => (
            <li>
              <div>
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
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

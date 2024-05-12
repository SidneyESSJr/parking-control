import ListaDeVagas from "../../components/lista-de-vagas/ListaDeVagas";
import styles from "./listaDeVagasPage.module.css";

export default function ListaDeVagasPage() {
  return (
    <main className={styles.lista}>
      <h1 className="title animeLeft">Lista de vagas</h1>
      <ListaDeVagas />
    </main>
  );
}

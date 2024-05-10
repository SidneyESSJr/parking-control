import ListaDeVagas from "../../components/seletor-de-vagas/SeletorDeVagas";
import styles from './listaDeVagasPage.module.css'

export default function ListaDeVagasPage() {
  return (
    <main className={styles.lista}>
      <h1 className="title animeLeft">Lista de vagas</h1>
      <ListaDeVagas />
    </main>
  );
}

import FormCadastro from "../../components/form-cadastro/FormCadastro";
import styles from "./cadastroPage.module.css";

export default function CadastroPage() {
  return (
    <main className={styles.cadastro}>
      <h1 className="title animeLeft">Cadastro de vagas</h1>
      <FormCadastro />
      <img src="/parking-control.webp" alt="parking control image" />
    </main>
  );
}

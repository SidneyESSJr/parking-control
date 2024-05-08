import FormCadastro from "../../components/form-cadastro/FormCadastro";
import styles from "./cadastroPage.module.css";

export default function CadastroPage() {
  return (
    <main className={styles.cadastro}>
      <FormCadastro />
    </main>
  );
}

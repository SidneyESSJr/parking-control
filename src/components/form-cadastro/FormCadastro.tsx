import Input from "../wrapper/input/Input";
import Select from "../wrapper/select/Select";
import styles from "./formCadastro.module.css";

export default function FormCadastro() {
  return (
    <form className={styles.form}>
      <Input id="nome" label="Nome do morador" />
      <Select id="" label="Número do apartamento" options={[]} />
      <Select id="" label="Bloco do apartamento" options={[]} />
      <Select id="" label="Número da vaga" options={[]} />
      <Input id="nome" label="Modelo do veículo" />
      <Input id="nome" label="Placa do veículo" />
      <Input id="nome" label="Cor do veículo" />
      <button className="button" type="submit">
        Cadastrar
      </button>
    </form>
  );
}

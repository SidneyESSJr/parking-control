import { getApt, getBloco, getVagas } from "../../util/funcoes";
import Input from "../wrapper/input/Input";
import Select from "../wrapper/select/Select";
import styles from "./formCadastro.module.css";

export default function FormCadastro() {
  return (
    <form className={styles.form}>
      <Input id="nome" label="Nome do morador" />
      <Select id="" label="Número do apartamento" options={getApt()} />
      <Select id="" label="Bloco do apartamento" options={getBloco()} />
      <Select id="" label="Número da vaga" options={getVagas()} />
      <Input id="nome" label="Modelo do veículo" />
      <Input id="nome" label="Placa do veículo" />
      <Input id="nome" label="Cor do veículo" />
      <button className="button" type="submit">
        Cadastrar
      </button>
    </form>
  );
}

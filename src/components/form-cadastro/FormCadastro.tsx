import { useForm } from "react-hook-form";
import { getApt, getBloco, getVagas } from "../../util/funcoes";
import Input from "../wrapper/input/Input";
import Select from "../wrapper/select/Select";
import styles from "./formCadastro.module.css";

export type FormData = {
  nome: string;
  apto: string;
  bloco: string;
  vaga: string;
  modelo: string;
  placa: string;
  cor: string;
};

export default function FormCadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Input {...register("nome")} label="Nome do morador" />
      <Select
        {...register("apto")}
        label="Número do apartamento"
        options={getApt()}
      />
      <Select
        {...register("bloco")}
        label="Bloco do apartamento"
        options={getBloco()}
      />
      <Select
        {...register("vaga")}
        label="Número da vaga"
        options={getVagas()}
      />
      <Input {...register("modelo")} label="Modelo do veículo" />
      <Input {...register("placa")} label="Placa do veículo" />
      <Input {...register("cor")} label="Cor do veículo" />
      <button className="button" type="submit">
        Cadastrar
      </button>
    </form>
  );
}

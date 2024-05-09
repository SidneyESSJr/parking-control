import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { getApt, getBloco, getVagas } from "../../util/funcoes";
import { FormData } from "../../util/types";
import schema from "../../util/validations";
import Input from "../wrapper/input/Input";
import Select from "../wrapper/select/Select";
import styles from "./formCadastro.module.css";

export default function FormCadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Input
        {...register("nome")}
        label="Nome do morador"
        error={{
          ok: errors.nome ? true : false,
          message: errors.nome?.message,
        }}
      />

      <Select
        {...register("apto")}
        label="Número do apartamento"
        options={getApt()}
        error={{
          ok: errors.apto ? true : false,
          message: errors.apto?.message,
        }}
      />

      <Select
        {...register("bloco")}
        label="Bloco do apartamento"
        options={getBloco()}
        error={{
          ok: errors.bloco ? true : false,
          message: errors.bloco?.message,
        }}
      />

      <Select
        {...register("vaga")}
        label="Número da vaga"
        options={getVagas()}
        error={{
          ok: errors.vaga ? true : false,
          message: errors.vaga?.message,
        }}
      />

      <Input
        {...register("modelo")}
        label="Modelo do veículo"
        error={{
          ok: errors.modelo ? true : false,
          message: errors.modelo?.message,
        }}
      />
      <Input
        {...register("placa")}
        label="Placa do veículo"
        error={{
          ok: errors.placa ? true : false,
          message: errors.placa?.message,
        }}
      />
      <Input
        {...register("cor")}
        label="Cor do veículo"
        error={{
          ok: errors.cor ? true : false,
          message: errors.cor?.message,
        }}
      />

      <button className="button" type="submit">
        Cadastrar
      </button>
    </form>
  );
}

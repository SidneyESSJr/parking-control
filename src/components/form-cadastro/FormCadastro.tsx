import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState, useSyncExternalStore } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import {
  getCadastroState,
  setCadastroState,
  subscribe,
} from "../../store/cadastroStore";
import { getApt, getBloco, getVagas } from "../../util/funcoes";
import schema from "../../util/validations";
import Input from "../wrapper/input/Input";
import Select from "../wrapper/select/Select";
import styles from "./formCadastro.module.css";

export type FormData = z.infer<typeof schema>;

export default function FormCadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  let isLoaded = false;
  const [vagas, setVagas] = useState<string[]>(["0"]);

  const cadastros = useSyncExternalStore(subscribe, getCadastroState);

  function verificaVagasDisponiveis() {
    const vagasOcupadas = cadastros.map((cad) => cad.vaga);
    setVagas(
      getVagas().filter((vaga) => {
        return !vagasOcupadas.includes(vaga);
      })
    );
  }

  useEffect(() => {
    verificaVagasDisponiveis();
    isLoaded = true;
  }, [cadastros]);

  const onSubmit = handleSubmit((data) => {
    setCadastroState([...cadastros, data]);
    reset();
    window.alert("Cadastro realizado com sucesso!");
  });

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Input
        disabled={isLoaded}
        {...register("nome")}
        label="Nome do morador"
        error={{
          ok: errors.nome ? true : false,
          message: errors.nome?.message,
        }}
      />
      <div className={styles.selectContainer}>
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
          options={vagas}
          error={{
            ok: errors.vaga ? true : false,
            message: errors.vaga?.message,
          }}
        />
      </div>
      <Input
        disabled={isLoaded}
        {...register("modelo")}
        label="Modelo do veículo"
        error={{
          ok: errors.modelo ? true : false,
          message: errors.modelo?.message,
        }}
      />
      <Input
        disabled={isLoaded}
        {...register("placa")}
        label="Placa do veículo"
        error={{
          ok: errors.placa ? true : false,
          message: errors.placa?.message,
        }}
      />
      <Input
        disabled={isLoaded}
        {...register("cor")}
        label="Cor do veículo"
        error={{
          ok: errors.cor ? true : false,
          message: errors.cor?.message,
        }}
      />

      <button disabled={isSubmitting} className="button" type="submit">
        Cadastrar
      </button>
    </form>
  );
}

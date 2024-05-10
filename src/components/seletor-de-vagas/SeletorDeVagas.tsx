import { useEffect, useState } from "react";
import Select from "../wrapper/select/Select";
import { FormData } from "../form-cadastro/FormCadastro";
import styles from './seletorDeVagas.module.css'

export default function ListaDeVagas() {
  const [vagasCadastradas, setVagasCadastradas] = useState<FormData[]>([]);
  const [vagasOcupadas, setVagasOcupadas] = useState<string[]>([]);
  const [statusVaga, setStatusVaga] = useState("");
  const [vagaSelecionada, setVagaSelecionada] = useState("");

  function recuperarVagasCadastradas() {
    const vagas = window.localStorage.getItem("vagas");
    if (vagas) {
      setVagasCadastradas(JSON.parse(vagas));
    }
  }

  function verificarVagasOcupadas() {
    if (vagasCadastradas.length > 0) {
      setVagasOcupadas(vagasCadastradas.map((vaga) => vaga.vaga));
      console.log(vagasOcupadas);
    }
  }

  useEffect(() => {
    recuperarVagasCadastradas();
  }, []);

  useEffect(() => {
    verificarVagasOcupadas();
  }, [vagasCadastradas]);

  return (
    <section className={styles.container}>
      <div className={styles.seletor}>
        <Select
          label="Status da vaga"
          options={["Disponível", "Ocupada"]}
          onChange={({ target }) => setStatusVaga(target.value)}
        />
        <Select
          label="Apto"
          options={vagasOcupadas}
          disabled={statusVaga === "Disponível"}
          onChange={({ target }) => setVagaSelecionada(target.value)}
        />
      </div>
    </section>
  );
}

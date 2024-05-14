import { FormData } from "../form-cadastro/FormCadastro.tsx";
import styles from "./CadastroModal.module.css";

export default function CadastroModal({
  openModal,
  data,
}: {
  openModal: boolean;
  data: FormData;
}) {
  function handleOutsideClick(event: React.MouseEvent<HTMLElement>) {
    if (event.target === event.currentTarget) location.reload();
  }

  if (!data) {
    return;
  }

  return (
    <>
      {openModal && (
        <div className={styles.modal} onClick={handleOutsideClick}>
          <div className={styles.content}>
            <h2>Detalhes do cadastro</h2>
            <div className={styles.dados}>
              <p>
                <b>Nome:</b> {data.nome}
              </p>
              <p>
                <b>Apartamento:</b> {data.apto}
              </p>
              <p>
                <b>Bloco:</b> {data.bloco}
              </p>
              <p>
                <b>Vaga:</b> {data.vaga}
              </p>
              <p>
                <b>Modelo:</b> {data.modelo}
              </p>
              <p>
                <b>Placa:</b> {data.placa}
              </p>
              <p>
                <b>Cor:</b> {data.cor}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

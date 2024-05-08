import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>Sistema prático para gestão de vagas de estacionamento</h1>

      <p>
        Defina qual vaga gostaria de ocupar e cadastre seus dados, pronto agora
        é só aproveitar!
      </p>
    </div>
  );
}

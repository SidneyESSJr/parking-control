import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.container}>
        <h1>Sistema prático para gestão de vagas de estacionamento</h1>

        <p>
          Defina qual vaga gostaria de ocupar e cadastre seus dados, pronto
          agora é só aproveitar!
        </p>
      </div>
    </main>
  );
}

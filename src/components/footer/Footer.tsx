import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import LogoIcon from "../../assets/svg/LogoIcon";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <LogoIcon />
        <nav>
          <Link className="button" to="/">
            Home
          </Link>
          <Link className="button" to="cadastro">
            Cadastrar
          </Link>
          <Link className="button" to="lista-de-vagas">
            Lista de vagas
          </Link>
        </nav>
      </div>
    </header>
  );
}

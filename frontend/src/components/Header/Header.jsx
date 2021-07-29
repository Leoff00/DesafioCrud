import { Link } from "react-router-dom";
import "./styles.scss";

export default function Header() {
  return (
    <header className="headerContainer">
      <h1 className="headerTitle">CRUD DESAFIO</h1>
      <Link className="Link" to="/users">
        Listar usuarios
      </Link>
    </header>
  );
}

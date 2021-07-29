import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../services/Api";
import "./styles.scss";

const initialState = {
  name: "",
  surname: "",
  email: "",
  phone: "",
};

// eslint-disable-next-line react/prop-types
export default function Update({ match }) {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const history = useHistory();

  // eslint-disable-next-line react/prop-types
  const { _id } = match.params;

  const values = {
    name,
    surname,
    email,
    phone,
  };

  function clearFields() {
    setName(initialState.name);
    setSurname(initialState.surname);
    setEmail(initialState.email);
    setPhone(initialState.phone);
  }

  async function submit(e) {
    debugger;
    e.preventDefault();

    if (name === "" || surname === "" || email === "" || phone === "") {
      alert("Por favor preencha os campos.");
    } else {
      try {
        const { data } = await axios.put(`${baseURL}/update/${_id}`, values);
        const newData = [...users, data];
        setUsers(newData);
        alert("Dados registrados com sucesso");
        history.push("/users");
      } catch (err) {
        console.log(err);
      }
    }
  }

  function Back() {
    history.push("/users");
  }
  return (
    <>
      <div className="updateContainer">
        <form>
          <div className="inputUpdateContainer">
            <label htmlFor="fname">
              Nome:
              <input
                value={name}
                name="name"
                id="fname"
                type="text"
                placeholder="Digite seu nome..."
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label htmlFor="fsurname">
              Sobrenome:
              <input
                value={surname}
                name="surname"
                id="fsurname"
                type="text"
                placeholder="Digite seu sobrenome..."
                onChange={(e) => setSurname(e.target.value)}
              />
            </label>
            <label htmlFor="femail">
              Email:
              <input
                value={email}
                name="email"
                id="femail"
                type="email"
                placeholder="Digite seu email..."
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="fphones">
              Telefones:
              <input
                value={phone}
                name="phone"
                id="fphones"
                type="text"
                placeholder="Digite seu telefone..."
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
          </div>
        </form>
        <div className="buttonUpdateContainer">
          <Button type="submit" variant="success" onClick={(e) => submit(e)}>
            Enviar
          </Button>

          <Button onClick={clearFields} variant="secondary">
            Limpar
          </Button>

          <Button variant="dark" onClick={Back}>
            Voltar
          </Button>
        </div>
      </div>
    </>
  );
}

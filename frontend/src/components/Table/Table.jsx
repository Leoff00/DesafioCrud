import Button from "react-bootstrap/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import "./styles.scss";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../services/Api";

// reset the inputs to blank input
const initialState = {
  name: "",
  surname: "",
  email: "",
  phone: "",
};

export default function Table(props) {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const history = useHistory();

  const values = {
    name,
    surname,
    email,
    phone,
  };

  useEffect(() => {
    (async function getContent() {
      try {
        const { data } = await axios.get(`${baseURL}/users`);
        setUsers(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  function clearFields() {
    setName(initialState.name);
    setSurname(initialState.surname);
    setEmail(initialState.email);
    setPhone(initialState.phone);
  }

  async function handleDelete(user) {
    try {
      await axios.delete(`${baseURL}/delete/${user.id}`);
      setUsers(users.filter((deletedUser) => user.id !== deletedUser.id));
      alert("Dados deletados com sucesso!");
    } catch (err) {
      console.log(err);
    }
  }

  async function submit(e) {
    e.preventDefault();

    if (name === "" || surname === "" || email === "" || phone === "") {
      alert("Por favor preencha os campos corretamente.");
    } else {
      try {
        const { data } = await axios.post(`${baseURL}/create`, values);
        const newData = [...users, data];
        alert("Dados registrados com sucesso!");
        setUsers(newData);
      } catch (err) {
        console.log(err);
      }
    }
  }

  function handleUpdate(user) {
    history.push(`/update/${user.id}`);
  }

  function Back() {
    history.push("/");
  }

  return (
    <>
      <div className="contentContainer">
        <form>
          <div className="inputContainer">
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
        <div className="buttonContainer">
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

        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Primeiro Nome</th>
                <th>Sobrenome</th>
                <th>E-mail</th>
                <th>Telefone</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.surname}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <div className="btnContainer">
                    <Button
                      variant="primary"
                      className="btnEdit"
                      onClick={() => {
                        handleUpdate(user);
                      }}
                    >
                      <EditIcon />
                    </Button>
                    <Button
                      variant="danger"
                      className="btnDelete"
                      onClick={() => {
                        handleDelete(user);
                      }}
                    >
                      <DeleteIcon />
                    </Button>
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

import { useEffect, useState } from "react";
import React from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    age: "",
    avatar: "",
  });
  const [error, setError] = useState(null);
  const [editUsers, setEdistUsers] = useState({
    name: "",
    age: "",
    avatar: "",
  });

  const getUsers = async () => {
    const res = await fetch(
      "https://63f37b86de3a0b242b42e729.mockapi.io/users"
    );
    const data = await res.json();
    setUsers(data);
    setLoaded(true);
  };

  // FUNCIÓN PARA CREAR NUEVOS USUARIOS:

  const createUser = (ev) => {
    ev.preventDefault();
    if (!newUser.name || !newUser.age || !newUser.avatar) {
      setError("Formulario Incompleto");
    } else {
      setError(null);
    }
    fetch("https://63f37b86de3a0b242b42e729.mockapi.io/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).then((res) => {
      getUsers();
    });
  };

  //FUNCIÓN PARA BORRAR USUARIOS:

  const deleteUsers = (id) => {
    fetch(`https://63f37b86de3a0b242b42e729.mockapi.io/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      getUsers();
    });
  };

  //FUNCIÓN PARA EDITAR USUARIOS:
  const handleEditUsers = (ev, id) => {
    ev.preventDefault();
    fetch(`https://63f37b86de3a0b242b42e729.mockapi.io/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editUsers),
    }).then((res) => {
      getUsers();
    });
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="App">
      {loaded ? (
        users.map((user) => (
          <div className="cardUser" key={user.id}>
            <h1>{user.name}</h1>
            <img src={user.avatar} alt={user.name} />
            <h3>{user.age}</h3>
            <button onClick={() => deleteUsers(user.id)}>delete</button>
            <button onClick={() => setEdistUsers(user)}>put</button>
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}

      <h2>Crear usuarios</h2>
      <form onSubmit={(ev) => createUser(ev)}>
        <input
          type="text"
          placeholder="name"
          onChange={(ev) => setNewUser({ ...newUser, name: ev.target.value })}
        />
        <input
          type="text"
          placeholder="age"
          onChange={(ev) => setNewUser({ ...newUser, age: ev.target.value })}
        />
        <input
          type="text"
          placeholder="avatar"
          onChange={(ev) => setNewUser({ ...newUser, avatar: ev.target.value })}
        />
        <button type="submit">crear usuario</button>
        {error && <h3>{error}</h3>}
      </form>
      <h2>EDITAR USUARIOS</h2>
      <form onSubmit={(ev) => handleEditUsers(ev, editUsers.id)}>
        <input
          type="text"
          placeholder="name"
          value={editUsers.name}
          onChange={(ev) =>
            setEdistUsers({ ...editUsers, name: ev.target.value })
          }
        />
        <input
          type="text"
          placeholder="age"
          value={editUsers.age}
          onChange={(ev) =>
            setEdistUsers({ ...editUsers, age: ev.target.value })
          }
        />
        <input
          type="text"
          placeholder="avatar"
          value={editUsers.avatar}
          onChange={(ev) =>
            setEdistUsers({ ...editUsers, avatar: ev.target.value })
          }
        />
        <button type="submit">edit user</button>
      </form>
    </div>
  );
};

export default App;

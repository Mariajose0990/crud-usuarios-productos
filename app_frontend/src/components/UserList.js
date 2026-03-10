import React, { useState, useEffect } from "react";
import UserForm from "./UserForm";

function UserList() {

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const getUsers = async () => {
    const res = await fetch("http://localhost:3000/api/usuarios");
    const data = await res.json();
    setUsers(data);
  };

  const deleteUser = async (id) => {
    await fetch(`http://localhost:3000/api/usuarios/${id}`, {
      method: "DELETE"
    });

    getUsers();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>

      <UserForm
        userToEdit={selectedUser}
        onSaveComplete={getUsers}
        clearSelection={() => setSelectedUser(null)}
      />

      <h3>Lista de Usuarios</h3>

      <table border="1">

        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>

          {users.map(user => (
            <tr key={user._id}>

              <td>{user.nombre}</td>
              <td>{user.email}</td>

              <td>

                <button onClick={() => setSelectedUser(user)}>
                  Editar
                </button>

                <button onClick={() => deleteUser(user._id)}>
                  Eliminar
                </button>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default UserList;
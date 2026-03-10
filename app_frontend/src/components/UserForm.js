import React, { useState, useEffect } from "react";

function UserForm({ userToEdit, onSaveComplete, clearSelection }) {

  const [form, setForm] = useState({
  nombre: "",
  correo: "",
  contraseña: "",
  rol: ""
});

  useEffect(() => {
    if (userToEdit) {
      setForm(userToEdit);
    }
  }, [userToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userToEdit) {
      await fetch(`http://localhost:3000/api/usuarios/${userToEdit._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
    } else {
      await fetch("http://localhost:3000/api/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
    }

    setForm({
      nombre: "",
      email: "",
      password: ""
    });

    clearSelection();
    onSaveComplete();
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3 mb-3">

      <h5>{userToEdit ? "Editar Usuario" : "Crear Usuario"}</h5>

      <input
  type="text"
  name="nombre"
  placeholder="Nombre"
  value={form.nombre}
  onChange={handleChange}
/>

<input
  type="email"
  name="correo"
  placeholder="Correo"
  value={form.correo}
  onChange={handleChange}
/>

<input
  type="password"
  name="contraseña"
  placeholder="Contraseña"
  value={form.contraseña}
  onChange={handleChange}
/>

<input
  type="text"
  name="rol"
  placeholder="Rol"
  value={form.rol}
  onChange={handleChange}
/>

   <button className="btn btn-primary">
        {userToEdit ? "Actualizar" : "Crear"}
      </button>  

    </form>
  );
}

export default UserForm;
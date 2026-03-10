import React, { useState, useEffect } from "react";

function ProductForm({ productToEdit, onSaveComplete, clearSelection }) {

  const [form, setForm] = useState({
    nombre: "",
    precio: "",
    categoria: ""
  });

  useEffect(() => {
    if (productToEdit) {
      setForm(productToEdit);
    }
  }, [productToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (productToEdit) {
      // EDITAR
      await fetch(`http://localhost:3000/api/productos/${productToEdit._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
    } else {
      // CREAR
      await fetch("http://localhost:3000/api/productos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
    }

    setForm({ nombre: "", precio: "", categoria: "" });
    clearSelection();
    onSaveComplete();
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3 mb-3">
      <h5>{productToEdit ? "Editar Producto" : "Crear Producto"}</h5>

      <input
        type="text"
        name="nombre"
        placeholder="Nombre del producto"
        value={form.nombre}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="precio"
        placeholder="Precio"
        value={form.precio}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="categoria"
        placeholder="Categoría"
        value={form.categoria}
        onChange={handleChange}
        required
      />


      <button className="btn btn-primary">
        {productToEdit ? "Actualizar" : "Crear"}
      </button>
      
    </form>
  );
}

export default ProductForm;
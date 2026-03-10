import React from "react";

function ProductList({ products, onEdit, onDeleted }) {

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/api/productos/${id}`, {
      method: "DELETE"
    });
    onDeleted();
  };

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {products.map((p) => (
          <tr key={p._id}>
            <td>{p.nombre}</td>
            <td>{p.precio}</td>
            <td>{p.stock}</td>
            <td>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => onEdit(p)}
              >
                Editar
              </button>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(p._id)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductList;
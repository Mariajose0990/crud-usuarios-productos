import React, { useEffect, useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import UserList from "./components/UserList";
import "./App.css";
import "./styles.css";

function App() {

  // PRODUCTOS
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // USUARIOS
  const [users, setUsers] = useState([]);

  // Obtener productos
  const fetchProducts = async () => {
    const res = await fetch("http://localhost:3000/api/productos");
    const data = await res.json();
    setProducts(data);
  };

  // Obtener usuarios
  const fetchUsers = async () => {
    const res = await fetch("http://localhost:3000/api/usuarios");
    const data = await res.json();
    setUsers(data);
  };

  // Cargar datos al iniciar
  useEffect(() => {
    fetchProducts();
    fetchUsers();
  }, []);

  return (
    <div className="container">

      <nav className="navbar">
        Yogurt Santa Fe - Panel Administrativo
      </nav>

      <h2>Gestión de Productos</h2>

      <ProductForm
        productToEdit={selectedProduct}
        onSaveComplete={fetchProducts}
        clearSelection={() => setSelectedProduct(null)}
      />

      <ProductList
        products={products}
        onEdit={setSelectedProduct}
        onDeleted={fetchProducts}
      />

      <hr />

      <h2>Gestión de Usuarios</h2>

      <UserList
        users={users}
        refreshUsers={fetchUsers}
      />

    </div>
   
  );
}

export default App;

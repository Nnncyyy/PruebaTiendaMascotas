import React from "react";
import { useState } from "react";
import Productos from "./Productos";
import Carrito from "./Carrito";
import NavBar from "./NavBar";

function CarritoCompras() {
    const [carrito, setCarrito] = useState([]);

    const products = [
        { id: 1, name: "Camiseta", price: 200, image: "https://via.placeholder.com/150" },
        { id: 2, name: "Pantalón", price: 350, image: "https://via.placeholder.com/150" },
        { id: 3, name: "Zapatos", price: 500, image: "https://via.placeholder.com/150" },
    ];

    const handleAddToCart = (product) => {
        setCarrito([...carrito, product]);
    };
    return (
    <>
    <NavBar/>
        <div className="app-container">
        <h1>🛍️ Tienda</h1>
        <div className="products">
            {products.map((product) => (
                <Productos key={product.id} product={product} onAddToCart={handleAddToCart} />
         ))}
        </div>
        <Carrito carrito={carrito} />
    </div>
        
    </>
    );
}   
export default CarritoCompras;
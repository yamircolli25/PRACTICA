// controllers/productos.js
const productos = [
    { id: 1, nombre: 'Hamburgesa', descripcion: 'Hamburguesa de doble carne,lechuga,jitomate', cantidad: 15, precio: 50, imagen: 'producto1.jpg' },
    { id: 2, nombre: 'Charrola de alitas', descripcion: 'Rica charola de alitas con tomate y lechuga', cantidad: 20, precio: 120, imagen: 'producto2.jpg' },
    { id: 3, nombre: 'Sandia', descripcion: 'Sandia Jugosa', cantidad: 10, precio: 45, imagen: 'producto3.jpg' },
    { id: 4, nombre: 'Camara', descripcion: 'Camara con una perfecta resolucion', cantidad: 10, precio: 1000, imagen: 'producto4.jpg' },
    { id: 5, nombre: 'Maquillaje', descripcion: 'Maquillaje de varios colores ', cantidad: 15, precio: 150, imagen: 'producto5.jpg' },
    { id: 6, nombre: 'Maquillaje y labial', descripcion: 'Maquillaje de color rosa y labial color rojo', cantidad: 5, precio: 150, imagen: 'producto6.jpg' },
    { id: 7, nombre: 'Control de xbox one', descripcion: 'control de xbox one color blanco con negro', cantidad: 30, precio: 500, imagen: 'producto7.jpg' }
  ];
  
  function getProductos() {
    return productos;
  }
  
  function getProductoPorId(id) {
    return productos.find(producto => producto.id === parseInt(id));
  }
  
  module.exports = {
    getProductos,
    getProductoPorId
  };
  
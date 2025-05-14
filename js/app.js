// Crear una clase producto
class Producto {
    // Definir un método constructor
    constructor(imagen, nombre, precio) {
      // Inicializar las propiedades del producto
      this.imagen = imagen;
      this.nombre = nombre;
      this.precio = precio;
    }
}
  
// Crear una instancia de la clase producto para cada producto
let productos = [
  new Producto("./imagenes/Papafritas-grandes.jpg", "Papas fritas paquete grande", 600),
  new Producto("./imagenes/Papafritas-medianas.jpg", "Papas fritas paquete mediano", 400),
  new Producto("./imagenes/Papafritas-chicas.jpg", "Papas fritas paquete chico", 200),
  new Producto("./imagenes/lays_clasicas.png", "Papas chips grandes", 200),
  new Producto("./imagenes/lays_clasicas.png", "Papas chips medianas", 150),
  new Producto("./imagenes/lays_clasicas.png", "Papas chips chicas", 100),
  new Producto("./imagenes/Salchipapa.jpg", "Salchipapa", 1000),
  new Producto("./imagenes/tortilla-de-papa.jpg", "Tortilla de papas", 1000),
  new Producto("./imagenes/Rabas.jpeg", "Rabas", 800)
];
  

let carrito = [];
  
// Crear un array con todos los productos
// let productos = [papasGrandes, papasMedianas, papasChicas, chipsGrandes, chipsMedianas, chipsChicas, salchipapa, tortilla, rabas];
  
function mostrarProductos(productos) {
    let contenedorDeTarjetas = document.querySelector('.contenedor-productos');
    productos.forEach((producto, index) => {
        contenedorDeTarjetas.innerHTML += `
        <div class="producto">
            <img src="../imagenes/${producto.imagen}" alt="planta">
            <h4 class="titulo-decimal">${producto.nombre}</h4>
            <p class="titulo-quinario">${producto.precio}</p>
        </div>
        `;
    });
}
mostrarProductos(productos);









document.getElementById("btn").addEventListener("click",()=>{
    Toastify({
        text: "This is a toast",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();

})


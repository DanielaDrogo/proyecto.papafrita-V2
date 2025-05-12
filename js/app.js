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
  let papasGrandes = new Producto("./imagenes/Papafritas-grandes.jpg", "Papas fritas paquete grande", 600);
  let papasMedianas = new Producto("./imagenes/Papafritas-medianas.jpg", "Papas fritas paquete mediano", 400);
  let papasChicas = new Producto("./imagenes/Papafritas-chicas.jpg", "Papas fritas paquete chico", 200);
  let chipsGrandes = new Producto("./imagenes/lays_clasicas.png", "papas chips grandes", 200);
  let chipsMedianas = new Producto("./imagenes/lays_clasicas.png", "papas chips Medianas", 150);
  let chipsChicas = new Producto("./imagenes/lays_clasicas.png", "papas chips chicas", 100);
  let salchipapa = new Producto("./imagenes/Salchipapa.jpg", "Salchipapa", 1000);
  let tortilla = new Producto("./imagenes/tortilla-de-papa.jpg", "Tortilla de papas", 1000);
  let rabas = new Producto("./imagenes\Rabas.jpeg", "Rabas", 800);

let carrito = [];
  
// Crear un array con todos los productos
let productos = [papasGrandes, papasMedianas, papasChicas, chipsGrandes, chipsMedianas, chipsChicas, salchipapa, tortilla, rabas];
  












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


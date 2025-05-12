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
  
  // Crear una función que reciba un objeto producto y cree un elemento div con sus datos
function crearDivProducto(producto) {
    // Crear un elemento div
    let div = document.createElement("div");
    // Asignar la clase producto al div
    div.className = "producto";
    // Crear un elemento img para la imagen del producto
    let img = document.createElement("img");
    // Asignar la clase imagen_producto a la img
    img.className = "imagen_producto";
    // Asignar el atributo src a la img con el valor de la imagen del producto
    img.src = producto.imagen;
    // Asignar el atributo alt a la img con el valor del nombre del producto
    img.alt = producto.nombre;
    // Crear un elemento prod para el nombre del producto
    let prodNombre = document.createElement("prod");
    // Asignar el texto del prod con el valor del nombre del producto
    prodNombre.textContent = producto.nombre;
    // Crear un elemento prod para el precio del producto
    let prodPrecio = document.createElement("prod");
    // Asignar el texto del prod con el valor del precio del producto
    prodPrecio.textContent = "$" + producto.precio;
}

document.addEventListener("mostrarEnDom", function(){
    function agregarProductoAlCarrito(producto) {
    // Convertir el producto a una cadena JSON
    let productoJSON = JSON.stringify(producto);
    // Guardar el producto con una clave única basada en su id
    localStorage.setItem(`producto-${producto.id}`, productoJSON);
    }

    function mostrarCarrito() {
        // Obtener el elemento del modal donde se mostrarán los productos
        let modalBody = document.querySelector(".modal-body");
        // Vaciar el contenido del modal
        modalBody.innerHTML = "";
        // Recorrer todas las claves del localStorage
        for (let i = 0; i < localStorage.length; i++) {
        // Obtener la clave actual
        let clave = localStorage.key(i);
        // Comprobar si la clave empieza por "producto-"
        if (clave.startsWith("producto-")) {
            // Obtener el producto por su clave
            let productoJSON = localStorage.getItem(clave);
            // Convertir el producto a un objeto JavaScript
            let producto = JSON.parse(productoJSON);
            // Crear un elemento HTML para mostrar el producto
            let elementoProducto = document.createElement("div");
            elementoProducto.classList.add("producto");
            elementoProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h5>${producto.nombre}</h5>
            <p>${producto.precio} pesos</p>
            <button class="btn btn-danger" onclick="eliminarProductoDelCarrito(${producto.id})">Eliminar</button>
            `;
            // Añadir el elemento al modal
            modalBody.appendChild(elementoProducto);
            }
        }
    }

    agregarProductoAlCarrito(producto);
});

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


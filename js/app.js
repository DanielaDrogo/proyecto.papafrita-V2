// Crear una clase producto
class Producto {
    constructor(imagen, nombre, precio) {
      this.imagen = imagen;
      this.nombre = nombre;
      this.precio = precio;
    }
}
  
// Crear una instancia de la clase producto para cada producto
let productos = [
  new Producto("./imagenes/Papafritas-grandes.jpg", "Papas fritas <br> paquete grande", 600),
  new Producto("./imagenes/Papafritas-medianas.jpg", "Papas fritas <br> paquete mediano", 400),
  new Producto("./imagenes/Papafritas-chicas.jpg", "Papas fritas <br> paquete chico", 200),
  new Producto("./imagenes/lays_clasicas.png", "Papas chips grandes", 200),
  new Producto("./imagenes/lays_clasicas.png", "Papas chips medianas", 150),
  new Producto("./imagenes/lays_clasicas.png", "Papas chips chicas", 100),
  new Producto("./imagenes/Salchipapa.jpg", "Salchipapa", 1000),
  new Producto("./imagenes/tortilla-de-papa.jpg", "Tortilla de papas", 1000),
  new Producto("./imagenes/Rabas.jpeg", "Rabas", 800)
];

// Crear un array para el carrito
let carrito = []; 

function mostrarProductos(productos) {
    let contenedorDeTarjetas = document.querySelector('.contenedor_producto');
    productos.forEach((producto, index) => {
        contenedorDeTarjetas.innerHTML += `
        <div class="producto">
            <img class="imagen_producto" src="${producto.imagen}" alt="PapaFritaGrande">
            <h3>${producto.nombre}</h3>
            <h3>$${producto.precio}</h3>
            <button class="btn btn-agregarCarrito">Agregar producto a carrito</button>
        </div>
        `;
    });
}
mostrarProductos(productos);


// Función para agregar un producto al carrito
function agregarAlCarrito(index) {
    let productoAgregado = productos[index];
    carrito.push(productoAgregado);
    console.log(carrito);
    actualizarModalCarrito(); // Llamar a la función después de agregar
}

// Agregar evento a los botones de agregar al carrito
let botonesAgregar = document.querySelectorAll('.btn-agregarCarrito');
botonesAgregar.forEach((boton, index) => {
    boton.addEventListener('click', () => {
        agregarAlCarrito(index);

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
    });
    

});

function actualizarModalCarrito() {
    let modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = ""; // Vaciar contenido previo

    if (carrito.length === 0) {
        modalBody.innerHTML = "<p>Tu carrito está vacío.</p>";
    } else {
        carrito.forEach((producto, index) => {
            modalBody.innerHTML += `
                <div class="producto-carrito">                   
                    <p>🍟${producto.nombre} - $${producto.precio}</p> 
                    <button class="btn-eliminar" onclick="eliminarDelCarrito(${index})">Eliminar</button>  
                </div>
            `;
        });
    }
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1); // Quitar el producto del carrito
    actualizarModalCarrito(); // Actualizar el modal
}


function FinalizarCompra() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío. Agrega productos antes de finalizar la compra.");
        return;
    }

    let total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    alert(`Gracias por tu compra. El total es $${total}.`);
    
    // Limpiar el carrito
    carrito = [];
    actualizarModalCarrito();
    
}

// Conectar el botón "finalizar compra" con la función FinalizarCompra
document.addEventListener('DOMContentLoaded', () => {
    let btnComprar = document.querySelector('.btn-comprar');
    if (btnComprar) {
        btnComprar.addEventListener('click', FinalizarCompra);
    }
});






// document.getElementById("btn").addEventListener("click",()=>{
//     Toastify({
//         text: "This is a toast",
//         duration: 3000,
//         destination: "https://github.com/apvarun/toastify-js",
//         newWindow: true,
//         close: true,
//         gravity: "top", // `top` or `bottom`
//         position: "left", // `left`, `center` or `right`
//         stopOnFocus: true, // Prevents dismissing of toast on hover
//         style: {
//           background: "linear-gradient(to right, #00b09b, #96c93d)",
//         },
//         onClick: function(){} // Callback after click
//       }).showToast();

// })


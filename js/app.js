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

function agregarAlCarrito(index) {
    let productoAgregado = productos[index];
    let productoEnCarrito = carrito.find(item => item.nombre === productoAgregado.nombre);
    
    if (productoEnCarrito) {
        productoEnCarrito.cantidad++; // Aumenta la cantidad si ya existe
    } else {
        productoAgregado.cantidad = 1; // Establece la cantidad inicial
        carrito.push(productoAgregado);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito)); // Guardar en localStorage
    actualizarModalCarrito();
}

// Agregar evento a los botones de agregar al carrito
let botonesAgregar = document.querySelectorAll('.btn-agregarCarrito');
botonesAgregar.forEach((boton, index) => {
    boton.addEventListener('click', () => {
        agregarAlCarrito(index);

        Toastify({
        text: "producto agregado al carrito",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right,rgb(148, 0, 0),rgb(48, 29, 0))",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    let carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        actualizarModalCarrito(); // Actualizar el modal con los productos guardados
    }

    let btnComprar = document.querySelector('.btn-comprar');
    if (btnComprar) {
        btnComprar.addEventListener('click', FinalizarCompra);
    }
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
                    <p>🍟${producto.nombre} - $${producto.precio} - (${producto.cantidad})</p> 
                    <button class="btn-eliminar" onclick="eliminarDelCarrito(${index})">Eliminar</button>  
                </div>
            `;
        });
    }
}

function eliminarDelCarrito(index) {
    if (carrito[index].cantidad > 1) {
        carrito[index].cantidad--;
    } else {
        carrito.splice(index, 1); // Eliminar el producto completamente si solo hay uno
    }

    localStorage.setItem("carrito", JSON.stringify(carrito)); // Guardar cambios en localStorage
    actualizarModalCarrito();
}

function FinalizarCompra() {
    let modalBody = document.querySelector('.modal-body');
    
    if (carrito.length === 0) {
        modalBody.innerHTML = "<p>Tu carrito está vacío... <br> Agrega productos antes de finalizar la compra.</p>";
        // alert("Tu carrito está vacío. Agrega productos antes de finalizar la compra.");
        return;
    }

    let total = carrito.reduce((acumulador, producto) => acumulador + (producto.precio * producto.cantidad), 0);
    Swal.fire({
        title: '¡Gracias por tu compra!',
        text: `El total es $${total}.`,
        icon: 'success',
        colot: 'white',
        background: '#ff1100',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: ' #4d0000',
        iconColor: '#00ff00',
        customClass: {
            title: 'swal-title-custom',
            popup: 'swal-popup-custom',
            icon: 'swal-icon-custom',
            htmlContainer: 'swal-text-custom'
        }

    });

    console.log(`Gracias por tu compra. El total es $${total}.`);
    
    // Limpiar el carrito
    carrito = [];
    localStorage.removeItem("carrito"); // Limpiar localStorage al finalizar la compra
}



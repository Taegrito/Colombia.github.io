// Lista de productos disponibles
const productos = [
    { nombre: "Doritos", precio: 2.50, imagen: "./tiendaimg/doritos.png" },
    { nombre: "Choclitos", precio: 1.20, imagen: "./tiendaimg/choclitos.jpeg" },
    { nombre: "Bom bom bum", precio: 1.80, imagen: "./tiendaimg/images.jpeg" },
    { nombre: "Arequipe", precio: 3.00, imagen: "./tiendaimg/arequipe.jpeg" },
    // Agrega más productos aquí
  ];
  
  // Carrito de compras
  let carrito = [];
  
  // Función para agregar un producto al carrito
  function agregarAlCarrito(nombreProducto) {
    const producto = productos.find(p => p.nombre === nombreProducto);
    if (producto) {
      carrito.push(producto);
      actualizarCarrito();
      console.log(`${producto.nombre} agregado al carrito.`);
    } else {
      console.log(`El producto ${nombreProducto} no está disponible.`);
    }
  }
  
  // Función para actualizar el carrito en la página
  function actualizarCarrito() {
    const carritoContainer = document.getElementById("carrito-container");
    carritoContainer.innerHTML = ""; // Limpia el contenido actual
  
    if (carrito.length === 0) {
      const emptyMessage = document.createElement("p");
      emptyMessage.textContent = "Tu carrito está vacío.";
      carritoContainer.appendChild(emptyMessage);
      return;
    }
  
    let total = 0;
    carrito.forEach(producto => {
      const productoItem = document.createElement("div");
      productoItem.classList.add("carrito-item");
  
      const imagen = document.createElement("img");
      imagen.src = producto.imagen;
      imagen.alt = producto.nombre;
  
      const nombre = document.createElement("p");
      nombre.textContent = producto.nombre;
  
      const precio = document.createElement("p");
      precio.textContent = `$${producto.precio.toFixed(2)}`;
  
      productoItem.appendChild(imagen);
      productoItem.appendChild(nombre);
      productoItem.appendChild(precio);
      carritoContainer.appendChild(productoItem);
  
      total += producto.precio;
    });
  
    const totalItem = document.createElement("div");
    totalItem.classList.add("carrito-total");
    totalItem.textContent = `Total: $${total.toFixed(2)}`;
    carritoContainer.appendChild(totalItem);
  }
  
  // Agregar eventos a los botones "Agregar"
  const botonesAgregar = document.querySelectorAll(".card a");
  botonesAgregar.forEach(boton => {
    boton.addEventListener("click", () => {
      const nombreProducto = boton.parentElement.querySelector("h1").textContent;
      agregarAlCarrito(nombreProducto);
    });
  });
  
  // Inicializar el carrito
  actualizarCarrito();

  
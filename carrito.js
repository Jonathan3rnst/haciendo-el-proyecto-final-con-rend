btncompra.addEventListener("click", () => {
    let local = JSON.parse(localStorage.getItem("array"));
    
  local.forEach((prodcarrito) => {
    let renderizarcarro = document.createElement("div");
      renderizarcarro.innerHTML = `
                  <h2>Hola , tus productos son: </h2>
                  <ul>
                  <li>            
                  <a>Nombre: ${prodcarrito.nombre}</a>
                  </li>
                  <li>
                  <a>Te sale: $${prodcarrito.precio}</a>
                  </li>
                  <li class=>
                  <a>Cantidad:${prodcarrito.cantidad}</a>
                  </li>
                  <li >
                  <a href="/src/carrito.html">Comprar</a>
                  </li>
                  </ul>
                  `;
      compra.append(renderizarcarro);

   }    
)});

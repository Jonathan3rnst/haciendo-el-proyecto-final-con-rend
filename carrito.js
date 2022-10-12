btncompra.addEventListener("click", () => {
    let local = JSON.parse(localStorage.getItem("array"));
    
    
    const total = local.reduce(function(a, b){
        document.getElementById("mostrarTotal") = total 
       })
    
    local.forEach((prodcarrito) => {
      let renderizarcarro = document.createElement("div");
      renderizarcarro.innerHTML = `
      
      <ul>
      <li>            
      <a>Nombre: ${prodcarrito.nombre}</a>
      </li>
      <li>
      <a>Te sale: $${prodcarrito.precio}</a>
      </li>
      <li>
      <a>Cantidad:${prodcarrito.cantidad}</a>
      </li>
      
      </ul>
      
      `;
      compra.append(renderizarcarro);
      localStorage.clear()
    } 
    
    
    )});

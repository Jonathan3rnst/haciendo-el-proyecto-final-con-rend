btncompra.addEventListener("click", () => {
    let local = JSON.parse(localStorage.getItem("array"));
    
    
    
    
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
    } 
    
    
    )
    
    
    let total = document.getElementById("mostrartotal")
    let suma = local.reduce((a , b) => a + b, 0 );
    console.log(suma);

    localStorage.clear()
    
  });
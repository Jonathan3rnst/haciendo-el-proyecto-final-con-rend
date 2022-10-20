let total = document.getElementById("mostrarTotal");

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
    
    
    
    
    
    let suma = local.map(prodcarro => prodcarro.precio).reduce((a , b) => a + b , 0 )
    
    let renderizartotal = document.createElement("div");
    renderizartotal.innerHTML = `
          <h2>Total adquirido: $${suma}</h2>
    `;
    total.append(renderizartotal);

    
    
  });
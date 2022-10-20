let products = document.getElementById("mostrarProducto");
fetch(
  "https://raw.githubusercontent.com/Jonathan3rnst/haciendo-el-proyecto-final-con-rend/main/data.json"
)
  .then((traer) => traer.json())
  .then((traido) => {
    traido.forEach((unidad) => {
      const verProducto = document.createElement("div");
      verProducto.innerHTML = `
    <div class="fondocarta card" style="width: 18rem;">
  <img src="${unidad.img}" class=" hebreo card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">${unidad.nombre}</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <p>Precio: $${unidad.precio}</p>
  <div >
  <button id=${unidad.id} class="centrarboton btn btn-primary">Adquirir</button>
  </div>
  </div>
  </div>
    `;
      products.append(verProducto);
      
    });
  });

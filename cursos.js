let divcontainer = document.getElementById("div");
let contcarro = document.getElementById("carrito");
let btnmostrar = document.getElementById("mostrar");

let product = [
  {
    id: 1,
    nombre: "Masoterapia",
    precio: 2000,
    img: "https://eceres.org/wp-content/uploads/2021/06/Masoterapia--1024x683.jpg",
  },
  {
    id: 2,
    nombre: "Pendulo Hebreo",
    precio: 4000,
    img: "https://radiestesiamoderna.com/wp-content/uploads/2017/03/pendulohebreo.png",
  },

  {
    id: 3,
    nombre: "Aromaterapia",
    precio: 2400,
    img: "https://jardindelzen.com/wp-content/uploads/2016/12/historia-aromaterapia-1024x683.jpg",
  },

  {
    id: 4,
    nombre: "Reiki",
    precio: 2000,
    img: "https://www.tekcrispy.com/wp-content/uploads/2022/06/reiki-manos-1024x683.jpg",
  },
];

let carro = [];

product.forEach((producto) => {
  let renderizarcarta = document.createElement("div");
  renderizarcarta.innerHTML = `
  <div class="fondocarta card" style="width: 18rem;">
  <img src="${producto.img}" class=" hebreo card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">${producto.nombre}</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <p>Precio: $${producto.precio}</p>
  <div >
  <button id=${producto.id} class="centrarboton btn btn-primary">Adquirir</button>
  </div>
  </div>
  </div>
  `;
  divcontainer.append(renderizarcarta);
  const boton = document.getElementById(producto.id);
  boton.addEventListener("click", () => adquirirProducto(producto));
});

const adquirirProducto = (producto) => {
  let pexiste = carro.find((merc) => merc.id === producto.id);
  if (pexiste !== undefined) {
    pexiste.precio = pexiste.precio + producto.precio;
    pexiste.cantidad = pexiste.cantidad + 1;
  } else {
    carro.push({
      nombre: producto.nombre,
      precio: producto.precio,
      img: producto.img,
      cantidad: 1,
      id: producto.id,
    });
  }
};

btnmostrar.addEventListener("click", () => { 

  carro.forEach((prodcarrito) => {
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
    contcarro.append(renderizarcarro);

});
});
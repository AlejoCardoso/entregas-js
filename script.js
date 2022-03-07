// constructora
function Productos(nombreP, stockP, precioP, descuentoP, marcaP, imgP){
    this.nombre = nombreP;
    this.stock = stockP;
    this.precio = precioP;
    this.descuento = descuentoP;
    this.marca = marcaP;
    this.img = imgP;

    this.venta = function(cantidadCompra){
        this.stock -= cantidadCompra;
        console.log("El stock remanente es de: " + this.stock + " " + this.nombre);
    }
}

const productoA = new Productos("Superstar", 15, 12000, 0.85, "Adidas", "./img/superstar.jpg");
const productoB = new Productos("Continental", 20, 15000, 0.85, "Adidas", "./img/continental.jpg");
const productoC = new Productos("Joyride", 5, 18000, 0.90, "Nike", "./img/joyride.jpg");
const productoD = new Productos("Airmax", 15, 16000, 0.85, "Nike", "./img/airmax.jpg");


// array
const listaProductos = [productoA, productoB, productoC, productoD];

// nuevos productos con push
listaProductos.push(new Productos("Zoom", 10, 14000, 0.95, "Nike", "./img/zoom.jpg"));
listaProductos.push(new Productos("Supernova", 8, 18500, 1, "Adidas", "./img/supernova.jpg"));

let renderProductos = document.querySelector(".productos1")

renderProductos.addEventListener("click", mostrarProductos)

function mostrarProductos(){
    const listaMarca = listaProductos

    let catalogo = document.querySelector(".catalogo")

        catalogo.innerHTML = ''
        
        for (const producto of listaMarca){
            let contenedor = document.createElement("div");
        
            contenedor.innerHTML = `<div class="centrado">
                                        <div class="card">
                                        <h3 class="titulo"> Marca: ${producto.marca}</h3>
                                        <p class="contenido"> Producto: ${producto.nombre}</p>
                                        <b class="contenido"> $ ${producto.precio}</b>
                                        <img class="contenido" src=${producto.img} width = 300px> 
                                        <button class="boton">Agregar al carro</button>
                                        </div>
                                    </div>`
        
            catalogo.appendChild(contenedor);
    }
}

let flagAdidas = 0
let flagNike = 0

let adidas = document.querySelector(".categoria1")
let nike = document.querySelector(".categoria2")

adidas.addEventListener("click", renderAdidas)
nike.addEventListener("click", renderNike)

function renderAdidas(){
    const listaMarca = listaProductos.filter(x => x.marca == "Adidas")

        let catalogo = document.querySelector(".catalogo")

        catalogo.innerHTML = ''
        
        for (const producto of listaMarca){
            let contenedor = document.createElement("div");
        
            contenedor.innerHTML = `<div class="centrado">
                                        <div class="card">
                                        <h3 class="titulo"> Marca: ${producto.marca}</h3>
                                        <p class="contenido"> Producto: ${producto.nombre}</p>
                                        <b class="contenido"> $ ${producto.precio}</b>
                                        <img class="contenido" src=${producto.img} width = 300px> 
                                        <button class="boton">Agregar al carro</button>
                                        </div>
                                    </div>`
        
            catalogo.appendChild(contenedor);
    }
}

function renderNike(){
    const listaMarca = listaProductos.filter(x => x.marca == "Nike")

        let catalogo = document.querySelector(".catalogo")

        catalogo.innerHTML = ''
        
        for (const producto of listaMarca){
            let contenedor = document.createElement("div");
        
            contenedor.innerHTML = `<div class="centrado">
                                        <div class="card">
                                        <h3 class="titulo"> Marca: ${producto.marca}</h3>
                                        <p class="contenido"> Producto: ${producto.nombre}</p>
                                        <b class="contenido"> $ ${producto.precio}</b>
                                        <img class="contenido" src=${producto.img} width = 300px> 
                                        <button class="boton">Agregar al carro</button>
                                        </div>
                                    </div>`
        
            catalogo.appendChild(contenedor);
    }
}

let catalogoNuevo = document.createElement("div")
/* let catalogo = document.querySelector(".catalogo") */

/* alert ("Nuestro catálogo: \n" + listaProductos[0].nombre + "\n" + listaProductos[1].nombre + "\n" + listaProductos[2].nombre + "\n" + listaProductos[3].nombre + "\n" + listaProductos[4].nombre + "\n" + listaProductos[5].nombre); */

// find
const resultado = listaProductos.find((elemento) => elemento.nombre === "Superstar");
const resultado2 = listaProductos.find((elemento) => elemento.nombre === "NMD");

console.log(resultado);
console.log(resultado2);

// filter
const resultado3 = listaProductos.filter((elemento) => elemento.precio <= 15000);

console.log(resultado3);

// map
const actualizacionPrecios = listaProductos.map((elemento) => {
    return {
        nombre: elemento.nombre,
        precio: elemento.precio * 1.50
    }
})

console.log(actualizacionPrecios);
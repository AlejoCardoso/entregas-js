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

listaProductos.push(new Productos("Zoom", 10, 14000, 0.95, "Nike", "./img/zoom.jpg"));
listaProductos.push(new Productos("Supernova", 8, 18500, 1, "Adidas", "./img/supernova.jpg"));

let eleccionMarca = alert("Nuestro stock se compone de: \n" + "Nike" + "\n" + "Adidas")
let marcaProducto = prompt("Ingrese la marca de producto que quiere ver:");

const listaMarca = listaProductos.filter(x => x.marca == marcaProducto)

for (const producto of listaMarca){
    let contenedor = document.createElement("div");

    contenedor.innerHTML = `<div class="centrado">
                                <div class="card">
                                <h3 class="titulo"> Marca: ${producto.marca}</h3>
                                <p class="contenido"> Producto: ${producto.nombre}</p>
                                <b class="contenido"> $ ${producto.precio}</b>
                                <img class="contenido" src=${producto.img} width = 300px> 
                                <button class="boton">Comprar</button>
                                </div>
                            </div>`

    document.body.appendChild(contenedor);
}

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



/* let cantidadCompra;
let precioVenta = 0;

let cantidadProductos = parseInt(prompt("¿Qué cantidad de productos distintos desea comprar?"));

function sinStock(stock){
    alert("No tenemos esa cantidad, podes comprar hasta " + stock + " unidades");
}

function descuentoPrecio(precio, descuento){
    precioVenta += cantidadCompra * precio * descuento;
}

function compra(stock, precio, descuento, producto){
    cantidadCompra = parseInt(prompt("Ingrese la cantidad que quiere comprar: "))
    if(cantidadCompra <= stock){
        producto.venta(cantidadCompra);
        if(cantidadCompra >= 2){
            descuentoPrecio(precio, descuento)
        }
        else(descuentoPrecio(precio, 1))
    }
    else{
        sinStock(stock)
    }
}

for(let i = 0; i < cantidadProductos; i++){

    let nombreCompra = prompt("Por favor, ingrese el nombre del producto que desea comprar:");

    let productoBuscado = listaProductos.find(buscar => buscar.nombre == nombreCompra);

    console.log(productoBuscado);
    alert(productoBuscado.nombre);

    

    if (nombreCompra == listaProductos[0].nombre){
        compra(listaProductos[0].stock, listaProductos[0].precio, listaProductos[0].descuento, listaProductos[0])
    }
    else if (nombreCompra == listaProductos[1].nombre){
        compra(listaProductos[1].stock, listaProductos[1].precio, listaProductos[1].descuento, listaProductos[1])
    }
    else if (nombreCompra == listaProductos[2].nombre){
        compra(listaProductos[2].stock, listaProductos[2].precio, listaProductos[2].descuento, listaProductos[2])
    }
    else if (nombreCompra == listaProductos[3].nombre){
        compra(listaProductos[3].stock, listaProductos[3].precio, listaProductos[3].descuento, listaProductos[3])
    }
    else if (nombreCompra == listaProductos[4].nombre){
        compra(listaProductos[4].stock, listaProductos[4].precio, listaProductos[4].descuento, listaProductos[4])
    }
    else if (nombreCompra == listaProductos[5].nombre){
        compra(listaProductos[5].stock, listaProductos[5].precio, listaProductos[5].descuento, listaProductos[5])
    }
    else{
        alert("No tenemos ese producto");
    }
} 

alert("El precio de su compra es de: $" + precioVenta); */
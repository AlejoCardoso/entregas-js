// constructora
function Productos(nombreP, stockP, precioP, descuentoP){
    this.nombre = nombreP;
    this.stock = stockP;
    this.precio = precioP;
    this.descuento = descuentoP;

    this.venta = function(cantidadCompra){
        this.stock -= cantidadCompra;
        console.log("El stock remanente es de: " + this.stock + " " + this.nombre);
    }
}

const productoA = new Productos("Superstar", 15, 12000, 0.85);
const productoB = new Productos("Continental", 20, 15000, 0.85);
const productoC = new Productos("Joyride", 5, 18000, 0.90);
const productoD = new Productos("Airmax", 15, 16000, 0,85);

alert ("Nuestro catálogo: \n" + productoA.nombre + "\n" + productoB.nombre + "\n" + productoC.nombre + "\n" + productoD.nombre);

// array
const listaProductos = [productoA, productoB, productoC, productoD];

let cantidadCompra;
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

if (nombreCompra == productoA.nombre){
    compra(productoA.stock, productoA.precio, productoA.descuento, productoA)
}
else if (nombreCompra == productoB.nombre){
    compra(productoB.stock, productoB.precio, productoB.descuento, productoB)
}
else if (nombreCompra == productoC.nombre){
    compra(productoC.stock, productoC.precio, productoC.descuento, productoC)
}
else if (nombreCompra == productoD.nombre){
    compra(productoD.stock, productoD.precio, productoD.descuento, productoD)
}
else{
    alert("No tenemos ese producto");
}
}

alert("El precio de su compra es de: $" + precioVenta);
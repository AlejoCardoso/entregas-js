let adidasSuperstar = "Superstar";
let stockSuperstar = 15;
let precioSuperstar = 12000;

let descuentoProductos = 0.85;

let adidasContinental = "Continental";
let stockContinental = 20;
let precioContinental = 15000

let nikeJoyride = "Joyride";
let stockJoyride = 5;
let precioJoyride = 18000;

let nikeAirmax = "Airmax";
let stockAirmax = 15;
let precioAirmax = 16000;

alert ("Nuestro catálogo: \n" + adidasSuperstar + "\n" + adidasContinental + "\n" + nikeJoyride + "\n" + nikeAirmax)

let cantidadCompra;
let precioVenta = 0;

let cantidadProductos = parseInt(prompt("¿Qué cantidad de productos distintos desea comprar?"));

function sinStock(stock){
    alert("No tenemos esa cantidad, podes comprar hasta " + stock + "unidades");
}

function stockSuficiente(stock, nombre){
    stock -= cantidadCompra;
    console.log("El stock es de: " + stock + nombre);
}

function descuentoPrecio(precio, descuento){
    precioVenta += cantidadCompra * precio * descuento;
}

function compra(stock, precio, nombre, descuento){
    cantidadCompra = parseInt(prompt("Ingrese la cantidad que quiere comprar: "))
    if (cantidadCompra <= stock){
        stockSuficiente(stock, nombre);
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

if (nombreCompra == adidasSuperstar){
    compra(stockSuperstar, precioSuperstar, adidasSuperstar, descuentoProductos)
}
else if (nombreCompra == adidasContinental){
    compra(stockContinental, precioContinental, adidasContinental, descuentoProductos)
}
else if (nombreCompra == nikeAirmax){
    compra(stockAirmax, precioAirmax, nikeAirmax, descuentoProductos)
}
else if (nombreCompra == nikeJoyride){
    compra(stockJoyride, precioJoyride, nikeJoyride, descuentoProductos)
}
else{
    alert("No tenemos ese producto");
}
}

alert("El precio de su compra es de: $" + precioVenta);

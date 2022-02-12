let adidasSuperstar = "Superstar";
let stockSuperstar = 15;
let precioSuperstar = 12000;

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

for(let i = 0; i < cantidadProductos; i++){

    let nombreCompra = prompt("Por favor, ingrese el nombre del producto que desea comprar:");

if (nombreCompra == adidasSuperstar){
    cantidadCompra = parseInt(prompt("Ingrese cuantas unidades desea:"));
    if(cantidadCompra <= stockSuperstar){
        stockSuperstar = stockSuperstar - cantidadCompra;
        precioVenta += cantidadCompra * precioSuperstar;
        console.log("Hay en stock " + stockSuperstar + adidasSuperstar);
    }
    else{
        alert("Sin stock suficiente, podés comprar hasta " + stockSuperstar + " unidades");
    }
}
else if (nombreCompra == adidasContinental){
    cantidadCompra = parseInt(prompt("Ingrese cuantas unidades desea:"));
    if(cantidadCompra <= stockContinental){
        stockContinental = stockContinental - cantidadCompra;
        precioVenta += cantidadCompra * precioContinental;
        console.log("Hay en stock " + stockContinental + adidasContinental);
    }
    else{
        alert("Sin stock suficiente, podés comprar hasta " + stockContinental + " unidades");
    }
}
else if (nombreCompra == nikeAirmax){
    cantidadCompra = parseInt(prompt("Ingrese cuantas unidades desea:"));
    if(cantidadCompra <= stockAirmax){
        stockAirmax = stockAirmax - cantidadCompra;
        precioVenta += cantidadCompra * precioAirmax;
        console.log("Hay en stock " + stockAirmax + nikeAirmax);
    }
    else{
        alert("Sin stock suficiente, podés comprar hasta " + stockAirmax + " unidades");
    }
}
else if (nombreCompra == nikeJoyride){
    cantidadCompra = parseInt(prompt("Ingrese cuantas unidades desea:"));
    if(cantidadCompra <= stockJoyride){
        stockJoyride = stockJoyride - cantidadCompra;
        precioVenta += cantidadCompra * precioJoyride;
        console.log("Hay en stock " + stockJoyride + nikeJoyride);
    }
    else{
        alert("Sin stock suficiente, podés comprar hasta " + stockJoyride + " unidades");
    }
}
else{
    alert("No tenemos ese producto");
}
}

alert("El precio de su compra es de: $" + precioVenta);

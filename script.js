// Elements
const $ = x => document.querySelector(x);

const items = $('.items');
const totalQuantity = $('.total-quantity');
const totalPrice = $('.total-price');
const cartButton = $('.cart-btn');
const cartClose = $('.cart-close');
const cartClear = $('.cart-clear');
const cartContent = $('.cart-content');

// array carrito
let cartArray = [];

// array botones 
let selectedButtons = [];

class UI {

    displayItems(container, array = []) {
        container.innerHTML = array.map(el => {
            return `<div class="card" id="cards">
            <img class="card-img-top effect-img" src="${el.img}" alt="${el.name}">
            <div class="card-body">
            <h4 class="card-title">${el.name}</h4>
            <p class="card-text">$ ${el.price}</p>
            <button class="btn btn-colour btn-effect btn-lg toCart" data-id="${el.id}">Agregar al carrito</button>
            </div>
            </div>`;
        }).join('');
    }

    displayInCart() {
        const btns = [...document.querySelectorAll('.toCart')];

        selectedButtons = btns;

        btns.forEach(btn => {
            let id = btn.dataset.id;

            // busca en cartArray si tiene esa id
            let inCart = cartArray.find(el => el.id === Number(id));

            // si la tiene, se desactiva el boton
            if (inCart) {
                btn.textContent = 'En el carrito';
                btn.disabled = true;
            }

            // evento para el boton
            btn.addEventListener('click', e => {
                e.target.textContent = 'En el carrito';
                e.target.disabled = true;

                // nuevo objeto para agregar productos
                let cartObject = {
                    ...this.getProductId(id),
                    quantity: 1
                };

                // agrega objeto al carro
                cartArray = [...cartArray, cartObject];

                // guarda cartArray en storage
                Storage.saveCart(cartArray);
                // valores de precio total y cantidas
                this.setCartValues(cartArray);
                // muestra carro
                this.showCart();
                // configura la app
                this.setup();
            });
        });
    }

    getProductId(id) {
        return products.find(el => el.id === Number(id));
    }
    showCart () {
        document.body.classList.add('show-cart');
    }
    hideCart () {
        document.body.classList.remove('show-cart');
    }

    setCartValues(array) {
        let tempPrice = 0;
        let tempQuantity = 0;
        // devuelve los valores del array
        array.map(el => {
            tempPrice += el.price * el.quantity;
            tempQuantity += el.quantity;
        });
        // cambia el texto
        totalPrice.textContent = parseFloat(tempPrice.toFixed(2));
        totalQuantity.textContent = tempQuantity;
    }

    populateCart(box,
        array) {
        box.innerHTML = array.map(obj => {
            return `<div class="cart-item mt-2 mb-2">
            <div class="cart-desc">
            <img src="${obj.img}" alt="${obj.name}" class="mr-3 cart-desc-img">
            <div>
            <h3 class="cart-item-name">${obj.name}</h3>
            <p class="cart-item-price">$ ${obj.price}</p>
            <button class="btn btn-danger cart-item-remove" data-id="${obj.id}">Quitar</button>
            </div>
            </div>
            <div class="tools">
            <button class="btn btn-success cart-item-minus" data-id="${obj.id}"> - </button>
            <button class="btn btn-outline-dark cart-item-quantity">
            ${obj.quantity}
            </button>
            <button class="btn btn-success cart-item-plus" data-id="${obj.id}"> + </button>
            </div>
            </div>`;
        })
        .join('');
    }

    setup() {
        // obtiene articulos del carrito de storage y guarda en cartArray
        cartArray = Storage.getCart();
        // configura valores carrito
        this.setCartValues(cartArray);
        // puebla carrito en dom
        this.populateCart(cartContent,
            cartArray); // repite cart items

        // muestra carrito cuando se clickea
        cartButton.addEventListener('click',
            this.showCart);
        // esconde carrito cuando se clickea
        cartClose.addEventListener('click',
            this.hideCart);
    }

    cartFunctions() {
        //1. borra todo
        cartClear.addEventListener('click',
            ()=> {
                this.clearCart();
            });
        cartContent.addEventListener('click',
            e => {
                let [el,
                    id] = [e.target,
                    e.target.dataset.id];
                // obtiene array con id igual
                let tempObj = cartArray.find(el=>el.id === Number(id));

                //2. quitar uno
                if (e.target.classList.contains('cart-item-remove')) {
                    // borra el cart-item
                    cartContent.removeChild(el.parentElement.parentElement.parentElement);
                    // borra del cartArray
                    this.removeItem(id);
                }
                //3. +1
                else if (e.target.classList.contains('cart-item-plus')) {
                    // actualiza el array
                    tempObj.quantity += 1;
                    // guarda en el storage
                    Storage.saveCart(cartArray);
                    // establece valores
                    this.setCartValues(cartArray);
                    // muestra en dom
                    el.previousElementSibling.textContent = tempObj.quantity;
                }
                //4.  -1
                else if (e.target.classList.contains('cart-item-minus')) {
                    // actualiza array
                    tempObj.quantity -= 1;
                    // si el array tiene > 0 el, actualiza, guarda y show
                    // sino lo borra
                    if (tempObj.quantity > 0) {
                        Storage.saveCart(cartArray);
                        this.setCartValues(cartArray);
                        el.nextElementSibling.textContent = tempObj.quantity;
                    } else {
                        cartContent.removeChild(el.parentElement.parentElement);
                        this.removeItem(id);
                    }
                }
            });
    }

    clearCart() {
        // obtiene los id de cartArray
        let cartItems = cartArray.map(el => el.id);
        // por cada id, retira child
        cartItems.forEach(id => this.removeItem(id));
        // si la caja tiene children, lo quita
        while (cartContent.children.length > 0) {
            cartContent.removeChild(cartContent.children[0]);
        }
        // esconde carrito
        this.hideCart();
    }

    removeItem(id) {
        // filtra cartArray
        cartArray = cartArray.filter(el => el.id !== Number(id));
        // actualiza valores
        this.setCartValues(cartArray);
        // guarda en storage
        Storage.saveCart(cartArray);
        // obtiene cada boton con id igual
        let btn = this.getBtnId(id);
        // cambia texto de boton y lo habilita
        btn.disabled = false;
        btn.textContent = '+ al carrito';
    }

    getBtnId(id) {
        return selectedButtons.find(el => el.dataset.id === String(id));
    }

}

// sweet alert
let popUp = document.querySelector(".pop-up-carrito");

popUp.addEventListener("click", aviso)

function aviso(){
    Swal.fire({
        position: 'top',
        icon: 'success',
        iconColor: 'orange',
        title: 'El carrito ha sido vaciado',
        showConfirmButton: false,
        timer: 1500
      })
}

// local storage
class Storage {
    // guarda el carrito
    static saveCart(cartArray) {
        localStorage.setItem('cartArray', JSON.stringify(cartArray));
    }
    // obtiene el contenido de carro
    static getCart() {
        return localStorage.getItem('cartArray')
        ? JSON.parse(localStorage.getItem('cartArray')): [];
    }
    static remCart() {
        localStorage.removeItem('cartArray');
    }
}

// evento principal
document.addEventListener('DOMContentLoaded', ()=> {
    // obtiene ui
    const ui = new UI();
    // configura app
    ui.setup();
    // muestra los items
    ui.displayItems(items, products);
    // lleva items al carrito
    ui.displayInCart();
    // funcionabilidad al carrito
    ui.cartFunctions();
});

// API leaflet map
let map = L.map('map').setView([-34.6,-58.633333],15)

//Agregar tilelAyer mapa base desde openstreetmap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-34.6, -58.633333]).addTo(map)
    .bindPopup('¡Visita nuestro local!')
    .openPopup();
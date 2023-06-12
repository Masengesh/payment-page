
/*let incrementBtn = document.getElementById("increment");
let decrementBtn = document.getElementById("decrement");
let quantityElement = document.getElementById("quantity");
let billPrice = document.querySelector('.price')

incrementBtn.addEventListener("click", function() {
    let currentQuantity = parseInt(quantityElement.textContent);
    currentQuantity++;
    quantityElement.textContent = currentQuantity;
});

decrementBtn.addEventListener("click", function() {
    let currentQuantity = parseInt(quantityElement.textContent);
    if (currentQuantity > 0) {
        currentQuantity--;
    
        quantityElement.textContent = currentQuantity;
    }
})*/
'use strict';
const payAmountBtn = document.querySelector('#payAmount');
const decrementBtn = document.querySelectorAll('#decrement');
const quantityElem = document.querySelectorAll('#quantity');
const incrementBtn = document.querySelectorAll('#increment');
const priceElem = document.querySelectorAll('#price');
const subtotalElem = document.querySelector('#subtotal');
const taxElem = document.querySelector('#tax');
const ShippingElem = document.querySelector('#Shipping');
const totalElem = document.querySelector('#total');

for ( let i = 0; i < incrementBtn.length; i++ ) {
    incrementBtn[i].addEventListener('click', function () {
        let increment = Number(this.previousElementSibling.textContent);
        increment++;
        this.previousElementSibling.textContent = increment;
    });
    decrementBtn[i].addEventListener('click', function () {
        let decrement = Number(this.nextElementSibling.textContent);
        decrement <= 1 ? 1 : decrement--;
        this.nextElementSibling.textContent = decrement;
    });
}

const totalCalc = function() {
    const tax = 0.05;
    let subtotal = 0;
    let totalTax = 0;
    let total = 0;

    for (let i = 0; i < quantityElem.length; i++) {
        subtotal += Number(quantityElem[i].textContent) * Number(priceElem[i].textContent);
    }
    subtotalElem.textContent = subtotal.toFixed(2);
    totalTax = subtotal * tax;
    taxElem.textContent = totalTax.toFixed(2);
    total = subtotal + totalTax;
    totalElem.textContent = total.total.toFixed(2);
    payAmountBtn.textContent = total.toFixed(2);
}




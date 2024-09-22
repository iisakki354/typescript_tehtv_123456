"use strict";
const cart = [];

while (true) {
    const itemName = prompt("Enter item name") ;
    if (!itemName) {
        alert("name is empty");
        break;
    }
    const itemPrice = Number(prompt("Enter item price")) ;
    if (!itemPrice) {
        alert("price is empty");
        break;
    }
    const itemQuantity = Number(prompt("Enter item quantity")) ;
    if (!itemQuantity) {
        alert("quantity is empty");
        break;
    }

    const newItem = { name: itemName, price: itemPrice, quantity: itemQuantity };
    cart.push(newItem);
}

const totalCost = cart.map(item => item.price * item.quantity).reduce((sum, cost) => sum + cost, 0);

console.log(`Total cost of the shopping cart: $${totalCost.toFixed(2)}`);

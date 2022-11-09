
"use strict";

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    // TODO:  fill the array with 10 candies of various
    //        price ranges
 ];

let under4 = products.filter(products => products.price < 4);

for (let i = 0; i < under4.length; i++) {
    console.log(products[i].product);
}

console.log("-------------");

let hasMMInName = products.filter((p) => p.product.includes("M&Ms"));
hasMMInName.forEach((p) => console.log(p.product));

console.log("-------------");

let weCarrySF = products.find((p) => p.product == "Swedish Fish");
if (weCarrySF) {
    console.log("We do carry swedish fish.");
}
else {
    console.log("We don't carry swedish fish.");
}

console.log("------------");


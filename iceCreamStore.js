console.log("Ice Cream Store is running!");
let iceCreamFlavors = [
    { name: "Chocolate", type: "Chocolate", price: 2 },
    { name: "Strawberry", type: "Fruit", price: 1 },
    { name: "Vanilla", type: "Vanilla", price: 2 },
    { name: "Pistachio", type: "Nuts", price: 1.5 },
    { name: "Neapolitan", type: "Chocolate", price: 2},
    { name: "Mint Chip", type: "Chocolate", price: 1.5 },
    { name: "Raspberry", type: "Fruit", price: 1 },
];

// 배열 전체 출력
console.log("Ice Cream Flavors:");
console.log(iceCreamFlavors);

// 이름만 따로 출력
console.log("\nFlavor Names:");
iceCreamFlavors.forEach(flavor => {
    console.log(flavor.name);
});

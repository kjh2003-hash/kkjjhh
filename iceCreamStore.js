console.log("Ice Cream Store is running!"); 

let iceCreamFlavors = [
    { name: "Chocolate", type: "Chocolate", price: 2, sales: 50 },
    { name: "Strawberry", type: "Fruit", price: 1, sales: 30 },
    { name: "Vanilla", type: "Vanilla", price: 2, sales: 40 },
    { name: "Pistachio", type: "Nuts", price: 1.5, sales: 20 },
    { name: "Neapolitan", type: "Chocolate", price: 2, sales: 35 },
    { name: "Mint Chip", type: "Chocolate", price: 1.5, sales: 25 },
    { name: "Raspberry", type: "Fruit", price: 1, sales: 15 },
];

// 배열 전체 출력
console.log("Ice Cream Flavors:");
console.log(iceCreamFlavors);

// 이름만 따로 출력
console.log("\nFlavor Names:");
iceCreamFlavors.forEach(flavor => {
    console.log(flavor.name);
});

// 가장 많이 팔린 맛 찾기
let maxSales = 0;
let bestSelling = "";

// Object.keys() 사용해서 객체의 키 탐색
iceCreamFlavors.forEach(flavor => {
    Object.keys(flavor).forEach(key => {
        if (key === "sales" && flavor[key] > maxSales) {
            maxSales = flavor[key];
            bestSelling = flavor.name;
        }
    });
});

console.log(`\nBest Selling Flavor: ${bestSelling} (${maxSales} sold)`);

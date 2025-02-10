const beatySalonPro = {
    "nails": "20 $",
    "eyeLashes": "30 $",
    "eyeBrows": "22 $"
};

let pricesPro = Object.values(beatySalonPro);
beatySalonPro["makeup"] = "59.99 $";
pricesPro = Object.values(beatySalonPro);;
let converted = pricesPro.map(parseFloat);

beatySalonPro.price = function () {
    let totalPrices = 0;
    for (let i = 0; i < converted.length; i++ ) {
        totalPrices += converted[i];
    }
    return totalPrices;
}

beatySalonPro.minPrice = function () {
    const min = Math.min(...converted)
    return min;

}

beatySalonPro.maxPrice = function () {
    const max = Math.max(...converted)
    return max;
}

console.log(beatySalonPro.price() + " загальну вартість наданих послуг"); 
console.log(beatySalonPro.minPrice() + " мінімальна ціна"); 
console.log(beatySalonPro.maxPrice() + " максимальна ціна"); 



let beatySalonPro = {
    "nails": "20 $",
    "eyeLashes": "30 $",
    "eyeBrows": "22 $"
};
    
let pricesPro = Object.values(beatySalonPro);
beatySalonPro.makeup = "50 $";
pricesPro = Object.values(beatySalonPro);;
let converted = pricesPro.map(parseFloat);
const minPrice = Math.min(...converted)
console.log(`${minPrice} is a min price`)
const maxPrice = Math.max(...converted)
console.log(`${maxPrice} is a max price`)

let totalPrices = 0;
for (let i = 0; i < converted.length; i++ ) {
    totalPrices += converted[i];
}
console.log(`${totalPrices} sum of prices`)


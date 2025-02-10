const beatySalonPro = {
    services: {
        "nails": "20 $",
        "eyeLashes": "30 $",
        "eyeBrows": "22 $"
    },

    price() {
        let totalPrices = 0;
        let servicesItems = Object.values(this.services).map(parseFloat);

        for (let i = 0; i < servicesItems.length; i++) {
            totalPrices += servicesItems[i];
        }
        return totalPrices.toFixed(2);
    },

    minPrice() {
        const min = Math.min(...Object.values(this.services).map(parseFloat))
        return min.toFixed(2)

    },
    maxPrice() {
        const max = Math.max(...Object.values(this.services).map(parseFloat))
        return max.toFixed(2)

    }
}
beatySalonPro.services["makeup"] = "59.99 $";
beatySalonPro.services["haircut"] = "39.99 $";

console.log(beatySalonPro.price() + " $ загальна вартість наданих послуг");
console.log(beatySalonPro.minPrice() + " $ мінімальна ціна");
console.log(beatySalonPro.maxPrice() + " $ максимальна ціна");
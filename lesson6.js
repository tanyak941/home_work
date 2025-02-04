function checkProbabilityTheory(count) {
    var countEven = 0;
    var countOdd = 0;
    var countTotal = 0; // can be sum of countEven and countOdd, but I used it for additional verification
    for (i = 100; i <= 1000; i++) {
        i = Math.random() * (100 - 1000) + 1000;
        i = Math.ceil(i)
        if (i % 2 == 0) {
            countEven++
            console.log(`${i} even number`)
        } else {
            countOdd++
            console.log(`${i} odd number`)
        }
        countTotal++
    }
    console.log(`${countEven} sum of even numbers`)
    console.log(`${countOdd} sum of odd numbers`)
    console.log(`${countTotal} sum of total`) // this var is used for counting precentages 
  
    let even = (countEven / countTotal) * 100
    even = even.toFixed(3)
    let odd = (countOdd / countTotal) * 100
    odd = odd.toFixed(3)
  
    console.log(`${even} % of even numbers`)
    console.log(`${odd} % of odd numbers`)
    count = even === odd
    return count
  }
  console.log(`${checkProbabilityTheory()} this is a result!!!!`)
  
  
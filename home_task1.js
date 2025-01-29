// 'number' + 3 + 3 // "number33" // string
/* "number"
"3"
"3"
*/

// null + 3 // 3 // number // null = 0 , 0+3=3

// 5 && "qwerty" // "qwerty" // true  && true , last true = "qwerty"

// +'40' + +'2' + "hillel"; // "42hillel" // 40 ++ 2 (перетворення в number , додаванняб ) // number + string = string "42hillel"

// '10' - 5 === 6; // false // строге порівняння

// true + false  // 1 // true = 1 ; false = 0 // 1+0=1

// '4px' - 3 // NaN // не може string - number 

// '4' - 3 // 1 // '4' в number // 4-3 =1

// '6' + 3 ** 0; // "61" // string / гуглила :) як правильно рахувати 3 ** 0 // "6" + 1 (результат 3 ** 0) // '6'+1="61"

// 12 / '6' // 2 // 12 / 6 (number)

// '10' + (5 === 6); // "10false" // string // "10"+false стоге порівняння

// null == '' // false //  пустота не дорівнює null

// 3 ** (9 / 3); // 27 // матиматична операція // 9/3 =3 // 3 в третьому ступені = 27

// !!'false' == !!'true' // true // false не дорівнює true

// 0 || '0' && 1 // 1 //  && важливіще виконується першим '0' && 1 = 1 (останнє істинне так як "0" стрінг і рахується як 1) // 0 || 1 = 1 перше істинне

// (+null == false) < 1; // 1 // (+null == false) = true // true = 1 // 1<1 false

// false && true || true  // true // false && true = false // fasle || true = true перше істинне

// false && (false || true); // false // хоч і || має менший приорітет - але так як вираз в () то це виконується першим // false || true = true // false && true = false

// (+null == false) < 1 ** 5; // false // +null == false = true // 1 ** 5 = 1 // 1<1 false 
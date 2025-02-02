
// declaration function
function pow(a, b) {
    return a ** b;
 };
let homework = pow(3,4);
console.log(homework);
  

//expression function
const pow1 = function (x,y) {
    return x ** y;
};
let homework1 = pow1(5,6);
console.log(homework1);

//стрілочна функція

const pow2 = (x,y) => {
    return x ** y;
};
let homework2 = pow2(2,4);
console.log(homework2);
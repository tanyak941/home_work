const arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Test",
        lastName:"Test",
        email:"test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.invalid@@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
    {
        userName:"Test",
        lastName:"Test",
        email:"TEST.TEST2@GMAIL.COM"
    },
    {
        userName:"Tanya",
        lastName:"K",
        email:"tk+345@yahoo.com"
    },
    {
        userName:"examp",
        lastName:"",
        email:"tk_345@yahoo.com"
    },
];
 
const pattern = /\b\w+(\.|\+|_)*\w*@(gmail\.|yahoo\.)([a-z])*\b/gi
 
const temp = arr.map((values) => values.email);
const value = temp.toString()
 
const matches = value.match(pattern);
console.log(matches);
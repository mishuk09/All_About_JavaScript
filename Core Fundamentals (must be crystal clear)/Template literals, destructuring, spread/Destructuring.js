//Destructuring helps us to extract values from array or object 

const arr = [1, 2, 3, 4, 5];

const [a, b, c, d, e] = arr;

console.log(a, b, c, d, e);

console.log(a, e);


//object destructuring

const data={
    name:'Mahadi Hasan Mishuk',
    age:22,
    profession:'Student'
}

const {name,age,profession}=data;
console.log(name,age,profession);

console.log(name,profession);
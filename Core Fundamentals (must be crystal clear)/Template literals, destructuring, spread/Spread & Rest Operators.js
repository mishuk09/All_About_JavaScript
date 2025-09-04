const arra = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrb = [...arra, 10, 11, 12, 13, 14, 15];

console.log(arra);
console.log(arrb);

const data = {
    firstName: 'Mahadi',
    lastName: 'Hasan Mishuk',

}

const data2 = {
    age: 25,
}

const newData = { ...data, ...data2 }
console.log(newData);
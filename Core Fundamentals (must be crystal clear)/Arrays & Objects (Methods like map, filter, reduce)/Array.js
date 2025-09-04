let a = [4, 5, 6, 7]
let result = a.map((i, number) => i * number);
console.log(result);


//check ever number 

const result2 = a.filter((i) => i % 2 === 0);
console.log(result2);



const result3 = a.reduce((sum, index) => (sum + index), 0);
console.log(result3);
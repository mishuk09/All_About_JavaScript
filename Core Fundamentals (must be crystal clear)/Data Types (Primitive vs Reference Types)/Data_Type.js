// 1.Premitive data type:This data type will contain actual value inside the variable
// like :int ,string,bigint,boolean,number,null,undefined,symbol
// 2.Reference/Non premitive data type:This data type will contain reference/address of the variable
// like :object,array,function


// Premitive
let a = 10;
let b = a;
b = 30;
console.log(a, b);


// Reference/Non premitive

let obj = { name: 'Mishuk', age: 25 }
let obj2 = obj;
obj2.name = 'Hasan';
obj2.age = 26;
console.log(obj);
console.log(obj2);

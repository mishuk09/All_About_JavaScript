// 1.let---block scope variable it means only scceable within the block and may be curly braces
// 2.const---block scope variable that cannot be reassign after declare
// 3.var---function scope variable/global(if declare outside of the function) it means only scceable within the function

// let

function abc() {
    let a = 10;
    console.log(a);
    if (true) {
        let b = 20;
        console.log(b);
    }
    // console.log(b);//error cause b is not defined
}
abc();

// const 

const a = 30;
// a = 40;
console.log(a);



// var 

var c = 20;
if (true) {
    var c = 30;
}
console.log(c);
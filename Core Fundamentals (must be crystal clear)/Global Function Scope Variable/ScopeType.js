// 1.global function can be acces anywhere of the code
// 2.function scope can be access only within the function
// 3.Block scope variable can be access with in block not outside of the block

let a = 10;
function test() {
    let b = 20;
    if (true) {
        let c = 30;
        console.log(a, b, c);
    }
    // console.log(c);//error cause c is not defined
    console.log(a,b);
}

test();
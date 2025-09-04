//function it self called as keyword and js function that declare with function keyword


//regular function
function test(name) {
    return ("His name is " + name);
}

//expression 

const textFunction = function (name) {

    return ("Her name is" + name);
}

//arrow

const arrowfunction = (name) => {
    return ("Their name is " + name);
}

 
console.log(test("Mahadi Hasan Mishuk"));
console.log(textFunction('Munni'));
console.log(arrowfunction("Mishuk"));








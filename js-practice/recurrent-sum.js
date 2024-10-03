let sum = function () {
    let x = 0; 
    function inner() { 
        x = x + arguments[0]; 
        return arguments.callee;
    } 
    inner.toString = function () {
        let z = x; x = 0; 
        return z; 
    } 
    return inner; 
}; 

let s = sum(1)(2)(3);
alert(s);
// 0 alert(s(1)); // 1 alert(s(1)(2)(3))
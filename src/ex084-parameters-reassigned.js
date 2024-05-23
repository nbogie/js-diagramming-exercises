function doStuff(a, b) {
    b = a + 1000;
}

let x = 99;
doStuff(10, x);
//Q: at the end, what's in a?  b? x?
console.log(x);
// console.log(x);
// console.log(a);
// console.log(b);

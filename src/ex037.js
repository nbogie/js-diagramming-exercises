let x = 10;
let y = 20;

function myFn(x) {
    console.log(x, y);
    x++;
    y--;
}

myFn(y);
console.log(x, y);

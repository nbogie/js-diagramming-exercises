function myFn([x, y, z]) {
    y = 99;
}

const a = [10, 20, 30];
myFn(a);
console.log(a[1]);

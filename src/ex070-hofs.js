const fn = (a, b) => {
    console.log(a + b);
};

function doTwice(givenFn) {
    givenFn();
    givenFn();
}

doTwice(() => console.log(Math.random()));
doTwice(fn(10, 20));

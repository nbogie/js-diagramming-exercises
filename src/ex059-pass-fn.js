function fn1() {
    console.log("Hi!");
    return 42;
}

function weirdFn(givenFn) {
    givenFn();
    givenFn();
}

weirdFn(fn1);

//This won't work.  diagram until you hit the problem
weirdFn(fn1());

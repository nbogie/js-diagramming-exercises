function squareOf(n) {
    const result = n * n;
    return result;
}
function doEverything() {
    console.log("let's go!");
    for (let index = 2; index < 4; index++) {
        const s = squareOf(index);
        console.log(index, " times ", index, "is ", s);
    }
}

doEverything();

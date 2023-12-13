function myFunction(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        return element + 1;
    }
    return "completed ok";
}

const x = myFunction([10, 20]);
//What's in x?
//What gets output to the console?

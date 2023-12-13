function sayBye() {
    console.log("BYEBYE!");
    return "bye";
}

function myFunction() {
    return "hi";
    return sayBye();
}

const x = myFunction();
//What's in x?
//What gets output to the console?

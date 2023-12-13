function otherFunction(b) {
    b[0]++;
}

function myFunction(a) {
    return otherFunction(a);
}

const arr1 = [10, 20];
const x = myFunction(arr1);
//What's in x?  What's in arr1?

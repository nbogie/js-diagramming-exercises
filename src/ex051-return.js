function myFunction(a, b) {
    if (a < 2) {
        return "yo";
    }
    b[0]++;
}
const arr1 = [10, 20];
const x = myFunction(1, arr1);
//What's in x?  What's in arr1?

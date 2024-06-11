function myFn(param1) {
    param1 = [30, 40];
    param1[0] = 99;
}

const arr1 = [10, 20];

myFn(arr1);

//Q: What's in arr1?

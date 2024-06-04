const arr1 = [
    { name: "a", score: 10 },
    { name: "b", score: 20 },
];

const arr2 = structuredClone(arr1);

arr2[0].score = 99;

//Q: what's in arr1?  what's in arr2?

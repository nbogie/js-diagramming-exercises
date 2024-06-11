//First read the code quickly and predict Q1
//Then diagram and answer all questions again.
function copyArrayContent(sourceArr, destArr) {
    for (let element of sourceArr) {
        destArr.push(element);
    }
    return destArr;
}
const names = ["alex"];
const result = copyArrayContent(["sola", "sheldon"], names);
//Q1: What's in `result`?  what's in `names`?
//Q2: Change this function to return undefined.
//     Could the function still be useful?

function isBiggerThan10(x) {
    return x > 10;
}

function findFirstMatch(inputArray, givenFn) {
    for (let element of inputArray) {
        const testResult = givenFn(element);
        if (testResult === true) {
            return element;
        }
    }
    return undefined;
}

const result1 = findFirstMatch([8, 31, -20], isBiggerThan10);
findFirstMatch();

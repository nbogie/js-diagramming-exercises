let original = [{ v: 10 }, { v: 20 }, { v: 30 }];
let copied = [...original];
copied[0].v = "changed";

console.log(original);

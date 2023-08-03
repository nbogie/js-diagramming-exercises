function f(obj) {
    obj.len = obj.n.length;
    return obj.len;
}

const a = [{ n: "stevie" }, { n: "marvin" }, { n: "aretha" }];
//take a screenshot of your diagram at this point

//Question: without considering function f,
//could array `a` be mutated by the next line?

const b = a.map(f);

a[1] = "hi";

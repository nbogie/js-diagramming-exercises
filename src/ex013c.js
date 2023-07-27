const a = [{ n: "stevie" }, { n: "marvin" }, { n: "aretha" }];

const b = a.map(f);
//Question: before seeing f, could a be modified by b = a.map(f)?

function f(obj) {
    obj.len = obj.n.length;
    return obj.len;
}

a[1] = "hi";

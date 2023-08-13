function make() {
    const c = { v: 1, next: null };
    const b = { v: 1, next: c };
    const a = { v: 1, next: b };
    c.next = a;
    return a;
}
const thing = make();

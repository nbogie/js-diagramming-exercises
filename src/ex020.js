function myFn() {
    const c = [10, 20, 30];
    return c;
}

const a = myFn();

const b = myFn();

a[0] = 88;

//what is b now?

function myFn([a, b]) {
    a.hp -= 10;
}

const players = [
    { id: 1, hp: 99 },
    { id: 2, hp: 99 },
];
myFn(players);
//Q: what will be in players now?

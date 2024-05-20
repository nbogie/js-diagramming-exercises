function report(name, score, game) {
    const bigName = name.toUpperCase();
    const text = bigName + " scored " + score + " at " + game;
    return text;
}

console.log(report("bukola", 120, "pacman"));
const message = report("asteroids", "sheldon", 99);
console.log(message);

//Q: what's in `message` at the end?
//Q: what's in `name` after line 2 executes

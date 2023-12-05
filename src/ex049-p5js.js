function setup() {
    createCanvas(100, windowHeight);
    noLoop();
    fill("red");
}

function draw() {
    let diameter = 10;
    for (let x = 100; x >= 0; x -= 50) {
        circle(x, 300, diameter);
        console.log({ x, diameter });
        diameter += 10;
    }
    console.log("AFTER, diameter: " + diameter);
}

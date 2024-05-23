function drawHat(colour, x, y) {
    fill(colour);
    square(x, y, 80);
}

drawHat("blue", 200, 100);
drawHat(50, 300, "orange");

//Q: what's in the parameters colour x and y
//    during the first call?
//Q: what's in the parameters colour x and y
//    during the second call?

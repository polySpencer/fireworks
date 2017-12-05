// P5.JS TEMPLATE - COMMENTS

// Declare Global Variables
let buttons, 
    fireworks = [],
    ordinaryFW = [], 
    globular = [], 
    heart = [];

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(windowWidth - 20, windowHeight - 20);
    background(0);

    // Initialize Global Variables
    buttons = [new Button(2, height - 52, "gray"), // Full Screen
               new Button(56, height - 52, "green"), // Ordinary
               new Button(110, height - 52, "orange"), // Exploding
               new Button(164, height - 52, "blue"), // Globular
               new Button(218, height - 52, "red")]; // Heart
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    background(0, 25);
    // TEMPORARY
    stroke(255);
    strokeWeight(4);
    // curve right
    point(600, 300);
    point(610, 290);
    point(620, 280);
    point(630, 270);
    point(640, 270);
    point(650, 270);
    point(660, 280);
    point(660, 290);
    point(660, 300);
    // slant right
    point(655, 310);
    point(650, 320);
    point(645, 330);
    point(640, 340);
    point(635, 350);
    point(630, 360);
    point(625, 370);
    point(620, 380);
    point(615, 390);
    point(610, 400);
    point(605, 410);
    // slant left
//    point(555, 310);
    point(560, 320);
    point(565, 330);
    point(570, 340);
    point(575, 350);
    point(580, 360);
    point(585, 370);
    point(590, 380);
    point(595, 390);
    point(600, 400);
    point(605, 410);

    /* BUTTON SHOW */
    buttons[0].show("    FULL", " SCREEN");
    buttons[1].show("  Ordinary", "  Firework");
    buttons[2].show(" Exploding", "  Firework");
    buttons[3].show("  Globular", "  Firework");
    buttons[4].show("  Heart", "  Firework");

    /* BUTTON FUNCTION */
    buttons[1].ordinary();
    buttons[2].exploding();
//    buttons[3].globular();
    buttons[4].heart();
}


function mousePressed() {
    buttons[0].fS();

}

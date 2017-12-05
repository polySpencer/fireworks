class Button {
    /* BUTTONS */
    constructor(x, y, col) {
        this.pos = createVector(x, y);
        this.l = 50;
        this.col = col;
    }

    show(txt, txt2) {
        stroke(this.col);
        strokeWeight(2);
        noFill();
        rect(this.pos.x, this.pos.y, this.l, this.l);

        noStroke();
        fill(this.col);
        textSize(10)
        text(txt, this.pos.x, this.pos.y + 20);
        text(txt2, this.pos.x, this.pos.y + 40);
    }
    
    /* FULL SCREEN */
    fS() {
        if (mouseX > this.pos.x && mouseX < (this.pos.x + 50) && mouseY > this.pos.y && mouseY < (this.pos.y + 50)) {
            let fs = fullscreen();
            fullscreen(!fs);
        }
    }
    
    /* ORDINARY FIREWORKS */
    ordinary() {
        if (mouseX > this.pos.x && mouseX < (this.pos.x + 50) && mouseY > this.pos.y && mouseY < (this.pos.y + 50)) {
            if (random(1) < 0.075) {
                ordinaryFW.push(new FireworkA());
            }
            
            for (let i = 0; i < ordinaryFW.length; i++) {
                ordinaryFW[i].show();
                ordinaryFW[i].update();
                
                if (ordinaryFW.length > 25) {
                    ordinaryFW.splice(i, 1);
                }
            }
        }
    }
    
    /* EXPLODING FIREWORKS */
    exploding() {
        if (mouseX > this.pos.x && mouseX < (this.pos.x + 50) && mouseY > this.pos.y && mouseY < (this.pos.y + 50)) {
            if (random(1) < 0.05) {
                fireworks.push(new Firework());
            }
            
            for (let i = 0; i < fireworks.length; i++) {
                fireworks[i].show();
                fireworks[i].update();

                if (fireworks.length > 25) {
                    fireworks.splice(i, 1);
                }
            }
        }   
    }
    
    /* GLOBULAR FIREWORKS */
    globular() {
        if (mouseX > this.pos.x && mouseX < (this.pos.x + 50) && mouseY > this.pos.y && mouseY < (this.pos.y + 50)) {
            if (random(1) < 0.05) {
                globular.push(new FireworkC());
            }
            
            for (let i = 0; i < globular.length; i++) {
                globular[i].show();
                globular[i].update();

                if (globular.length > 25) {
                    globular.splice(i, 1);
                }
            }
        }
    }
    
    /* HEART FIREWORKS */
    heart() {
        if (mouseX > this.pos.x && mouseX < (this.pos.x + 50) && mouseY > this.pos.y && mouseY < (this.pos.y + 50)) {
            if (random(1) < 0.05) {
                heart.push(new HeartFirework());
            }
            
            for (let i = 0; i < heart.length; i++) {
                heart[i].show();
                heart[i].update();

                if (heart.length > 25) {
                    heart.splice(i, 1);
                }
            }
        }
    }
}

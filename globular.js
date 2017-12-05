class GlobularParticle {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.gravity = createVector(0, 0);
    }
    
    show() {
        strokeWeight(4);
        stroke(255);
           
    }
}

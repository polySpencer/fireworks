class ParticleA {
    constructor(x, y, tnt) {
        this.pos = createVector(x, y);
        this.tnt = tnt;
        this.gravity = createVector(0, 0.2);
        this.col = random(255);
        this.lifespan = 255;

        if (this.tnt) {
            this.velocity = createVector(0, random(-15.5, -11));
        } else {
            this.velocity = p5.Vector.random2D();
            this.velocity.mult(random(2, 10));
        }
    }

    show() {
        if (!this.tnt) {
            strokeWeight(2);
            stroke(this.col, 100, this.col, this.lifespan);
        } else {
            strokeWeight(4);
            stroke(this.col, 100, this.col);
        }
        point(this.pos.x, this.pos.y);
    }

    update() {
        if (!this.tnt) {
            this.velocity.mult(0.9);
            this.lifespan -= 10;
        }

        this.pos.add(this.velocity);
        this.velocity.add(this.gravity);
    }

    done() {
        if (this.lifespan < 0) {
            return true;
        } else {
            return false;
        }
    }
}

class FireworkA {
    constructor() {
        this.firework = new ParticleA(random(width), height - 54, true);
        this.particles = [];
        this.exploded = false;
    }

    show() {
        if (!this.exploded) {
            this.firework.show();
        }

        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].show();
        }
    }

    update() {
        if (!this.exploded) {
            this.firework.update();

            // When it reaches the top
            if (this.firework.velocity.y >= 0) {
                this.exploded = true;
                this.explode();
            }
        }

        for (let i = this.particles.length - 1; i >= 0; i--) {
            this.particles[i].update();
        }
    }

    explode() {
        for (let i = 0; i < 100; i++) {
            let p = new ParticleA(this.firework.pos.x, this.firework.pos.y, false);
            this.particles.push(p);
        }
    }
}

class HeartParticle {
    constructor(x, y, tnt) {
        this.pos = createVector(x, y);
        this.gravity = createVector(0, 0.2);
        this.tnt = tnt;
        
        if (this.tnt) {
            this.velocity = createVector(0, random(-16, -11));
        } else {
//            this.velocity = p5.Vector.random2D();
            this.velocity.mult(6);
        }
    }

    show() {
        strokeWeight(4);
        stroke(255);
        point(this.pos.x, this.pos.y);
    }

    update() {
        this.pos.add(this.velocity);
        this.velocity.add(this.gravity);
    }
}

class HeartFirework {
    constructor() {
        this.firework = new HeartParticle(random(width), height - 52, true);
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
        for (let i = 0; i < 1; i++) {
            for (let x = 0; x < 45; x += 5) {
                for (let y = 0; y < 90; y += 10) {
                    let p = new HeartParticle(this.firework.pos.x + x, this.firework.pos.y + y, false);
                    this.particles.push(p);
                }
            }
        }
    }
}

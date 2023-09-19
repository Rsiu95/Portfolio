const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const masthead = document.querySelector('.masthead');
const navbar = document.querySelector('.navbar');
const mastheadHeight = masthead.offsetHeight + navbar.offsetHeight;
canvas.width = window.innerWidth;
canvas.height = mastheadHeight;
const canvasPosition = canvas.getBoundingClientRect();
ctx.fillStyle = 'white';
ctx.strokeStyle = 'white';

class Particle {
    constructor(effect) {
        this.effect = effect;
        this.radius = 1.5;
        this.x = this.radius + Math.random() * (this.effect.width - this.radius *2);
        this.y = this.radius + Math.random() * (this.effect.height - this.radius *2);
        this.vx = Math.random() * 0.4 - 0.1;
        this.vy = Math.random() * 0.4 - 0.1;
        this.pushX = 0;
        this.pushY = 0;
        this.friction = 0.95;
    }

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
    }

    update() {
        if (this.effect.mouse.pressed) {
            const dx = this.x - this.effect.mouse.x;
            const dy = this.y - this.effect.mouse.y;
            const distance = Math.hypot(dx, dy);
            const force = (this.effect.mouse.radius / distance);
            if (distance < this.effect.mouse.radius) {
                const angle = Math.atan2(dy, dx);
                this.pushX += Math.cos(angle) * force * 0.2;
                this.pushY += Math.sin(angle) * force * 0.2;
            }
        }
        this.x += (this.pushX *= this.friction) + this.vx;
        this.y += (this.pushY *= this.friction) + this.vy;
        if (this.x < this.radius) {
            this.x = this.radius;
            this.vx *= -1;
        } else if (this.x > this.effect.width - this.radius) {
            this.x = this.effect.width - this.radius;
            this.vx *= -1;
        }

        if (this.y < this.radius) {
            this.y = this.radius;
            this.vy *= -1;
        } else if (this.y > this.effect.height - this.radius) {
            this.y = this.effect.height - this.radius;
            this.vy *= -1;
        }
        
    }

    reset(){
        this.x = this.radius + Math.random() * (this.effect.width - this.radius *2);
        this.y = this.radius + Math.random() * (this.effect.height - this.radius *2);
    }
}

class Effect {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.particles = [];
        this.numberOfParticles = 250;
        this.createParticles();

        this.mouse = {
            x: this.width * 0.5,
            y: this.height * 0.5,
            pressed: false,
            radius: 100
        }

        window.addEventListener('mousemove', e => {
            const mouseY = e.clientY - canvasPosition.top;
            if (this.mouse.pressed){
                this.mouse.x = e.x;
                this.mouse.y = mouseY;
            }
            
            this.mouse.x = e.x;
            this.mouse.y = mouseY;
        });

        window.addEventListener('mousedown', e => {
            const mouseY = e.clientY - canvasPosition.top;
            this.mouse.pressed = true;
            this.mouse.x = e.x;
            this.mouse.y = mouseY;
        });

        window.addEventListener('mouseup', e => {
            this.mouse.pressed = false;
        });

        window.addEventListener('resize', e => {
            const adjustedHeight = e.target.window.innerHeight - mastheadHeight;
            this.resize(e.target.window.innerWidth, adjustedHeight)
            console.log("inside event listener", e.target.window.innerWidth, e.target.window.innerHeight)
        })
    }

    createParticles() {
        for (let i = 0; i < this.numberOfParticles; i++) {
            this.particles.push(new Particle(this));
        }
    }

    handleParticles(context) {
        this.connectParticles(context);
        this.particles.forEach(particles => {
            particles.draw(context)
            particles.update();
        });
        
    }

    connectParticles(context) {
        const maxDistance = 100;
        for (let a = 0; a < this.particles.length; a++) {
            for (let b = a; b < this.particles.length; b++) {
                const dx = this.particles[a].x - this.particles[b].x;
                const dy = this.particles[a].y - this.particles[b].y;
                const distance = Math.hypot(dx, dy);
                if (distance < maxDistance) {
                    context.save();
                    const opacity = 1 - (distance/maxDistance);
                    context.globalAlpha = opacity;
                    context.beginPath();
                    context.moveTo(this.particles[a].x, this.particles[a].y);
                    context.lineTo(this.particles[b].x, this.particles[b].y);
                    context.stroke();
                    context.restore();
                }
            }
        }

        for (let a = 0; a < this.particles.length; a++) {
            
            const mouseDistance = Math.hypot(this.mouse.x - this.particles[a].x, this.mouse.y - this.particles[a].y);
            if (mouseDistance < maxDistance) {
                context.save();
                const mouseOpacity = 1 - (mouseDistance / maxDistance);
                context.globalAlpha = mouseOpacity;
                context.beginPath();
                context.moveTo(this.mouse.x, this.mouse.y);
                context.lineTo(this.particles[a].x, this.particles[a].y);
                context.stroke();
                context.restore();
                
            }
        }
    }
    resize(width, height) { 
        this.canvas.width = width;
        this.canvas.height = mastheadHeight;
        this.width = width;
        this.height = mastheadHeight;
        console.log("inside resize", this.height, this.canvas.height)
        this.context.fillStyle = 'white';
        this.context.strokeStyle = 'white';
        this.particles.forEach(particle => {
            particle.reset();
        });
    }
}
function applyHeaderBackgroundEffect() {
    const effect = new Effect(canvas, ctx);
    effect.handleParticles(ctx);

    function animate() {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        effect.handleParticles(ctx);
        requestAnimationFrame(animate);
    }
    animate()
}

function enableSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    enableSmoothScrolling();
});
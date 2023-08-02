const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 400;

// let colors = ["red", "blue", "green", "yellow", "orange", "purple"];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = 10;
    this.speedX = Math.random() * 3;
    this.speedY = Math.random() * 3;
    this.color = random_color();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  update() {
    if (!(this.x + this.radius < canvas.width && this.x - this.radius > 0)) {
      this.speedX = -this.speedX;
    }
    if (!(this.y + this.radius < canvas.height && this.y - this.radius > 0)) {
      this.speedY = -this.speedY;
    }
    this.x += this.speedX;
    this.y += this.speedY;
    this.draw();
  }
}

const particles = [];
let particleCount = 50;

for (let i = 0; i < particleCount; i++) {
  const particle = new Particle();
  particles.push(particle);
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particleCount; i++) {
    for (let j = 0; j < particleCount; j++) {
      if (
        distance(
          particles[i].x,
          particles[i].y,
          particles[j].x,
          particles[j].y
        ) < 100
      ) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = random_color();
        ctx.stroke();
      }
    }
  }
  particles.forEach((particle) => {
    particle.update();
  });
  requestAnimationFrame(animate);
}

function distance(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

function random_color() {
  let h = Math.floor(Math.random() * 361); // hue is from 0 to 360
  //   let s = Math.floor(Math.random() * 101); // saturation is 0 to 100%
  //   let l = Math.floor(Math.random() * 101); // lightness is 0 to 100%
  //   let a = Math.random().toFixed(2); // alpha is 0.0 to 1.0
  return `hsla(${h}, ${75}%, ${0}%, ${1})`;
}

animate();

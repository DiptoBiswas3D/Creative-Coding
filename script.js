const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;

class Particle {
  constructor(shape = "square") {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.speedX = Math.random() * 6 - 3;
    this.speedY = Math.random() * 6 - 3;
    this.edge = 10;
    this.shape = shape;
  }
  // Todo - Draw different shapes depending on user input, square, circle, etc.
  // Drawing the particle
  draw() {
    switch (this.shape) {
      case "square":
        ctx.fillRect(this.x, this.y, this.edge, this.edge);
        break;
      case "circle":
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.edge / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        break;
    }
  }
  // Updating the particle
  update() {
    if (this.y < 0 || this.y + this.edge > canvas.height) {
      this.speedY = -this.speedY;
    }
    if (this.x < 0 || this.x + this.edge > canvas.width) {
      this.speedX = -this.speedX;
    }
    this.x += this.speedX;
    this.y += this.speedY;
    this.draw();
  }
}

let particleArray = [];

// Todo - Particle count should be a user input
let particleCount = 75;

for (let i = 0; i < particleCount; i++) {
  particleArray.push(new Particle((shape = "circle")));
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particleCount; i++) {
    particleArray[i].update();
  }
  for (let i = 0; i < particleCount; i++) {
    for (let j = 0; j < particleCount; j++) {
      if (
        distance_between_two_points(
          particleArray[i].x,
          particleArray[i].y,
          particleArray[j].x,
          particleArray[j].y
        ) < 100
      ) {
        ctx.beginPath();
        ctx.moveTo(particleArray[i].x, particleArray[i].y);
        ctx.lineTo(particleArray[j].x, particleArray[j].y);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animate);
}

animate();

function distance_between_two_points(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

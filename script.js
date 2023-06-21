const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 400
canvas.height = 400

class Pixel {
  constructor() {
    this.x = Math.random() * canvas.width
    this.y = 0
    this.speedX = 0
    this.speedY = Math.random() * 3 + 3
    this.height = Math.random() * 6 + 6
    this.width = Math.random() + 1
  }
  // Drawing the pixel
  draw() {
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
  // Updating the pixel
  update() {
    if (this.y > canvas.height) {
      this.x = Math.random() * canvas.width
      this.y = 0
      this.speedY = Math.random() * 3 + 3
      this.height = Math.random() * 6 + 6
      this.width = Math.random() + 1
    }
    this.x += this.speedX
    this.y += this.speedY
    this.draw()
  }
}

let pixelArray = []

// Todo - Pixel count should be a user input
let pixelCount = 1500

for (let i = 0; i < pixelCount; i++) {
  pixelArray.push(new Pixel())
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  for (let i = 0; i < pixelCount; i++) {
    pixelArray[i].update()
  }
  requestAnimationFrame(animate)
}

animate()
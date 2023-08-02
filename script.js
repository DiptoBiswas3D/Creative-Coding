// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// canvas.width = 500;
// canvas.height = 400;

// // 1. Rectangle
// ctx.fillRect(30, 30, 150, 80);
// ctx.fillStyle = "green";
// ctx.fillRect(200, 50, 150, 70);

// ctx.lineWidth = 5;
// ctx.strokeStyle = "blue";
// ctx.strokeRect(50, 150, 150, 80);

// ctx.clearRect(210, 60, 130, 50);

// // 2. Path
// ctx.beginPath();
// ctx.moveTo(30, 30);
// ctx.lineTo(180, 30);
// ctx.lineTo(180, 110);
// ctx.lineTo(30, 110);
// ctx.closePath();

// ctx.strokeStyle = "green";
// ctx.lineWidth = 5;
// ctx.stroke();

// ctx.fillStyle = "lightgreen";
// ctx.fill();

// ctx.beginPath();
// ctx.rect(200, 50, 150, 70);
// ctx.strokeStyle = "blue";
// ctx.stroke();
// ctx.fillStyle = "lightblue";
// ctx.fill();

// // 3. Arc
// let centerX = canvas.width / 2;
// let centerY = canvas.height / 2;

// ctx.beginPath();
// ctx.arc(centerX, centerY, 100, 0, Math.PI * 2);
// ctx.lineWidth = 5;
// ctx.strokeStyle = "blue";
// ctx.stroke();
// ctx.fillStyle = "lightblue";
// ctx.fill();

// // 4. Text
// ctx.font = "bold 30px Cambria";
// ctx.fillStyle = "red";
// ctx.fillText("Canvas is awesome", 100, 50);

// ctx.font = "italic 30px Comic Sans MS";
// ctx.lineWidth = 2;
// ctx.strokeStyle = "blue";
// ctx.strokeText("Canvas is stupid", 100, 150);

// // 5. Image

// function load_image(path) {
//   let image = new Image();
//   image.src = path;

//   image.onload = () => {
//     let aspectRatio = image.width / image.height;
//     let imageHeight = 200;
//     let imageWidth = aspectRatio * imageHeight;

//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(image, 20, 80, imageWidth, imageHeight);
//   };
// }

// load_image("images/Run (1).png");

// // 6. Animation
// let frame = 0;
// let charFrame;
// let factor = 5;

// function animate() {
//   frame = (frame + 1) % (8 * factor);
//   charFrame = Math.floor(frame / factor) + 1;

//   load_image(`images/Run (${charFrame}).png`);

//   requestAnimationFrame(animate);
// }

// animate();

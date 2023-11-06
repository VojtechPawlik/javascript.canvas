let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#000000";
ctx.fillRect(0, 0, canvas.width, canvas.height);

document.addEventListener("keydown", function (event) {
  if (event.code === "Escape") {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    return;
  }

  switch (event.code) {
    case "KeyS":
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      let size = Math.random() * 100 + 50;
      let col = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      drawRectangle(x, y, size, size, col);
      break;
    case "KeyE":
      randomEllipse();
      break;
    case "KeyR":
      drawStar();
      break;
    case "KeyC":
      drawHouse();
      break;
    case "KeyN":
      drawRandomNumbers();
      break;
  }
});

function randomEllipse() {
  let w = Math.random() * 100 + 50;
  let h = Math.random() * 100 + 50;
  let x = Math.random() * (canvas.width - w) + w / 2;
  let y = Math.random() * (canvas.height - h) + h / 2;
  let c = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  drawEllipse(x, y, w, h, c);
}

function drawRectangle(x, y, w, h, col) {
  ctx.fillStyle = col;
  ctx.strokeStyle = col;
  ctx.strokeRect(x, y, w, h);
  ctx.fillRect(x, y, w, h);
}

function drawEllipse(x, y, w, h, col) {
  ctx.fillStyle = col;
  ctx.beginPath();
  ctx.ellipse(x, y, w / 2, h / 2, 0, 0, 2 * Math.PI);
  ctx.fill();
}

function drawStar() {
  let x = canvas.width / 2;
  let y = canvas.height / 2;
  let size = Math.random() * 100 + 50;
  let col = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  ctx.fillStyle = col;
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    ctx.lineTo(Math.cos((i * 4 * Math.PI) / 5) * size + x, Math.sin((i * 4 * Math.PI) / 5) * size + y);
    ctx.lineTo(Math.cos(((i + 0.5) * 4 * Math.PI) / 5) * (size / 2) + x, Math.sin(((i + 0.5) * 4 * Math.PI) / 5) * (size / 2) + y);
  }
  ctx.closePath();
  ctx.fill();
}

function drawHouse() {
  let x = Math.random() * canvas.width;
  let y = Math.random() * canvas.height;
  let size = Math.random() * 100 + 50;
  let col = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

  // Draw the house body
  ctx.fillStyle = col;
  ctx.fillRect(x, y - size, size, size);

  // Draw the roof
  ctx.beginPath();
  ctx.moveTo(x, y - size);
  ctx.lineTo(x + size / 2, y - size * 1.5);
  ctx.lineTo(x + size, y - size);
  ctx.closePath();
  ctx.fill();
}

function drawRandomNumbers() {
  let x = Math.random() * canvas.width;
  let y = Math.random() * canvas.height;
  let size = 40; // Zvětšení velikosti čísel
  let col = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  let number = Math.floor(Math.random() * 100);
  ctx.fillStyle = col;
  ctx.font = `${size}px Arial`;
  ctx.fillText(number, x, y + size);
}

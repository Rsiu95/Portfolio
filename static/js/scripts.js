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



document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(form);

        fetch("/", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    successMessage.style.display = "block";
                    form.reset();
                } else {
                    console.error("Error:", data.error_message);
                }
            })
            .catch((error) => {
                console.error("Fetch Error:", error);
            });
    });
});


const myImage = new Image();
myImage.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxLjAxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NSI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJsb2dvc1B5dGhvbjAiIHgxPSIxMi45NTklIiB4Mj0iNzkuNjM5JSIgeTE9IjEyLjAzOSUiIHkyPSI3OC4yMDElIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMzg3RUI4Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMzY2OTk0Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxvZ29zUHl0aG9uMSIgeDE9IjE5LjEyOCUiIHgyPSI5MC43NDIlIiB5MT0iMjAuNTc5JSIgeTI9Ijg4LjQyOSUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkUwNTIiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGRkMzMzEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBmaWxsPSJ1cmwoI2xvZ29zUHl0aG9uMCkiIGQ9Ik0xMjYuOTE2LjA3MmMtNjQuODMyIDAtNjAuNzg0IDI4LjExNS02MC43ODQgMjguMTE1bC4wNzIgMjkuMTI4aDYxLjg2OHY4Ljc0NUg0MS42MzFTLjE0NSA2MS4zNTUuMTQ1IDEyNi43N2MwIDY1LjQxNyAzNi4yMSA2My4wOTcgMzYuMjEgNjMuMDk3aDIxLjYxdi0zMC4zNTZzLTEuMTY1LTM2LjIxIDM1LjYzMi0zNi4yMWg2MS4zNjJzMzQuNDc1LjU1NyAzNC40NzUtMzMuMzE5VjMzLjk3UzE5NC42Ny4wNzIgMTI2LjkxNi4wNzJaTTkyLjgwMiAxOS42NmExMS4xMiAxMS4xMiAwIDAgMSAxMS4xMyAxMS4xM2ExMS4xMiAxMS4xMiAwIDAgMS0xMS4xMyAxMS4xM2ExMS4xMiAxMS4xMiAwIDAgMS0xMS4xMy0xMS4xM2ExMS4xMiAxMS4xMiAwIDAgMSAxMS4xMy0xMS4xM1oiLz48cGF0aCBmaWxsPSJ1cmwoI2xvZ29zUHl0aG9uMSkiIGQ9Ik0xMjguNzU3IDI1NC4xMjZjNjQuODMyIDAgNjAuNzg0LTI4LjExNSA2MC43ODQtMjguMTE1bC0uMDcyLTI5LjEyN0gxMjcuNnYtOC43NDVoODYuNDQxczQxLjQ4NiA0LjcwNSA0MS40ODYtNjAuNzEyYzAtNjUuNDE2LTM2LjIxLTYzLjA5Ni0zNi4yMS02My4wOTZoLTIxLjYxdjMwLjM1NXMxLjE2NSAzNi4yMS0zNS42MzIgMzYuMjFoLTYxLjM2MnMtMzQuNDc1LS41NTctMzQuNDc1IDMzLjMydjU2LjAxM3MtNS4yMzUgMzMuODk3IDYyLjUxOCAzMy44OTdabTM0LjExNC0xOS41ODZhMTEuMTIgMTEuMTIgMCAwIDEtMTEuMTMtMTEuMTNhMTEuMTIgMTEuMTIgMCAwIDEgMTEuMTMtMTEuMTMxYTExLjEyIDExLjEyIDAgMCAxIDExLjEzIDExLjEzYTExLjEyIDExLjEyIDAgMCAxLTExLjEzIDExLjEzWiIvPjwvc3ZnPg=='



myImage.addEventListener("load", function () {
  const canvas = document.getElementById("icon-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 550;

  ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
  const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
  console.log(pixels);

  let particlesArray = [];
  const numberOfParticles = 5000;

  let mappedImage = [];
  for (let y = 0; y < canvas.height; y++) {
    let row = [];
    for (let x = 0; x < canvas.width; x++) {
      const red = pixels.data[y * 4 * pixels.width + x * 4];
      const green = pixels.data[y * 4 * pixels.width + (x * 4 + 1)];
      const blue = pixels.data[y * 4 * pixels.width + (x * 4 + 2)];
      const brightness = calculateRelativeBrightness(red, green, blue);
      const cell = [(cellBrightness = brightness)];
      row.push(cell);
    }
    mappedImage.push(row);
  }

  function calculateRelativeBrightness(red, green, blue) {
    return (
      Math.sqrt(
        red * red * 0.299 + green * green * 0.587 + blue * blue * 0.114
      ) / 100
    );
  }

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = 0;
      this.speed = 0;
      this.velocity = Math.random() * 0.5;
      this.size = Math.random() * 0.9 + 1;
      this.position1 = Math.floor(this.y);
      this.position2 = Math.floor(this.x);
    }

    update() {
      this.position1 = Math.floor(this.y);
      this.position2 = Math.floor(this.x);
      this.speed = mappedImage[this.position1][this.position2][0];
      let movement = (2.9 - this.speed) + this.velocity;
      
      this.y += movement;
      if (this.y >= canvas.height) {
        this.y = 0;
        this.x = Math.random() * canvas.width;
      }
    }

    draw() {
        const pixel = mappedImage[this.position1][this.position2];
        const red = pixels.data[this.position1 * 4 * pixels.width + this.position2 * 4];
        const green = pixels.data[this.position1 * 4 * pixels.width + this.position2 * 4 + 1];
        const blue = pixels.data[this.position1 * 4 * pixels.width + this.position2 * 4 + 2];
        ctx.beginPath();
        ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${pixel[0]})`; //color pixel rain
        //ctx.fillStyle = `cyan`;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
  }

  function init() {
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }
  }

  init();
  function animate() {
    // ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 0.05;
    ctx.fillStyle = "rgba(0, 0, 0)";
    //ctx.fillStyle = "rgba(24, 26, 27, 1)";
    //ctx.fillStyle = "rgba(255, 255, 255)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 0.2;
    for (let i = 0; i < particlesArray.length; i++){
      particlesArray[i].update();
      ctx.globalAlpha = particlesArray[i].speed * 0.5;
      particlesArray[i].draw();
    }
    requestAnimationFrame(animate);
  }

  animate();
});



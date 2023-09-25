let tileSize = 32;
let rows=16;
let columns=16;

// Fixed canvas size
const canvasWidth = tileSize * columns;
const canvasHeight = tileSize * rows;

let board;
let context;

let shipWidth = tileSize * 2;
let shipHeight = tileSize;
let shipX = tileSize * columns / 2 - tileSize;
let shipY = tileSize * rows - tileSize * 2;

let ship = {
    x: shipX,
    y: shipY,
    width: shipWidth,
    height: shipHeight,
};

let shipImage;
let shipVelocityX = tileSize;

let alienArray = [];
let alienWidth = tileSize * 2;
let alienHeight = tileSize;
let alienX = tileSize;
let alienY = tileSize;
let alienImage;

let alienRows = 7;
let alienColumns = 7;
let alienCount = 0;

let alienStates = [];
let alienRotationInterval = 1000;
for (let i = 1; i <= 4; i++) {
    let alienStateImage = new Image();
    alienStateImage.src = `../static/img/alien.png`;
    alienStates.push(alienStateImage);
}

let bulletArray = [];
let bulletVelocityY = -10;

window.onload = function () {
    board = document.getElementById('about-me-section');
    board.width = canvasWidth; // Set canvas width
    board.height = canvasHeight; // Set canvas height
    context = board.getContext("2d");

    shipImage = new Image();
    shipImage.src ="../static/img/player.png";
    shipImage.onload = function() {
        context.drawImage(shipImage, ship.x, ship.y, ship.width, ship.height);
    }

    alienImage = new Image();
    alienImage.src= "../static/img/alien.png";
    createAliens();

    requestAnimationFrame(update);
    document.addEventListener("keydown", moveShip);
    document.addEventListener("keyup", shoot);
};

function update() {
    requestAnimationFrame(update);
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.drawImage(shipImage, ship.x, ship.y, ship.width, ship.height);

    for (let i = 0; i < alienArray.length; i++) {
        let alien = alienArray[i];
        if (alien.alive) {
            // Calculate the index of the current alien image based on time
            let currentIndex = Math.floor((Date.now() % (alienStates.length * alienRotationInterval)) / alienRotationInterval);

            // Draw the current alien image with rotation
            context.save();
            context.translate(alien.x + alien.width / 2, alien.y + alien.height / 2);
            context.rotate((Math.PI / 180) * 180 * currentIndex); // Rotate 180 degrees clockwise
            context.drawImage(alienStates[currentIndex], -alien.width / 2, -alien.height / 2, alien.width, alien.height);
            context.restore();
        }
    }

    for (let i = 0; i < bulletArray.length; i++) {
        let bullet = bulletArray[i];
        bullet.y += bulletVelocityY;
        context.fillStyle = "white";
        context.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);

        for (let j = 0; j < alienArray.length; j++) {
            let alien = alienArray[j];
            if (!bullet.used && alien.alive && detectCollision(bullet, alien)) {
                bullet.used = true;
                alien.alive = false;
                alienCount --;
            }
        }
    }

    while (bulletArray.length > 0 && (bulletArray[0].used || bulletArray[0].y < 0)) {
        bulletArray.shift();
    }
}
function moveShip(e) {
    if (e.code == "ArrowLeft" && ship.x - shipVelocityX >= 0) {
        ship.x -= shipVelocityX;
    }
    else if (e.code == "ArrowRight" && ship.x + shipVelocityX + ship.width <= board.width) {
        ship.x += shipVelocityX;
    }
}

function createAliens() {
    for (let c = 0; c < alienColumns; c++) {
        for (let r = 0; r < alienRows; r++ ) {
            let alien = {
                img: alienImage,
                x: alienX + c * alienWidth,
                y: alienY + r * alienHeight,
                width: alienWidth,
                height: alienHeight,
                alive : true
            }

            alienArray.push(alien);
        }
    }
    alienCount = alienArray.length;
}

function shoot(e) {
    if (e.code == "Space") {
        let bullet = {
            x: ship.x + shipWidth*15/32,
            y: ship.y,
            width: tileSize/8,
            height: tileSize/2,
            used: false
        }
        bulletArray.push(bullet);
    }
}

function detectCollision(a, b) {
    return a.x < b.x + b.width && 
            a.x + a.width > b.x &&
            a.y < b.y + b.height &&
            a.y + a.height > b.y;
}
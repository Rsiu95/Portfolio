let tileSize = 32;
let rows=16;
let columns=16;

let board;
let boardWidth = tileSize * columns;
let boardHeight = tileSize * rows;
let context;

let shipWidth = tileSize*2;
let shipHeight = tileSize;
let shipX = tileSize * columns /2 - tileSize;
let shipY = 0;

let ship = {
    x: shipX,
    y: shipY + 20,
    width: shipWidth,
    height: shipHeight,
};

let shipImage;
let shipVelocityX = tileSize; 

let alienArray = [];
let alienWidth = tileSize*2;
let alienHeight = tileSize;
let alienX = tileSize;
let alienY = tileSize;
let alienImage;

let alienRows = 10;
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
    board.width = boardWidth;
    board.height = boardHeight;
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
    context.clearRect(0, 0, board.width, board.height);
    context.scale(1, -1);
    context.drawImage(shipImage, ship.x, -ship.y - ship.height, ship.width, ship.height);
    context.setTransform(1, 0, 0, 1, 0, 0);
    

    for (let i = 0; i < alienArray.length; i++) {
        let alien = alienArray[i];
        if (alien.alive) {
            let currentIndex = Math.floor((Date.now() % (alienStates.length * alienRotationInterval)) / alienRotationInterval);
            
            context.save();
            context.translate(alien.x + alien.width / 2, alien.y + alien.height / 2);
            context.rotate((Math.PI / 180) * 180 * currentIndex); 
            context.drawImage(alienStates[currentIndex], -alien.width / 2, -alien.height / 2, alien.width, alien.height);
            context.restore();
        }
    }

    for (let i = 0; i < bulletArray.length; i++) {
        let bullet = bulletArray[i];
        bullet.y -= bulletVelocityY;
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

    while (bulletArray.length > 0 && (bulletArray[0].used || bulletArray[0].y > boardHeight)) {
        bulletArray.shift();
        console.log(bulletArray)
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
            let alienY = boardHeight - alienRows * alienHeight;
            let alien = {
                img: alienImage,
                x: alienX + c * alienWidth,
                y: alienY + r * alienHeight - 50,
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
            y: ship.y + shipHeight,
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

document.getElementById('reset').addEventListener('click', resetGame);
document.getElementById('clear').addEventListener('click', clearCanvas);


function resetGame() {
    context.clearRect(0, 0, board.width, board.height);
    
    ship.x = shipX;
    ship.y = shipY + 20;
    
    createAliens();
    
    alienCount = alienArray.length;
    
    requestAnimationFrame(update);
}

function clearCanvas() {
    const canvas = document.getElementById('about-me-section');
    canvas.remove();
    
    board = document.createElement('canvas');
    board.id = 'about-me-section';
    board.width = boardWidth;
    board.height = boardHeight;
    context = board.getContext("2d");
    
    const container = document.querySelector('.about-me-container');
    container.appendChild(board);
    
    alienArray = [];
    
    context.drawImage(shipImage, ship.x, ship.y, ship.width, ship.height);
    
    requestAnimationFrame(update);
}
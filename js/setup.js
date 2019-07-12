let avatar;
let wallpaper
let heartWhite
let heartPink
let font
let hole

function preload() {
    avatar = loadImage('./img/vovo-muleta.png')
    wallpaper = loadImage('./img/city.jpg')
    heartWhite = loadImage('./img/heart-white.png')
    heartPink = loadImage('./img/heart-pink.png')
    font = loadFont('./assets/PressStart2P-Regular.ttf')
    hole = loadImage('./img/buraco.png')
    semafaro = loadImage('./img/semaforo.png')
}

var offsetX = 0;
function playBackground() {
    image(wallpaper, offsetX, 0, width, height)
    image(wallpaper, offsetX + width, 0, width, height)

    offsetX--;
    if (offsetX <= - width) {
        offsetX = 0
    }
}

function applyTextTheme(fontSize) {
    textFont(font)
    textSize(fontSize ? fontSize : 16)
    fill('#F2A0A1');
    strokeWeight(4);
    stroke(1);
}

function applyStopBackground() {
    fill('rgba(0%,0%,0%,0.6)')
    rect(0, 0, width, height)
}
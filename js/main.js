let game


function setup() {
    createCanvas(1000, 500)
    game = new Game()
}

function keyPressed() {
    if (key == ' ') {
        game.avatar.jump()
    }
    if (keyCode == ENTER) {
        game.restart()
    }
}


function draw() {
    playBackground()
    game.showObstacles()
    game.showAvatar()
    game.showScore()
    if (game.gameOver()) {
        game.showGameOver()
    }
}
let game

function setup() {
    createCanvas(600, 450)
    game = new Game()
}

function keyPressed() {
    if (key == ' ') {
        game.avatar.jump()
    }
}

function draw() {
    background(220)
    game.showObstacles()

    game.showAvatar()

    if (game.levelArrived()) {
        game.nextLevel()
    }

    game.showScore()
}
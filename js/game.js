class Game {
    constructor() {
        this.avatar = new Avatar()
        this.obstacles = [new Obstacle()]
        this.level = 1
        this.score = 0
        this.levelGoal = {
            1: 50,
            2: 60,
            3: 450,
            4: 600
        }
    }

    showScore() {
        textSize(15)
        text(`Level: ${this.level} Score: ${this.score}`, width - 150, 20)
    }

    showObstacles() {
        if (random(1) < 0.05 && this.obstacles.length) {
            if (this.obstacles[this.obstacles.length - 1].x < width - width / 3) {
                this.obstacles.push(new Obstacle())
            }
        }

        this.obstacles.forEach((obstacle, index) => {
            obstacle.move()
            obstacle.show()
            if (this.avatar.hits(obstacle) && !obstacle.hited) {
                obstacle.hited = true
                this.avatar.lostLife()
            }
            if (obstacle.isHide() && !obstacle.hited) {
                this.score = this.score + 10
            }
            if (obstacle.isHide() && this.obstacles.length > 1) {
                this.obstacles.splice(index, 1)
            }
        })
    }

    showAvatar() {
        this.avatar.show()
        this.avatar.move()

    }

    nextLevel() {
        this.score = 0
        this.level = this.level + 1
        this.obstacles = []
        setTimeout(() => {
            this.obstacles = [new Obstacle()]
        }, 3000)
    }

    levelArrived() {
        return this.levelGoal[this.level] === this.score
    }

    gameOver(){
        if(this.avatar.isDead()){
            noLoop()
        }
    }
}
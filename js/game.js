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

    /**
     * Mostra na tela uma string level e score
     */
    showScore() {
        // textFont('ColorTube')
        textSize(15)
        text(`Level: ${this.level} Score: ${this.score}`, width - 150, 20)
    }

    /**
     * Mostra o obstaculos na tela
     */
    showObstacles() {
        this.addObstacle()

        this.obstacles.forEach((obstacle, index) => {
            obstacle.move()
            obstacle.show()

            this.countLife(obstacle)
            this.countScore(obstacle)

            if (obstacle.isHide() && this.obstacles.length > 1) {
                this.obstacles.splice(index, 1)
            }
        })
    }

    /**
     * Adiciona obstaculos 
     */
    addObstacle() {
        if (random(1) < 0.05 && this.obstacles.length) {
            if (this.obstacles[this.obstacles.length - 1].x < width - width / 3) {
                this.obstacles.push(new Obstacle())
            }
        }
    }

    /**
     * Conta o score se o obstaculo sair da tela e não for atingido
     * @param {Obstacle} obstacle  
     */
    countScore(obstacle) {
        if (obstacle.isHide() && !obstacle.hited) {
            this.score = this.score + 10
        }
    }

    /**
     * Diminui a vida se obstaulo bater no avatar e o avatar não tiver batido no obstaculo ainda
     * @param {Obstacle} obstacle 
     */
    countLife(obstacle) {
        if (this.avatar.hits(obstacle) && !obstacle.hited) {
            obstacle.hited = true
            this.avatar.lostLife()
        }
    }

    /**
     * Mostra o avatar na tela
     */
    showAvatar() {
        this.avatar.show()
        this.avatar.move()
    }

    /**
     * Muda o level zerando o score e os obstaculos na tela
     */
    nextLevel() {
        this.score = 0
        this.level = this.level + 1
        this.obstacles = []
        setTimeout(() => {
            this.obstacles = [new Obstacle()]
        }, 3000)
    }

    /**
     * Verifica se avatar atingiu o score para mudar de nivel 
     */
    levelArrived() {
        return this.levelGoal[this.level] === this.score
    }

    /**
     * Para o jogo se a vida chegar a 0 
     */
    gameOver() {
        if (this.avatar.isDead()) {
            noLoop()
        }
    }

}


// let fontRegular
// function preload() {
//     fontRegular =  ('./assets/ColorTube.otf')
    
// }
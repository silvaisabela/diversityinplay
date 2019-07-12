class Game {
    constructor() {
        this.avatar = new Avatar()
        this.obstacles = [new Obstacle(100, 40, hole)]
        this.score = 0
    }

    /**
     * Mostra na tela uma string level e score
     */
    showScore() {
        applyTextTheme()
        let dias = parseInt(this.score / 100    ) + 1
        text(`Dia: ${dias} Socore: ${this.score}`, width - 320, 40)
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
                if(random(1) < 0.5){

                    this.obstacles.push(new Obstacle(100, 40, hole))
                }else{
                    this.obstacles.push(new Obstacle(50, 100, semafaro))
                }
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
     * Para o jogo se a vida chegar a 0 
     */
    gameOver() {
        return this.avatar.isDead()
    }

    showGameOver() {
        applyStopBackground()
        applyTextTheme(40)
        text(`Game Over`, width / 3.4, height / 2)
        textSize(20)
        text(`Aperte enter para reiniciar`, width / 5, height / 2 + 40)
        noLoop()
    }

    restart() {
        this.score = 0
        this.avatar = new Avatar()
        this.obstacles = [new Obstacle(100, 40, hole)]
        loop()
    }

}
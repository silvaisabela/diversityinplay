class Avatar {
    constructor() {
        this.width = 120
        this.height = 150
        this.x = 50
        this.y = height - this.height
        this.forceY = 0
        this.gravity = 1
        this.hearts = [true, true, true]
        this.life = 3
        this.change = false
    }

    /**
     * Verifica se o avatar está mesma posição que foi criado
     */
    isInitialPosition() {
        return this.y == height - this.height
    }

    /**
     * O jump faz o avatar pular
     */
    jump() {
        if (this.isInitialPosition()) {
            this.forceY = -20
        }
    }

    /**
     * Verifica se o avatar bateu em algum obstaculo
     * @param {Obstacle} obstacle É um elemento que pode ser atingindo pelo avatar
     */
    hits(obstacle) {
        return collideRectRect(this.x, this.y, this.width, this.height, obstacle.x, obstacle.y, obstacle.width, obstacle.height)
    }

    /**
     * Move o avatar de cima para baixo e evita que ele saia da tela 
     */
    move() {
        this.y += this.forceY
        this.forceY += this.gravity
        this.y = constrain(this.y, 0, height - this.height)
    }

    /**
     * Mostra o avatar e a vida
     */
    show() {
        image(avatar, this.x, this.y - 15, this.width, this.height)
        this.hearts.forEach((alive, index) => {
            image(alive ? heartPink : heartWhite, (index + 1) * 40, 20, 30, 30)
        });
    }

    /**
     * Diminui o valor da vida caso ela seja maior que 0
     */
    lostLife() {
        if (this.life > 0) {
            this.hearts[this.life - 1] = false
            this.life--
        }
    }

    /**
     * Verifica se o avatar perdeu todas as vidas
     */
    isDead() {
        return this.life === 0
    }
}
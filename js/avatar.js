class Avatar {
    constructor() {
        this.size = 50
        this.x = this.size
        this.y = height - this.size
        this.forceY = 0
        this.gravity = 1
        this.life = 3
    }

    /**
     * Verifica se o avatar está mesma posição que foi criado
     */
    isInitialPosition() {
        return this.y == height - this.size
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
        return collideRectRect(this.x, this.y, this.size, this.size, obstacle.x, obstacle.y, obstacle.size, obstacle.size)
    }

    /**
     * Move o avatar de cima para baixo e evita que ele saia da tela 
     */
    move() {
        this.y += this.forceY
        this.forceY += this.gravity
        this.y = constrain(this.y, 0, height - this.size)
    }

    /**
     * Mostra o avatar e a vida
     */
    show() {
        rect(this.x, this.y, this.size, this.size)
        textSize(15)
        text(`Life: ${this.life}`, 10, 20)
    }

    /**
     * Diminui o valor da vida caso ela seja maior que 0
     */
    lostLife() {
        if (this.life > 0) {
            this.life = this.life - 1
        }
    }

    /**
     * Verifica se o avatar perdeu todas as vidas
     */
    isDead(){
        return this.life === 0 
    }
}
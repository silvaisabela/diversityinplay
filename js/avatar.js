let avatarImg1;
let avatarImg2;
let time = 300;
let lastTime = 300;

function preload() {
    avatarImg1 = loadImage('img/home-1.jpg')
    avatarImg2 = loadImage('img/home-2.jpg')
}

class Avatar {
    constructor() {
        this.width = 80
        this.height = 100
        this.x = 50
        this.y = height - this.height
        this.forceY = 0
        this.gravity = 1
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
        return collideRectRect(this.x, this.y, this.width, this.height, obstacle.x, obstacle.y, obstacle.size, obstacle.size)
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
        image(this.change ? avatarImg1 : avatarImg2, this.x, this.y, this.width, this.height)
        if (lastTime == time) {
            setTimeout(() => {
                time = 300
                lastTime = 300
                this.change = !this.change
            }, time)
        }
        lastTime = 0
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
    isDead() {
        return this.life === 0
    }
}
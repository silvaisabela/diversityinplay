class Obstacle {
    constructor() {
        this.size = 50
        this.x = width
        this.y = height - this.size
        this.hited = false
    }

    /**
     * Move o obstaculo da direita para esquerda
     */
    move() {
        this.x = this.x - 5
    }

    /**
     * Mostra o obstaculo na tela
     */
    show() {
        rect(this.x, this.y, this.size, this.size)
    }

    /**
     * Retorna verdadeiro se o obstaculo sair da tela pelo lado esquerdo
     */
    isHide() {
        return this.x == 0
    }

}
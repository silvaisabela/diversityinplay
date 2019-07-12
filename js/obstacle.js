class Obstacle {
    constructor(localWidth, localHeight, image) {
        this.height = localHeight
        this.width = localWidth
        this.x = width
        this.y = height - this.height
        this.hited = false
        this.image = image
        
    }

    /**
     * Move o obstaculo da direita para esquerda
     */
    move() {
        this.x = this.x - 7
    }

    /**
     * Mostra o obstaculo na tela
     */
    show() {
        // applyTextTheme
        image(this.image, this.x, this.y, this.width, this.height)
    }

    /**
     * Retorna verdadeiro se o obstaculo sair da tela pelo lado esquerdo
     */
    isHide() {
        return this.x < 0
    }

}
class Avatar {
    constructor() {
        this.size = 50
        this.x = this.size
        this.y = height - this.size
        this.forceY = 0
        this.gravity = 1
    }
    /* Constructor --->
      Aqui estamos definindo onde ele será criado e qual tamanho vai ter
 - this.size: Está adicionando um tamanho ao objeto
 - this.x = width :Estou informanso em que posição da tela no eixo x (horizontal) o objeto vai estar.
 - this.y = height - this.size : Estou informanso em que posição da tela no eixo y (vertical) o objeto vai estar. 
 -this.forceY: 0  : Estamos definindo a força que jogo o quadrado para cima
  -this.gravity: 1  : Estamos definindo a força que jogo o quadrado para baixo */


    isInitialPosition() {
        return this.y == height - this.size
    }
    jump() {
        if (this.isInitialPosition()) {
            this.forceY = -20
        }
    }

    /* Jump** -->
    Se o avatar estiver na posição inicial ele pula se não ele não faz nada */

    hits(obstacle) {
        return collideRectRect(this.x, this.y, this.size, this.size, obstacle.x, obstacle.y, obstacle.size, obstacle.size)
    }


    /* Essa função está verificando se o avatar bateu no obstaculo.*/ 

    move() {
        this.y += this.forceY
        this.forceY += this.gravity
        this.y = constrain(this.y, 0, height - this.size)
    }


    /* Move** 
    - Ele faz com que o objeto mova de baixo para cima, ou seja, pega o y aciona -20 e diminui o valor da força com a gravidade.
    - this.y = constrain(this.y, 0, height - this.size) impede com que a gravidade empurre o quadrado para fora da tela.
    */

    show() {
        rect(this.x, this.y, this.size, this.size)
    }
    /* O Show** -->
 - rect : cria o quadrado e apresenta ele na tela */
}
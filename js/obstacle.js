class Obstacle {
    constructor() {
        this.size = 50
        this.x = width
        this.y = height - this.size
    }
    /*  **Constructor**  --> 
    Aqui estamos definindo onde ele será criado e qual tamanho vai ter
 - this.size: Está adicionando um tamanho ao objeto
 - this.x = width :Estou informanso em que posição da tela no eixo x (horizontal) o objeto vai estar.
 - this.y = height - this.size : Estou informanso em que posição da tela no eixo y (vertical) o objeto vai estar. */

    move(velocity) {
        if (velocity == null)
        velocity = 5
        this.x = this.x - velocity
        // this.x -= velocity
     }

    /* A **Move** -->
 - if (velocity == null) = ele verifica se a velocidade  não existe, se não existir o valor da velocidade é = 5 (igual a cinco) que está definido em velocity = 5 s
 - this.x -= velocity <--- "abreviado" ou  this.x = this.x - velocity  = aqui ele está pegando o x e diminuindo seu valor a cada vez que o move é chamada. Movendo o objeto da direita da esquerda */


    show() {
        rect(this.x, this.y, this.size, this.size)
    }
    /* O Show** -->
 - rect : cria o quadrado e apresenta ele na tela */
}
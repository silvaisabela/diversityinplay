// Uma função que configura as ações dos jogos/ Quando é carregado uma vez só no game
let avatar
let obstacles = []
let level = 1
let score = 0

const levelGoal = {
    1: 50,
    2: 300,
    3: 450,
    4: 600
}


function setup() {
    createCanvas(600, 450)
    avatar = new Avatar()
    obstacles.push(new Obstacle())
}
/* Aqui estou criando o perimetro do jogo e do avatar */


function keyPressed() {
    if (key == ' ') {
        avatar.jump()
    }
}

/* Quando a barra de espaço é prensionada, essa função é ativada. e verifico se a tecla precionada é o espaço se for eu pulo se não por eu não faço nada */


/*  O draw vai ser chamado a todo momento para desenhar o objeto na tela */
function draw() {

    if (random(1) < 0.05 && obstacles.length) {
        if (obstacles[obstacles.length - 1].x < width - width / 3) {
            obstacles.push(new Obstacle())
        }
    }

    /* if(random(1) < 0.009) : Calcula a frequencia com que os objetos apareceram na tela 
    obstacles.push(new Obstacle()) : Adiciona um obstaculo na lista */

    background(220)
    avatar.show()
    avatar.move()

    /* Aqui estamos definindo a cor de fundo e chamando as funções do avatar de mover (move) e mostrar (show)  */

    for (let i = 0; i < obstacles.length; i++) {
        let o = obstacles[i];
        o.move()
        o.show()
        if (avatar.hits(o)) {
            noLoop()
        }
        if (o.x == 0) {
            obstacles.splice(i, 1)
            score = score + 10
            console.log(score)
        }
    }

    /*for (let o of obstacles){
        o.move()
        o.show()
    ---> Pegando cada obejto que está na lista, mostrando na tela e movendo eles. 

    if(avatar.hits(o)){
            noLoop()
        }
    ---> Essa função está verificando se o avatar bateu em cada obstaculo adicionado na lista.
    */

    if (levelGoal[level] === score){
        score = 0
        console.log('Passou de nivel')
    }
}
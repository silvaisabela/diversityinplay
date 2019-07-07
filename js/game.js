// Uma função que configura as ações dos jogos/ Quando é carregado uma vez só no game
let avatar
let obstacles = []

function setup(){
    createCanvas(600, 450)
    avatar = new Avatar()
}

function keyPressed(){
    if (key == ' '){
        avatar.jump()
    }
}

// Issso é uma função onde "draw"(desenhar) vai dar uma cor ao fundo. Aqui ficara as coisas que sempre será carregada.
function draw(){
    if(random(1) < 0.01){
        obstacles.push(new Obstacle())
    }

    background(220)
    avatar.show()
    avatar.move()

    for (let o of obstacles){
        o.move()
        o.show()
    }
}



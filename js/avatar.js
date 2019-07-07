class Avatar {
    constructor(){
        this.size = 50
        this.x = this.size
        this.y = height - this.size
        this.forceY = 0
        this.gravity = 2
    }

    jump(){
        this.forceY = -25
    }

    move (){
        this.y += this.forceY
        this.forceY += this.gravity
        this.y = constrain(this.y, 0, height - this.size)
    }

    show(){
        rect(this.x, this.y, this.size, this.size)
    }

}


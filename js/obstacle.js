class Obstacle {
    constructor() {
        this.size = 50
        this.x = width
        this.y = height - this.size

    }

    move() {
        this.x -= 3
    }

    show() {
        rect(this.x, this.y, this.size, this.size)
    }
}
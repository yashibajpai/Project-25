class Paper {
    constructor (x,y,r){
        var options={
            isStatic: false,
            restitution: 0,
            friction: 0.5,
            density: 1.2, 
        } 
        this.body =  Bodies.circle(x,y,r,options)
        this.r = r 
        this.image = loadImage("paper.png")
        World.add(world,this.body)
    }
    display () {
     fill("white")
     imageMode(CENTER)
     image(this.image,this.body.position.x,this.body.position.y,2*this.r,2*this.r)



    }
}
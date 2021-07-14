class Dustbin {
    constructor (x,y,width,height) {
        var options={
            isStatic: true,
            restitution: 0,
            friction: 0.5,
            density: 1.2, 
        }
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        fill("white")
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
    }
    

}
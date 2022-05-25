class Snow {

    constructor(x,y){

        var snow_op ={
            'density':3.0,
            'isStatic' : false,
            'restitution':0.1,
            'friction':1.0
          

        }
        this.body = Bodies.rectangle (x,y,width,height,snow_op)
        this.width = 50
        this.height = 50 
        this.image = loadImage ("snowflake.png")
   
     World.add(world,this.body)
    }

    display (){
var pos = this.body.position 
var angle = this.body.angle

push();
translate(pos.x, pos.y);
rotate (angle)

image(this.image, 0, 0, this.width,this.height);


pop();
    }
}
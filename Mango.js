class Mango{
    constructor(x,y,r){

     var options={
            isStatic:true,
            restituition:0.08,
            friction:1
        }
        this.x=x;
        this.y=y;
        this.r=55;

        this.image = loadImage('mango.png');
        this.body = Bodies.circle(this.x,this.y,this.r,options)
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}